SUBJECTS.forEach(s => s.levels.forEach(l => { l.gen = (GEN[s.id] || {})[l.id] || []; }));

/* ================================== LOGIKA ================================== */
const KEY = "studyquest.v2";
const PASS = 75;   // % v kvíze levelu, od ktorých je kvíz prejdený a odomkne sa ďalší
const RANKS = [
  [0, "Nováčik"], [20, "Učeň"], [45, "Panoš"], [70, "Rytier FEKT-u"], [90, "Legendárny fyzik"]
];
const BOSS_RANKS = [
  [19, "Legendárny fyzik", "Udržuj formu a vyspi sa."],
  [16, "Rytier FEKT-u", "Prejdi si denník chýb."],
  [12, "Panoš", "Zopakuj levely, v ktorých si chyboval."],
  [8, "Učeň", "Prečítaj teóriu slabých levelov a daj kvízy znova."],
  [0, "Nováčik", "Začni vzorcami a vzorovými príkladmi, kvízy opakuj do 70 %."]
];
let save = { subject: SUBJECTS[0].id, data: {} };
try {
  let s = JSON.parse(localStorage.getItem(KEY));
  if (!s) { // prevod postupu zo staršej verzie (XP -> percentá)
    const o = JSON.parse(localStorage.getItem("studyquest.v1"));
    if (o && o.data) { SUBJECTS.forEach(sb => { const d = o.data[sb.id]; if (d && d.best) sb.levels.forEach(l => { if (d.best[l.id] != null) d.best[l.id] = Math.floor(100 * d.best[l.id] / lvlMax(l)); }); }); s = o; }
  }
  if (s && s.data) save = s;
} catch (e) {}
function persist(){ try { localStorage.setItem(KEY, JSON.stringify(save)); } catch (e) {} }

let ui = { route: "mapa", tab: "teoria", quiz: null, open: [], sel: [], cnt: 10 };
const app = document.getElementById("app");

function subj(){ return SUBJECTS.find(s => s.id === save.subject) || SUBJECTS[0]; }
function sd(){ const s = subj(); if (!save.data[s.id]) save.data[s.id] = { best: {}, boss: 0, miss: [] }; const d = save.data[s.id]; if (!d.gq) d.gq = {}; if (!d.exam) d.exam = {}; if (!d.rep) d.rep = {}; if (!d.explain) d.explain = {}; return d; }
function lvlMax(l){ return l.quiz.reduce((a, q) => a + (q.b ? 20 : 10), 0); }
function lvlPct(l){ return sd().best[l.id] || 0; }
function isDone(l){ return lvlPct(l) >= 100; }
function passed(l){ return lvlPct(l) >= PASS; }
function unlocked(l){ const ls = subj().levels, i = ls.indexOf(l); return i <= 0 || passed(ls[i - 1]); }
function exam(ci){ const s = subj(), c = s.chapters[ci]; return Object.assign({ levels: s.levels.filter(l => l.ch === +ci).map(l => l.id) }, c.exam); }
function bossUnlocked(ci){ return subj().levels.filter(l => l.ch === +ci).every(passed); }
function clock(ms){ const t = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); }
function totals(){
  const s = subj(), d = sd();
  let max = 0, xp = 0;
  s.chapters.forEach((c, ci) => { if (c.exam) { max += 100; xp += Math.min(100, Math.round(100 * (d.exam[ci] || 0) / c.exam.n)); } });
  s.levels.forEach(l => { max += 100; xp += d.best[l.id] || 0; });
  return { xp, max, pct: Math.round(100 * xp / max) };
}
function rank(p){ let r = RANKS[0][1]; RANKS.forEach(x => { if (p >= x[0]) r = x[1]; }); return r; }
function getQ(id){
  const [a, i] = id.split(":"); const s = subj();
  if (a === "g") return (ui.quiz && ui.quiz.gen && ui.quiz.gen[id]) || sd().gq[id];
  return a === "boss" ? s.boss[+i] : (s.levels.find(l => l.id === a) || { quiz: [] }).quiz[+i];
}
function shuffle(n){ const a = [...Array(n).keys()]; for (let i = n - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function go(route){ ui.route = route; ui.open = []; if (route !== "kviz") ui.quiz = null; try { if (/^https?:$/.test(location.protocol)) location.hash = route; } catch (e) {} render(); window.scrollTo(0, 0); }
function startQuiz(kind, lid, draw){
  ui.quiz = { kind, lid, gen: draw.gen || {}, items: shuffle(draw.ids.length).map(k => ({ id: draw.ids[k], order: shuffle(4), pick: null })), i: 0, picked: null, xp: 0, right: 0, hinted: 0, wrong: [], done: false };
  if (kind === "boss" && exam(lid).minutes) ui.quiz.end = Date.now() + exam(lid).minutes * 60000;
  ui.route = "kviz"; render(); window.scrollTo(0, 0);
}
function gid(l, k){ return "g:" + l.id + ":" + k + ":" + Math.random().toString(36).slice(2, 8); }
function take(arr, n){ return shuffle(arr.length).slice(0, n).map(k => arr[k]); }
/* kvíz levelu: všetky boss otázky + 6 losovaných z ostatných + 4 počítacie úlohy s novými číslami */
function drawLevel(l){
  const all = l.quiz.map((q, i) => i), ids = take(all.filter(i => !l.quiz[i].b), 6).concat(all.filter(i => l.quiz[i].b)).map(i => l.id + ":" + i), gen = {};
  take(l.gen.map((f, k) => k), 4).forEach(k => { const id = gid(l, k); gen[id] = l.gen[k](); ids.push(id); });
  return { ids, gen };
}
/* skúšobný test kapitoly: otázky z jej levelov a zo spoločnej zásoby boss + tretina počítacích úloh */
function drawBoss(ci){
  const s = subj(), ex = exam(ci), gen = {}, pool = [], fixed = [];
  s.boss.forEach((q, i) => { if (q.lv ? ex.levels.includes(q.lv) : +ci === 0) fixed.push("boss:" + i); });
  s.levels.filter(l => ex.levels.includes(l.id)).forEach(l => { l.quiz.forEach((q, i) => fixed.push(l.id + ":" + i)); l.gen.forEach((f, k) => pool.push([l, k])); });
  const nGen = Math.min(pool.length, Math.round(ex.n / 3)), ids = take(fixed, ex.n - nGen);
  take(pool, nGen).forEach(p => { const id = gid(p[0], p[1]); gen[id] = p[0].gen[p[1]](); ids.push(id); });
  return { ids, gen };
}
/* vlastný tréning: n otázok z vybraných levelov */
function drawCustom(sel, n){
  const s = subj(), gen = {}; let ids = [];
  s.levels.filter(l => sel.includes(l.id)).forEach(l => {
    l.quiz.forEach((q, i) => ids.push(l.id + ":" + i));
    l.gen.forEach((f, k) => { const id = gid(l, k); gen[id] = f(); ids.push(id); });
  });
  ids = take(ids, n); Object.keys(gen).forEach(k => { if (!ids.includes(k)) delete gen[k]; });
  return { ids, gen };
}
/* skúšanie vzorcov: k názvu vybrať správny vzorec spomedzi vzorcov toho istého levelu */
function formulaQ(l, k){
  const f = l.formulas[k]; if (!f) return null;
  const others = take(l.formulas.filter(x => x.f !== f.f), 3).map(x => x.f); if (others.length < 3) return null;
  return { q: `Ktorý vzorec patrí k pojmu: <b>${f.n}</b>?`, o: [f.f].concat(others), e: `${f.n}: ${f.f}. Použitie: ${f.w}.` };
}
function drawFormulas(l){
  const gen = {}, ids = [];
  l.formulas.forEach((f, k) => { const q = formulaQ(l, k); if (!q) return; const id = gid(l, "f" + k); gen[id] = q; ids.push(id); });
  return { ids, gen };
}
/* rozložené opakovanie: pokazená otázka sa vráti hneď, na druhý deň a po troch dňoch; po 3 správnych odpovediach vypadne.
   d.rep[kľúč] = { n: počet správnych, due: číslo dňa }. Kľúč generovanej úlohy je typ úlohy (level + generátor), takže sa vráti s novými číslami. */
function today(){ const n = new Date(); return Math.floor((n.getTime() - n.getTimezoneOffset() * 60000) / 86400000); }
function repKey(id){ return id[0] === "g" ? id.split(":").slice(0, 3).join(":") : id; }
function repBad(id){ sd().rep[repKey(id)] = { n: 0, due: today() }; }
function repOk(id){
  const d = sd(), k = repKey(id), r = d.rep[k]; if (!r || r.due > today()) return;
  r.n++; if (r.n >= 3) delete d.rep[k]; else r.due = today() + (r.n === 1 ? 1 : 3);
}
function repDue(){ const d = sd(), t = today(); return Object.keys(d.rep).filter(k => d.rep[k].due <= t); }
function drawRep(){
  const s = subj(), d = sd(), ids = [], gen = {};
  repDue().forEach(k => {
    const a = k.split(":");
    if (a[0] !== "g") { if (getQ(k)) ids.push(k); else delete d.rep[k]; return; }
    const l = s.levels.find(x => x.id === a[1]); let q = null;
    if (l && a[2][0] === "f") q = formulaQ(l, +a[2].slice(1)); else if (l && l.gen[+a[2]]) q = l.gen[+a[2]]();
    if (!q) { delete d.rep[k]; return; }
    const id = gid(l, a[2]); gen[id] = q; ids.push(id);
  });
  return { ids, gen };
}
function drawMiss(){ const d = sd(); return { ids: d.miss.filter(x => getQ(x)), gen: Object.assign({}, d.gq) }; }
function qMax(z){ return z.items.reduce((a, it) => a + (getQ(it.id).b ? 20 : 10), 0); }
function nextBtn(z){
  if (z.kind !== "level" || z.right !== z.items.length) return "";
  const ls = subj().levels, i = ls.findIndex(l => l.id === z.lid), nx = ls[i + 1];
  const ci = ls[i].ch, eb = subj().chapters[ci].exam && bossUnlocked(ci) ? `<button class="btn ${nx ? "sec" : ""} wide" data-act="boss" data-id="${ci}">Spustiť skúšobný test kapitoly</button>` : "";
  return (nx ? `<button class="btn wide" data-act="go" data-id="${nx.id}">Pokračovať na Level ${i + 2}: ${nx.title}</button>` : "") + eb;
}

/* ---------- vykreslenie ---------- */
function render(){
  const r = ui.route;
  if (r === "kviz" && ui.quiz) return renderQuiz();
  if (r === "chyby") return renderMiss();
  if (r === "trening") return renderTrening();
  const lvl = subj().levels.find(l => l.id === r);
  if (lvl) return renderLevel(lvl);
  if (lvl) ui.route = "mapa";
  renderMap();
}

function hud(){
  const t = totals();
  return `<header class="card hud">
    <div class="row spread"><span class="eyebrow">Študijný Quest</span><span class="rank">${rank(t.pct)}</span></div>
    <h1>${subj().name}</h1>
    <p class="muted small">${subj().note}</p>
    <div class="xpbar" role="img" aria-label="Celkový postup ${t.pct} percent"><i style="width:${t.pct}%"></i></div>
    <div class="row spread small num"><span>${t.xp} / ${t.max} XP</span><span>${t.pct} %</span></div>
  </header>`;
}

function renderMap(){
  const s = subj(), d = sd();
  let h = hud();
  h += `<div class="chips">` + SUBJECTS.map(x => `<button class="chip" aria-pressed="${x.id === s.id}" data-act="subject" data-id="${x.id}">${x.name}</button>`).join("") + `</div>`;
  s.chapters.forEach((c, ci) => {
    h += `<div><div class="day">${c.name}</div>${c.note ? `<p class="muted small">${c.note}</p>` : ""}</div><div class="levels">`;
    s.levels.filter(l => l.ch === ci).forEach(l => {
      const n = s.levels.indexOf(l) + 1, p = lvlPct(l);
      if (!unlocked(l)) {   // výklad a vzorce sú otvorené, zamknutý je len kvíz
        h += `<button class="lvl qlock" data-act="go" data-id="${l.id}">
          <span class="no">L${n}</span>
          <span><span class="t">${l.title}</span><br><span class="muted small">Výklad je otvorený. Kvíz sa odomkne po 75 % v kvíze L${n - 1}.</span></span>
          <span class="pct"></span></button>`;
        return;
      }
      h += `<button class="lvl ${isDone(l) ? "done" : ""}" data-act="go" data-id="${l.id}">
        <span class="no">L${n}</span>
        <span><span class="t">${l.title}</span><br><span class="muted small">${l.sub}</span><div class="bar"><i style="width:${p}%"></i></div></span>
        <span class="pct num">${p} %</span></button>`;
    });
    if (c.exam) {
      const ex = c.exam, best = Math.min(d.exam[ci] || 0, ex.n);
      h += bossUnlocked(ci) ? `<button class="lvl boss" data-act="boss" data-id="${ci}">
        <span class="no">T</span>
        <span><span class="t">Skúšobný test</span><br><span class="muted small">${ex.n} otázok, ${ex.minutes} minút, body ako na ostrom teste</span></span>
        <span class="pct num">${best}/${ex.n}</span></button>`
      : `<button class="lvl boss locked" disabled>
        <span class="no">T</span>
        <span><span class="t">Skúšobný test</span><br><span class="muted small">Zamknuté. Najprv sprav kvízy všetkých levelov tejto kapitoly aspoň na 75 %.</span></span>
        <span class="pct">zamknuté</span></button>`;
    }
    h += `</div>`;
  });
  const due = repDue().length, later = Object.keys(d.rep).length - due;
  h += `<div class="card row spread"><div><h3>Opakovanie na dnes</h3><p class="muted small">${due ? due + " otázok čaká" : later ? "Dnes nič nečaká. Naplánované na ďalšie dni: " + later + "." : "Zatiaľ prázdne. Pokazená otázka sa sem vráti hneď, na druhý deň a po troch dňoch."}</p></div>
        ${due ? `<button class="btn" data-act="rep">Spustiť</button>` : ""}</div>`;
  h += `<div class="card row spread"><div><h3>Vlastný tréning</h3><p class="muted small">Vyber si témy a počet otázok. Bez vplyvu na odomykanie levelov.</p></div>
        <button class="btn sec" data-act="go" data-id="trening">Nastaviť</button></div>`;
  h += `<div class="card row spread"><div><h3>Denník chýb</h3><p class="muted small">${d.miss.length ? d.miss.length + " otázok na zopakovanie" : "Zatiaľ prázdny. Sem padnú otázky, v ktorých sa pomýliš."}</p></div>
        <button class="btn sec" data-act="go" data-id="chyby">Otvoriť</button></div>`;
  h += `<div class="card small"><h3>Pravidlá</h3><p class="muted">Správna odpoveď dáva 10 XP, boss otázka 20 XP. Výklad a vzorce všetkých levelov sú otvorené. Kvíz ďalšieho levelu sa odomkne, keď kvíz predošlého spravíš aspoň na 75 %. 100 % v jednom pokuse bez nápovedy je zlatá značka „zvládnuté“. Skúšobný test kapitoly sa odomkne, keď máš kvízy všetkých jej levelov aspoň na 75 %, a beží na čas, bez vysvetlení počas testu. Kvíz môžeš opakovať, koľkokrát chceš, a v každom kvíze sa môžeš vrátiť na predošlé otázky. Nápoveda v kvíze ukáže postup, správna odpoveď s ňou dá polovicu XP a neráta sa do 100 %. Pokazená otázka sa vráti v Opakovaní na dnes: hneď, na druhý deň a po troch dňoch. Po troch správnych odpovediach z neho vypadne.</p></div>`;
  h += `<div class="card small"><h3>Ďalší predmet</h3><p class="muted">Priamo v hre sa prednášky nahrať nedajú. Pošli ich Claudovi do chatu a nový predmet sa tu objaví ako ďalšie tlačidlo hore.</p></div>`;
  app.innerHTML = h;
}

/* vysvetli vlastnými slovami: hráč napíše vysvetlenie a sám si odškrtne kľúčové myšlienky zo vzoru */
function explainCard(l){
  if (!l.explain) return "";
  const e = sd().explain[l.id] || { text: "", got: null }, esc = t => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  let h = `<section class="card explain"><h3>Vysvetli vlastnými slovami</h3><p>${l.explain.q}</p>
    <textarea id="exp" data-lid="${l.id}" rows="5" placeholder="Napíš to tak, aby to pochopil spolužiak, ktorý chýbal.">${esc(e.text)}</textarea>`;
  if (!e.got) return h + `<button class="btn sec wide" data-act="exp-check" data-id="${l.id}">Porovnať so vzorom</button></section>`;
  const n = e.got.filter(Boolean).length;
  return h + `<p class="muted small">Odškrtni, čo tvoje vysvetlenie obsahuje. Čo ostane neodškrtnuté, doplň si. Máš ${n} z ${e.got.length}.</p><div class="keys">` +
    l.explain.keys.map((k, i) => `<button class="key${e.got[i] ? " got" : ""}" aria-pressed="${!!e.got[i]}" data-act="exp-key" data-id="${l.id}:${i}">${k}</button>`).join("") + `</div></section>`;
}

function renderLevel(l){
  const n = subj().levels.indexOf(l) + 1, tab = ui.tab;
  let h = `<button class="back" data-act="go" data-id="mapa">← Mapa levelov</button>
    <div><div class="day">Level ${n} · najlepší pokus ${lvlPct(l)} %</div><h1>${l.title}</h1></div>
    <div class="tabs"><button class="tab" data-act="go" data-id="mapa" aria-label="Späť na mapu levelov">← Mapa</button><div class="tablist" role="tablist" aria-label="Časti levelu">` +
    [["teoria", "Výklad"], ["vzorce", "Vzorce"], ["kviz", "Kvíz"]].map(t => `<button class="tab" role="tab" aria-label="${t[1]}" aria-selected="${tab === t[0]}" data-act="tab" data-id="${t[0]}">${t[1]}</button>`).join("") + `</div></div>`;
  if (tab === "teoria") {
    h += `<div class="theory">`;
    h += (l.lesson || []).map(s => `<section class="card lesson"><h2>${s.h}</h2>${s.p.map(x => typeof x === "string" ? `<p>${x}</p>` : figure(x)).join("")}` +
      (s.c ? `<details class="check"><summary><span>Over si · ťukni pre odpoveď</span>${s.c}</summary>${s.af ? figure({ fig: s.af, cap: s.afc }) : ""}<p>${s.a}</p></details>` : "") + `</section>`).join("");
    if (l.lesson) h += `<div class="day">Zhrnutie na opakovanie</div>`;
    h += l.theory.map(s => `<section class="card"><h3>${s.h}</h3><ul>${s.items.map(i => `<li>${i}</li>`).join("")}</ul></section>`).join("");
    h += `<section class="card traps"><h3>Chytáky</h3><ul>${l.traps.map(i => `<li>${i}</li>`).join("")}</ul></section>`;
    h += l.examples.map(e => `<section class="card ex"><h3>Vzorový príklad</h3><p>${e.t}</p><ol>${e.s.map(i => `<li>${i}</li>`).join("")}</ol></section>`).join("");
    h += explainCard(l);
    h += `</div><button class="btn wide" data-act="tab" data-id="kviz">Pokračovať na kvíz</button>`;
  } else if (tab === "vzorce") {
    const all = ui.open.length === l.formulas.length;
    h += `<div class="row spread"><p class="muted small">Na teste nebudeš mať žiadne pomôcky, vzorce treba vedieť naspamäť.</p><button class="btn sec" data-act="fquiz" data-id="${l.id}">Skúšať vzorce</button>
      </div><div class="fgrid">` +
      l.formulas.map((f, i) => {
        return `<div class="fcard"><span class="n">${f.n}</span><span class="f">${f.f}</span><span class="w">${f.w}</span></div>`;
      }).join("") + `</div>`;
  } else if (!unlocked(l)) {
    const prev = subj().levels[n - 2];
    h += `<div class="card q"><h2>Kvíz je zamknutý</h2>
      <p class="muted">Kvíz sa odomkne, keď spravíš kvíz L${n - 1} · ${prev.title} aspoň na 75 %. Výklad a vzorce si môžeš prejsť už teraz.</p>
      <button class="btn wide" data-act="go" data-id="${prev.id}">Prejsť na L${n - 1}</button></div>`;
  } else {
    const max = lvlMax(l), best = sd().best[l.id] || 0;
    h += `<div class="card q"><h2>Kvíz</h2>
      <p class="muted">Každý pokus je iný: časť otázok sa losuje a počítacie úlohy dostanú nové čísla. Po každej odpovedi uvidíš vysvetlenie a na predošlé otázky sa môžeš vrátiť. Pri 75 % sa odomkne kvíz ďalšieho levelu, 100 % je zlatá značka. Tvoj najlepší pokus: ${best} %.</p>
      <button class="btn wide" data-act="quiz" data-id="${l.id}">Spustiť kvíz</button></div>`;
  }
  app.innerHTML = h;
}

/* číslo otázky v rade: v teste zodpovedaná/nie, v kvíze dobre/zle; v kvíze sa dá ísť len po aktuálnu otázku */
function qnButton(z, x, k){
  const open = z.items.findIndex(y => y.pick === null), front = open < 0 ? z.items.length - 1 : open;
  const st = x.pick === null ? "" : z.kind === "boss" ? " ans" : x.order[x.pick] === 0 ? " good" : " bad";
  const lab = x.pick === null ? "" : z.kind === "boss" ? ", zodpovedaná" : x.order[x.pick] === 0 ? ", správne" : ", nesprávne";
  return `<button class="qn${st}" data-act="goq" data-id="${k}" aria-label="Otázka ${k + 1}${lab}"${k === z.i ? ` aria-current="true"` : ""}${z.kind !== "boss" && k > front ? " disabled" : ""}>${k + 1}</button>`;
}
function renderQuiz(){
  const z = ui.quiz;
  if (z.done) return renderResult();
  const it = z.items[z.i], q = getQ(it.id), answered = z.picked !== null;
  const title = z.kind === "boss" ? "Skúšobný test" : z.kind === "chyby" ? "Denník chýb" : z.kind === "vlastny" ? "Vlastný tréning" : z.kind === "oprava" ? "Oprava chýb" : z.kind === "opak" ? "Opakovanie na dnes" : z.kind === "vzorce" ? "Skúšanie vzorcov" : subj().levels.find(l => l.id === z.lid).title;
  let h = `<button class="back" data-act="quit">← Ukončiť</button>
    <div class="card q pop">
      <div class="row spread meta"><span>${title} · otázka ${z.i + 1}/${z.items.length}</span><span class="num" id="timer">${z.kind === "boss" && z.end ? clock(z.end - Date.now()) : z.right + " správne"}</span></div>
      <div class="qnav">${z.items.map((x, k) => qnButton(z, x, k)).join("")}</div>
      ${q.b ? `<span><span class="tag">BOSS · dvojnásobné body</span></span>` : ""}
      <p class="text">${q.q}</p>
      ${it.hinted ? `<div class="hint"><b>Nápoveda</b><p>${q.h}</p><p class="muted small">Správna odpoveď s nápovedou dá polovicu XP, neráta sa do 100 % a otázka sa vráti v opakovaní.</p></div>` : ""}
      <div class="opts">` +
      it.order.map((oi, pos) => {
        let c = "";
        if (answered) c = oi === 0 ? "ok" : (pos === z.picked ? "no" : "");
        else if (pos === it.pick) c = "sel";
        return `<button class="opt ${c}" data-act="pick" data-id="${pos}" ${answered ? "disabled" : ""}>${q.o[oi]}</button>`;
      }).join("") + `</div>`;
  if (q.h && !answered && !it.hinted && z.kind !== "boss") h += `<button class="btn sec" data-act="hint">Nápoveda</button>`;
  if (z.kind === "boss") {
    const left = z.items.filter(x => x.pick === null).length;
    h += `<div class="row spread"><button class="btn sec" data-act="goq" data-id="${z.i - 1}" ${z.i === 0 ? "disabled" : ""}>← Predošlá</button>
      <button class="btn sec" data-act="goq" data-id="${z.i + 1}" ${z.i + 1 === z.items.length ? "disabled" : ""}>Ďalšia →</button></div>
      <button class="btn wide" data-act="submit" data-left="${left}">Odovzdať test${left ? ` · nezodpovedané: ${left}` : ""}</button>`;
  }
  if (answered) {
    const ok = it.order[z.picked] === 0;
    h += `<div><p class="verdict ${ok ? "ok" : "no"}">${ok ? "Správne" : "Nesprávne"}</p><p>${q.e}</p></div>
      <button class="btn wide" data-act="next" id="next">${z.i + 1 === z.items.length ? "Zobraziť výsledok" : "Ďalšia otázka"}</button>`;
  }
  h += `</div>`;
  app.innerHTML = h;
  if (answered) { const b = document.getElementById("next"); if (b) b.focus({ preventScroll: true }); }
}

function renderResult(){
  const z = ui.quiz, n = z.items.length;
  let h = `<div class="card q pop">`;
  if (z.kind === "boss") {
    const ex = exam(z.lid), pts = ex.points ? ex.points[Math.min(z.right, ex.points.length - 1)] : null, late = z.end && Date.now() >= z.end;
    h += `<div class="day">Skúšobný test</div><div class="big num">${z.right} / ${n}</div>` + (pts === null ? "" : `<h2>${pts} z ${ex.points[ex.points.length - 1]} bodov</h2>`) +
      `<p>${z.right * 2 >= n ? "Hranicu 50 % si splnil." : "Si pod hranicou 50 %."}${late ? " Čas vypršal, nezodpovedané otázky sa rátajú ako nesprávne." : ""}</p>` +
      z.wrong.map(id => { const q = getQ(id); return `<div class="miss"><p><b>${q.q}</b></p><p class="a">${q.o[0]}</p><p class="small">${q.e}</p></div>`; }).join("");
  } else if (z.kind === "oprava" || z.kind === "vzorce" || z.kind === "opak") {
    const lab = { oprava: "Oprava chýb", vzorce: "Skúšanie vzorcov", opak: "Opakovanie na dnes" }[z.kind];
    h += `<div class="day">${lab}</div><div class="big num">${z.right} / ${n}</div><p>${z.right === n ? "Všetko správne." : "Chybné otázky si môžeš hneď precvičiť znova."}${z.kind === "opak" ? " Správne zodpovedané sa vrátia zajtra alebo o tri dni, kým nemajú tri správne odpovede." : ""}</p>`;
  } else if (z.kind === "vlastny") {
    h += `<div class="day">Vlastný tréning</div><div class="big num">${z.right} / ${n}</div><p>${z.right === n ? "Bez chyby." : "Chybné otázky nájdeš v denníku chýb."}</p>`;
  } else if (z.kind === "chyby") {
    h += `<div class="day">Denník chýb</div><div class="big num">${z.right} / ${n}</div><p>Správne zodpovedané otázky sa z denníka odstránili.</p>`;
  } else {
    const l = subj().levels.find(x => x.id === z.lid), full = z.right === n && !z.hinted, p = Math.floor(100 * z.xp / qMax(z));
    h += `<div class="day">${l.title}</div><div class="big num">${p} %</div><h2>${full ? "Level zvládnutý" : p >= PASS ? "Kvíz prejdený" : "Ešte to chce tréning"}</h2>
      <p>${z.right} z ${n} správne. ${full ? "Kvíz ďalšieho levelu je odomknutý." : p >= PASS ? "Kvíz ďalšieho levelu je odomknutý. Na zlatú značku treba 100 % bez nápovedy." : "Kvíz ďalšieho levelu sa odomkne pri 75 %. Pozri si chyby v denníku a skús to znova."}</p>`;
  }
  if (z.hinted) h += `<p class="muted small">S nápovedou: ${z.hinted}. Tieto otázky sa vrátia v opakovaní, aby si ich skúsil sám.</p>`;
  if (z.wrong.length && z.kind !== "chyby") h += `<p class="muted small">${z.wrong.length} otázok je v denníku chýb.</p>`;
  h += nextBtn(z) + (z.wrong.length ? `<button class="btn wide" data-act="retrywrong">Precvičiť len chybné otázky (${z.wrong.length})</button>` : "") + `<div class="row">${(z.kind === "chyby" && !sd().miss.length) || (z.kind === "opak" && !repDue().length) ? "" : `<button class="btn" data-act="again">Skúsiť znova</button>`}
    ${sd().miss.length ? `<button class="btn sec" data-act="go" data-id="chyby">Denník chýb</button>` : ""}
    <button class="btn sec" data-act="go" data-id="mapa">Mapa levelov</button></div></div>`;
  app.innerHTML = h;
}

function renderMiss(){
  const d = sd();
  let h = `<button class="back" data-act="go" data-id="mapa">← Mapa levelov</button><h1>Denník chýb</h1>`;
  if (!d.miss.length) {
    h += `<div class="card"><p>Denník je prázdny. Otázky, v ktorých sa pomýliš, sa tu objavia so správnou odpoveďou a vysvetlením.</p></div>`;
  } else {
    h += `<button class="btn wide" data-act="missquiz">Precvičiť ${d.miss.length} otázok</button>`;
    h += d.miss.map(id => { const q = getQ(id); return q ? `<div class="card miss"><p><b>${q.q}</b></p><p class="a">${q.o[0]}</p><p class="small">${q.e}</p></div>` : ""; }).join("");
  }
  app.innerHTML = h;
}

function renderTrening(){
  const s = subj(), ok = ui.sel.length > 0;
  let h = `<button class="back" data-act="go" data-id="mapa">← Mapa levelov</button><h1>Vlastný tréning</h1>
    <div class="card q"><h3>Témy</h3><div class="chips">` +
    s.levels.map((l, i) => `<button class="chip" aria-pressed="${ui.sel.includes(l.id)}" data-act="sel" data-id="${l.id}">L${i + 1} · ${l.title}</button>`).join("") +
    `</div><h3>Počet otázok</h3><div class="chips">` +
    [10, 20, 30].map(n => `<button class="chip" aria-pressed="${ui.cnt === n}" data-act="cnt" data-id="${n}">${n}</button>`).join("") +
    `</div><p class="muted small">${ok ? "Otázky sa vylosujú z vybraných tém vrátane počítacích úloh s novými číslami." : "Vyber aspoň jednu tému."}</p>
    <button class="btn wide" data-act="trenuj" ${ok ? "" : "disabled"}>Spustiť tréning</button></div>`;
  app.innerHTML = h;
}

/* ---------- udalosti ---------- */
/* vyhodnotí jednu odpoveď (pos = null znamená nezodpovedané) a zapíše denník chýb a opakovanie */
function grade(z, it, pos){
  const q = getQ(it.id), d = sd();
  if (pos !== null && it.order[pos] === 0 && it.hinted) { z.right++; z.hinted++; z.xp += q.b ? 10 : 5; if (it.id[0] === "g") d.gq[it.id] = q; repBad(it.id); }   // s nápovedou: polovičné XP, samostatnosť sa overí v opakovaní
  else if (pos !== null && it.order[pos] === 0) { z.right++; z.xp += q.b ? 20 : 10; d.miss = d.miss.filter(x => x !== it.id); delete d.gq[it.id]; repOk(it.id); }
  else { z.wrong.push(it.id); if (!d.miss.includes(it.id)) d.miss.push(it.id); if (it.id[0] === "g") d.gq[it.id] = q; repBad(it.id); }
}
function finishQuiz(){
  const z = ui.quiz, d = sd(); z.done = true;
  if (z.kind === "boss") z.items.forEach(it => grade(z, it, it.pick));
  if (z.kind === "level") d.best[z.lid] = Math.max(d.best[z.lid] || 0, z.right === z.items.length && !z.hinted ? 100 : Math.min(99, Math.floor(100 * z.xp / qMax(z))));
  if (z.kind === "boss") d.exam[z.lid] = Math.max(d.exam[z.lid] || 0, z.right);
  persist(); render(); window.scrollTo(0, 0);
}
app.addEventListener("click", ev => {
  const b = ev.target.closest("[data-act]"); if (!b) return;
  const act = b.dataset.act, id = b.dataset.id, z = ui.quiz, s = subj();
  if (act === "go") { if (id !== "mapa" && id !== "chyby") ui.tab = "teoria"; go(id); }
  else if (act === "subject") { save.subject = id; persist(); go("mapa"); }
  else if (act === "tab") { ui.tab = id; ui.open = []; render(); window.scrollTo(0, 0); }
  else if (act === "flip") { const i = +id; ui.open = ui.open.includes(i) ? ui.open.filter(x => x !== i) : ui.open.concat(i); render(); }
  else if (act === "showall") { ui.open = s.levels.find(l => l.id === ui.route).formulas.map((_, i) => i); render(); }
  else if (act === "hideall") { ui.open = []; render(); }
  else if (act === "quiz") { const l = s.levels.find(x => x.id === id); if (unlocked(l)) startQuiz("level", id, drawLevel(l)); }
  else if (act === "boss") { if (bossUnlocked(id)) startQuiz("boss", +id, drawBoss(+id)); }
  else if (act === "missquiz") { startQuiz("chyby", null, drawMiss()); }
  else if (act === "rep") { const dr = drawRep(); if (dr.ids.length) startQuiz("opak", null, dr); else render(); }
  else if (act === "retrywrong" && z) { startQuiz("oprava", z.lid, { ids: z.wrong.slice(), gen: z.gen }); }
  else if (act === "fquiz") { startQuiz("vzorce", id, drawFormulas(s.levels.find(x => x.id === id))); }
  else if (act === "sel") { ui.sel = ui.sel.includes(id) ? ui.sel.filter(x => x !== id) : ui.sel.concat(id); render(); }
  else if (act === "cnt") { ui.cnt = +id; render(); }
  else if (act === "trenuj") { if (ui.sel.length) startQuiz("vlastny", null, drawCustom(ui.sel, ui.cnt)); }
  else if (act === "pick" && z && z.kind === "boss") { z.items[z.i].pick = +id; if (z.i + 1 < z.items.length) z.i++; render(); window.scrollTo(0, 0); }
  else if (act === "hint" && z) { z.items[z.i].hinted = true; render(); }
  else if (act === "exp-check") { const e = sd().explain[id] = sd().explain[id] || { text: "" }; e.got = s.levels.find(l => l.id === id).explain.keys.map(() => false); persist(); render(); }
  else if (act === "exp-key") { const [lid, i] = id.split(":"), e = sd().explain[lid]; e.got[+i] = !e.got[+i]; persist(); render(); }
  else if (act === "goq" && z) { z.i = +id; if (z.kind !== "boss") z.picked = z.items[z.i].pick; render(); window.scrollTo(0, 0); }
  else if (act === "submit" && z) { const left = +b.dataset.left; if (left && !confirm(`Nezodpovedané otázky: ${left}. Odovzdať test aj tak?`)) return; finishQuiz(); }
  else if (act === "pick" && z && z.picked === null) { const it = z.items[z.i]; z.picked = it.pick = +id; grade(z, it, z.picked); persist(); render(); }
  else if (act === "next" && z) { if (z.i + 1 === z.items.length) finishQuiz(); else { z.i++; z.picked = z.items[z.i].pick; render(); window.scrollTo(0, 0); } }
  else if (act === "again" && z) {
    startQuiz(z.kind, z.lid, z.kind === "opak" ? drawRep() : z.kind === "oprava" ? { ids: z.items.map(x => x.id), gen: z.gen } : z.kind === "vzorce" ? drawFormulas(s.levels.find(x => x.id === z.lid)) : z.kind === "chyby" ? drawMiss() : z.kind === "boss" ? drawBoss(z.lid) : z.kind === "vlastny" ? drawCustom(ui.sel, ui.cnt) : drawLevel(s.levels.find(x => x.id === z.lid)));
  }
  else if (act === "quit") { const lv = z && (z.kind === "level" || z.kind === "vzorce"); ui.tab = z && z.kind === "vzorce" ? "vzorce" : "kviz"; go(lv ? z.lid : "mapa"); }
});
/* text vlastného vysvetlenia sa ukladá priebežne, bez prekreslenia stránky */
app.addEventListener("input", ev => {
  if (ev.target.id !== "exp") return;
  const d = sd(), lid = ev.target.dataset.lid; d.explain[lid] = d.explain[lid] || { text: "", got: null }; d.explain[lid].text = ev.target.value; persist();
});
window.addEventListener("hashchange", () => {
  const h = location.hash.replace("#", "");
  if (ui.route === "kviz") return;
  if (h && h !== ui.route && (h === "mapa" || h === "chyby" || subj().levels.some(l => l.id === h))) { ui.route = h; ui.quiz = null; ui.open = []; render(); }
});

/* odpočet skúšobného testu */
setInterval(() => {
  const z = ui.quiz; if (!z || z.kind !== "boss" || z.done || !z.end || ui.route !== "kviz") return;
  const left = z.end - Date.now(); if (left <= 0) return finishQuiz();
  const t = document.getElementById("timer"); if (t) t.textContent = clock(left);
}, 1000);

/* ---------- štart (so zachovaním stavu pri novej verzii stránky) ---------- */
function start(data){
  if (data && data.route) ui = Object.assign(ui, data);
  else { const h = location.hash.replace("#", ""); if (h === "chyby" || subj().levels.some(l => l.id === h)) ui.route = h; }
  if (ui.route === "kviz" && !ui.quiz) ui.route = "mapa";
  render();
}
try { if (window.claude && window.claude.hot && window.claude.hot.snapshot) window.claude.hot.snapshot(() => ui); } catch (e) {}
if (window.claude && window.claude.hot && window.claude.hot.ready) window.claude.hot.ready(start);
else start((window.claude && window.claude.hot && window.claude.hot.data) || {});
