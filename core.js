/* Jadro obsahu: registre, do ktorých sa zapisujú súbory predmetov, a pomocné funkcie pre nákresy a generátory.
   Načítava sa pred súbormi predmetov (subjects/*.js); logika hry je v game.js. */
const SUBJECTS = [];
const GEN = {};
const PICS = {};

/* ===================== NÁKRESY SÍL =====================
   fbd({ slope: uhol roviny v stupňoch (0 = vodorovná), surface: false = bez podložky, ball: true = gulička, thread: uhol závesu,
         forces: [[uhol, "popis", dĺžka, bočný posun]], acc: uhol zrýchlenia, axes: [uhol osi x, uhol osi y] })
   Uhly sú v stupňoch: 0 = doprava, 90 = nahor. V dátach sa nákres vkladá ako { fig: {...}, cap: "popis" } medzi odseky výkladu. */
function arrow(x1, y1, x2, y2, c){
  const t = Math.atan2(y2 - y1, x2 - x1), h = 10, w = 4.5, f = n => n.toFixed(1);
  const bx = x2 - h * Math.cos(t), by = y2 - h * Math.sin(t);
  return `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(bx)}" y2="${f(by)}" class="${c}"/><polygon points="${f(x2)},${f(y2)} ${f(bx + w * Math.sin(t))},${f(by - w * Math.cos(t))} ${f(bx - w * Math.sin(t))},${f(by + w * Math.cos(t))}" class="${c}h"/>`;
}
function fbd(o){
  const cx = 150, cy = 112, R = d => d * Math.PI / 180, a = R(o.slope || 0), f = n => n.toFixed(1), P = (mx, my) => [cx + mx, cy - my];
  let g = "";
  if (o.surface !== false) {
    const ux = Math.cos(a), uy = Math.sin(a), bx = uy * 21, by = -ux * 21;
    const [x1, y1] = P(bx - ux * 125, by - uy * 125), [x2, y2] = P(bx + ux * 125, by + uy * 125);
    g += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x2)}" y2="${f(y2)}" class="sf"/>`;
    if (o.slope) g += `<line x1="${f(x1)}" y1="${f(y1)}" x2="${f(x1 + 78)}" y2="${f(y1)}" class="dash"/><text x="${f(x1 + 52)}" y="${f(y1 - 9)}" class="m">α</text>`;
  }
  if (o.thread != null) { const [tx, ty] = P(112 * Math.cos(R(o.thread)), 112 * Math.sin(R(o.thread))); g += `<line x1="${cx}" y1="${cy}" x2="${f(tx)}" y2="${f(ty)}" class="th"/>`; }
  g += o.ball ? `<circle cx="${cx}" cy="${cy}" r="13" class="bd"/>` : `<rect x="${cx - 32}" y="${cy - 20}" width="64" height="40" rx="3" class="bd" transform="rotate(${-(o.slope || 0)} ${cx} ${cy})"/>`;
  (o.forces || []).forEach(q => {
    const t = R(q[0]), dx = Math.cos(t), dy = Math.sin(t), off = q[3] || 0, px = -dy * off, py = dx * off, L = q[2];
    const [sx, sy] = P(px, py), [ex, ey] = P(px + dx * L, py + dy * L), [lx, ly] = P(px + dx * (L + 15), py + dy * (L + 15));
    g += arrow(sx, sy, ex, ey, "fa") + `<text x="${f(lx)}" y="${f(ly)}">${q[1]}</text>`;
  });
  if (o.acc != null) { const t = R(o.acc), dx = Math.cos(t), dy = Math.sin(t), ox = 44, oy = 34;
    g += arrow(ox - dx * 18, oy + dy * 18, ox + dx * 18, oy - dy * 18, "ac") + `<text x="${f(ox - dy * 15)}" y="${f(oy - dx * 15)}" class="r">a</text>`; }
  if (o.axes) { const ox = 244, oy = 178; o.axes.forEach((d, i) => { const t = R(d), dx = Math.cos(t), dy = Math.sin(t);
    g += arrow(ox, oy, ox + dx * 30, oy - dy * 30, "ax") + `<text x="${f(ox + dx * 41)}" y="${f(oy - dy * 41)}" class="m">${i ? "y" : "x"}</text>`; }); }
  return `<svg viewBox="0 0 300 224" role="img" aria-label="${o.alt || "Nákres síl pôsobiacich na teleso"}">${g}</svg>`;
}
function figure(x){ return `<figure class="fig">${x.pic ? PICS[x.pic] : fbd(x.fig)}<figcaption>${x.cap || ""}</figcaption></figure>`; }

/* ===================== GENERÁTORY: počítacie úlohy s novými číslami pri každom pokuse ===================== */
function rnd(a){ return a[Math.floor(Math.random() * a.length)]; }
function sup(e){ return String(e).split("").map(c => ({ "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" })[c]).join(""); }
function num(x, sig){
  sig = sig || 3; if (!x) return "0";
  const ax = Math.abs(x), neg = x < 0 ? "−" : "";
  if (ax >= 1e5 || ax < 1e-3) {
    let e = Math.floor(Math.log10(ax)), m = +(ax / Math.pow(10, e)).toPrecision(sig);
    if (m >= 10) { m /= 10; e++; }
    return neg + String(m).replace(".", ",") + "·10" + sup(e);
  }
  return neg + String(+ax.toPrecision(sig)).replace(".", ",");
}
function hint(h, q){ q.h = h; return q; }   // nápoveda k vygenerovanej úlohe
function mk(q, val, unit, wrong, e, sig){
  const opts = [num(val, sig)];
  wrong.concat([val * 2, val / 2, val * 3, val / 4, val * 1.5, val * 5]).forEach(w => { const s = num(w, sig); if (opts.length < 4 && isFinite(w) && !opts.includes(s)) opts.push(s); });
  const sep = !unit ? "" : unit[0] === "-" ? "" : " ";
  return { q, o: opts.map(s => s + sep + (unit || "")), e };
}
