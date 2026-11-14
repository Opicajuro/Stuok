/* Fyzika 1 (BPC-FY1). Schéma predmetu je v komentári na začiatku index.html. */
SUBJECTS.push({
id: "fy1",
name: "Fyzika 1",
note: "BPC-FY1 · 7 prednášok: mechanika a elektrostatika",
/* kapitola = úsek látky, ktorý končí jedným testom; pravidlá skúšobného testu patria kapitole, nie predmetu */
chapters: [
 { name: "Kapitola 1 · Písomný test 1", note: "Mechanika, gravitačné a tiažové pole, elektrina s Gaussovou vetou. Potenciál je tu pre istotu.",
   exam: { n: 15, minutes: 35, points: [0, 0, 0, 0, 1, 2, 3, 4, 6, 7, 8, 8, 9, 9, 10, 11] } }   // points[i] = body za i správnych odpovedí
],
levels: [
/* ---------------------------------- L1 ---------------------------------- */
{
id: "l1", ch: 0, title: "Kinematika hmotného bodu", sub: "kde je, ako rýchlo, s akým zrýchlením",
lesson: [
 { h: "1. Čo kinematika rieši", ask: { q: "Sedíš vo vlaku, ktorý ide 30 m/s. Aká je tvoja rýchlosť?", o: ["Závisí od toho, voči čomu ju meriam", "0 m/s", "30 m/s"] }, p: [
  "Kinematika opisuje pohyb: kde teleso je, ako rýchlo sa hýbe a ako sa jeho rýchlosť mení. Nepýta sa, prečo sa hýbe. Príčiny pohybu (sily) rieši až dynamika v ďalšom leveli.",
  "Aby sme mohli pohyb opísať, potrebujeme <b>vzťažnú sústavu (vztažná soustava)</b>: teleso, voči ktorému meriame, súradnicové osi x, y, z a hodiny. Bez nej nemá otázka „aká je rýchlosť“ zmysel. Študent sediaci vo vlaku má voči vagónu rýchlosť nula, voči nástupišťu 30 m/s a voči Slnku asi 30 km/s. Všetky tri odpovede sú správne, každá v inej sústave.",
  "Teleso nahrádzame <b>hmotným bodom</b>: predstavíme si, že celá hmotnosť je v jednom bode. Smieme to urobiť vtedy, keď rozmery telesa nehrajú rolu. Auto na diaľnici medzi Brnom a Prahou je hmotný bod, to isté auto pri parkovaní nie."
 ], c: "Sedíš v lietadle a letuška ide uličkou dopredu. Má väčšiu rýchlosť voči tebe, alebo voči zemi?", a: "Voči zemi. K jej rýchlosti chôdze sa pripočíta rýchlosť lietadla. Voči tebe ide len rýchlosťou chôdze." },
 { h: "2. Poloha, trajektória, dráha a posunutie", ask: { q: "Bežec obehne jeden okruh štadióna dlhý 400 m. Aké má posunutie?", o: ["0 m", "400 m", "200 m"] }, p: [
  "Polohu bodu udáva <b>polohový vektor</b> r, šípka z počiatku súradníc do miesta, kde bod práve je. Mení sa s časom, preto píšeme r(t). V zložkách:<span class=\"fm\">r(t) = x(t) i + y(t) j + z(t) k</span>kde i, j, k sú jednotkové vektory v smere osí. Tri funkcie x(t), y(t), z(t) sa volajú parametrické rovnice trajektórie.",
  "<b>Trajektória</b> je čiara, ktorú bod pri pohybe „nakreslí“. <b>Dráha s</b> je dĺžka tejto čiary, teda obyčajné kladné číslo. <b>Posunutie</b> Δr = r₂ − r₁ je vektor z počiatočnej do koncovej polohy a nezaujíma ho, kadiaľ si išiel.",
  "Rozdiel je najlepšie vidieť na bežcovi na štadióne. Po jednom okruhu dlhom 400 m má dráhu 400 m, ale posunutie nulové, lebo skončil tam, kde začal. Toto je obľúbený chyták.",
  { pic: "draha", cap: "Dráha je dĺžka celej krivky, posunutie je šípka zo začiatku na koniec." }
 ], c: "Ideš 3 m na východ a potom 4 m na sever. Aká je dráha a aká veľkosť posunutia?", a: "Dráha je 3 + 4 = 7 m. Posunutie je prepona pravouhlého trojuholníka: √(3² + 4²) = 5 m." },
 { h: "3. Rýchlosť", ask: { q: "Kam mieri vektor okamžitej rýchlosti pri pohybe po krivke?", o: ["Po dotyčnici k trajektórii", "Do stredu krivosti", "Kolmo na trajektóriu"] }, p: [
  "<b>Stredná rýchlosť</b> je posunutie delené časom, v<sub>s</sub> = Δr/Δt. Hovorí len o celom úseku, nie o tom, čo sa dialo po ceste.",
  "<b>Okamžitá rýchlosť</b> je to, čo ukazuje tachometer v danom okamihu. Dostaneme ju tak, že časový úsek zmenšujeme k nule, čo je presne definícia derivácie:<span class=\"fm\">v = dr/dt,  teda  v<sub>x</sub> = dx/dt,  v<sub>y</sub> = dy/dt,  v<sub>z</sub> = dz/dt</span>",
  "Derivuje sa každá zložka zvlášť. Vektor rýchlosti má vždy <b>smer dotyčnice k trajektórii</b>. Preto iskry z brúsky odlietajú po priamke, ktorá sa kotúča dotýka. Veľkosť rýchlosti je |v| = √(v<sub>x</sub>² + v<sub>y</sub>² + v<sub>z</sub>²).",
  "Príklad z prednášky: r = 3,0t i − 4,0t² j + 2,0 k. Derivujeme po zložkách: z 3,0t vznikne 3,0, z −4,0t² vznikne −8,0t a konštanta 2,0 zmizne. Výsledok je v = 3,0 i − 8,0t j. Pri priamočiarom pohybe je rýchlosť sklon grafu x(t): strmší graf znamená rýchlejší pohyb, klesajúci graf zápornú rýchlosť."
 ], c: "Poloha je x(t) = 2t³ − 5t (metre, sekundy). Aká je rýchlosť v čase t = 2 s?", a: "v = dx/dt = 6t² − 5. V čase 2 s: 6·4 − 5 = 19 m/s." },
 { h: "4. Zrýchlenie", ask: { q: "Auto ide zákrutou stále rovnako rýchlo. Má zrýchlenie?", o: ["Áno, mení sa smer rýchlosti", "Nie, rýchlosť je stála", "Len keď brzdí"] }, p: [
  "<b>Zrýchlenie</b> hovorí, ako rýchlo sa mení rýchlosť:<span class=\"fm\">a = dv/dt = d²r/dt²</span>Je to vektor. Pozor: rýchlosť sa môže meniť veľkosťou, smerom alebo oboma. Aj auto, ktoré ide zákrutou stále rovnako rýchlo, má zrýchlenie, lebo mení smer.",
  "Pri pohybe po priamke stačia znamienka. Ak majú v a a rovnaké znamienko, teleso zrýchľuje. Ak opačné, spomaľuje. Záporné zrýchlenie teda neznamená automaticky brzdenie: teleso idúce v zápornom smere so záporným zrýchlením zrýchľuje.",
  "Z grafov: zrýchlenie je sklon grafu v(t) a zakrivenie grafu x(t). Ak x(t) rastie, ale čoraz pomalšie (graf sa splošťuje), potom v &gt; 0 a a &lt; 0. Presne túto otázku máš v prednáške."
 ], c: "Rýchlosť je v(t) = 3 − 8t + 3t². Aké je zrýchlenie v čase t = 1 s a zrýchľuje teleso, alebo spomaľuje?", a: "a = dv/dt = −8 + 6t = −2 m/s². Rýchlosť v čase 1 s je 3 − 8 + 3 = −2 m/s. Obe sú záporné, takže teleso zrýchľuje (v zápornom smere)." },
 { h: "5. Rovnomerne zrýchlený pohyb: odkiaľ sú tie vzorce", ask: { q: "Auto brzdí z 20 m/s so spomalením 5 m/s². Aká je brzdná dráha?", o: ["40 m", "80 m", "4 m"] }, p: [
  "Vzorce pre rovnomerne zrýchlený pohyb sa netreba učiť naspamäť ako tri nesúvisiace veci. Vyplynú z jednej podmienky: zrýchlenie je konštantné.",
  "Vieme, že dv/dt = a. Hľadáme funkciu v(t), ktorej derivácia je konštanta a. To je a·t plus ľubovoľná konštanta. Konštantu určí počiatočná podmienka v(0) = v₀:<span class=\"fm\">v(t) = v₀ + at</span>",
  "Teraz dx/dt = v₀ + at. Integrujeme ešte raz a použijeme x(0) = x₀:<span class=\"fm\">x(t) = x₀ + v₀t + ½at²</span>Polovica pri at² vznikla integrovaním t. Ak z oboch rovníc vylúčime čas, dostaneme tretí užitočný vzťah:<span class=\"fm\">v² = v₀² + 2a(x − x₀)</span>",
  "Ten sa hodí, keď v zadaní čas nie je. Príklad: auto brzdí z 20 m/s so spomalením 5 m/s². Brzdná dráha: 0 = 20² − 2·5·s, teda s = 40 m. Rýchla kontrola každého vzorca je rozmerová: vo vzťahu x = x₀ + at by sme k metrom pripočítavali m/s, takže je určite zlý."
 ], c: "Teleso sa rozbieha z pokoja so zrýchlením 2 m/s². Akú dráhu prejde za 5 s a akú má potom rýchlosť?", a: "x = ½·2·5² = 25 m, v = 2·5 = 10 m/s." },
 { h: "6. Tečné a normálové zrýchlenie", ask: { q: "Ktorá zložka zrýchlenia mení smer rýchlosti?", o: ["Normálová, mieri do stredu oblúka", "Tečná", "Žiadna"] }, p: [
  "Pri krivočiarom pohybe je výhodné rozložiť zrýchlenie na dve kolmé zložky podľa toho, čo robia s rýchlosťou.",
  "<b>Tečné zrýchlenie</b> a<sub>t</sub> = dv/dt leží v smere dotyčnice a mení <b>veľkosť</b> rýchlosti. Je to to, čo cítiš, keď šofér pridá plyn alebo brzdí. <b>Normálové zrýchlenie</b> a<sub>n</sub> = v²/R mieri kolmo na rýchlosť, do stredu oblúka, a mení <b>smer</b> rýchlosti. Je to to, čo ťa v zákrute tlačí do dverí. R je polomer krivosti trajektórie.",
  { pic: "atan", cap: "Celkové zrýchlenie (červené) je vektorový súčet tečnej a normálovej zložky." },
  "Keďže sú zložky na seba kolmé, celkové zrýchlenie sa počíta Pytagorovou vetou, nie obyčajným sčítaním:<span class=\"fm\">a = √(a<sub>t</sub>² + a<sub>n</sub>²)</span>",
  "Podľa týchto zložiek sa delia pohyby. Obe nulové: rovnomerný priamočiary. Len tečné: priamočiary, ale nerovnomerný. Len normálové: rovnomerný krivočiary (napríklad rovnomerný pohyb po kružnici). Obe nenulové: nerovnomerný krivočiary. Všimni si, že a<sub>n</sub> závisí od v²: dvojnásobná rýchlosť v tej istej zákrute znamená štvornásobné normálové zrýchlenie."
 ], c: "Auto ide zákrutou s polomerom 50 m stálou rýchlosťou 20 m/s. Aké má tečné a normálové zrýchlenie?", a: "Tečné je 0, lebo veľkosť rýchlosti sa nemení. Normálové je v²/R = 400/50 = 8 m/s²." },
 { h: "7. Pohyb po kružnici", ask: { q: "Na kolotoči sedíš raz pri osi, raz na okraji. Kde máš väčšiu rýchlosť?", o: ["Na okraji", "Pri osi", "Všade rovnakú, lebo ω je rovnaké"] }, p: [
  "Na kružnici je pohodlnejšie merať uhol než dráhu. Poloha je uhol φ v radiánoch, <b>uhlová rýchlosť</b> ω = dφ/dt hovorí, o koľko radiánov sa bod otočí za sekundu, a <b>uhlové zrýchlenie</b> ε = dω/dt, ako rýchlo sa otáčanie zrýchľuje.",
  "Medzi uhlovými a obvodovými veličinami je vždy ten istý prevod: vynásob polomerom.<span class=\"fm\">s = Rφ,   v = ωR,   a<sub>t</sub> = εR,   a<sub>n</sub> = v²/R = ω²R</span>Body ďalej od osi majú pri rovnakom ω väčšiu rýchlosť. Preto sa okraj kolotoča hýbe rýchlejšie než jeho stred.",
  { pic: "kruznica", cap: "Rýchlosť je vždy po dotyčnici, normálové zrýchlenie mieri do stredu." },
  "Rovnice pre rovnomerne zrýchlené otáčanie sú presnou kópiou priamočiarych, len s inými písmenami: ω = ω₀ + εt a φ = φ₀ + ω₀t + ½εt². Perióda jedného obehu je T = 2π/ω.",
  "Príklad z prednášky: auto sa rozbieha z pokoja po kružnici R = 30 m s a<sub>t</sub> = 0,5 m/s². Po 15 s má rýchlosť v = 0,5·15 = 7,5 m/s, normálové zrýchlenie 7,5²/30 = 1,875 m/s² a celkové √(0,5² + 1,875²) ≈ 1,94 m/s². Celkové zrýchlenie zviera s rýchlosťou uhol, pre ktorý tg θ = a<sub>n</sub>/a<sub>t</sub> = 3,75, teda asi 75°."
 ], c: "Koleso s polomerom 0,3 m sa otáča 10 rad/s. Aká je rýchlosť bodu na obvode a jeho normálové zrýchlenie?", a: "v = ωR = 3 m/s, a_n = ω²R = 100·0,3 = 30 m/s²." },
 { h: "8. Dve úlohy kinematiky", ask: { q: "Poznáš zrýchlenie a(t). Stačí to na určenie polohy telesa?", o: ["Nie, treba aj počiatočnú polohu a rýchlosť", "Áno, stačí dvakrát integrovať", "Áno, ak je a konštantné"] }, p: [
  "<b>Prvá úloha</b>: poznám polohu r(t) a chcem rýchlosť a zrýchlenie. Stačí derivovať. Je to vždy jednoznačné.",
  "<b>Druhá úloha</b>: poznám zrýchlenie a(t) a chcem rýchlosť a polohu. Treba integrovať a pri každej integrácii pribudne neznáma konštanta. Tie určia <b>počiatočné podmienky</b>, teda poloha a rýchlosť na začiatku. Bez nich úloha nemá jednoznačné riešenie. Ak viem len to, že a = 0, teleso môže stáť aj letieť stálou rýchlosťou ľubovoľným smerom.",
  "Príkladom druhej úlohy je pád v odporujúcom prostredí, kde odpor rastie s rýchlosťou: a = g − kv. Na začiatku je v = 0 a teleso zrýchľuje s g. Ako rýchlosť rastie, zrýchlenie klesá, až kým pri v<sub>m</sub> = g/k nie je nulové. Túto <b>medznú rýchlosť</b> už teleso neprekročí. Preto parašutista nepadá stále rýchlejšie."
 ], c: "Poznáš a(t) = 6t a vieš, že v(0) = 2 m/s. Aká je rýchlosť v(t)?", a: "Integráciou v = 3t² + C. Z podmienky v(0) = 2 vyjde C = 2, teda v(t) = 3t² + 2." },
 { h: "9. Vrhy v tiažovom poli", ask: { q: "Guľku vystrelíš vodorovne a druhú v tej istej chvíli pustíš z ruky z rovnakej výšky. Ktorá dopadne skôr?", o: ["Dopadnú naraz", "Pustená", "Vystrelená"] }, p: [
  "Blízko povrchu Zeme má každé voľne letiace teleso rovnaké zrýchlenie g ≈ 9,81 m/s² smerom nadol, bez ohľadu na hmotnosť (odpor vzduchu zanedbávame). Kľúčová myšlienka: <b>vodorovný a zvislý pohyb sú nezávislé</b>. Vodorovne sa nedeje nič (rovnomerný pohyb), zvislo ide o rovnomerne zrýchlený pohyb.",
  "<b>Voľný pád</b>: v = gt, h = ½gt². <b>Zvislý vrh nahor</b> rýchlosťou v₀: rýchlosť klesá podľa v = v₀ − gt, v najvyššom bode je nulová, takže čas výstupu je v₀/g a výška v₀²/(2g). Pre v₀ = 28,5 m/s z prednášky vyjde výška 41,4 m za 2,9 s.",
  "<b>Vodorovný vrh</b> z výšky h: zvislo je to obyčajný voľný pád, takže doba letu t = √(2h/g) vôbec nezávisí od toho, ako rýchlo si hodil. Dolet je D = v₀·t. Guľka vystrelená vodorovne a guľka pustená z ruky dopadnú naraz.",
  { pic: "vodorovny", cap: "Vodorovný vrh: zvislo voľný pád z výšky h, vodorovne rovnomerný pohyb." },
  "<b>Šikmý vrh</b> pod uhlom α: počiatočnú rýchlosť rozložíme na vodorovnú v₀ cos α a zvislú v₀ sin α.<span class=\"fm\">x = v₀t cos α,   y = v₀t sin α − ½gt²</span>Z toho doba letu T = 2v₀ sin α/g, najväčšia výška H = v₀² sin²α/(2g) a dolet D = v₀² sin 2α/g. Dolet je najväčší pri 45°. V najvyššom bode je zvislá rýchlosť nulová, ale vodorovná v₀ cos α zostáva a zrýchlenie je stále g.",
  { pic: "kinematika", cap: "Šikmý vrh: dráha je parabola, v najvyššom bode zostáva len vodorovná zložka rýchlosti." }
 ], c: "Kameň hodíš vodorovne rýchlosťou 10 m/s z veže vysokej 45 m (g = 10 m/s²). Ako ďaleko od veže dopadne?", a: "Doba pádu t = √(2·45/10) = 3 s. Dolet 10·3 = 30 m." },
 { h: "10. Vektory a úlohy z cvičení", ask: { q: "Čomu sa rovná skalárny súčin dvoch na seba kolmých vektorov?", o: ["0", "1", "Súčinu ich veľkostí"] }, p: [
  "V cvičeniach sa pracuje s jednotkovými vektormi i, j, k v smere osí. <b>Skalárny súčin</b> dvoch vektorov je číslo a·b = a·b·cos φ, v zložkách a<sub>x</sub>b<sub>x</sub> + a<sub>y</sub>b<sub>y</sub> + a<sub>z</sub>b<sub>z</sub>. Rôzne jednotkové vektory sú na seba kolmé, preto i·j = j·k = k·i = 0. Ten istý vektor zviera sám so sebou nulový uhol, preto i·i = j·j = k·k = 1.",
  "Z toho plynie rýchly test kolmosti: <b>vektory sú kolmé práve vtedy, keď je ich skalárny súčin nulový</b>. Príklad z cvičenia: u = 4i − 5j a v = 5i − 4j + 6k. Súčin je 4·5 + (−5)·(−4) + 0·6 = 40, čo nie je nula, takže kolmé nie sú.",
  "Úloha: poloha je x = 4 − 27t + t³. Rýchlosť v = dx/dt = −27 + 3t², zrýchlenie a = 6t. Kedy častica stojí? Položíme v = 0: 3t² = 27, teda t = 3 s. V tom okamihu sa otáča a ide späť.",
  "Úloha HRW 4.15: častica vyletí z počiatku rýchlosťou 3,0 i m/s a má stále zrýchlenie a = (−1,0 i − 0,5 j) m/s². Kedy je jej súradnica x najväčšia? Vtedy, keď sa x-ová zložka rýchlosti vynuluje: v<sub>x</sub> = 3 − t = 0, teda t = 3 s. Zložka v<sub>y</sub> = −0,5t = −1,5 m/s, takže rýchlosť je −1,5 j m/s. Poloha: x = 3·3 − ½·1·3² = 4,5 m a y = −½·0,5·3² = −2,25 m. Každá os sa počíta samostatne ako rovnomerne zrýchlený pohyb."
 ], c: "Sú vektory a = 2i + 3j a b = 3i − 2j na seba kolmé?", a: "Áno. a·b = 2·3 + 3·(−2) = 0." }
],
theory: [
 { h: "Základné pojmy", items: [
  "<b>Vzťažná sústava (vztažná soustava)</b>: teleso + súradnice + hodiny. Pohyb je relatívny – študent vo vlaku má voči vlaku rýchlosť 0, voči zemi rýchlosť vlaku.",
  "<b>Hmotný bod</b>: model telesa s hmotnosťou, ale bez rozmerov.",
  "<b>Polohový vektor</b> r(t) = x(t) i + y(t) j + z(t) k.",
  "<b>Trajektória</b> je krivka, po ktorej sa bod pohybuje. <b>Dráha s</b> je jej dĺžka (skalár). <b>Posunutie</b> Δr = r₂ − r₁ je vektor. Po jednom obehu kružnice je dráha 2πR, posunutie 0."
 ]},
 { h: "Rýchlosť a zrýchlenie", items: [
  "Okamžitá rýchlosť <b>v = dr/dt</b> má vždy smer dotyčnice k trajektórii.",
  "Okamžité zrýchlenie <b>a = dv/dt</b>.",
  "Priamočiary pohyb: v je sklon grafu x(t), a je sklon grafu v(t). Ak x rastie, ale sklon klesá, tak v &gt; 0 a a &lt; 0.",
  "Rovnomerne zrýchlený pohyb (integráciou dv/dt = a): v = v₀ + at, x = x₀ + v₀t + ½at², v² = v₀² + 2a(x − x₀)."
 ]},
 { h: "Tečné a normálové zrýchlenie", items: [
  "<b>a<sub>t</sub> = dv/dt</b> mení veľkosť rýchlosti, <b>a<sub>n</sub> = v²/R</b> mení smer a mieri do stredu krivosti. Veľkosť |a| = √(a<sub>t</sub>² + a<sub>n</sub>²).",
  "a<sub>t</sub> = 0 a a<sub>n</sub> = 0: rovnomerný priamočiary. a<sub>t</sub> ≠ 0, a<sub>n</sub> = 0: nerovnomerný priamočiary. a<sub>t</sub> = 0, a<sub>n</sub> ≠ 0: rovnomerný krivočiary. Oboje ≠ 0: nerovnomerný krivočiary."
 ]},
 { h: "Pohyb po kružnici", items: [
  "Uhol φ [rad], uhlová rýchlosť <b>ω = dφ/dt</b>, uhlové zrýchlenie <b>ε = dω/dt</b>.",
  "Prevody: s = Rφ, v = ωR, a<sub>t</sub> = εR, a<sub>n</sub> = ω²R = v²/R. Vektorovo v = ω × r.",
  "Rovnomerne zrýchlený: ω = ω₀ + εt, φ = φ₀ + ω₀t + ½εt² (presná analógia s v a x)."
 ]},
 { h: "Dve úlohy kinematiky", items: [
  "1. Poznám r(t) → <b>derivujem</b> → v(t), a(t).",
  "2. Poznám a(t) → <b>integrujem</b> → v(t), r(t), ale potrebujem počiatočné podmienky. Zo samotného a = 0 polohu neurčíš (pokoj aj rovnomerný pohyb).",
  "Odporujúce prostredie: a = g − kv, rýchlosť sa blíži k medznej hodnote v<sub>m</sub> = g/k."
 ]},
 { h: "Pohyb v tiažovom poli", items: [
  "Voľný pád: v = gt, h = ½gt².",
  "Zvislý vrh nahor: čas výstupu t = v₀/g, výška h<sub>max</sub> = v₀²/(2g).",
  "Vodorovný vrh z výšky h: doba pádu t = √(2h/g) nezávisí od v₀; dolet D = v₀√(2h/g).",
  "Šikmý vrh pod uhlom α: x = v₀t cos α, y = v₀t sin α − ½gt². Doba letu T = 2v₀ sin α/g, výška H = v₀² sin²α/(2g), dolet D = v₀² sin 2α/g (najväčší pri 45°)."
 ]}
],
traps: [
 "Dráha je skalár, posunutie vektor – nezamieňaj ich.",
 "Rovnomerný pohyb po kružnici má zrýchlenie (normálové).",
 "Dvojnásobná rýchlosť na tej istej kružnici znamená štvornásobné a<sub>n</sub>.",
 "V najvyššom bode šikmého vrhu je rýchlosť v₀ cos α, nie nula, a zrýchlenie je stále g."
],
examples: [
 { t: "Elektrón: r = 3,0t i − 4,0t² j + 2,0 k (m). Urči v(t).", s: [
  "Derivuj po zložkách: v = 3,0 i − 8,0t j (m/s). Konštanta 2,0 k zmizne.",
  "Zrýchlenie a = −8,0 j m/s².",
  "V čase t = 2 s: |v| = √(3² + 16²) ≈ 16 m/s." ]},
 { t: "Auto sa rozbieha z pokoja po kružnici R = 30 m, a<sub>t</sub> = 0,5 m/s². Zrýchlenie po 15 s?", s: [
  "v = a<sub>t</sub>·t = 7,5 m/s.",
  "a<sub>n</sub> = v²/R = 1,875 m/s².",
  "|a| = √(0,5² + 1,875²) ≈ 1,94 m/s².",
  "Uhol medzi a a v: tg θ = a<sub>n</sub>/a<sub>t</sub> = 3,75, θ ≈ 75°." ]},
 { t: "Rýchlosť strely z poklesu Δh na vodorovnej dĺžke Δl.", s: [
  "Čas letu t = Δl/v, pokles Δh = ½g t².",
  "Odtiaľ v = Δl·√(g/(2Δh)).",
  "Napríklad Δl = 100 m, Δh = 0,10 m dáva v ≈ 700 m/s. Dosaď hodnoty zo zadania." ]}
],
formulas: [
 { n: "Okamžitá rýchlosť a zrýchlenie", f: "v = dr/dt,  a = dv/dt", w: "z r(t) derivovaním" },
 { n: "Rovnomerne zrýchlený pohyb – rýchlosť", f: "v = v₀ + at", w: "a je konštantné" },
 { n: "Rovnomerne zrýchlený pohyb – poloha", f: "x = x₀ + v₀t + ½at²", w: "a je konštantné" },
 { n: "Vzťah bez času", f: "v² = v₀² + 2a(x − x₀)", w: "keď nepoznáš čas" },
 { n: "Tečné zrýchlenie", f: "a<sub>t</sub> = dv/dt", w: "zmena veľkosti rýchlosti" },
 { n: "Normálové zrýchlenie", f: "a<sub>n</sub> = v²/R = ω²R", w: "zmena smeru, mieri do stredu" },
 { n: "Celkové zrýchlenie", f: "a = √(a<sub>t</sub>² + a<sub>n</sub>²)", w: "krivočiary pohyb" },
 { n: "Obvodové ↔ uhlové veličiny", f: "s = Rφ,  v = ωR,  a<sub>t</sub> = εR", w: "pohyb po kružnici" },
 { n: "Rovnomerne zrýchlená rotácia", f: "ω = ω₀ + εt,  φ = φ₀ + ω₀t + ½εt²", w: "ε je konštantné" },
 { n: "Zvislý vrh – max. výška", f: "h = v₀²/(2g),  t = v₀/g", w: "vrh nahor" },
 { n: "Vodorovný vrh", f: "t = √(2h/g),  D = v₀√(2h/g)", w: "výstrel vodorovne z výšky h" },
 { n: "Šikmý vrh – dolet", f: "D = v₀² sin 2α / g", w: "dopad v rovnakej výške" },
 { n: "Šikmý vrh – výška a doba letu", f: "H = v₀² sin²α/(2g),  T = 2v₀ sin α/g", w: "dopad v rovnakej výške" },
 { n: "Medzná rýchlosť", f: "v<sub>m</sub> = g/k  (z a = g − kv)", w: "pád v odporujúcom prostredí" }
],
explain: { q: "Vysvetli spolužiakovi, prečo má auto, ktoré ide zákrutou stálou rýchlosťou, zrýchlenie, a kam toto zrýchlenie mieri.", keys: ["Rýchlosť je vektor a v zákrute sa mení jej smer", "Tečné zrýchlenie je nulové, lebo veľkosť rýchlosti sa nemení", "Normálové zrýchlenie a<sub>n</sub> = v²/R mení smer rýchlosti", "Mieri kolmo na rýchlosť, do stredu oblúka"] },
quiz: [
 { q: "Študent sedí vo vlaku idúcom stálou rýchlosťou 30 m/s. Jeho rýchlosť je…", o: ["závisí od vzťažnej sústavy", "0 m/s", "30 m/s", "nedá sa nijako určiť"], e: "Voči vlaku je to 0, voči zemi 30 m/s. Rýchlosť má zmysel len vzhľadom na zvolenú sústavu.", h: "Rýchlosť má zmysel len voči niečomu. Voči čomu ju meriaš?" },
 { q: "Bod raz obehne kružnicu s polomerom 2 m. Aká je dráha a veľkosť posunutia?", o: ["12,6 m a 0 m", "0 m a 0 m", "12,6 m a 12,6 m", "0 m a 12,6 m"], e: "Dráha je dĺžka trajektórie 2πR ≈ 12,6 m. Bod skončil tam, kde začal, takže posunutie je 0.", h: "Dráha je dĺžka celej krivky (obvod 2πR), posunutie je šípka zo začiatku na koniec. Kde bod skončil?" },
 { q: "Súradnica x(t) rastie, ale sklon grafu sa zmenšuje. Aké sú znamienka v a a?", o: ["v &gt; 0, a &lt; 0", "v &gt; 0, a &gt; 0", "v &lt; 0, a &lt; 0", "v &lt; 0, a &gt; 0"], e: "Rastúce x znamená kladnú rýchlosť. Klesajúci sklon znamená, že rýchlosť klesá, teda a &lt; 0.", h: "Rastúce x znamená kladnú rýchlosť. Ak sa sklon grafu zmenšuje, čo robí rýchlosť?" },
 { q: "Častica má polohový vektor r(t) = (t², 2t). Kam mieri jej rýchlosť v čase t = 0?", o: ["v smere osi +y", "v smere osi +x", "pod uhlom 45°", "rýchlosť je nulová"], e: "v = dr/dt = (2t, 2). V čase 0 je to (0, 2), teda čisto v smere +y.", h: "Zderivuj obe zložky polohy a dosaď t = 0." },
 { q: "Auto prechádza zákrutou s konštantnou veľkosťou rýchlosti. Aké má zrýchlenie?", o: ["len normálové", "žiadne", "len tečné", "tečné aj normálové"], e: "Veľkosť rýchlosti sa nemení, takže a<sub>t</sub> = 0. Smer sa mení, preto a<sub>n</sub> = v²/R ≠ 0.", h: "Veľkosť rýchlosti sa nemení, čo to hovorí o tečnom zrýchlení? A čo spôsobí zmena smeru?" },
 { q: "Teleso obieha po tej istej kružnici dvojnásobnou rýchlosťou. Normálové zrýchlenie bude…", o: ["štvornásobné", "rovnaké", "dvojnásobné", "polovičné"], e: "a<sub>n</sub> = v²/R, takže pri 2v je to 4-krát viac.", h: "a<sub>n</sub> = v²/R. Čo sa stane s v², keď v zdvojnásobíš?" },
 { q: "Ktorý vzťah je rozmerovo chybný?", o: ["x = x₀ + at", "x = x₀ + v₀t", "v = v₀ + at", "v² = v₀² + 2ax"], e: "Súčin at má jednotku m/s, nedá sa pripočítať k polohe v metroch.", h: "Porovnaj jednotky na oboch stranách: k metrom nesmieš pripočítať m/s." },
 { q: "Dve guľôčky vystrelíme vodorovne z rovnakej výšky rýchlosťami 5 m/s a 10 m/s. Ktorá dopadne skôr?", o: ["dopadnú naraz", "rýchlejšia", "pomalšia", "závisí od hmotnosti"], e: "Doba pádu t = √(2h/g) závisí len od výšky. Vodorovný a zvislý pohyb sú nezávislé.", h: "Zvislo je to pri oboch voľný pád z rovnakej výšky. Závisí doba pádu od vodorovnej rýchlosti?" },
 { q: "Vieme, že a(t) = 0. Čo z toho vyplýva pre polohu r(t)?", o: ["bez počiatočných podmienok ju jednoznačne neurčíme", "teleso určite stojí", "r(t) = 0", "teleso sa pohybuje po kružnici"], e: "Vyjde r = r₀ + v₀t. Bez r₀ a v₀ nevieme, či teleso stojí alebo sa pohybuje rovnomerne.", h: "Pri integrovaní pribudnú konštanty. Čo ich určí?" },
 { q: "Auto sa rozbieha z pokoja po kružnici R = 30 m s tečným zrýchlením 0,5 m/s². Aké je celkové zrýchlenie po 15 s?", o: ["1,94 m/s²", "0,50 m/s²", "1,88 m/s²", "2,38 m/s²"], e: "v = 7,5 m/s, a<sub>n</sub> = 1,875 m/s². Zložky sú kolmé: √(0,5² + 1,875²) ≈ 1,94 m/s².", b: true, h: "Najprv v = a<sub>t</sub>·t, potom a<sub>n</sub> = v²/R a nakoniec a = √(a<sub>t</sub>² + a<sub>n</sub>²)." },
 { q: "Šikmý vrh: v₀ = 20 m/s, α = 30°, g = 9,81 m/s². Aká je maximálna výška a dolet?", o: ["5,1 m a 35,3 m", "10,2 m a 40,8 m", "5,1 m a 40,8 m", "20,4 m a 35,3 m"], e: "Výška: H = v₀² sin²α/(2g) = 400·0,25/19,62 ≈ 5,1 m. Dolet: D = v₀² sin 2α/g, kde 2α = 60°, teda 400·sin 60°/9,81 ≈ 35,3 m. Hodnota 40,8 m by bola dolet pri 45°.", b: true, h: "H = v₀² sin²α/(2g), D = v₀² sin 2α/g. Pomôže sin 30° = 0,5 a sin 60° ≈ 0,866." },
 { q: "Čomu sa rovná skalárny súčin i·j jednotkových vektorov?", o: ["0", "1", "−1", "k"], e: "Vektory i a j sú na seba kolmé, cos 90° = 0. Naopak i·i = 1.", h: "i a j sú na seba kolmé. Koľko je cos 90°?" },
 { q: "Sú vektory u = 4i − 5j a v = 5i − 4j + 6k na seba kolmé?", o: ["nie, lebo u·v = 40", "áno, lebo u·v = 0", "nie, lebo u·v = −40", "nedá sa rozhodnúť"], e: "u·v = 4·5 + (−5)·(−4) + 0·6 = 40. Kolmé by boli len pri nulovom skalárnom súčine.", h: "Vynásob zodpovedajúce zložky a sčítaj. Vektor u nemá zložku k, ber ju ako 0." },
 { q: "Poloha častice je x = 4 − 27t + t³ (m, s). V ktorom čase t &gt; 0 je jej rýchlosť nulová?", o: ["t = 3 s", "t = 9 s", "t = 27 s", "nikdy"], e: "v = dx/dt = −27 + 3t². Z v = 0 vyjde t² = 9, teda t = 3 s.", h: "Zderivuj x(t) a polož v = 0." },
 { q: "Častica štartuje rýchlosťou 3,0 i m/s a má zrýchlenie (−1,0 i − 0,5 j) m/s². Akú rýchlosť má vo chvíli, keď je jej súradnica x najväčšia?", o: ["−1,5 j m/s", "nulovú", "3,0 i m/s", "−1,0 i − 0,5 j m/s"], e: "x je najväčšie, keď v<sub>x</sub> = 3 − t = 0, teda v t = 3 s. Vtedy v<sub>y</sub> = −0,5·3 = −1,5 m/s.", h: "x je najväčšie, keď sa v<sub>x</sub> vynuluje: v<sub>x</sub> = 3 − t. Potom dopočítaj v<sub>y</sub> = −0,5t." }
]
},
/* ---------------------------------- L2 ---------------------------------- */
{
id: "l2", ch: 0, title: "Dynamika", sub: "Newtonove zákony, práca a energia",
lesson: [
 { h: "1. Hmotnosť, tiaž a hybnosť", ask: { q: "Je hmotnosť astronauta na Mesiaci menšia ako na Zemi?", o: ["Nie, menšia je len jeho tiaž", "Áno, šesťkrát", "Áno, je tam takmer nulová"] }, p: [
  "Dynamika hľadá príčiny pohybu. Jej základná myšlienka: teleso samo od seba svoj pohyb nemení. Na zmenu treba silu.",
  "<b>Hmotnosť m</b> (kg) vyjadruje, ako veľmi sa teleso bráni zmene pohybu, teda jeho zotrvačnosť. Naložený vozík sa rozbieha ťažšie než prázdny. Hmotnosť je všade rovnaká, na Zemi aj na Mesiaci. <b>Tiaž (tíha) G = mg</b> je naopak sila v newtonoch, ktorou Zem teleso priťahuje, a závisí od miesta. Človek s hmotnosťou 50 kg má na Zemi tiaž asi 490 N, na Mesiaci šesťkrát menšiu.",
  "<b>Hybnosť (hybnost) p = mv</b> spája hmotnosť a rýchlosť do jednej vektorovej veličiny. Vystihuje, ako ťažko sa pohybujúce teleso zastavuje: kamión idúci 10 km/h má väčšiu hybnosť než tenisová loptička letiaca 100 km/h."
 ], c: "Prečo astronaut na Mesiaci ľahko zdvihne ťažký prístroj, ale rozhýbať ho do strany je rovnako ťažké ako na Zemi?", a: "Tiaž prístroja (mg) je na Mesiaci šesťkrát menšia, takže sa ľahšie dvíha. Hmotnosť, teda zotrvačnosť, je však rovnaká, preto ho rozhýbanie stojí rovnakú silu." },
 { h: "2. Prvý Newtonov zákon a vzťažné sústavy", ask: { q: "Autobus prudko zabrzdí a teba hodí dopredu. Aká sila ťa tlačí dopredu?", o: ["Žiadna, je to zotrvačnosť v neinerciálnej sústave", "Sila brzdenia autobusu", "Tvoja tiaž"] }, p: [
  "<b>Zákon zotrvačnosti (setrvačnosti)</b>: teleso zostáva v pokoji alebo v rovnomernom priamočiarom pohybe, kým ho výsledná sila neprinúti tento stav zmeniť. Dôležité je slovo „výsledná“. Kniha na stole má na sebe dve sily (tiaž a tlak stola), ale navzájom sa rušia.",
  "Zákon platí len v <b>inerciálnych sústavách</b>. Sú to sústavy, ktoré samy nezrýchľujú. V brzdiacom autobuse ťa hodí dopredu, hoci na teba dopredu žiadna sila nepôsobí. Autobus je v tej chvíli neinerciálna sústava. To isté platí pre kolotoč a presne vzaté aj pre Zem, lebo sa otáča. Dôkazom je Foucaultovo kyvadlo, ktorého rovina kyvu sa voči podlahe pomaly stáča.",
  "Klasická úloha: človek na váhe vo výťahu. Váha neukazuje tiaž, ale silu N, ktorou tlačí na chodidlá. Z pohybovej rovnice N − mg = ma dostaneme N = m(g + a) pri zrýchľovaní nahor a N = m(g − a) pri zrýchľovaní nadol. Pri stálej rýchlosti ukazuje normálnu hodnotu, pri voľnom páde nulu.",
  { fig: { forces: [[90, "N", 80], [270, "G", 56]], acc: 90, axes: [0, 90], alt: "Človek vo výťahu: normálová sila nahor, tiaž nadol, zrýchlenie nahor" }, cap: "Výťah zrýchľuje nahor: N je väčšie než G, rozdiel dáva zrýchlenie. Os y: N − mg = ma." }
 ], c: "Človek s hmotnosťou 70 kg stojí na váhe vo výťahu, ktorý sa rozbieha nahor so zrýchlením 2 m/s². Akú silu váha nameria?", a: "N = m(g + a) = 70·(9,81 + 2) ≈ 827 N, oproti 687 N v pokoji." },
 { h: "3. Druhý a tretí Newtonov zákon", ask: { q: "Kopneš do lopty. Kto pôsobí väčšou silou: noha na loptu, alebo lopta na nohu?", o: ["Obe sily sú rovnako veľké", "Noha na loptu", "Lopta na nohu"] }, p: [
  "<b>Zákon sily</b> hovorí, čo sila s telesom urobí: zmení jeho hybnosť.<span class=\"fm\">F = dp/dt,   pri stálej hmotnosti   F = ma</span>F je výslednica všetkých síl. Zrýchlenie má vždy smer výslednej sily, nie nutne smer pohybu. Rovnica sa volá pohybová rovnica a je to najdôležitejší vzťah mechaniky.",
  "<b>Zákon akcie a reakcie</b>: ak teleso A pôsobí silou na teleso B, pôsobí B na A rovnako veľkou silou opačného smeru. Tieto dve sily sa nikdy nerušia, lebo každá pôsobí na iné teleso. Keď kopneš do lopty, lopta pôsobí rovnakou silou na tvoju nohu. Lopta odletí, lebo má malú hmotnosť, ty nie.",
  "Častá chyba je pokladať tiaž knihy a tlak stola na knihu za akciu a reakciu. Nie sú: obe pôsobia na knihu. Reakciou na tiaž knihy je sila, ktorou kniha priťahuje Zem."
 ], c: "Na teleso s hmotnosťou 4 kg pôsobia v jednej priamke sily 10 N doprava a 2 N doľava. Aké má zrýchlenie?", a: "Výsledná sila je 8 N doprava, a = F/m = 2 m/s² doprava." },
 { h: "4. Druhy síl a ako riešiť úlohy", ask: { q: "Kam mieri normálová sila podložky?", o: ["Kolmo na podložku", "Vždy zvislo nahor", "Proti pohybu"] }, p: [
  "V úlohách sa stále opakuje päť síl. <b>Tiažová</b> G = mg mieri zvislo nadol. <b>Normálová</b> N je tlak podložky a je na ňu vždy kolmá. <b>Trecia</b> F<sub>t</sub> = f·N mieri proti pohybu, f je koeficient trenia. Kým teleso stojí, statické trenie je presne také veľké, aké treba, najviac f<sub>s</sub>N. <b>Ťahová</b> T je sila lana; ideálne lano a kladka ju prenášajú nezmenenú. <b>Pružná</b> F = −kx vracia pružinu do rovnovážnej polohy, k je tuhosť.",
  "Postup, ktorý funguje na každú úlohu: 1. nakresli teleso a všetky sily, ktoré naň pôsobia; 2. zvoľ osi, jednu v smere pohybu; 3. napíš F = ma pre každú os zvlášť; 4. vyrieš rovnice.",
  "Ukážka na naklonenej rovine s uhlom α a trením f. Os x dáme pozdĺž roviny nadol, os y kolmo na ňu. Tiaž rozložíme na mg sin α pozdĺž roviny a mg cos α kolmo. V osi y sa nič nehýbe: N = mg cos α. V osi x: mg sin α − fN = ma. Po dosadení:<span class=\"fm\">a = g(sin α − f cos α)</span>Hmotnosť sa vykrátila, takže ťažké aj ľahké teleso kĺžu rovnako. Teleso sa vôbec pohne len vtedy, keď tg α je väčší než koeficient statického trenia.",
  { fig: { slope: 30, forces: [[270, "G", 68], [120, "N", 58], [30, "Fₜ", 46]], acc: 210, axes: [210, 120], alt: "Teleso kĺže nadol po naklonenej rovine: tiaž zvislo nadol, normálová sila kolmo na rovinu, trenie pozdĺž roviny nahor" }, cap: "Kĺzanie nadol: trenie mieri po rovine nahor, proti pohybu. Os x je pozdĺž roviny nadol, os y kolmo na ňu. Tiaž treba rozložiť do oboch osí." }
 ], c: "Debnu s hmotnosťou 10 kg ťaháš po vodorovnej podlahe (f = 0,3) silou 50 N vodorovne. Aké má zrýchlenie?", a: "<b>1. Sily:</b> tiaž mg nadol, normálová N nahor, ťah F = 50 N dopredu, trenie F<sub>t</sub> dozadu. <b>2. Osi:</b> x v smere pohybu, y nahor. <b>3. Rovnice:</b> os y: N − mg = 0; os x: F − fN = ma. <b>4. Výpočet:</b> N = 10·9,81 = 98,1 N, trenie 0,3·98,1 ≈ 29,4 N, a = (50 − 29,4)/10 ≈ 2,1 m/s². Os y treba kvôli N: pri ťahu šikmo nahor by N už nebolo mg.", af: { forces: [[0, "F", 86], [180, "Fₜ", 52], [90, "N", 62], [270, "G", 62]], acc: 0, axes: [0, 90], alt: "Debna na vodorovnej podlahe: ťah doprava, trenie doľava, normálová sila nahor, tiaž nadol" }, afc: "Vektorovo: F + Fₜ + N + G = ma. Do osí: x: F − Fₜ = ma, y: N − G = 0." },
 { h: "5. Impulz sily", ask: { q: "Prečo pri doskoku pokrčíš kolená?", o: ["Predĺžiš čas dopadu, a tým zmenšíš silu", "Zmenšíš zmenu hybnosti", "Zmenšíš svoju tiaž"] }, p: [
  "Sila pôsobí vždy nejaký čas. Súčin sily a času sa volá <b>impulz sily</b> a rovná sa zmene hybnosti:<span class=\"fm\">I = ∫F dt = Δp   (pri stálej sile I = F·Δt)</span>",
  "Z toho plynie veľmi praktický záver: rovnakú zmenu hybnosti možno dosiahnuť malou silou dlho alebo veľkou silou krátko. Príklad z prednášky: auto s hmotnosťou 1000 kg zastaví z 30 m/s. Zmena hybnosti je vždy 30 000 kg·m/s. Pri brzdení 300 s stačí sila 100 N. Pri náraze trvajúcom desatinu sekundy je to 300 000 N.",
  "Preto majú autá deformačné zóny a airbagy a preto pri doskoku pokrčíš kolená: predĺžiš čas, a tým zmenšíš silu."
 ], c: "Lopta s hmotnosťou 0,5 kg priletí rýchlosťou 10 m/s a odrazí sa späť rovnakou rýchlosťou. Kontakt trval 0,02 s. Aká stredná sila pôsobila?", a: "Zmena hybnosti je 0,5·(10 − (−10)) = 10 kg·m/s (smer sa otočil!). F = 10/0,02 = 500 N." },
 { h: "6. Práca a výkon", ask: { q: "Teleso krúži na lane po kružnici. Akú prácu koná sila lana?", o: ["Nulovú, je kolmá na pohyb", "Kladnú", "Zápornú"] }, p: [
  "<b>Práca</b> je účinok sily na dráhe. Pre stálu silu a priamu dráhu:<span class=\"fm\">W = F·s·cos α</span>kde α je uhol medzi silou a posunutím. Počíta sa len zložka sily v smere pohybu. Všeobecne W = ∫F·dr. Jednotkou je joule.",
  "Tri prípady, ktoré treba vidieť: sila v smere pohybu koná kladnú prácu, sila proti pohybu (trenie) zápornú a sila kolmá na pohyb žiadnu. Preto normálová sila pri pohybe po vodorovnej podlahe prácu nekoná a preto ju nekoná ani sila, ktorá drží teleso na kružnici.",
  "<b>Výkon</b> hovorí, ako rýchlo sa práca koná: P = dW/dt. Pre teleso pohybujúce sa rýchlosťou v platí P = F·v. Jednotkou je watt. Dva výťahy môžu vykonať rovnakú prácu, ale ten, ktorý to stihne rýchlejšie, má väčší výkon."
 ], c: "Kufor ťaháš silou 100 N pod uhlom 60° k podlahe po dráhe 5 m. Akú prácu vykonáš?", a: "W = 100·5·cos 60° = 250 J." },
 { h: "7. Kinetická a potenciálna energia", ask: { q: "Výsledná sila vykoná na telese v pokoji prácu 100 J. Akú má potom kinetickú energiu?", o: ["100 J", "50 J", "Bez hmotnosti sa to nedá určiť"] }, p: [
  "<b>Kinetická energia</b> E<sub>k</sub> = ½mv² je energia pohybu. S prácou ju spája veta, ktorá ušetrí veľa počítania:<span class=\"fm\">W<sub>celk</sub> = ΔE<sub>k</sub> = ½mv₂² − ½mv₁²</span>Práca výslednej sily sa rovná zmene kinetickej energie. Nemusíš poznať silu ani dráhu, stačia rýchlosti na začiatku a na konci.",
  "Takto sa rieši príklad HRW 7.17 z prednášky: x = 3,0t − 4,0t² + 1,0t³, m = 3 kg. Derivovaním v = 3,0 − 8,0t + 3,0t², teda v(0) = 3 m/s a v(4) = 19 m/s. Práca je ½·3·(19² − 3²) = 528 J.",
  "<b>Potenciálna energia</b> je energia polohy, „uložená“ práca. V tiažovom poli E<sub>p</sub> = mgh, v stlačenej alebo natiahnutej pružine E<sub>p</sub> = ½kx². Dá sa zaviesť len pre <b>konzervatívne sily</b>, ktorých práca nezávisí od cesty, len od začiatku a konca. Tiažová, pružná a elektrostatická sila také sú. Trenie nie je: čím dlhšia cesta, tým viac energie sa premení na teplo."
 ], c: "Akú prácu treba vykonať, aby auto s hmotnosťou 1000 kg zrýchlilo z 10 m/s na 20 m/s?", a: "W = ½·1000·(20² − 10²) = 150 000 J. Všimni si, že je to trikrát viac než na rozbeh z 0 na 10 m/s." },
 { h: "8. Zákony zachovania a zrážky", ask: { q: "Kocka skĺzne bez trenia z rovnakej výšky raz po strmej, raz po miernej hladkej dráhe. Kde bude dole rýchlejšia?", o: ["Rovnako rýchla", "Po strmej", "Po miernej"] }, p: [
  "<b>Zachovanie mechanickej energie</b>: ak pôsobia len konzervatívne sily, súčet E<sub>k</sub> + E<sub>p</sub> sa nemení. Energia sa len prelieva medzi pohybovou a polohovou. Teleso pustené z výšky h dopadne rýchlosťou v = √(2gh), nech padá priamo alebo kĺže po ľubovoľne tvarovanej hladkej dráhe.",
  "Ak pôsobí trenie, mechanická energia ubúda presne o prácu trenia. Príklad HRW 8.81: kocka ide 6,0 m/s, vyjde na plošinu vyššiu o 1,1 m a tam ju brzdí trenie f = 0,60. Jamka po ceste nehrá rolu, rozhoduje len rozdiel výšok: v² = 6² − 2·9,81·1,1 = 14,4, teda v = 3,8 m/s. Túto energiu spotrebuje trenie: ½mv² = f·mg·d, odkiaľ d ≈ 1,2 m.",
  "<b>Zachovanie hybnosti</b>: ak na sústavu nepôsobia vonkajšie sily, celková hybnosť sa nemení. To platí pri každej zrážke. Pri <b>pružnej</b> zrážke sa navyše zachová kinetická energia. Pri <b>nepružnej</b> sa časť energie premení na teplo a deformáciu; pri dokonale nepružnej sa telesá spoja a idú spolu.",
  "Balistické kyvadlo spája oboje a je to typická skúšková úloha. Má dve fázy a každá má iný zákon. Náraz: guľka uviazne, je to dokonale nepružná zrážka, platí len hybnosť: mv = (m + M)V. Výkyv: už nič nenaráža, platí energia: ½(m + M)V² = (m + M)gh. Spojením v = ((m + M)/m)·√(2gh). Použiť zachovanie energie cez náraz je najčastejšia chyba; pri guľke 5 g a kyvadle 2 kg zostane po náraze len štvrť percenta pôvodnej energie."
 ], c: "Vagón s hmotnosťou 3 t ide 2 m/s, narazí do stojaceho vagóna 1 t a spoja sa. Akou rýchlosťou pokračujú?", a: "Hybnosť: 3·2 = (3 + 1)·V, teda V = 1,5 m/s." },
 { h: "9. Úlohy z cvičení: postup a trenie", ask: { q: "Minca na nakláňanej doske začne kĺzať pri uhle α. Čo z toho zistíš?", o: ["Koeficient statického trenia f<sub>s</sub> = tg α", "Hmotnosť mince", "Koeficient dynamického trenia"] }, p: [
  "V riešených príkladoch z cvičení sa opakuje jeden postup a pri otvorených úlohách sa vyžaduje: 1. zvoľ súradnicové osi, 2. nakresli a pomenuj všetky sily, 3. napíš pohybovú rovnicu vektorovo (vektory so šípkou), 4. rozpíš ju do zložiek, 5. vyrieš. Ak teleso stojí alebo ide stálou rýchlosťou, zrýchlenie je nulové a súčet síl je nula.",
  "V cvičeniach sa rozlišujú dva koeficienty trenia: <b>statický f<sub>s</sub></b> (teleso sa ešte nehýbe) a <b>dynamický f<sub>d</sub></b> (teleso už kĺže), pričom f<sub>d</sub> je menší. Minca na doske začne kĺzať pri uhle α, pre ktorý mg sin α = f<sub>s</sub> mg cos α, teda f<sub>s</sub> = tg α.",
  "Úloha HRW 6.30: kocka s tiažou G = 80 N je na naklonenej rovine s uhlom 20°, f<sub>s</sub> = 0,25, f<sub>d</sub> = 0,15. Normálová sila je vždy N = G cos α. Rozhoduje smer trenia: pôsobí vždy proti pohybu, ktorý hrozí alebo prebieha.<span class=\"fm\">a) aby kocka neskĺzla: trenie pomáha, F₁ = G(sin α − f<sub>s</sub> cos α) ≈ 8,6 N<br>b) aby sa pohla nahor: trenie bráni, F₂ = G(sin α + f<sub>s</sub> cos α) ≈ 46,2 N<br>c) aby stúpala stálou rýchlosťou: F₃ = G(sin α + f<sub>d</sub> cos α) ≈ 38,6 N</span>V bode c) sa už kocka hýbe, preto dynamický koeficient. Rozbehnúť ju je ťažšie než udržať v pohybe.",
  { fig: { slope: 20, forces: [[270, "G", 68], [110, "N", 60], [20, "F", 62, -9], [20, "Fₜ", 40, 9]], axes: [20, 110], alt: "Kocka na naklonenej rovine, ktorá chce skĺznuť: sila F aj trenie mieria po rovine nahor" }, cap: "a) Kocka chce skĺznuť nadol, preto trenie mieri nahor a pomáha sile F: F₁ + f<sub>s</sub>N = G sin α." },
  { fig: { slope: 20, forces: [[270, "G", 68], [110, "N", 60], [20, "F", 88], [200, "Fₜ", 46]], axes: [20, 110], alt: "Kocka ťahaná po naklonenej rovine nahor: sila F nahor, trenie pozdĺž roviny nadol" }, cap: "b) a c) Kocka ide (alebo sa má pohnúť) nahor, preto trenie mieri nadol: F = G sin α + f·N, s f<sub>s</sub> pri rozbehu a f<sub>d</sub> pri pohybe." },
  "Úloha HRW 7.25: kocku s hmotnosťou M spúšťame na lane nadol so zrýchlením g/4. Pohybová rovnica: Mg − T = M·g/4, takže ťahová sila je T = ¾Mg. Po poklese o d vykonalo lano prácu −¾Mgd (sila mieri proti pohybu), tiažová sila +Mgd. Súčet prác je zmena kinetickej energie: E<sub>k</sub> = ¼Mgd, odkiaľ v = √(gd/2).",
  { fig: { surface: false, forces: [[90, "T", 52], [270, "G", 74]], acc: 270, axes: [0, 270], alt: "Kocka visiaca na lane: ťahová sila lana nahor, tiaž nadol, zrýchlenie nadol" }, cap: "Kocka na lane zrýchľuje nadol, takže G je väčšie než T. Os y v smere pohybu (nadol): Mg − T = M·g/4." }
 ], c: "Kocka na naklonenej rovine stojí. Akým smerom pôsobí statické trenie a aké je veľké?", a: "Pozdĺž roviny nahor, proti hroziacemu skĺznutiu. Je presne také veľké ako zložka tiaže G sin α, najviac však f_s·N." },
 { h: "10. Úlohy z cvičení: práca a energia", ask: { q: "Guľka uviazne v kvádri. Čo sa zachová počas samotného nárazu?", o: ["Hybnosť", "Mechanická energia", "Hybnosť aj mechanická energia"] }, p: [
  "<b>Práca premennej sily</b> sa počíta integrálom po zložkách. Úloha HRW 7.31: sila F = (2x i + 3 j) N posunie časticu z polohy (2; 3) m do polohy (−4; −3) m.<span class=\"fm\">W = ∫F<sub>x</sub>dx + ∫F<sub>y</sub>dy = ∫₂⁻⁴ 2x dx + ∫₃⁻³ 3 dy = [x²] + 3[y] = (16 − 4) + 3·(−6) = −6 J</span>Každá zložka sily koná prácu len pozdĺž svojej osi. Záporný výsledok znamená, že sila pohyb celkovo brzdila.",
  "Úloha HRW 10.45: guľka s hmotnosťou 4,5 g uviazne v kvádri 2,4 kg ležiacom na podložke (f<sub>d</sub> = 0,20). Kváder sa zastaví po 1,8 m. Riešime odzadu. Po náraze brzdí kváder trenie a všetka kinetická energia sa spotrebuje: ½(m + M)V² = f<sub>d</sub>(m + M)g·d, teda V = √(2f<sub>d</sub>gd) ≈ 2,7 m/s. Pri náraze platí hybnosť: mv = (m + M)V, teda v = (2,4045/0,0045)·2,7 ≈ 1 400 m/s. Je to rovnaká schéma ako balistické kyvadlo, len energiu po náraze neodoberá výška, ale trenie.",
  "Úloha HRW 8.35: kyvadlo dĺžky L má pri výchylke θ₀ rýchlosť v₀. Výška nad najnižším bodom je L(1 − cos θ₀), takže zo zachovania energie je rýchlosť dole v = √(v₀² + 2gL(1 − cos θ₀)). Aby guľôčka vystúpila do vodorovnej polohy šnúry, treba v₀ = √(2gL cos θ₀). Aby prešla najvyšším bodom s napnutou šnúrou, musí tam mať aspoň v² = gL, z čoho v₀ = √(gL(3 + 2 cos θ₀))."
 ], c: "Sila F = 4x i (N) posunie časticu po osi x z bodu x = 0 do bodu x = 3 m. Akú prácu vykoná?", a: "W = ∫ 4x dx = 2x² = 2·9 = 18 J." },
 { h: "11. Ako vybrať postup", ask: { q: "Pýtaš sa na rýchlosť po zjazde z kopca bez trenia a čas ťa nezaujíma. Aký postup zvolíš?", o: ["Zachovanie mechanickej energie", "F = ma a kinematiku", "Zachovanie hybnosti"] }, p: [
  "Skôr než začneš počítať, pozri sa, <b>na čo sa úloha pýta</b> a čo je v zadaní. Podľa toho sa dá takmer vždy vybrať jeden zo štyroch postupov.",
  { fig: { forces: [[0, "F", 86], [180, "Fₜ", 52], [90, "N", 62], [270, "G", 62]], acc: 0, axes: [0, 90], alt: "Debna na podlahe so štyrmi silami" }, cap: "Sily: nákres, osi, F = ma po zložkách." },
  "<b>Nákres síl a F = ma.</b> Použi ho, keď sa úloha pýta na silu, zrýchlenie, ťah lana, normálovú silu alebo koeficient trenia. Poznáš ho aj podľa slov „stálou rýchlosťou“ alebo „v pokoji“, ktoré znamenajú, že súčet síl je nula. Typické situácie: naklonená rovina, výťah, lano, záves.",
  { pic: "energia", cap: "Energia: porovnaj začiatok a koniec, cestu medzi nimi netreba." },
  "<b>Energia.</b> Použi ju, keď sa pýtaš na rýchlosť po prejdení výšky alebo dráhy a nezaujíma ťa čas ani sila. V zadaní býva výška, pružina alebo otázka „akú prácu vykoná“. Bez trenia platí E<sub>k</sub> + E<sub>p</sub> = konšt., s trením sa mechanická energia zmenší o prácu trenia f·N·d.",
  { pic: "hybnost", cap: "Hybnosť: súčet hybností pred zrážkou a po nej je rovnaký." },
  "<b>Hybnosť.</b> Použi ju pri každej zrážke, uviaznutí alebo spojení telies. Ak sila pôsobí krátky čas a pýtaš sa na jej veľkosť, ide o impulz: F = Δp/Δt. Pozor: pri nepružnej zrážke sa energia nezachováva, takže energiu cez náraz nepoužívaj.",
  { pic: "kinematika", cap: "Kinematika: opis pohybu, sily sa v zadaní nespomínajú." },
  "<b>Kinematika.</b> Použi ju, keď máš polohu ako funkciu času (derivuješ) alebo zrýchlenie a počiatočné podmienky (integruješ), a pri vrhoch. Sily ani hmotnosť v zadaní vôbec nevystupujú.",
  "Niektoré úlohy spájajú dva postupy za sebou. Guľka v kvádri alebo balistické kyvadlo: najprv hybnosť pre náraz, potom energia pre to, čo nasleduje. Kocka na naklonenej rovine s otázkou na rýchlosť dole: dá sa cez sily aj cez energiu, cez energiu je to kratšie."
 ], c: "Guľka uviazne v kvádri, ktorý sa potom trením zastaví po 1,8 m. Ktoré dva postupy použiješ a v akom poradí počítaš?", a: "Hybnosť pre náraz a energiu (prácu trenia) pre brzdenie. Počíta sa odzadu: z brzdnej dráhy rýchlosť kvádra po náraze, z nej cez hybnosť rýchlosť guľky." }
],
theory: [
 { h: "Hmotnosť, hybnosť, sila", items: [
  "<b>Hmotnosť m</b> [kg] je miera zotrvačnosti. <b>Tiaž (tíha) G = mg</b> [N] je sila. Človek s hmotnosťou 50 kg má tiaž asi 490 N.",
  "<b>Hybnosť (hybnost) p = mv</b>. <b>Sila F = dp/dt</b>; pri stálej hmotnosti F = ma.",
  "Sily pôsobia poľom (gravitačná, elektrická) alebo dotykom (normálová, trecia, ťahová)."
 ]},
 { h: "Newtonove zákony", items: [
  "<b>1. zákon zotrvačnosti</b>: bez výslednej sily teleso zostáva v pokoji alebo v rovnomernom priamočiarom pohybe. Platí v inerciálnych sústavách. Neinerciálne sú napríklad kolotoč alebo rotujúca Zem (Foucaultovo kyvadlo).",
  "Váha vo výťahu: N = m(g + a) pri zrýchlení nahor, m(g − a) nadol, 0 pri voľnom páde.",
  "<b>2. zákon sily</b>: F = dp/dt = ma.",
  "<b>3. zákon akcie a reakcie</b>: sily sú rovnako veľké, opačné a pôsobia na rôzne telesá, preto sa nerušia."
 ]},
 { h: "Typy síl", items: [
  "Tiažová G = mg, normálová N (kolmo na podložku).",
  "Trecia F<sub>t</sub> = f·N, vždy proti pohybu. Statické trenie je najviac f<sub>s</sub>N.",
  "Ťahová T: ideálne lano a kladka prenášajú rovnakú silu.",
  "Pružná F = −kx (Hookov zákon).",
  "Naklonená rovina s trením, kĺzanie nadol: a = g(sin α − f cos α)."
 ]},
 { h: "Impulz, práca, výkon", items: [
  "<b>Impulz sily I = ∫F dt = Δp</b>. Rovnakú zmenu hybnosti spôsobí malá sila dlho alebo veľká krátko.",
  "<b>Práca W = ∫F·dr</b>, pre stálu silu W = F s cos α. Sila kolmá na pohyb prácu nekoná.",
  "<b>Výkon P = dW/dt = F·v</b>."
 ]},
 { h: "Energia a zákony zachovania", items: [
  "Kinetická energia E<sub>k</sub> = ½mv². Veta o práci: W<sub>celk</sub> = ΔE<sub>k</sub>.",
  "Potenciálna energia: tiažová mgh, pružnosti ½kx². Existuje len pre konzervatívne sily (tiažová, pružná, elektrostatická). Trenie je nekonzervatívne.",
  "Zachovanie mechanickej energie: ak pôsobia len konzervatívne sily, E<sub>k</sub> + E<sub>p</sub> = konšt.",
  "Zachovanie hybnosti: v izolovanej sústave je súčet hybností stály.",
  "Zrážky: pružná zachováva hybnosť aj E<sub>k</sub>, nepružná len hybnosť. Pri dokonale nepružnej sa telesá spoja."
 ]}
],
traps: [
 "Hmotnosť [kg] nie je tiaž [N].",
 "Akcia a reakcia nepôsobia na to isté teleso.",
 "Balistické kyvadlo: cez náraz platí len zachovanie hybnosti, zachovanie energie až pre výkyv.",
 "Statické trenie nie je vždy f·N, je to len jeho maximum."
],
examples: [
 { t: "Auto 1000 kg zastaví z 30 m/s a) brzdením za 300 s, b) nárazom.", s: [
  "Zmena hybnosti je v oboch prípadoch 3,0·10⁴ kg·m/s.",
  "a) F = Δp/Δt = 30 000/300 = 100 N.",
  "b) Pri náraze trvajúcom napríklad 0,1 s je F = 3·10⁵ N. Preto deformačné zóny predlžujú čas nárazu." ]},
 { t: "HRW 7.17: x = 3,0t − 4,0t² + 1,0t³, m = 3 kg. Práca sily medzi t = 0 a t = 4 s?", s: [
  "v = dx/dt = 3,0 − 8,0t + 3,0t².",
  "v(0) = 3 m/s, v(4) = 19 m/s.",
  "W = ΔE<sub>k</sub> = ½·3·(19² − 3²) = 528 J." ]},
 { t: "Balistické kyvadlo: guľka 5 g uviazne v kyvadle 2 kg, to vystúpi do výšky h.", s: [
  "Náraz – hybnosť: m v = (m + M)V.",
  "Výkyv – energia: V = √(2gh).",
  "Spolu: v = ((m + M)/m)·√(2gh) = 401·√(2gh).",
  "Pre h = 12 cm vyjde v ≈ 615 m/s. Dosaď výšku zo zadania." ]}
],
formulas: [
 { n: "Hybnosť", f: "p = mv", w: "vektor, kg·m/s" },
 { n: "Pohybová rovnica", f: "F = dp/dt = ma", w: "2. Newtonov zákon" },
 { n: "Tiaž", f: "G = mg", w: "sila v newtonoch" },
 { n: "Trecia sila", f: "F<sub>t</sub> = f·N", w: "kinetické trenie, proti pohybu" },
 { n: "Pružná sila", f: "F = −kx", w: "Hookov zákon" },
 { n: "Naklonená rovina s trením", f: "a = g(sin α − f cos α)", w: "kĺzanie nadol" },
 { n: "Váha vo výťahu", f: "N = m(g ± a)", w: "+ nahor, − nadol" },
 { n: "Impulz sily", f: "I = ∫F dt = Δp", w: "časový účinok sily" },
 { n: "Práca", f: "W = ∫F·dr = F s cos α", w: "dráhový účinok sily" },
 { n: "Výkon", f: "P = dW/dt = F·v", w: "rýchlosť konania práce" },
 { n: "Kinetická energia a veta o práci", f: "E<sub>k</sub> = ½mv²,  W = ΔE<sub>k</sub>", w: "práca výslednej sily" },
 { n: "Potenciálna energia", f: "E<sub>p</sub> = mgh,  E<sub>p</sub> = ½kx²", w: "tiažová, pružnosti" },
 { n: "Zachovanie mechanickej energie", f: "E<sub>k</sub> + E<sub>p</sub> = konšt.", w: "len konzervatívne sily" },
 { n: "Zachovanie hybnosti", f: "m₁v₁ + m₂v₂ = konšt.", w: "izolovaná sústava, zrážky" },
 { n: "Balistické kyvadlo", f: "v = ((m + M)/m)·√(2gh)", w: "hybnosť cez náraz, energia cez výkyv" }
],
explain: { q: "Vysvetli, prečo sa sily akcie a reakcie nikdy navzájom nerušia a prečo lopta po kopnutí odletí, hoci rovnako veľká sila pôsobí aj na tvoju nohu.", keys: ["Akcia a reakcia sú rovnako veľké a opačného smeru", "Pôsobia na dve rôzne telesá, preto ich nesčítavame", "Rušiť sa môžu len sily pôsobiace na to isté teleso", "Zrýchlenie je a = F/m: lopta má malú hmotnosť, preto veľké zrýchlenie"] },
quiz: [
 { q: "Aká je tiaž človeka s hmotnosťou 50 kg?", o: ["490 N", "50 kg", "50 N", "4,9 N"], e: "G = mg = 50·9,81 ≈ 490 N. Kilogram je jednotka hmotnosti, nie sily.", h: "Tiaž je sila G = mg v newtonoch, g ≈ 9,81 m/s²." },
 { q: "Výťah zrýchľuje smerom nahor so zrýchlením a. Čo ukazuje váha pod človekom?", o: ["m(g + a)", "mg", "m(g − a)", "0"], e: "N − mg = ma, takže N = m(g + a). Pri zrýchlení nadol by to bolo m(g − a).", h: "Váha ukazuje normálovú silu N. Napíš N − mg = ma pre os mieriacu nahor." },
 { q: "Sily akcie a reakcie…", o: ["pôsobia na dve rôzne telesá", "sa navzájom rušia", "existujú len pri dotyku", "sú rôzne veľké"], e: "Sú rovnako veľké a opačné, ale každá pôsobí na iné teleso, preto sa nerušia.", h: "Na ktoré teleso pôsobí akcia a na ktoré reakcia?" },
 { q: "Auto s hmotnosťou 1000 kg zabrzdí z 30 m/s do zastavenia za 300 s. Aká je stredná brzdná sila?", o: ["100 N", "10 N", "1 000 N", "30 000 N"], e: "F = Δp/Δt = 30 000/300 = 100 N. Číslo 30 000 je impulz v N·s.", h: "Impulz sily: F·Δt = Δp = m·Δv." },
 { q: "Teleso kĺže po naklonenej rovine s uhlom 30° a koeficientom trenia 0,20. Aké má zrýchlenie?", o: ["3,2 m/s²", "4,9 m/s²", "6,6 m/s²", "1,7 m/s²"], e: "a = g(sin α − f cos α) = 9,81·(0,5 − 0,173) ≈ 3,2 m/s². Bez trenia by to bolo 4,9 m/s².", h: "Pozdĺž roviny: a = g(sin α − f cos α). sin 30° = 0,5, cos 30° ≈ 0,866." },
 { q: "HRW 7.17: x = 3,0t − 4,0t² + 1,0t³, m = 3 kg. Akú prácu vykoná sila medzi t = 0 a t = 4 s?", o: ["528 J", "0 J", "352 J", "1 056 J"], e: "v(0) = 3 m/s, v(4) = 19 m/s. W = ½·3·(361 − 9) = 528 J.", h: "Veta o práci: W = ½m(v₂² − v₁²). Zderivuj x(t) a dosaď t = 0 a t = 4 s." },
 { q: "Ktorá sila nie je konzervatívna?", o: ["trecia", "tiažová", "pružná", "elektrostatická"], e: "Práca trenia závisí od dĺžky cesty a po uzavretej dráhe nie je nulová.", h: "Konzervatívna sila má prácu nezávislú od cesty. Pri ktorej sile záleží na dĺžke cesty?" },
 { q: "Pružná čelná zrážka dvoch rovnakých gúľ, druhá pred zrážkou stojí. Čo sa stane?", o: ["prvá zastane, druhá odletí rýchlosťou v", "obe pôjdu rýchlosťou v/2", "obe zastanú", "prvá sa odrazí späť rýchlosťou v"], e: "Zachová sa hybnosť aj kinetická energia, gule si rýchlosti vymenia. Rýchlosť v/2 by vyšla pri dokonale nepružnej zrážke.", h: "Pri pružnej zrážke dvoch rovnakých telies sa ich rýchlosti vymenia." },
 { q: "Kocka ide rýchlosťou 6,0 m/s, vyjde na plošinu vyššiu o 1,1 m a tam ju brzdí trenie f = 0,60. Akú dráhu po plošine prejde?", o: ["1,2 m", "0,6 m", "3,1 m", "1,8 m"], e: "v² = 36 − 2·9,81·1,1 = 14,4 m²/s². Potom d = v²/(2fg) ≈ 1,2 m. Hodnota 3,1 m ignoruje stúpanie.", b: true, h: "Najprv energia: v² = v₀² − 2gh. Potom trenie spotrebuje kinetickú energiu: ½mv² = f·mg·d." },
 { q: "Guľka narazí do balistického kyvadla a uviazne v ňom. Čo sa počas nárazu zachováva?", o: ["hybnosť", "mechanická energia", "hybnosť aj mechanická energia", "nič z toho"], e: "Náraz je dokonale nepružná zrážka: hybnosť sa zachová, väčšina kinetickej energie sa premení na teplo.", b: true, h: "Pri nepružnej zrážke sa časť energie mení na teplo a deformáciu. Ktorá veličina sa zachová aj tak?" },
 { q: "Guľka 5 g uviazne v kyvadle 2 kg, ktoré vystúpi o 12 cm. Aká bola rýchlosť guľky?", o: ["615 m/s", "1,5 m/s", "307 m/s", "1 230 m/s"], e: "V = √(2·9,81·0,12) ≈ 1,53 m/s je rýchlosť po náraze. v = (2,005/0,005)·1,53 ≈ 615 m/s.", b: true, h: "Najprv rýchlosť kyvadla po náraze z energie: V = √(2gh). Potom hybnosť: mv = (m + M)V." },
 { q: "Podložku s mincou pomaly nakláňame. Minca začne kĺzať pri uhle α. Aký je koeficient statického trenia?", o: ["f<sub>s</sub> = tg α", "f<sub>s</sub> = sin α", "f<sub>s</sub> = cos α", "f<sub>s</sub> = 1/tg α"], e: "Na hranici skĺznutia mg sin α = f<sub>s</sub> mg cos α, teda f<sub>s</sub> = tg α.", h: "Na hranici kĺzania platí mg sin α = f<sub>s</sub>·mg cos α." },
 { q: "Kocka s tiažou G leží na naklonenej rovine (uhol α, statické trenie f<sub>s</sub>). Aká najmenšia sila rovnobežná s rovinou zabráni jej skĺznutiu?", o: ["G(sin α − f<sub>s</sub> cos α)", "G(sin α + f<sub>s</sub> cos α)", "G sin α", "G f<sub>s</sub> cos α"], e: "Kocka chce skĺznuť nadol, trenie preto mieri nahor a pomáha: F + f<sub>s</sub>G cos α = G sin α.", h: "Sila pomáha treniu udržať kocku, trenie teda mieri nahor po rovine. Súčet síl pozdĺž roviny je nula." },
 { q: "Akou silou pozdĺž naklonenej roviny treba kocku s tiažou G ťahať, aby stúpala stálou rýchlosťou?", o: ["G(sin α + f<sub>d</sub> cos α)", "G(sin α − f<sub>d</sub> cos α)", "G(sin α + f<sub>s</sub> cos α)", "G sin α"], e: "Kocka sa hýbe nahor, takže dynamické trenie mieri nadol a pridáva sa k zložke tiaže. Stála rýchlosť znamená nulovú výslednicu.", h: "Pri stúpaní mieri trenie nadol po rovine a kocka sa hýbe, takže ide o dynamické trenie." },
 { q: "Sila F = (2x i + 3 j) N posunie časticu z bodu (2; 3) m do bodu (−4; −3) m. Akú prácu vykoná?", o: ["−6 J", "+6 J", "+30 J", "−30 J"], e: "W = ∫2x dx + ∫3 dy = (16 − 4) + 3·(−6) = 12 − 18 = −6 J.", h: "Počítaj zvlášť ∫2x dx od 2 po −4 a ∫3 dy od 3 po −3, potom sčítaj." },
 { q: "Kocku s hmotnosťou M spúšťame na lane nadol so zrýchlením g/4. Aká je ťahová sila lana?", o: ["¾ Mg", "¼ Mg", "Mg", "5/4 Mg"], e: "Mg − T = M·g/4, teda T = ¾ Mg. Lano je napínané menej než v pokoji.", h: "Pohybová rovnica pre os nadol: Mg − T = M·g/4." },
 { q: "Kocku M spúšťame na lane so zrýchlením g/4. Akú kinetickú energiu má po poklese o d?", o: ["¼ Mgd", "Mgd", "¾ Mgd", "½ Mgd"], e: "Tiaž vykoná +Mgd, lano −¾Mgd. Súčet ¼Mgd je kinetická energia. Rovnako: výsledná sila ¼Mg krát dráha d.", h: "Veta o práci: E<sub>k</sub> = (výsledná sila)·d = (Mg − T)·d." },
 { q: "Guľka uviazne v kvádri ležiacom na podložke (f<sub>d</sub> = 0,20), ktorý sa potom zastaví po 1,8 m. Aká bola rýchlosť kvádra hneď po náraze?", o: ["asi 2,7 m/s", "asi 7,1 m/s", "asi 0,6 m/s", "asi 1 400 m/s"], e: "Trenie spotrebuje celú kinetickú energiu: V = √(2f<sub>d</sub>gd) = √(2·0,2·9,81·1,8) ≈ 2,7 m/s. Hodnota 1 400 m/s je rýchlosť guľky pred nárazom.", h: "Po náraze brzdí kváder len trenie: ½V² = f<sub>d</sub>·g·d." },
 { q: "Kocka skĺzne bez trenia z kopca vysokého 5 m. Pýtame sa na jej rýchlosť dole. Ktorý postup je najkratší?", o: ["zachovanie mechanickej energie", "nákres síl a F = ma", "zachovanie hybnosti", "impulz sily"], e: "Poznáme výšku a pýtame sa na rýchlosť, čas ani sila nás nezaujímajú: mgh = ½mv².", h: "Pýtaš sa na rýchlosť po zmene výšky, bez času a bez sily." },
 { q: "Dva vozíky sa zrazia a spoja. Pýtame sa na ich spoločnú rýchlosť. Ktorý zákon použiješ?", o: ["zachovanie hybnosti", "zachovanie mechanickej energie", "F = ma pre každý vozík", "vetu o práci a kinetickej energii"], e: "Pri zrážke sa vždy zachováva hybnosť. Mechanická energia sa pri nepružnej zrážke nezachováva.", h: "Počas zrážky pôsobia len vnútorné sily medzi vozíkmi." },
 { q: "Debnu ťaháme lanom po podlahe s trením. Pýtame sa na jej zrýchlenie. Ktorý postup použiješ?", o: ["nákres síl a F = ma po zložkách", "zachovanie mechanickej energie", "zachovanie hybnosti", "rovnice šikmého vrhu"], e: "Pýtame sa na zrýchlenie a v zadaní sú sily: nakresli ich, zvoľ osi a napíš F = ma pre každú os.", h: "Pýtaš sa na zrýchlenie a pôsobí viac síl vrátane trenia." },
 { q: "V zadaní je, že teleso sa pohybuje stálou rýchlosťou po priamke. Čo z toho hneď vyplýva?", o: ["výsledná sila je nulová", "nepôsobí naň žiadna sila", "trenie je nulové", "tiaž sa rovná treniu"], e: "Stála rýchlosť znamená nulové zrýchlenie, teda súčet všetkých síl je nula. Jednotlivé sily pôsobiť môžu.", h: "Stála rýchlosť znamená a = 0. Čo z toho vyplýva podľa F = ma?" },
 { q: "Poloha je daná ako x(t). Pýtame sa na rýchlosť v danom čase. Ktorý postup použiješ?", o: ["derivovanie polohy podľa času", "nákres síl a F = ma", "zachovanie energie", "zachovanie hybnosti"], e: "Je to prvá úloha kinematiky: v = dx/dt. Sily ani hmotnosť netreba.", h: "Rýchlosť je zmena polohy v čase." },
 { q: "Lopta narazí do steny. Poznáme zmenu jej rýchlosti a trvanie nárazu, pýtame sa na strednú silu. Čo použiješ?", o: ["impulz sily: F = Δp/Δt", "zachovanie mechanickej energie", "vzorec pre dolet vrhu", "Steinerovu vetu"], e: "Sila pôsobiaca krátky čas sa určí zo zmeny hybnosti: F·Δt = Δp.", h: "Sila krát čas sa rovná zmene hybnosti." }
]
},
/* ---------------------------------- L3 ---------------------------------- */
{
id: "l3", ch: 0, title: "Mechanika tuhého telesa", sub: "ťažisko, rotácia, moment zotrvačnosti",
lesson: [
 { h: "1. Od bodu k telesu", ask: { q: "Ako sa pohybuje valiace sa koleso?", o: ["Posúva sa a zároveň otáča", "Len sa otáča", "Len sa posúva"] }, p: [
  "Hmotný bod sa vie len posúvať. Skutočné teleso sa vie aj otáčať a na otáčanie model bodu nestačí. Preto zavádzame <b>tuhé teleso</b>: sústavu bodov, ktorých vzájomné vzdialenosti sa nemenia. Teleso sa teda nedeformuje, nech naň pôsobia akékoľvek sily.",
  "Pohyb tuhého telesa sa dá vždy rozložiť na dva jednoduché. Pri <b>translácii</b> (posuvnom pohybe) majú všetky body v každom okamihu rovnakú rýchlosť, napríklad kabína výťahu. Pri <b>rotácii</b> okolo pevnej osi opisujú body kružnice okolo osi a všetky majú rovnakú uhlovú rýchlosť ω, napríklad dvere alebo koleso na stojane. Valiace sa koleso robí oboje naraz."
 ], c: "Kabínka ruského kolesa zostáva stále zvislo. Koná transláciu, alebo rotáciu?", a: "Transláciu. Všetky jej body sa pohybujú po rovnakých kružniciach s rovnakou rýchlosťou a kabínka sa nenatáča. Translácia nemusí byť priamočiara." },
 { h: "2. Ťažisko", ask: { q: "Kde je ťažisko obruče?", o: ["V jej strede, kde nie je žiadny materiál", "Na obvode", "Obruč ťažisko nemá"] }, p: [
  "<b>Ťažisko (těžiště)</b>, presnejšie hmotný stred, je bod, ktorý zastupuje celé teleso pri posuvnom pohybe. Jeho poloha je vážený priemer polôh všetkých častí, kde váhou je hmotnosť:<span class=\"fm\">r<sub>T</sub> = (m₁r₁ + m₂r₂ + …) / (m₁ + m₂ + …)</span>",
  "Ťažisko sa pohybuje tak, akoby v ňom bola sústredená celá hmotnosť a pôsobila naň výslednica vonkajších síl. Hodený kľúč sa vo vzduchu divoko točí, ale jeho ťažisko letí po obyčajnej parabole.",
  "Ťažisko nemusí ležať v materiáli telesa: pri obruči je v strede, kde nič nie je. Od polohy ťažiska závisí stabilita. Teleso zavesené v ťažisku zostane v akejkoľvek polohe. Teleso stojace na podložke sa prevráti, keď zvislica z ťažiska vyjde mimo podstavy."
 ], c: "Na ľahkej tyči sú závažia 2 kg v bode x = 0 a 6 kg v bode x = 2 m. Kde je ťažisko?", a: "x = (2·0 + 6·2)/(2 + 6) = 1,5 m, teda bližšie k ťažšiemu závažiu." },
 { h: "3. Moment sily", ask: { q: "Kde treba tlačiť na dvere, aby sa otvorili najľahšie?", o: ["Čo najďalej od pántov, kolmo na dvere", "Pri pántoch", "Kdekoľvek, záleží len na veľkosti sily"] }, p: [
  "Pri otáčaní nerozhoduje len veľkosť sily, ale aj to, kde a ako pôsobí. Dvere otvoríš ľahko pri kľučke, ťažko pri pántoch a vôbec nie, keď tlačíš smerom do pántov.",
  "Túto skúsenosť vyjadruje <b>moment sily</b>:<span class=\"fm\">M = r × F,   veľkosť   M = F·d = r·F·sin α</span>d je <b>rameno sily</b>, kolmá vzdialenosť osi od priamky, na ktorej sila leží. Jednotkou je N·m. Sila, ktorej priamka prechádza osou, má rameno nulové a teleso neroztočí.",
  { pic: "moment", cap: "Rameno d je kolmá vzdialenosť osi od priamky, na ktorej sila leží." },
  "Preto má kľúč na matice dlhú rukoväť: rovnakou silou vyvinieš väčší moment."
 ], c: "Na kľúč dlhý 0,25 m tlačíš kolmo silou 80 N. Aký je moment sily? A aký by bol, keby si tlačil pod uhlom 30° ku kľúču?", a: "Kolmo: M = 80·0,25 = 20 N·m. Pod uhlom 30°: 20·sin 30° = 10 N·m." },
 { h: "4. Moment zotrvačnosti", ask: { q: "Obruč a plný disk majú rovnakú hmotnosť aj polomer. Ktorý sa ťažšie roztočí?", o: ["Obruč", "Disk", "Oba rovnako"] }, p: [
  "Pri posuvnom pohybe sa teleso bráni zrýchleniu svojou hmotnosťou. Pri otáčaní hrá túto úlohu <b>moment zotrvačnosti (moment setrvačnosti) J</b>. Nezávisí len od hmotnosti, ale aj od toho, ako ďaleko od osi je hmota rozložená:<span class=\"fm\">J = Σ m<sub>i</sub> r<sub>i</sub>² = ∫ r² dm</span>",
  "Vzdialenosť je v druhej mocnine, takže hmota ďaleko od osi sa počíta oveľa viac. Obruč a plný disk s rovnakou hmotnosťou a polomerom sa neroztáčajú rovnako ľahko: obruč má všetku hmotu na okraji (J = mR²), disk ju má aj pri strede (J = ½mR²).",
  "Hodnoty, ktoré sa oplatí vedieť: tenká tyč okolo stredu mL²/12, okolo konca mL²/3, obruč mR², plný valec alebo disk ½mR², plná guľa (2/5)mR².",
  "J závisí od polohy osi. Ak poznáš J<sub>T</sub> pre os cez ťažisko, pre rovnobežnú os posunutú o d platí <b>Steinerova veta</b>:<span class=\"fm\">J = J<sub>T</sub> + m·d²</span>Kontrola na tyči: os na konci je posunutá o L/2, takže J = mL²/12 + m(L/2)² = mL²/3. Sedí. Z vety tiež vidno, že najmenší moment zotrvačnosti má teleso vždy okolo osi cez ťažisko.",
  { pic: "steiner", cap: "Os na konci tyče je od osi cez ťažisko posunutá o d = L/2." }
 ], c: "Aký je moment zotrvačnosti plného disku (m, R) okolo osi kolmej na disk, ktorá prechádza jeho okrajom?", a: "Steinerova veta s d = R: J = ½mR² + mR² = (3/2)mR²." },
 { h: "5. Pohybová rovnica rotácie a analógie", ask: { q: "Čo hrá pri otáčaní úlohu hmotnosti?", o: ["Moment zotrvačnosti J", "Moment sily M", "Uhlová rýchlosť ω"] }, p: [
  "Otáčavý pohyb má svoju obdobu druhého Newtonovho zákona:<span class=\"fm\">M = J·ε</span>Výsledný moment síl spôsobí uhlové zrýchlenie, a to tým menšie, čím väčší je moment zotrvačnosti.",
  "Celá rotácia sa dá naučiť ako preklad z posuvného pohybu. Dráha x sa mení na uhol φ, rýchlosť v na ω, zrýchlenie a na ε, hmotnosť m na J, sila F na moment M a hybnosť p na moment hybnosti L. Vzorce si zachovajú tvar: F = ma sa zmení na M = Jε, ½mv² na ½Jω², p = mv na L = Jω.",
  "Príklad: na disk s hmotnosťou 2 kg a polomerom 0,1 m pôsobí moment 0,5 N·m. J = ½·2·0,1² = 0,01 kg·m², takže ε = M/J = 50 rad/s². Za 2 s sa roztočí na ω = εt = 100 rad/s."
 ], c: "Zotrvačník s J = 2 kg·m² sa má roztočiť z pokoja na 30 rad/s za 6 s. Aký stály moment treba?", a: "ε = 30/6 = 5 rad/s², M = Jε = 10 N·m." },
 { h: "6. Energia rotácie a valenie", ask: { q: "Rovnaký valec sa raz valí z kopca a raz z rovnakej výšky kĺže bez trenia a bez otáčania. Kedy je dole rýchlejší?", o: ["Keď kĺže", "Keď sa valí", "Oba prípady rovnako"] }, p: [
  "Otáčajúce sa teleso má kinetickú energiu E<sub>k</sub> = ½Jω², aj keď jeho ťažisko stojí.",
  "Keď sa teleso zároveň posúva aj otáča, sčítajú sa obe časti. To je <b>Königova veta</b>:<span class=\"fm\">E<sub>k</sub> = ½mv<sub>T</sub>² + ½J<sub>T</sub>ω²</span>Prvý člen je pohyb ťažiska, druhý otáčanie okolo ťažiska. Pri <b>valení bez kĺzania</b> sú obe rýchlosti zviazané podmienkou v<sub>T</sub> = ωR, lebo bod dotyku s podložkou sa v danom okamihu nehýbe.",
  { pic: "valenie", cap: "Valenie bez kĺzania: bod dotyku stojí, ťažisko má v, vrchný bod 2v." },
  "Príklad: plný valec sa valí z výšky h. Zachovanie energie: mgh = ½mv² + ½·(½mR²)·(v/R)² = ¾mv². Odtiaľ v = √(4gh/3). Keby kĺzal bez otáčania, bolo by to √(2gh), teda viac. Časť energie totiž „zhltne“ rotácia.",
  "Čím väčší je podiel J/(mR²), tým viac energie ide do rotácie a tým pomalšie teleso dole dorazí. Poradie pri pretekoch zo svahu je preto guľa (0,4), valec (0,5), obruč (1). Hmotnosť ani polomer na výsledok nemajú vplyv."
 ], c: "Obruč sa valí bez kĺzania rýchlosťou v. Aká je jej celková kinetická energia?", a: "Posuv ½mv², rotácia ½·mR²·(v/R)² = ½mv². Spolu mv², teda dvakrát viac než pri kĺzaní." },
 { h: "7. Moment hybnosti a jeho zachovanie", ask: { q: "Krasokorčuliarka pri piruete pritiahne ruky k telu. Čo sa stane?", o: ["Točí sa rýchlejšie", "Točí sa pomalšie", "Nič sa nezmení"] }, p: [
  "<b>Moment hybnosti</b> L = Jω je rotačná obdoba hybnosti. Mení ho len moment vonkajších síl: M = dL/dt.",
  "Ak je moment vonkajších síl nulový, moment hybnosti sa zachováva:<span class=\"fm\">J₁ω₁ = J₂ω₂</span>Na rozdiel od hmotnosti sa moment zotrvačnosti dá meniť za pohybu, stačí premiestniť časti tela. Krasokorčuliarka pritiahne ruky k telu, zmenší J a jej otáčanie sa zrýchli. Skokan do vody sa zbalí do klbka, aby stihol saltá, a pred dopadom sa vystrie, aby rotáciu spomalil.",
  "Príklad: J klesne zo 4,0 na 1,6 kg·m² pri počiatočnej ω = 2,0 rad/s. Nová uhlová rýchlosť je 4,0·2,0/1,6 = 5,0 rad/s. Zaujímavé je, že kinetická energia pritom vzrástla z 8 J na 20 J. Rozdiel dodali svaly, ktoré ťahali ruky dovnútra. Zachováva sa moment hybnosti, nie energia."
 ], c: "Človek na otočnej stoličke má J = 6 kg·m² a točí sa 1 rad/s. Pritiahne činky a J klesne na 2 kg·m². Aká bude uhlová rýchlosť?", a: "6·1 = 2·ω, teda ω = 3 rad/s." }
],
theory: [
 { h: "Tuhé teleso a ťažisko", items: [
  "Tuhé teleso má pevné vzdialenosti medzi bodmi. Okrem posúvania sa môže otáčať.",
  "<b>Ťažisko (těžiště)</b>: r<sub>T</sub> = Σm<sub>i</sub>r<sub>i</sub> / Σm<sub>i</sub>. Pohybuje sa, akoby v ňom bola celá hmotnosť. Nemusí ležať v telese (obruč).",
  "Stabilita: v stabilnej polohe ťažisko pri vychýlení stúpa, v labilnej klesá."
 ]},
 { h: "Translácia a rotácia", items: [
  "<b>Translácia</b>: všetky body majú rovnakú rýchlosť.",
  "<b>Rotácia okolo pevnej osi</b>: všetky body majú rovnaké ω a ε, rýchlosť bodu v = ωr.",
  "<b>Moment sily</b> M = r × F, veľkosť M = F·d, kde d je rameno sily. Sila mieriaca do osi má nulový moment.",
  "<b>Pohybová rovnica rotácie: M = Jε</b> (obdoba F = ma)."
 ]},
 { h: "Moment zotrvačnosti", items: [
  "<b>J = Σm<sub>i</sub>r<sub>i</sub>² = ∫r² dm</b> [kg·m²]. Závisí od rozloženia hmoty a od polohy osi.",
  "Tyč okolo stredu: mL²/12. Tyč okolo konca: mL²/3. Obruč: mR². Plný valec alebo disk: ½mR². Plná guľa: (2/5)mR².",
  "<b>Steinerova veta: J = J<sub>T</sub> + md²</b> pre os rovnobežnú s osou cez ťažisko vo vzdialenosti d."
 ]},
 { h: "Energia a moment hybnosti", items: [
  "Kinetická energia rotácie E<sub>k</sub> = ½Jω².",
  "<b>Königova veta</b>: E<sub>k</sub> = ½mv<sub>T</sub>² + ½J<sub>T</sub>ω² (posuv ťažiska + rotácia okolo neho).",
  "Valenie bez kĺzania: v<sub>T</sub> = ωR.",
  "<b>Moment hybnosti L = Jω</b>. Bez vonkajšieho momentu síl platí J₁ω₁ = J₂ω₂ – krasokorčuliarka pritiahne ruky a zrýchli rotáciu."
 ]},
 { h: "Analógie posuv ↔ rotácia", items: [
  "x, v, a ↔ φ, ω, ε",
  "m ↔ J, F ↔ M, p = mv ↔ L = Jω",
  "F = ma ↔ M = Jε, ½mv² ↔ ½Jω²"
 ]}
],
traps: [
 "J nie je vlastnosť samotného telesa, mení sa s osou otáčania.",
 "Keď korčuliarka pritiahne ruky, L sa zachová, ale kinetická energia vzrastie (prácu konajú svaly).",
 "Pri valení zo svahu vyhrá teleso s najmenším J/(mR²): guľa, potom valec, potom obruč. Nezáleží na hmotnosti ani polomere."
],
examples: [
 { t: "Plný valec sa valí bez kĺzania z výšky h = 1,0 m. Rýchlosť dole?", s: [
  "mgh = ½mv² + ½·(½mR²)·(v/R)² = ¾mv².",
  "v = √(4gh/3) ≈ 3,6 m/s.",
  "Pri kĺzaní bez rotácie by to bolo √(2gh) ≈ 4,4 m/s." ]},
 { t: "Krasokorčuliarka: J₁ = 4,0 kg·m², ω₁ = 2,0 rad/s, pritiahne ruky na J₂ = 1,6 kg·m².", s: [
  "J₁ω₁ = J₂ω₂, teda ω₂ = 8,0/1,6 = 5,0 rad/s.",
  "Energia: z ½·4·4 = 8 J vzrastie na ½·1,6·25 = 20 J." ]}
],
formulas: [
 { n: "Ťažisko", f: "r<sub>T</sub> = Σm<sub>i</sub>r<sub>i</sub> / Σm<sub>i</sub>", w: "sústava bodov" },
 { n: "Moment sily", f: "M = r × F,  M = F·d", w: "otáčavý účinok sily" },
 { n: "Pohybová rovnica rotácie", f: "M = Jε", w: "rotácia okolo pevnej osi" },
 { n: "Moment zotrvačnosti", f: "J = Σm<sub>i</sub>r<sub>i</sub>² = ∫r² dm", w: "definícia" },
 { n: "J tyče (stred / koniec)", f: "mL²/12  /  mL²/3", w: "os kolmá na tyč" },
 { n: "J obruče, disku, gule", f: "mR²,  ½mR²,  (2/5)mR²", w: "os cez ťažisko" },
 { n: "Steinerova veta", f: "J = J<sub>T</sub> + md²", w: "rovnobežne posunutá os" },
 { n: "Kinetická energia rotácie", f: "E<sub>k</sub> = ½Jω²", w: "rotácia okolo pevnej osi" },
 { n: "Königova veta", f: "E<sub>k</sub> = ½mv<sub>T</sub>² + ½J<sub>T</sub>ω²", w: "valenie, všeobecný rovinný pohyb" },
 { n: "Valenie bez kĺzania", f: "v<sub>T</sub> = ωR", w: "bod dotyku stojí" },
 { n: "Moment hybnosti", f: "L = Jω,  M = dL/dt", w: "rotácia" },
 { n: "Zachovanie momentu hybnosti", f: "J₁ω₁ = J₂ω₂", w: "nulový vonkajší moment síl" }
],
explain: { q: "Vysvetli, prečo plný valec, ktorý sa valí z kopca, príde dole pomalšie, než keby z rovnakej výšky bez trenia kĺzal.", keys: ["Potenciálna energia mgh sa mení na kinetickú", "Pri valení sa kinetická energia delí na posuvnú ½mv² a rotačnú ½Jω²", "Podmienka valenia v = ωR zviaže obe časti", "Časť energie ide do rotácie, na posuvný pohyb ostane menej"] },
quiz: [
 { q: "Aký je moment zotrvačnosti tenkej tyče okolo osi kolmej na tyč cez jej stred?", o: ["mL²/12", "mL²", "mL²/3", "½mL²"], e: "mL²/12 platí pre os cez stred. mL²/3 je os na konci tyče.", h: "Patrí medzi hodnoty, ktoré sa oplatí vedieť naspamäť: tyč okolo stredu." },
 { q: "Ako dostaneš moment zotrvačnosti tyče okolo jej konca pomocou Steinerovej vety?", o: ["mL²/12 + m(L/2)²", "mL²/12 + mL²", "mL²/12 − m(L/2)²", "m(L/2)²"], e: "Os je posunutá o d = L/2: J = mL²/12 + mL²/4 = mL²/3.", h: "Steinerova veta: J = J<sub>T</sub> + m·d², kde d je vzdialenosť osi od ťažiska." },
 { q: "Sila 20 N pôsobí kolmo na rameno dlhé 0,5 m. Aký je moment sily?", o: ["10 N·m", "40 N·m", "5 N·m", "0 N·m"], e: "M = F·d = 20·0,5 = 10 N·m.", h: "M = F·d, sila je kolmá na rameno." },
 { q: "Krasokorčuliarka zmenší svoj moment zotrvačnosti na polovicu. Čo sa stane?", o: ["ω aj kinetická energia sa zdvojnásobia", "ω sa zdvojnásobí, energia sa nezmení", "ω aj energia klesnú na polovicu", "ω aj energia vzrastú 4-krát"], e: "L = Jω sa zachová, takže ω je 2-krát väčšia. E<sub>k</sub> = L²/(2J) je pri polovičnom J dvojnásobná.", h: "Zachovanie momentu hybnosti J₁ω₁ = J₂ω₂, potom E<sub>k</sub> = ½Jω² = ½Lω." },
 { q: "Plný disk sa valí bez kĺzania rýchlosťou v. Aká je jeho celková kinetická energia?", o: ["¾mv²", "½mv²", "mv²", "¼mv²"], e: "½mv² za posuv a ½·(½mR²)·(v/R)² = ¼mv² za rotáciu.", h: "Königova veta: ½mv² + ½Jω², pre disk J = ½mR² a ω = v/R." },
 { q: "Guľa, plný valec a obruč sa valia z rovnakej výšky. Ktoré teleso bude dole prvé?", o: ["guľa", "valec", "obruč", "všetky naraz"], e: "Najmenší podiel J/(mR²) má guľa (0,4), takže najmenej energie ide do rotácie.", h: "Čím menší je podiel J/(mR²), tým menej energie ide do rotácie. Porovnaj guľu (2/5), valec (1/2) a obruč (1)." },
 { q: "Teleso 1 kg je v bode x = 0 a teleso 3 kg v bode x = 4 m. Kde je ťažisko?", o: ["x = 3 m", "x = 1 m", "x = 2 m", "x = 4 m"], e: "x<sub>T</sub> = (1·0 + 3·4)/4 = 3 m. Ťažisko je bližšie k ťažšiemu telesu.", h: "Vážený priemer polôh: x<sub>T</sub> = (m₁x₁ + m₂x₂)/(m₁ + m₂)." },
 { q: "Na disk s hmotnosťou 2 kg a polomerom 0,1 m pôsobí moment 0,5 N·m. Aké je uhlové zrýchlenie?", o: ["50 rad/s²", "25 rad/s²", "100 rad/s²", "5 rad/s²"], e: "J = ½·2·0,1² = 0,01 kg·m². ε = M/J = 50 rad/s².", h: "Najprv J = ½mR², potom ε = M/J." },
 { q: "Plný valec sa valí bez kĺzania z výšky 1,0 m. Akú rýchlosť má dole?", o: ["3,6 m/s", "4,4 m/s", "3,1 m/s", "2,2 m/s"], e: "mgh = ¾mv², teda v = √(4gh/3) ≈ 3,6 m/s. 4,4 m/s by vyšlo pre kĺzanie bez rotácie.", b: true, h: "Pre valec mgh = ¾mv², teda v = √(4gh/3)." },
 { q: "Sila mieri presne do osi otáčania. Aký je jej moment?", o: ["nulový", "maximálny", "rovný F·r", "závisí od veľkosti sily"], e: "Rameno sily je nulové (r je rovnobežné s F), preto M = 0.", b: true, h: "Aké rameno má sila, ktorej priamka prechádza osou?" }
]
},
/* ---------------------------------- L4 ---------------------------------- */
{
id: "l4", ch: 0, title: "Gravitačné a tiažové pole", sub: "gravitačný zákon, gravitačné a tiažové zrýchlenie",
lesson: [
 { h: "1. Newtonov gravitačný zákon", ask: { q: "Zem priťahuje jablko silou 1 N. Akou silou priťahuje jablko Zem?", o: ["Tiež 1 N", "Oveľa menšou", "Žiadnou"] }, p: [
  "Gravitácia je vlastnosť všetkých telies s hmotnosťou: navzájom sa priťahujú. Pre dve častice s hmotnosťami m₁ a m₂ vo vzdialenosti r platí:<span class=\"fm\">F = G·m₁m₂/r²,   G = 6,67·10⁻¹¹ N·m²/kg²</span>",
  "Sila je vždy príťažlivá, leží na spojnici oboch telies a obe telesá priťahuje rovnako veľkou silou (akcia a reakcia). Zem priťahuje jablko presne takou silou ako jablko Zem.",
  "Dve veci si treba všimnúť. Konštanta G je nesmierne malá, preto gravitáciu medzi bežnými predmetmi necítime; prejaví sa, až keď je aspoň jedno teleso obrovské. A sila klesá s druhou mocninou vzdialenosti: dvakrát ďalej znamená štyrikrát menšiu silu, trikrát ďalej deväťkrát menšiu."
 ], c: "Dve gule s hmotnosťou 100 kg majú stredy 1 m od seba. Akou silou sa priťahujú?", a: "F = 6,67·10⁻¹¹·100·100/1² = 6,67·10⁻⁷ N. To je menej než tiaž zrnka piesku." },
 { h: "2. Šupkový teorém", ask: { q: "Odkiaľ meriaš vzdialenosť r, keď počítaš gravitačnú silu Zeme na teleso pri povrchu?", o: ["Od stredu Zeme", "Od povrchu Zeme", "Od najbližšieho bodu Zeme"] }, p: [
  "Gravitačný zákon platí pre častice. Zem je však obrovská guľa, tak odkiaľ merať vzdialenosť? Odpoveď dáva <b>šupkový (slupkový) teorém</b>, ktorý dokázal Newton.",
  "Jeho prvá časť: homogénna guľová šupka priťahuje teleso mimo nej presne tak, akoby celá jej hmotnosť bola v strede. Zem si môžeme predstaviť ako sústavu sústredných šupiek, takže navonok pôsobí ako jeden hmotný bod v strede. Preto do vzorca dosadzujeme vzdialenosť od <b>stredu</b> Zeme, nie výšku nad povrchom.",
  "Druhá časť: na teleso vnútri šupky pôsobí nulová výsledná sila. Bližšia časť šupky ťahá silnejšie, ale je jej málo. Vzdialenejšia ťahá slabšie, ale je jej viac. Presne sa to vyruší.",
  { pic: "supka", cap: "Šupkový teorém: mimo šupky pôsobí ako bod v strede, vnútri je sila nulová." }
 ], c: "Družica je vo výške 6 370 km nad povrchom Zeme (polomer Zeme je tiež 6 370 km). Koľkokrát je gravitačná sila menšia než na povrchu?", a: "Vzdialenosť od stredu je dvojnásobná (2R), sila je teda štyrikrát menšia." },
 { h: "3. Gravitačné zrýchlenie", ask: { q: "Prečo padá kladivo a pierko vo vákuu rovnako rýchlo?", o: ["Gravitačné zrýchlenie nezávisí od hmotnosti padajúceho telesa", "Vo vákuu nepôsobí gravitácia", "Na pierko pôsobí väčšia sila"] }, p: [
  "Teleso s hmotnosťou m na povrchu Zeme priťahuje sila F = GMm/R². Podľa druhého Newtonovho zákona je F = m·a<sub>g</sub>. Hmotnosť telesa sa vykráti a zostane:<span class=\"fm\">a<sub>g</sub> = GM/R²</span>",
  "To je dôvod, prečo všetky telesá padajú rovnako rýchlo: zrýchlenie od hmotnosti padajúceho telesa nezávisí. Po dosadení M = 5,98·10²⁴ kg a R = 6,37·10⁶ m vyjde a<sub>g</sub> ≈ 9,83 m/s².",
  "Vo výške h nad povrchom je vzdialenosť od stredu R + h, takže a<sub>g</sub>(h) = GM/(R + h)². S výškou klesá, ale pomaly. Na Evereste je 9,80 m/s², vo výške Medzinárodnej vesmírnej stanice (400 km) stále 8,7 m/s². Astronauti sa teda nevznášajú preto, že by tam gravitácia nebola. Vznášajú sa, lebo stanica aj oni neustále voľne padajú okolo Zeme.",
  { pic: "vyska", cap: "Do vzorca patrí vzdialenosť od stredu Zeme, teda R + h." }
 ], c: "V akej výške nad povrchom klesne gravitačné zrýchlenie na štvrtinu?", a: "Vzdialenosť od stredu musí byť dvojnásobná, teda R + h = 2R a h = R ≈ 6 370 km." },
 { h: "4. Gravitačné a tiažové zrýchlenie nie sú to isté", ask: { q: "Kde na Zemi nameriaš najväčšie tiažové zrýchlenie?", o: ["Na póloch", "Na rovníku", "Všade rovnaké"] }, p: [
  "<b>Gravitačné zrýchlenie</b> a<sub>g</sub> je to, čo by sme vypočítali pre dokonalú, nehybnú, homogénnu guľu. <b>Tiažové zrýchlenie</b> g je to, čo naozaj nameriame, keď pustíme teleso. HRW uvádza tri dôvody, prečo sa líšia.",
  "1. <b>Zem rotuje.</b> Teleso na rovníku obieha po kružnici a časť gravitačnej sily sa spotrebuje na to, aby ho na nej udržala. Pre voľný pád zostane g = a<sub>g</sub> − ω²R. Člen ω²R je asi 0,034 m/s². Na póloch teleso neobieha, takže tam tento rozdiel nie je.",
  "2. <b>Zem nie je guľa.</b> Je na póloch sploštená, takže na póle si bližšie k stredu a gravitácia je tam silnejšia. 3. <b>Zem nie je homogénna.</b> Hustota hornín sa miesto od miesta líši.",
  "Výsledok: g je najväčšie na póloch (asi 9,83 m/s²) a najmenšie na rovníku (asi 9,78 m/s²). Tiažová sila mg, ktorú meria váha, je teda výslednica gravitačnej sily a vplyvu rotácie. Konštanta G sa pritom nemení nikde, je univerzálna."
 ], c: "Kde by si na váhe nameral väčšiu tiaž, na rovníku alebo na póle, a prečo?", a: "Na póle. Nepôsobí tam vplyv rotácie Zeme a zároveň si bližšie k jej stredu." }
],
theory: [
 { h: "Gravitačný zákon", items: [
  "<b>F = G·m₁m₂/r²</b>, G = 6,67·10⁻¹¹ N·m²/kg². Sila je vždy príťažlivá a leží na spojnici telies.",
  "r je vzdialenosť stredov, nie výška nad povrchom."
 ]},
 { h: "Šupkový (slupkový) teorém", items: [
  "Homogénna guľová šupka priťahuje teleso mimo nej tak, akoby celá jej hmotnosť bola v strede.",
  "Na teleso vnútri šupky pôsobí nulová výsledná sila.",
  "Preto môžeme Zem navonok nahradiť hmotným bodom v jej strede."
 ]},
 { h: "Gravitačné zrýchlenie", items: [
  "Na povrchu: <b>a<sub>g</sub> = GM/R²</b> ≈ 9,83 m/s².",
  "Vo výške h: a<sub>g</sub> = GM/(R + h)². Vo výške ISS (400 km) je to stále asi 8,7 m/s².",
  "Astronauti sú v beztiažovom stave, pretože spolu so stanicou voľne padajú, nie preto, že by tam gravitácia chýbala."
 ]},
 { h: "Gravitačné a<sub>g</sub> a tiažové g", items: [
  "Namerané g sa líši od a<sub>g</sub> z troch dôvodov: Zem rotuje, nie je presná guľa a nie je homogénna.",
  "Na rovníku: g = a<sub>g</sub> − ω²R, pričom ω²R ≈ 0,034 m/s².",
  "g je najväčšie na póloch (≈ 9,83 m/s²) a najmenšie na rovníku (≈ 9,78 m/s²)."
 ]}
],
traps: [
 "G je univerzálna konštanta, g je miestne zrýchlenie.",
 "Dvojnásobná vzdialenosť od stredu znamená štvrtinovú silu. Výška h = R je už vzdialenosť 2R.",
 "Vnútri šupky je sila nulová, vnútri plnej homogénnej gule rastie úmerne r."
],
examples: [
 { t: "V akej výške klesne a<sub>g</sub> na polovicu hodnoty na povrchu?", s: [
  "GM/(R + h)² = ½·GM/R².",
  "(R + h) = √2·R, teda h = (√2 − 1)R ≈ 0,414R.",
  "Pre Zem je to asi 2 640 km." ]}
],
formulas: [
 { n: "Newtonov gravitačný zákon", f: "F = G·m₁m₂/r²", w: "r je vzdialenosť stredov" },
 { n: "Gravitačná konštanta", f: "G = 6,67·10⁻¹¹ N·m²/kg²", w: "konštanta" },
 { n: "Gravitačné zrýchlenie na povrchu", f: "a<sub>g</sub> = GM/R²", w: "nerotujúca guľová Zem" },
 { n: "Gravitačné zrýchlenie vo výške h", f: "a<sub>g</sub>(h) = GM/(R + h)²", w: "nad povrchom" },
 { n: "Tiažové zrýchlenie na rovníku", f: "g = a<sub>g</sub> − ω²R", w: "vplyv rotácie Zeme" },
 { n: "Zem – hmotnosť a polomer", f: "M = 5,98·10²⁴ kg,  R = 6,37·10⁶ m", w: "číselné úlohy" }
],
explain: { q: "Vysvetli, prečo sa namerané tiažové zrýchlenie g líši od gravitačného a<sub>g</sub> a kde na Zemi je g najväčšie.", keys: ["a<sub>g</sub> = GM/R² platí pre nehybnú homogénnu guľu", "Zem rotuje: na rovníku sa časť sily spotrebuje na pohyb po kružnici (ω²R)", "Zem je na póloch sploštená, póly sú bližšie k stredu", "Zem nie je homogénna", "g je najväčšie na póloch a najmenšie na rovníku"] },
quiz: [
 { q: "Vzdialenosť stredov dvoch telies sa zdvojnásobí. Gravitačná sila bude…", o: ["štvrtinová", "polovičná", "dvojnásobná", "štvornásobná"], e: "F je úmerná 1/r², pri 2r je to 1/4.", h: "F = Gm₁m₂/r². Čo urobí zdvojnásobenie r s členom 1/r²?" },
 { q: "Aké je gravitačné zrýchlenie a<sub>g</sub> na povrchu Zeme podľa HRW?", o: ["9,83 m/s²", "9,78 m/s²", "9,81 m/s²", "10,0 m/s²"], e: "a<sub>g</sub> = GM/R² ≈ 9,83 m/s². Hodnota 9,78 m/s² je tiažové g na rovníku.", h: "a<sub>g</sub> = GM/R² vychádza o niečo viac než bežne používaných 9,81 m/s²." },
 { q: "Aké je gravitačné zrýchlenie vo výške rovnej polomeru Zeme (h = R)?", o: ["asi 2,45 m/s²", "asi 9,8 m/s²", "asi 4,9 m/s²", "nulové"], e: "Vzdialenosť od stredu je 2R, zrýchlenie je štvrtinové.", h: "Vo výške h = R je vzdialenosť od stredu 2R. Ako sa zmení 1/r²?" },
 { q: "Teleso je vnútri homogénnej guľovej šupky. Aká gravitačná sila naň od šupky pôsobí?", o: ["nulová", "smerom do stredu", "smerom k najbližšej stene", "odpudivá"], e: "Podľa šupkového teorému sa príspevky všetkých častí šupky vyrušia.", h: "Druhá časť šupkového teorému: bližšia časť ťahá silnejšie, ale je jej menej." },
 { q: "Prečo sa namerané g líši od gravitačného a<sub>g</sub>?", o: ["rotácia Zeme, jej sploštenie a nehomogenita", "len kvôli rotácii Zeme", "lebo G sa mení so zemepisnou šírkou", "len kvôli atmosfére"], e: "HRW uvádza tri dôvody: Zem rotuje, nie je guľa a nie je homogénna.", h: "HRW uvádza tri dôvody. Ktorá odpoveď obsahuje všetky?" },
 { q: "O koľko je na rovníku g menšie než a<sub>g</sub> vplyvom rotácie Zeme?", o: ["asi 0,034 m/s²", "asi 0,34 m/s²", "asi 0,0034 m/s²", "asi 3,4 m/s²"], e: "ω²R = (7,27·10⁻⁵)²·6,37·10⁶ ≈ 0,034 m/s².", h: "Rozdiel je ω²R, kde ω = 2π/(24 h) ≈ 7,3·10⁻⁵ rad/s a R ≈ 6,4·10⁶ m." },
 { q: "Kde na Zemi je tiažové zrýchlenie najväčšie?", o: ["na póloch", "na rovníku", "všade rovnaké", "na vrchole Everestu"], e: "Na póloch nepôsobí odstredivé zrýchlenie a sú bližšie k stredu Zeme.", h: "Na póloch sa nič nespotrebuje na obeh a póly sú bližšie k stredu Zeme." },
 { q: "Prečo je astronaut na ISS v beztiažovom stave?", o: ["voľne padá spolu so stanicou", "gravitácia je tam takmer nulová", "je mimo atmosféry", "stanica rotuje okolo vlastnej osi"], e: "Vo výške 400 km je a<sub>g</sub> ešte asi 8,7 m/s². Stanica aj astronaut sú v neustálom voľnom páde.", h: "Gravitácia vo výške 400 km je stále asi 8,7 m/s². Čo teda robí stanica aj astronaut?" },
 { q: "Z g = 9,81 m/s² a R = 6,37·10⁶ m vypočítaj hmotnosť Zeme.", o: ["5,97·10²⁴ kg", "9,4·10¹⁷ kg", "6,0·10²⁰ kg", "3,8·10³¹ kg"], e: "M = gR²/G = 9,81·(6,37·10⁶)²/6,67·10⁻¹¹ ≈ 5,97·10²⁴ kg.", b: true, h: "Z g = GM/R² vyjadri M = gR²/G." },
 { q: "V akej výške nad povrchom klesne a<sub>g</sub> na polovicu?", o: ["0,414 R", "R", "R/2", "2 R"], e: "(R + h)² = 2R², teda h = (√2 − 1)R ≈ 0,414 R.", b: true, h: "Polovica znamená (R/r)² = ½, teda r = √2·R. Výška je r − R." }
]
},
/* ---------------------------------- L5 ---------------------------------- */
{
id: "l5", ch: 0, title: "Elektrický náboj a pole", sub: "Coulombov zákon, intenzita, dipól",
lesson: [
 { h: "1. Elektrický náboj", ask: { q: "Môže mať teleso náboj rovný 1,5-násobku náboja elektrónu?", o: ["Nie, náboj je vždy celý násobok e", "Áno, náboj je spojitý", "Áno, ak je kladný"] }, p: [
  "<b>Elektrický náboj</b> je vlastnosť častíc, podobne ako hmotnosť. Na rozdiel od hmotnosti má dva druhy, kladný a záporný. Súhlasné náboje sa odpudzujú, opačné priťahujú. Kladný náboj nesú protóny, záporný elektróny.",
  "Náboj je <b>kvantovaný</b>: nedá sa deliť donekonečna. Najmenší možný je elementárny náboj e = 1,602·10⁻¹⁹ C a každý náboj je jeho celý násobok, Q = n·e. Náboj 2,4·10⁻¹⁹ C preto nemôže existovať, lebo je to jeden a pol elementárneho náboja.",
  "Platí <b>zákon zachovania náboja</b>: náboj nevzniká ani nezaniká, len sa presúva. Keď trieš balónik o vlasy, elektróny prejdú z vlasov na balónik. Balónik získa záporný náboj, vlasy rovnako veľký kladný. To je <b>zelektrovanie</b>.",
  "Podľa toho, ako ľahko sa v nich náboj pohybuje, delíme látky na <b>vodiče</b> (kovy, majú voľné elektróny), <b>izolanty</b> (sklo, plast) a <b>polovodiče</b> (kremík)."
 ], c: "Teleso má náboj −3,2·10⁻¹⁸ C. Koľko elektrónov má navyše?", a: "n = 3,2·10⁻¹⁸ / 1,602·10⁻¹⁹ ≈ 20 elektrónov." },
 { h: "2. Coulombov zákon", ask: { q: "Elektrón a protón v atóme vodíka: ktorá sila medzi nimi je väčšia?", o: ["Elektrická, asi 10³⁹-krát", "Gravitačná", "Sú porovnateľné"] }, p: [
  "Silu medzi dvoma bodovými nábojmi udáva <b>Coulombov zákon</b>:<span class=\"fm\">F = k·|Q₁Q₂|/r²,   k = 1/(4πε₀) ≈ 8,99·10⁹ N·m²/C²</span>ε₀ = 8,854·10⁻¹² C²/(N·m²) je permitivita vákua. Sila leží na spojnici nábojov; smer určíš podľa znamienok.",
  "Zákon má rovnaký tvar ako gravitačný: súčin „nábojov“ delený druhou mocninou vzdialenosti. Rozdiely sú dva. Elektrická sila môže aj odpudzovať. A je neporovnateľne silnejšia.",
  "Príklad z prednášky to ukazuje: elektrón a protón v atóme vodíka sú od seba 0,53·10⁻¹⁰ m. Elektrická sila medzi nimi je 8,2·10⁻⁸ N, gravitačná 3,6·10⁻⁴⁷ N. Pomer je asi 2·10³⁹. V mikrosvete preto gravitáciu vôbec neuvažujeme. V bežnom živote elektrickú silu necítime len preto, že telesá majú kladného a záporného náboja rovnako."
 ], c: "Dva náboje 1 μC sú od seba 1 m. Akou silou na seba pôsobia?", a: "F = 8,99·10⁹·(10⁻⁶)²/1² ≈ 9·10⁻³ N, teda 9 mN." },
 { h: "3. Princíp superpozície", ask: { q: "Kladné náboje Q a 4Q sú od seba L. Kde medzi nimi je bod, v ktorom na tretí náboj nepôsobí sila?", o: ["Bližšie k menšiemu náboju Q", "Presne v strede", "Bližšie k väčšiemu náboju 4Q"] }, p: [
  "Keď je nábojov viac, každá dvojica na seba pôsobí tak, akoby ostatné neexistovali. Výsledná sila na jeden náboj je <b>vektorový súčet</b> síl od všetkých ostatných. Slovo vektorový je dôležité: sily sa nesčítavajú ako čísla, treba brať do úvahy ich smer.",
  "Typická úloha z prednášky: kladné náboje Q₁ a Q₂ sú vo vzdialenosti L. Kam medzi ne umiestniť tretí náboj, aby naň pôsobila nulová sila? Sily od oboch musia byť rovnako veľké a opačné. Ak je tretí náboj vo vzdialenosti x od Q₁:<span class=\"fm\">Q₁/x² = Q₂/(L − x)²   →   x = L·√Q₁ / (√Q₁ + √Q₂)</span>",
  "Tretí náboj sa z rovnice vykrátil, takže výsledok nezávisí od jeho veľkosti ani znamienka. Bod leží vždy bližšie k menšiemu náboju. Pre Q₂ = 4Q₁ vyjde x = L/3. Pri dvoch nábojoch s opačnými znamienkami by taký bod ležal mimo úsečky, na strane menšieho náboja.",
  { pic: "superpozicia", cap: "Tretí náboj je bližšie k menšiemu náboju, kde sa obe sily vyrovnajú." }
 ], c: "Náboje +Q a +9Q sú 40 cm od seba. Kde medzi nimi je nulová sila na tretí náboj?", a: "x = 40·1/(1 + 3) = 10 cm od menšieho náboja +Q." },
 { h: "4. Intenzita elektrického poľa", ask: { q: "Skúšobný náboj zdvojnásobíš. Čo sa stane s intenzitou poľa v tom istom bode?", o: ["Nezmení sa", "Zdvojnásobí sa", "Klesne na polovicu"] }, p: [
  "Ako vie jeden náboj o druhom, keď sa nedotýkajú? Predstavujeme si, že každý náboj okolo seba vytvára <b>elektrické pole</b> a to potom pôsobí na iné náboje. Pole existuje aj vtedy, keď v ňom žiadny ďalší náboj nie je.",
  "Pole meriame malým kladným skúšobným nábojom Q₀. <b>Intenzita</b> je sila pripadajúca na jednotkový náboj:<span class=\"fm\">E = F/Q₀   (jednotka N/C = V/m)</span>Je to vektor a je vlastnosťou poľa, nie skúšobného náboja: dvojnásobný skúšobný náboj cíti dvojnásobnú silu, podiel je rovnaký.",
  "Pre bodový náboj Q z Coulombovho zákona vyjde E = Q/(4πε₀r²). Smer je od kladného náboja a ku zápornému, teda tam, kam by sa pohol kladný skúšobný náboj. Pre viac nábojov sa intenzity vektorovo sčítajú.",
  "Pole kreslíme <b>siločiarami (siločáry)</b>. Začínajú na kladných nábojoch a končia na záporných. Dotyčnica k siločiare udáva smer E. Kde sú husté, je pole silné. Nikdy sa nepretínajú, lebo v jednom bode nemôže mať pole dva smery.",
  { pic: "silociary", cap: "Siločiary ukazujú, kam by sa pohol kladný skúšobný náboj." }
 ], c: "Na náboj 2 μC pôsobí v istom bode sila 0,01 N. Aká je tam intenzita poľa?", a: "E = F/Q = 0,01/2·10⁻⁶ = 5 000 N/C." },
 { h: "5. Dipól a spojite rozložený náboj", ask: { q: "Ďaleko od dipólu: slabne jeho pole rýchlejšie, alebo pomalšie než pole jedného náboja?", o: ["Rýchlejšie, ako 1/r³", "Pomalšie", "Rovnako, ako 1/r²"] }, p: [
  "<b>Elektrický dipól</b> sú dva rovnako veľké opačné náboje +Q a −Q vo vzdialenosti d. Opisuje ho <b>dipólový moment</b> p = Q·d, vektor mieriaci od záporného ku kladnému náboju. Dipólom je napríklad molekula vody.",
  "Ďaleko od dipólu sa polia oboch nábojov takmer vyrušia, lebo sú skoro na tom istom mieste. Zostane len malý zvyšok, ktorý na osi dipólu klesá ako E = p/(2πε₀z³). Pole dipólu teda slabne s treťou mocninou vzdialenosti, rýchlejšie než pole jedného náboja.",
  "Skutočné nabité telesá nemajú náboj v bodoch, ale rozložený spojite. Vtedy teleso rozdelíme na malé kúsky s nábojom dQ, pre každý napíšeme pole bodového náboja a všetko (vektorovo) sčítame integrálom. Rozloženie opisujeme hustotou: dĺžkovou λ = dQ/dl (C/m) pre vlákna, plošnou σ = dQ/dS (C/m²) pre plochy a objemovou ρ = dQ/dV (C/m³) pre telesá."
 ], c: "Tyč dlhá 2 m nesie rovnomerne rozložený náboj 6 μC. Aká je jej dĺžková hustota náboja?", a: "λ = Q/l = 3 μC/m." },
 { h: "6. Náboj v elektrickom poli", ask: { q: "Elektrón vletí do homogénneho poľa kolmo na siločiary. Po akej dráhe letí?", o: ["Po parabole, ako pri vodorovnom vrhu", "Po priamke", "Po kružnici"] }, p: [
  "Druhá úloha je opačná: pole poznáme a pýtame sa, čo urobí s nábojom, ktorý doň vložíme. Odpoveď je jednoduchá:<span class=\"fm\">F = Q·E</span>Kladný náboj je ťahaný v smere E, záporný proti nemu.",
  "V <b>homogénnom poli</b> (všade rovnaké E, napríklad medzi dvoma nabitými doskami) je sila stála, takže aj zrýchlenie a = QE/m je stále. Pohyb náboja je potom presnou obdobou vrhu v tiažovom poli, len namiesto g vystupuje QE/m.",
  "Na tom funguje atramentová tlačiareň. Nabitá kvapka vletí rýchlosťou v medzi dosky dĺžky L. Vodorovne letí rovnomerne, takže medzi doskami strávi čas t = L/v. Zvislo ju pole zrýchľuje, vychýli sa o y = ½at² = QEL²/(2mv²). Nábojom kvapky sa riadi, kam na papier dopadne."
 ], c: "Elektrón (m = 9,11·10⁻³¹ kg) je v poli 1 000 N/C. Aké má zrýchlenie a ktorým smerom?", a: "a = eE/m = 1,602·10⁻¹⁶/9,11·10⁻³¹ ≈ 1,76·10¹⁴ m/s², proti smeru intenzity, lebo má záporný náboj." },
 { h: "7. Dipól v elektrickom poli", ask: { q: "Dipól vložíš šikmo do homogénneho poľa. Posunie sa?", o: ["Nie, len sa natáča do smeru poľa", "Áno, v smere poľa", "Áno, proti poľu"] }, p: [
  "Vložme dipól do homogénneho poľa. Na kladný náboj pôsobí sila QE v smere poľa, na záporný rovnako veľká proti nemu. <b>Výsledná sila je nulová</b>, dipól sa ako celok nikam neposunie.",
  "Sily však nepôsobia v jednom bode, tvoria dvojicu, ktorá dipól otáča. <b>Moment</b> je M = p × E, s veľkosťou pE sin θ, a snaží sa natočiť dipól do smeru poľa. Potenciálna energia dipólu je E<sub>p</sub> = −p·E = −pE cos θ; najnižšia je, keď p mieri v smere E.",
  { pic: "dipol", cap: "Dvojica rovnako veľkých opačných síl dipól neposunie, len ho otočí do smeru poľa." },
  "Toto využíva mikrovlnná rúra. Molekuly vody sú dipóly. Rúra vytvára pole, ktoré mení smer miliardy ráz za sekundu, a molekuly sa ho snažia nasledovať. Pri tom do seba narážajú a ich neusporiadaný pohyb je teplo. Preto sa ohreje jedlo obsahujúce vodu, ale suchý tanier nie."
 ], c: "Dipól s momentom p je v homogénnom poli E natočený kolmo na pole. Aká sila a aký moment naň pôsobia?", a: "Sila je nulová. Moment je najväčší možný: M = pE sin 90° = pE." },
 { h: "8. Úloha z cvičenia: náboje vo štvorci", ask: { q: "V protiľahlých vrcholoch štvorca sú rovnaké náboje Q₁. Aké znamienko musia mať náboje Q₂ v zvyšných vrcholoch, aby bola sila na Q₁ nulová?", o: ["Opačné ako Q₁", "Rovnaké ako Q₁", "Na znamienku nezáleží"] }, p: [
  "Úloha HRW 22.19: v dvoch protiľahlých vrcholoch štvorca so stranou a sú náboje Q₁, v zvyšných dvoch náboje Q₂. Aký musí byť vzťah medzi nimi, aby bola výsledná sila na každý náboj Q₁ nulová?",
  "Na jeden náboj Q₁ pôsobia tri sily. Druhý náboj Q₁ je na uhlopriečke vo vzdialenosti a√2 a odpudzuje ho silou kQ₁²/(2a²) pozdĺž uhlopriečky. Dva náboje Q₂ sú vo vzdialenosti a, každý pôsobí silou kQ₁Q₂/a² pozdĺž strany. Tieto dve sily sú na seba kolmé, ich výslednica mieri tiež po uhlopriečke a má veľkosť √2·kQ₁Q₂/a².",
  { pic: "stvorec", cap: "Na Q₁ pôsobí odpudivá sila po uhlopriečke a dve príťažlivé pozdĺž strán." },
  "Sily sa vyrušia, ak Q₁/2 + √2·Q₂ = 0:<span class=\"fm\">Q₁ = −2√2·Q₂</span>Znamienko mínus hovorí, že Q₂ musí Q₁ priťahovať, teda mať opačné znamienko. Aby boli v rovnováhe všetky štyri náboje naraz, muselo by zároveň platiť Q₂ = −2√2·Q₁, čo sa s prvou podmienkou nedá splniť. Taká hodnota neexistuje."
 ], c: "Prečo výslednica síl od dvoch nábojov Q₂ mieri po uhlopriečke štvorca?", a: "Obe sily sú rovnako veľké a navzájom kolmé (pozdĺž dvoch strán), takže ich vektorový súčet leží presne medzi nimi, teda na uhlopriečke. Veľkosť je √2-násobok jednej sily." }
],
theory: [
 { h: "Elektrický náboj", items: [
  "Dva druhy náboja: súhlasné sa odpudzujú, opačné priťahujú.",
  "<b>Elementárny náboj e = 1,602·10⁻¹⁹ C</b>. Náboj je kvantovaný: Q = n·e.",
  "Zákon zachovania náboja: v izolovanej sústave je celkový náboj stály.",
  "Vodiče majú voľné nosiče náboja, izolanty nie, polovodiče sú medzi nimi.",
  "Zelektrovanie je prenos elektrónov z jedného telesa na druhé."
 ]},
 { h: "Coulombov zákon a superpozícia", items: [
  "<b>F = k·|Q₁Q₂|/r²</b>, k = 1/(4πε₀) ≈ 8,99·10⁹ N·m²/C², ε₀ = 8,854·10⁻¹² C²/(N·m²).",
  "Atóm vodíka: elektrická sila ≈ 8,2·10⁻⁸ N, gravitačná ≈ 3,6·10⁻⁴⁷ N, pomer ≈ 2·10³⁹.",
  "<b>Princíp superpozície</b>: výsledná sila je vektorový súčet síl od jednotlivých nábojov."
 ]},
 { h: "Intenzita elektrického poľa", items: [
  "<b>E = F/Q₀</b> [N/C = V/m]. Nezávisí od skúšobného náboja.",
  "Bodový náboj: E = Q/(4πε₀r²), smer od kladného a ku zápornému náboju.",
  "<b>Siločiary</b> začínajú na kladných a končia na záporných nábojoch, dotyčnica udáva smer E, hustota veľkosť. Nikdy sa nepretínajú.",
  "Spojitý náboj: dĺžková hustota λ [C/m], plošná σ [C/m²], objemová ρ [C/m³]."
 ]},
 { h: "Dipól", items: [
  "Dva náboje +Q a −Q vo vzdialenosti d. <b>Dipólový moment p = Qd</b>, mieri od − k +.",
  "Na osi ďaleko od dipólu: E = p/(2πε₀z³), klesá s 1/r³.",
  "V homogénnom poli je výsledná sila nulová, ale pôsobí moment <b>M = p × E</b>, ktorý dipól natáča do smeru poľa. Energia E<sub>p</sub> = −p·E.",
  "Mikrovlnná rúra: striedavé pole otáča dipólové molekuly vody, ich zrážky dávajú teplo."
 ]},
 { h: "Náboj v poli", items: [
  "<b>F = QE</b>. Elektrón sa pohybuje proti smeru E.",
  "V homogénnom poli je zrýchlenie a = QE/m stále, pohyb je obdobou vrhu.",
  "Atramentová tlačiareň: vychýlenie kvapky y = QEL²/(2mv²)."
 ]}
],
traps: [
 "Náboj, ktorý nie je celým násobkom e, neexistuje.",
 "Sily aj intenzity sčítavaj ako vektory, nie ako čísla.",
 "Dipól v homogénnom poli: sila nulová, moment nenulový."
],
examples: [
 { t: "Dva kladné náboje Q₁ a Q₂ sú vo vzdialenosti L. Kam medzi ne dať tretí náboj, aby naň pôsobila nulová sila?", s: [
  "Sily od oboch nábojov musia byť rovnako veľké: Q₁/x² = Q₂/(L − x)².",
  "x = L·√Q₁/(√Q₁ + √Q₂), merané od Q₁.",
  "Výsledok nezávisí od veľkosti ani znamienka tretieho náboja. Pre Q₂ = 4Q₁ vyjde x = L/3." ]},
 { t: "Atóm vodíka, r = 0,53·10⁻¹⁰ m: porovnaj elektrickú a gravitačnú silu.", s: [
  "F<sub>e</sub> = 8,99·10⁹·(1,602·10⁻¹⁹)²/(0,53·10⁻¹⁰)² ≈ 8,2·10⁻⁸ N.",
  "F<sub>g</sub> = 6,67·10⁻¹¹·9,11·10⁻³¹·1,67·10⁻²⁷/(0,53·10⁻¹⁰)² ≈ 3,6·10⁻⁴⁷ N.",
  "Pomer ≈ 2,3·10³⁹." ]}
],
formulas: [
 { n: "Kvantovanie náboja", f: "Q = n·e,  e = 1,602·10⁻¹⁹ C", w: "každý náboj" },
 { n: "Coulombov zákon", f: "F = Q₁Q₂/(4πε₀r²)", w: "dva bodové náboje" },
 { n: "Konštanty", f: "k = 8,99·10⁹ N·m²/C²,  ε₀ = 8,854·10⁻¹²", w: "k = 1/(4πε₀)" },
 { n: "Intenzita poľa", f: "E = F/Q₀", w: "definícia" },
 { n: "Pole bodového náboja", f: "E = Q/(4πε₀r²)", w: "od + / k −" },
 { n: "Dipólový moment", f: "p = Q·d", w: "od − k +" },
 { n: "Pole dipólu na osi", f: "E = p/(2πε₀z³)", w: "ďaleko od dipólu" },
 { n: "Hustoty náboja", f: "λ = dQ/dl,  σ = dQ/dS,  ρ = dQ/dV", w: "spojité rozloženie" },
 { n: "Sila na náboj v poli", f: "F = QE,  a = QE/m", w: "homogénne pole" },
 { n: "Vychýlenie v tlačiarni", f: "y = QEL²/(2mv²)", w: "prelet medzi doskami dĺžky L" },
 { n: "Dipól v poli", f: "M = p × E,  E<sub>p</sub> = −p·E", w: "homogénne pole" }
],
explain: { q: "Vysvetli, čo je intenzita elektrického poľa a prečo nezávisí od skúšobného náboja, ktorým ju meriame.", keys: ["Intenzita je sila na jednotkový kladný náboj: E = F/Q₀", "Dvojnásobný skúšobný náboj cíti dvojnásobnú silu, podiel ostane rovnaký", "E je vlastnosť poľa v danom bode, pole vytvára iný náboj", "Smer E: od kladného náboja, k zápornému", "Pre bodový náboj E = kQ/r²"] },
quiz: [
 { q: "Ktorý náboj nemôže existovať?", o: ["2,4·10⁻¹⁹ C", "3,2·10⁻¹⁹ C", "−4,8·10⁻¹⁹ C", "1,6·10⁻¹⁸ C"], e: "2,4·10⁻¹⁹ C je 1,5 e. Náboj musí byť celý násobok elementárneho náboja.", h: "Každý náboj je celý násobok e = 1,6·10⁻¹⁹ C. Vydeľ každú možnosť týmto číslom." },
 { q: "Oba náboje aj ich vzdialenosť sa zdvojnásobia. Ako sa zmení sila?", o: ["nezmení sa", "bude dvojnásobná", "bude štvornásobná", "bude polovičná"], e: "Čitateľ vzrastie 4-krát (2·2), menovateľ tiež 4-krát (2²).", h: "F ~ Q₁Q₂/r². Čitateľ sa zväčší 4-krát. A menovateľ?" },
 { q: "Koľkokrát je v atóme vodíka elektrická sila väčšia než gravitačná?", o: ["asi 10³⁹-krát", "asi 10⁹-krát", "asi 10²⁰-krát", "je menšia, asi 10⁻³⁹-krát"], e: "F<sub>e</sub> ≈ 8,2·10⁻⁸ N, F<sub>g</sub> ≈ 3,6·10⁻⁴⁷ N, pomer ≈ 2·10³⁹.", h: "Elektrická sila je 8,2·10⁻⁸ N, gravitačná 3,6·10⁻⁴⁷ N. Vydeľ ich." },
 { q: "Kladné náboje Q₁ a Q₂ = 4Q₁ sú vo vzdialenosti L. Kde je na tretí náboj nulová sila?", o: ["vo vzdialenosti L/3 od Q₁", "v strede medzi nimi", "vo vzdialenosti L/3 od Q₂", "vo vzdialenosti L/5 od Q₁"], e: "x = L·√Q₁/(√Q₁ + √Q₂) = L/3. Bod leží bližšie k menšiemu náboju.", h: "Q₁/x² = Q₂/(L − x)². Po odmocnení 1/x = 2/(L − x)." },
 { q: "Čo platí pre elektrické siločiary?", o: ["nikdy sa nepretínajú", "môžu sa pretínať", "začínajú na záporných nábojoch", "sú to vždy uzavreté krivky"], e: "V jednom bode má E jediný smer. Siločiary začínajú na kladných nábojoch.", h: "Keby sa dve siločiary pretli, aký smer by mala sila na náboj v bode pretnutia?" },
 { q: "Ako klesá pole dipólu na jeho osi vo veľkej vzdialenosti?", o: ["ako 1/r³", "ako 1/r", "ako 1/r²", "ako 1/r⁴"], e: "Polia oboch nábojov sa takmer rušia, zostáva E = p/(2πε₀z³).", h: "Pole jedného náboja klesá ako 1/r². Pri dipóle sa polia oboch nábojov takmer vyrušia a zostane rýchlejšie klesajúci zvyšok." },
 { q: "Dipól je v homogénnom elektrickom poli, natočený šikmo. Čo naň pôsobí?", o: ["nulová sila, nenulový moment", "nenulová sila, nulový moment", "nič", "nenulová sila aj moment"], e: "Sily na oba náboje sú rovnako veľké a opačné, tvoria dvojicu síl s momentom M = pE sin θ.", h: "Sily na +Q a −Q sú rovnako veľké a opačné, ale pôsobia v rôznych bodoch." },
 { q: "Aká je intenzita poľa náboja 1,0 nC vo vzdialenosti 1,0 m?", o: ["9,0 N/C", "90 N/C", "0,9 N/C", "9·10⁹ N/C"], e: "E = 8,99·10⁹·10⁻⁹/1² ≈ 9,0 N/C.", h: "E = kQ/r², k = 9·10⁹ N·m²/C², 1 nC = 10⁻⁹ C." },
 { q: "Aké zrýchlenie má elektrón v poli s intenzitou 1000 N/C?", o: ["1,76·10¹⁴ m/s²", "9,6·10¹⁰ m/s²", "1,6·10⁻¹⁶ m/s²", "5,7·10⁻¹⁵ m/s²"], e: "a = eE/m = 1,602·10⁻¹⁶/9,11·10⁻³¹ ≈ 1,76·10¹⁴ m/s². Hodnota 9,6·10¹⁰ platí pre protón.", b: true, h: "a = eE/m, e = 1,6·10⁻¹⁹ C, m<sub>e</sub> = 9,1·10⁻³¹ kg." },
 { q: "V atramentovej tlačiarni zdvojnásobíme rýchlosť kvapky. Vychýlenie y bude…", o: ["štvrtinové", "polovičné", "dvojnásobné", "štvornásobné"], e: "y = QEL²/(2mv²), je úmerné 1/v².", b: true, h: "y = QEL²/(2mv²). Ako y závisí od v?" },
 { q: "V dvoch protiľahlých vrcholoch štvorca sú náboje Q₁, v zvyšných dvoch náboje Q₂. Kedy je výsledná sila na každý náboj Q₁ nulová?", o: ["Q₁ = −2√2·Q₂", "Q₁ = −Q₂", "Q₁ = +2√2·Q₂", "Q₁ = −√2·Q₂"], e: "Odpudzovanie od druhého Q₁ je kQ₁²/(2a²), výslednica od dvoch Q₂ je √2·kQ₁Q₂/a². Rovnováha: Q₁/2 + √2·Q₂ = 0.", h: "Sila od druhého Q₁ (vzdialenosť a√2) sa musí vyrušiť s výslednicou dvoch kolmých síl od Q₂ (každý vo vzdialenosti a)." },
 { q: "Dajú sa náboje Q₁, Q₁, Q₂, Q₂ vo vrcholoch štvorca zvoliť tak, aby bola nulová sila na všetky štyri naraz?", o: ["nie, podmienky si odporujú", "áno, ak Q₁ = Q₂", "áno, ak Q₁ = −Q₂", "áno, ak Q₁ = −2√2·Q₂"], e: "Muselo by platiť Q₁ = −2√2·Q₂ aj Q₂ = −2√2·Q₁ zároveň, čo ide len pre nulové náboje.", h: "Napíš rovnakú podmienku aj pre náboj Q₂ a porovnaj ju s podmienkou pre Q₁." }
]
},
/* ---------------------------------- L6 ---------------------------------- */
{
id: "l6", ch: 0, title: "Gaussov zákon elektrostatiky", sub: "tok intenzity, symetrické polia",
lesson: [
 { h: "1. Čo je tok", ask: { q: "Obruč ponoríš do potoka a otočíš ju bokom k prúdu. Koľko vody ňou pretečie?", o: ["Nič", "Najviac", "Polovica"] }, p: [
  "<b>Tok</b> meria, koľko poľa prechádza danou plochou. Pomôže predstava obruče ponorenej do potoka: množstvo vody, ktoré ňou pretečie, závisí od rýchlosti prúdu, od veľkosti obruče a od jej natočenia. Keď obruč otočíš bokom k prúdu, nepretečie ňou nič.",
  "Aby sme vedeli opísať natočenie, robíme z plochy vektor. <b>Vektor plochy</b> S má veľkosť rovnú obsahu a smer kolmý na plochu (smer normály). Tok homogénneho poľa cez rovinnú plochu je potom:<span class=\"fm\">Φ = E·S = E·S·cos α</span>α je uhol medzi intenzitou a normálou. Pole kolmé na plochu (α = 0) dáva najväčší tok, pole kĺzajúce po ploche (α = 90°) nulový.",
  "Ak je plocha zakrivená alebo pole nie je všade rovnaké, rozdelíme plochu na malé kúsky dS, pre každý spočítame E·dS a sčítame: Φ = ∫E·dS. Jednotkou toku je N·m²/C."
 ], c: "Homogénne pole 200 N/C prechádza plochou 0,5 m², ktorej normála zviera s poľom uhol 60°. Aký je tok?", a: "Φ = 200·0,5·cos 60° = 50 N·m²/C." },
 { h: "2. Uzavretá plocha a znamienko toku", ask: { q: "Uzavretý valec je v homogénnom poli a vnútri nie je náboj. Aký je celkový tok jeho povrchom?", o: ["Nulový", "Kladný", "Záporný"] }, p: [
  "Gaussov zákon pracuje s <b>uzavretými plochami</b>, teda takými, ktoré ohraničujú nejaký objem: guľa, kocka, valec aj s podstavami. Pri nich platí dohoda, že normála mieri vždy <b>von</b> z objemu.",
  "Z toho plynie znamienko: tam, kde pole z plochy vychádza, je tok kladný. Tam, kde do nej vchádza, je záporný. Celkový tok je teda „čo vyšlo mínus čo vošlo“.",
  "Príklad z prednášky: uzavretý valec v homogénnom poli, os rovnobežná s poľom. Ľavou podstavou pole vchádza, tok je −ES. Pravou vychádza, tok je +ES. Po plášti pole len kĺže, tok je nulový. Spolu nula. Dáva to zmysel: vo valci nie je nič, čo by pole vyrábalo, takže koľko doň vojde, toľko aj vyjde.",
  { pic: "valecpole", cap: "Červená čiarkovaná čiara je uzavretá plocha. Tok podstavami sa vyruší, plášťom je nulový." }
 ], c: "Kocka je v homogénnom poli kolmom na dve protiľahlé steny. Aký je celkový tok kockou?", a: "Nulový. Jednou stenou tok −ES, protiľahlou +ES, ostatné štyri steny sú s poľom rovnobežné." },
 { h: "3. Gaussov zákon", ask: { q: "Náboj Q obalíš raz malou guľou, raz veľkou kockou. Kedy je celkový tok väčší?", o: ["V oboch prípadoch rovnaký", "Pri malej guli", "Pri veľkej kocke"] }, p: [
  "Kedy celkový tok uzavretou plochou nulový nie je? Keď je vnútri náboj. Z kladného náboja siločiary vychádzajú všetkými smermi, takže nech ho obalíme akoukoľvek plochou, všetky ňou prejdú von. Presne to hovorí <b>Gaussov zákon</b>:<span class=\"fm\">ε₀ ∮E·dS = Q<sub>vnútri</sub>     teda     Φ = Q<sub>vnútri</sub>/ε₀</span>",
  "Krúžok na integráli znamená uzavretú plochu. Zákon má tri dôležité dôsledky. Tok nezávisí od tvaru ani veľkosti plochy, len od náboja vnútri. Náboje mimo plochy k celkovému toku neprispejú, lebo ich siločiary vojdú aj vyjdú. Pozor však: pole na ploche menia, len sa ich príspevky k toku vyrušia.",
  "Príklad: náboj Q je v strede kocky. Celkový tok je Q/ε₀. Všetkých šesť stien je v rovnakej pozícii, takže každou prejde šestina: Q/(6ε₀). Samotnú intenzitu na stene by bolo ťažké integrovať, Gaussov zákon dá výsledok jedným riadkom."
 ], c: "Vnútri uzavretej plochy sú náboje +3 μC a −1 μC, tesne mimo nej náboj +5 μC. Aký je celkový tok plochou?", a: "Počíta sa len vnútorný náboj: 2 μC. Φ = 2·10⁻⁶/8,854·10⁻¹² ≈ 2,26·10⁵ N·m²/C." },
 { h: "4. Ako z Gaussovho zákona počítať pole", ask: { q: "Kedy sa Gaussov zákon hodí na výpočet intenzity?", o: ["Pri symetrii: guľovej, valcovej alebo rovinnej", "Vždy", "Len pri vodičoch"] }, p: [
  "Gaussov zákon platí vždy, ale na výpočet intenzity sa hodí len pri <b>symetrii</b>: guľovej, valcovej alebo rovinnej. Postup je stále rovnaký.",
  "1. Zo symetrie uhádni smer poľa. 2. Zvoľ myslenú <b>Gaussovu plochu</b> tak, aby na nej bola intenzita buď všade rovnako veľká a kolmá na plochu, alebo s ňou rovnobežná. 3. Integrál sa potom zmení na obyčajný súčin E krát obsah. 4. Urči náboj vnútri a vyjadri E.",
  { pic: "gauss3", cap: "Gaussovu plochu (červená) volíme podľa symetrie náboja." },
  "Ukážka na bodovom náboji. Pole mieri radiálne a závisí len od vzdialenosti, takže zvolíme guľu s polomerom r okolo náboja. Na celej guli je E rovnaké a kolmé na povrch, tok je E·4πr². Gaussov zákon: ε₀·E·4πr² = Q, odkiaľ E = Q/(4πε₀r²). Vyšiel Coulombov zákon. Oba zákony hovoria to isté, Gaussov je len všeobecnejšie zapísaný."
 ], c: "Prečo sa Gaussov zákon nehodí na výpočet poľa nabitej kocky?", a: "Kocka nemá dostatočnú symetriu. Neexistuje plocha, na ktorej by bola intenzita všade rovnako veľká a kolmá, takže integrál sa nezjednoduší. Zákon platí, ale nepomôže." },
 { h: "5. Nabitá nevodivá guľa", ask: { q: "Rovnomerne nabitá nevodivá guľa: aké je pole v jej strede?", o: ["Nulové", "Najväčšie", "Rovnaké ako na povrchu"] }, p: [
  "Guľa s polomerom R má náboj Q rovnomerne rozložený v celom objeme. Gaussovou plochou je guľa s polomerom r.",
  "<b>Mimo gule</b> (r &gt; R) je vnútri Gaussovej plochy celý náboj Q, takže vyjde to isté ako pre bodový náboj: E = Q/(4πε₀r²). Navonok sa guľa správa, akoby bol všetok náboj v jej strede. Je to elektrická obdoba šupkového teorému.",
  "<b>Vnútri gule</b> (r &lt; R) obopína Gaussova plocha len časť náboja. Objem rastie s r³, takže Q<sub>vnútri</sub> = Q·r³/R³. Dosadíme: ε₀·E·4πr² = Q·r³/R³, teda<span class=\"fm\">E = Q·r / (4πε₀R³)</span>",
  "Intenzita vnútri rastie priamo úmerne vzdialenosti od stredu. V strede je nulová, na povrchu najväčšia a odtiaľ von klesá s 1/r²."
 ], c: "Aká je intenzita v strede rovnomerne nabitej nevodivej gule a prečo?", a: "Nulová. Gaussova plocha s nulovým polomerom neobsahuje žiadny náboj; zo symetrie sa tiež príspevky zo všetkých strán rušia." },
 { h: "6. Nekonečné vlákno a nekonečná doska", ask: { q: "Ako sa mení pole nekonečnej nabitej dosky so vzdialenosťou od nej?", o: ["Nemení sa", "Klesá ako 1/r", "Klesá ako 1/r²"] }, p: [
  "<b>Vlákno</b> s dĺžkovou hustotou λ. Pole mieri kolmo od vlákna a závisí len od vzdialenosti r. Gaussovou plochou je valec s polomerom r a dĺžkou L okolo vlákna. Podstavami tok neprechádza (pole po nich kĺže), plášťom prejde E·2πrL. Vnútri je náboj λL:<span class=\"fm\">ε₀·E·2πrL = λL   →   E = λ/(2πε₀r)</span>Pole vlákna klesá s prvou mocninou vzdialenosti, pomalšie než pole bodového náboja.",
  "<b>Nevodivá doska</b> s plošnou hustotou σ. Pole mieri kolmo od dosky na obe strany. Gaussovou plochou je „krabička“ prestrčená cez dosku, s podstavami S rovnobežnými s doskou. Tok prejde oboma podstavami, spolu 2ES. Vnútri je náboj σS:<span class=\"fm\">ε₀·2ES = σS   →   E = σ/(2ε₀)</span>",
  "Výsledok vôbec neobsahuje vzdialenosť. Pole nekonečnej dosky je všade rovnaké, homogénne. V praxi to platí blízko veľkej dosky, ďaleko od jej okrajov."
 ], c: "Vo vzdialenosti 2 cm od dlhého nabitého vlákna je intenzita 900 N/C. Aká je vo vzdialenosti 6 cm?", a: "Pole klesá ako 1/r, trikrát ďalej je trikrát slabšie: 300 N/C." },
 { h: "7. Nabitý vodič", ask: { q: "Kde sa nachádza prebytočný náboj nabitého vodiča?", o: ["Na povrchu", "Rovnomerne v celom objeme", "V strede"] }, p: [
  "Vo vodiči sa náboje môžu voľne pohybovať. Keby vnútri vodiča bolo elektrické pole, pôsobilo by na ne silou a ony by sa hýbali. V ustálenom stave sa už nehýbu, takže <b>vnútri vodiča je E = 0</b>.",
  "Zvoľme Gaussovu plochu tesne pod povrchom vodiča. Všade na nej je E = 0, tok je nulový, takže vnútri nej nie je žiadny náboj. <b>Všetok prebytočný náboj je na povrchu.</b>",
  "Tesne nad povrchom je pole kolmé na povrch (inak by posúvalo náboje po povrchu). Krabička cez povrch má jednu podstavu vo vodiči, kde je E = 0, takže tok prejde len vonkajšou podstavou:<span class=\"fm\">ε₀·ES = σS   →   E = σ/ε₀</span>To je dvakrát viac než pri nevodivej doske, kde sa tok delil na dve strany. Túto dvojku si treba strážiť.",
  "Pre nabitú vodivú guľu z toho vyplýva: vnútri E = 0, vonku rovnaké pole ako od bodového náboja v strede."
 ], c: "Povrch vodiča má plošnú hustotu náboja 8,854·10⁻⁸ C/m². Aká je intenzita tesne nad povrchom a aká tesne pod ním?", a: "Nad povrchom E = σ/ε₀ = 10 000 N/C, kolmo na povrch. Pod povrchom, vo vodiči, je nulová." },
 { h: "8. Úlohy z cvičení: tok bez počítania integrálu", ask: { q: "Uzavretá plocha bez náboja vnútri: ak pole jednou časťou vchádza, čo platí pre zvyšok plochy?", o: ["Rovnaký tok musí zvyškom vyjsť", "Zvyškom nič neprechádza", "Zvyškom musí tiež vchádzať"] }, p: [
  "V riešených príkladoch sa stále opakuje jedna myšlienka: <b>uzavretá plocha, v ktorej nie je náboj, má celkový tok nulový. Čo jednou časťou vojde, musí druhou vyjsť.</b> Vďaka nej sa dá určiť tok aj cez zakrivenú plochu, kde by sa integrál počítal ťažko.",
  "Pologuľa s polomerom R v homogénnom poli E kolmom na základňu, siločiary vstupujú základňou (HRW 24.11). Základňa je kruh s obsahom πR². Pole do nej vchádza, normála mieri von, takže tok základňou je −πR²E. Vnútri nie je náboj, celkový tok je nula, preto guľovým povrchom musí vychádzať +πR²E.",
  { pic: "pologula", cap: "Čo vojde základňou, vyjde guľovým povrchom." },
  "Rovnako ihlan so štvorcovou základňou a: ak pole vystupuje základňou, tok základňou je +a²E a plášťom −a²E. Sieťka na motýle s kruhovým rámom s polomerom a kolmým na pole: tok tkaninou je −E·πa², lebo sieťka s otvorom tvorí uzavretú plochu bez náboja.",
  "Bodový náboj Q je vo výške d/2 presne nad stredom štvorca so stranou d. Trik: štvorec si predstav ako jednu stenu kocky s hranou d. Náboj je potom v strede kocky, celkový tok je Q/ε₀ a jednou stenou prejde šestina: Φ = Q/(6ε₀). Gaussovu plochu si vymýšľame sami tak, aby sa nám to hodilo."
 ], c: "Kocka bez náboja je v homogénnom poli. Piatimi stenami spolu vchádza tok −200 N·m²/C. Aký tok prechádza šiestou stenou?", a: "+200 N·m²/C. Celkový tok uzavretou plochou bez náboja musí byť nulový." },
 { h: "9. Úlohy z cvičení: valec, guľa v šupke, doska", ask: { q: "Nevodivá guľa s nábojom +Q je vo vodivej vrstve s nábojom −Q. Aké je pole mimo vrstvy?", o: ["Nulové", "Ako od náboja +Q", "Ako od náboja −Q"] }, p: [
  "V cvičeniach sa dĺžková hustota náboja značí <b>τ</b> namiesto λ. Pole nabitej tyčinky je teda E = τ/(2πε₀r), odvodenie je rovnaké.",
  "Nekonečne dlhý valec s polomerom R nabitý v celom objeme hustotou ρ (HRW 24.31). Gaussova plocha je valec s polomerom r a dĺžkou h. Vnútri (r &lt; R) obsahuje náboj ρ·πr²h: ε₀E·2πrh = ρπr²h, teda E = ρr/(2ε₀). Pole rastie lineárne od osi. Vonku (r &gt; R) obsahuje celý náboj ρ·πR²h, teda E = ρR²/(2ε₀r).",
  "Nevodivá guľa s polomerom a a nábojom +Q vo vodivej guľovej vrstve (vnútorný polomer b, vonkajší c) s nábojom −Q (HRW 24.53). Postupne od stredu:<span class=\"fm\">r &lt; a:  E = Qr/(4πε₀a³)<br>a &lt; r &lt; b:  E = Q/(4πε₀r²)<br>b &lt; r &lt; c (vo vodiči):  E = 0<br>r &gt; c:  E = 0</span>Vo vodiči musí byť pole nulové, takže Gaussova plocha vedená vodičom obsahuje nulový celkový náboj. Na vnútornej stene vrstvy preto sedí náboj −Q, ktorý vyváži +Q gule. Na vonkajšej stene nezostane nič a pole vonku je nulové.",
  { pic: "supkavodic", cap: "Štyri oblasti od stredu von a intenzita v každej z nich." },
  "Dve sústredné tenké kovové vrstvy s nábojmi Q<sub>a</sub> (polomer a) a Q<sub>b</sub> (polomer b &gt; a), HRW 24.47: vnútri menšej E = 0, medzi nimi E = Q<sub>a</sub>/(4πε₀r²), vonku E = (Q<sub>a</sub> + Q<sub>b</sub>)/(4πε₀r²). Na vnútornej stene vonkajšej vrstvy sa indukuje −Q<sub>a</sub>, na jej vonkajšej stene je Q<sub>a</sub> + Q<sub>b</sub>.",
  "Gulička s hmotnosťou 1,0 mg a nábojom 2,0·10⁻⁸ C visí na závese pri zvislej nabitej nevodivej doske a záves je odklonený o 30° (HRW 24.35). Na guličku pôsobí tiaž mg nadol a elektrická sila QE vodorovne, pomer dáva tg θ = QE/(mg). Pole dosky je E = σ/(2ε₀), teda σ = 2ε₀·mg·tg θ/Q ≈ 5,0·10⁻⁹ C/m².",
  { fig: { surface: false, ball: true, thread: 120, forces: [[120, "T", 72], [0, "QE", 62], [270, "mg", 64]], axes: [0, 90], alt: "Nabitá gulička na závese: ťah závesu šikmo nahor, elektrická sila vodorovne, tiaž nadol" }, cap: "Gulička je v pokoji, súčet síl je nula. Os x: QE = T sin θ, os y: mg = T cos θ. Podiel dáva tg θ = QE/(mg)." }
 ], c: "Nevodivá guľa s nábojom +Q je vo vodivej vrstve, ktorá má celkový náboj nula. Aký náboj je na vnútornej a aký na vonkajšej stene vrstvy?", a: "Na vnútornej −Q, aby bolo pole vo vodiči nulové. Vrstva je celkovo neutrálna, takže na vonkajšej stene je +Q." }
],
theory: [
 { h: "Tok intenzity", items: [
  "Tok hovorí, koľko poľa prechádza plochou.",
  "<b>Plocha ako vektor</b>: dS má smer normály. Pri uzavretej ploche normála mieri vždy von.",
  "<b>Φ = ∫E·dS</b> [N·m²/C]. Pre homogénne pole a rovinnú plochu Φ = ES cos α.",
  "Siločiary vychádzajúce von dávajú kladný tok, vchádzajúce dnu záporný.",
  "Uzavretý valec v homogénnom poli: jednou podstavou −ES, druhou +ES, plášťom 0. Spolu Φ = 0."
 ]},
 { h: "Gaussov zákon", items: [
  "<b>ε₀∮E·dS = Q<sub>vnútri</sub></b>. Celkový tok uzavretou plochou závisí len od náboja vnútri nej.",
  "Náboje mimo plochy menia E na ploche, ale celkový tok nezmenia.",
  "Súvis s Coulombovým zákonom: pre guľu okolo bodového náboja vyjde ε₀E·4πr² = Q, teda E = Q/(4πε₀r²).",
  "Na výpočet E sa hodí len pri symetrii: guľovej, valcovej alebo rovinnej."
 ]},
 { h: "Výsledky, ktoré treba vedieť", items: [
  "Nevodivá guľa s polomerom R, rovnomerne nabitá: vnútri E = Qr/(4πε₀R³) (rastie s r), vonku E = Q/(4πε₀r²).",
  "Nekonečné vlákno: E = λ/(2πε₀r).",
  "Nekonečná tenká nevodivá doska: E = σ/(2ε₀), nezávisí od vzdialenosti.",
  "Nabitý izolovaný vodič: náboj je len na povrchu, vnútri E = 0, tesne pri povrchu E = σ/ε₀ kolmo na povrch.",
  "Vodivá guľa: vnútri 0, vonku ako bodový náboj.",
  "Náboj v strede kocky: tok jednou stenou je Q/(6ε₀)."
 ]}
],
traps: [
 "Nulový tok neznamená nulové pole na ploche (náboj môže byť mimo).",
 "Doska dáva σ/(2ε₀), povrch vodiča σ/ε₀ – dvakrát viac.",
 "Vnútri nevodivej gule pole rastie s r, vnútri vodivej je nulové."
],
examples: [
 { t: "Vlákno s λ = 2,0 μC/m. Intenzita vo vzdialenosti 0,10 m?", s: [
  "E = λ/(2πε₀r) = 2,0·10⁻⁶/(2π·8,854·10⁻¹²·0,10).",
  "E ≈ 3,6·10⁵ N/C." ]},
 { t: "Náboj 1,0 μC je vnútri uzavretej plochy. Aký je tok?", s: [
  "Φ = Q/ε₀ = 1,0·10⁻⁶/8,854·10⁻¹² ≈ 1,13·10⁵ N·m²/C.",
  "Ak je náboj v strede kocky, jednou stenou prejde šestina: ≈ 1,9·10⁴ N·m²/C." ]}
],
formulas: [
 { n: "Tok intenzity", f: "Φ = ∫E·dS  (homogénne: ES cos α)", w: "definícia" },
 { n: "Gaussov zákon", f: "ε₀∮E·dS = Q<sub>vnútri</sub>", w: "uzavretá plocha" },
 { n: "Bodový náboj", f: "E = Q/(4πε₀r²)", w: "guľová Gaussova plocha" },
 { n: "Nevodivá guľa – vnútri", f: "E = Qr/(4πε₀R³)", w: "r &lt; R" },
 { n: "Nekonečné vlákno", f: "E = λ/(2πε₀r)", w: "valcová Gaussova plocha" },
 { n: "Nekonečná nevodivá doska", f: "E = σ/(2ε₀)", w: "nezávisí od vzdialenosti" },
 { n: "Pri povrchu vodiča", f: "E = σ/ε₀,  vnútri E = 0", w: "nabitý izolovaný vodič" },
 { n: "Tok stenou kocky", f: "Φ = Q/(6ε₀)", w: "náboj v strede kocky" }
],
explain: { q: "Vysvetli, prečo celkový tok uzavretou plochou závisí len od náboja vnútri a čo to neznamená pre pole na ploche.", keys: ["Tok meria, koľko poľa prechádza plochou (Φ = E·S)", "Pri uzavretej ploche mieri normála von: čo vychádza, je kladné, čo vchádza, záporné", "Siločiary vonkajšieho náboja vojdú aj vyjdú, ich tok sa vyruší", "Φ = Q<sub>vnútri</sub>/ε₀ bez ohľadu na tvar a veľkosť plochy", "Vonkajšie náboje pole na ploche menia, len k celkovému toku neprispejú"] },
quiz: [
 { q: "Aký je celkový tok uzavretým valcom v homogénnom poli (os rovnobežná s E)?", o: ["nulový", "2ES", "ES", "závisí od dĺžky valca"], e: "Jednou podstavou pole vchádza (−ES), druhou vychádza (+ES), plášťom neprechádza.", h: "Rozdeľ povrch na ľavú podstavu, pravú podstavu a plášť. Kde pole vchádza, kde vychádza a kde len kĺže?" },
 { q: "Od čoho závisí celkový tok intenzity uzavretou plochou?", o: ["len od náboja vnútri plochy", "od tvaru plochy", "od nábojov mimo plochy", "od veľkosti plochy"], e: "To je obsah Gaussovho zákona: ε₀Φ = Q<sub>vnútri</sub>.", h: "Gaussov zákon: Φ = Q<sub>vnútri</sub>/ε₀." },
 { q: "Náboj Q je v strede kocky. Aký tok prechádza jednou jej stenou?", o: ["Q/(6ε₀)", "Q/ε₀", "Q/(4πε₀)", "nulový"], e: "Celkový tok Q/ε₀ sa zo symetrie rozdelí rovnako na 6 stien.", h: "Celkový tok je Q/ε₀ a všetkých šesť stien je voči náboju rovnako umiestnených." },
 { q: "Čo platí pre nabitý izolovaný vodič v rovnováhe?", o: ["E vnútri je nulové, náboj je na povrchu", "náboj je rozložený v celom objeme", "E vnútri je σ/ε₀", "potenciál vnútri je nulový"], e: "Voľné náboje sa presunú na povrch tak, aby vnútri bolo E = 0. Potenciál vnútri je stály, nie nulový.", h: "Keby bolo vo vodiči pole, voľné náboje by sa hýbali. Čo platí v ustálenom stave?" },
 { q: "Aká je intenzita poľa nekonečnej nevodivej dosky s plošnou hustotou σ?", o: ["σ/(2ε₀)", "σ/ε₀", "σ/(2πε₀r)", "klesá ako 1/r²"], e: "σ/(2ε₀) a nezávisí od vzdialenosti. σ/ε₀ platí tesne pri povrchu vodiča.", h: "Krabička cez dosku: tok prejde oboma podstavami, ε₀·2ES = σS." },
 { q: "Vzdialenosť od nekonečného nabitého vlákna sa zdvojnásobí. Intenzita bude…", o: ["polovičná", "štvrtinová", "rovnaká", "dvojnásobná"], e: "E = λ/(2πε₀r) klesá ako 1/r.", h: "Pole vlákna: E = λ/(2πε₀r)." },
 { q: "Rovnomerne nabitá nevodivá guľa: aká je intenzita v polovici polomeru oproti povrchu?", o: ["polovičná", "štvornásobná", "dvojnásobná", "nulová"], e: "Vnútri E rastie úmerne r, v r = R/2 je teda polovičná. Nulová by bola vo vodivej guli.", h: "Vnútri gule je E = Qr/(4πε₀R³), teda priamo úmerné r." },
 { q: "Náboj leží mimo uzavretej plochy. Čo platí?", o: ["celkový tok je 0, ale E na ploche nie je nulové", "tok aj E sú nulové", "tok je Q/ε₀", "tok je záporný"], e: "Všetky siločiary, ktoré vojdú, aj vyjdú. Pole na ploche však existuje.", h: "Siločiary vonkajšieho náboja plochou vojdú aj vyjdú. Znamená to, že na ploche nie je pole?" },
 { q: "Vlákno má λ = 2,0 μC/m. Aká je intenzita vo vzdialenosti 0,10 m?", o: ["3,6·10⁵ N/C", "1,8·10⁵ N/C", "7,2·10⁵ N/C", "1,1·10⁶ N/C"], e: "E = 2,0·10⁻⁶/(2π·8,854·10⁻¹²·0,10) ≈ 3,6·10⁵ N/C. Hodnota 1,8·10⁵ vznikne zámenou 2π za 4π.", b: true, h: "E = λ/(2πε₀r) = 2kλ/r, k = 9·10⁹ N·m²/C²." },
 { q: "Vnútri uzavretej plochy je náboj 1,0 μC, mimo nej 5,0 μC. Aký je celkový tok?", o: ["1,13·10⁵ N·m²/C", "6,8·10⁵ N·m²/C", "nulový", "nedá sa určiť"], e: "Počíta sa len vnútorný náboj: Φ = 1,0·10⁻⁶/8,854·10⁻¹² ≈ 1,13·10⁵ N·m²/C.", b: true, h: "Ráta sa len náboj vnútri: Φ = Q/ε₀, ε₀ = 8,85·10⁻¹² C²/(N·m²)." },
 { q: "Pologuľa s polomerom R je v homogénnom poli E kolmom na jej základňu; siločiary vstupujú základňou. Aký je tok základňou?", o: ["−πR²E", "+πR²E", "nulový", "−2πR²E"], e: "Základňa je kruh πR². Pole vchádza dnu, normála mieri von, uhol je 180°, preto mínus.", h: "Pole do základne vchádza a normála mieri von z objemu. Aké znamienko má tok?" },
 { q: "Pologuľa (R) v homogénnom poli E, siločiary vstupujú základňou. Aký je tok jej guľovým povrchom?", o: ["+πR²E", "−πR²E", "+2πR²E", "nulový"], e: "Vnútri nie je náboj, celkový tok je 0. Čo vošlo základňou (−πR²E), vyjde guľovým povrchom (+πR²E).", h: "Vnútri nie je náboj, celkový tok je nula. Koľko musí vyjsť guľovým povrchom, keď základňou vošlo πR²E?" },
 { q: "Bodový náboj Q je vo výške d/2 presne nad stredom štvorca so stranou d. Aký tok prechádza štvorcom?", o: ["Q/(6ε₀)", "Q/ε₀", "Q/(4ε₀)", "Q/(2ε₀)"], e: "Štvorec je jedna stena kocky s hranou d, náboj je v jej strede. Stenou prejde šestina celkového toku Q/ε₀.", h: "Doplň štvorec na kocku so stranou d, v ktorej strede leží náboj." },
 { q: "Nekonečne dlhý valec s polomerom R je nabitý v objeme hustotou ρ. Aká je intenzita vo vnútri, vo vzdialenosti r &lt; R od osi?", o: ["ρr/(2ε₀)", "ρR²/(2ε₀r)", "ρ/(2πε₀r)", "nulová"], e: "ε₀E·2πrh = ρπr²h, teda E = ρr/(2ε₀). Vonku platí ρR²/(2ε₀r).", h: "Gaussov valec s polomerom r obsahuje náboj ρπr²h a plášťom prejde tok E·2πrh." },
 { q: "Nevodivá guľa s nábojom +Q je vo vodivej guľovej vrstve s nábojom −Q. Aká je intenzita mimo vrstvy?", o: ["nulová", "Q/(4πε₀r²)", "2Q/(4πε₀r²)", "σ/ε₀"], e: "Gaussova plocha mimo vrstvy obsahuje +Q − Q = 0, takže E = 0.", h: "Gaussova guľa za vrstvou obsahuje náboj +Q − Q." },
 { q: "Nevodivá guľa s nábojom +Q je vo vodivej guľovej vrstve s nábojom −Q. Aký náboj je na vnútornej stene vrstvy?", o: ["−Q", "nulový", "+Q", "−Q/2"], e: "Vo vodiči je E = 0, takže plocha vedená vodičom obsahuje nulový náboj: +Q gule vyváži −Q na vnútornej stene. Na vonkajšej stene nezostane nič.", h: "Vo vodivej vrstve je E = 0. Gaussova plocha vnútri vrstvy teda obsahuje nulový náboj." },
 { q: "Dve sústredné tenké kovové guľové vrstvy majú náboje Q<sub>a</sub> (polomer a) a Q<sub>b</sub> (polomer b &gt; a). Aká je intenzita medzi nimi?", o: ["Q<sub>a</sub>/(4πε₀r²)", "(Q<sub>a</sub> + Q<sub>b</sub>)/(4πε₀r²)", "nulová", "Q<sub>b</sub>/(4πε₀r²)"], e: "Gaussova guľa medzi vrstvami obsahuje len Q<sub>a</sub>. Vonkajšia vrstva k poľu vo svojom vnútri neprispieva.", h: "Gaussova guľa s polomerom medzi a a b obsahuje len vnútornú vrstvu." }
]
},
/* ---------------------------------- L7 ---------------------------------- */
{
id: "l7", ch: 0, title: "Potenciál a napätie", sub: "energia v elektrickom poli · nie je isté, či bude v teste 1",
lesson: [
 { h: "1. Elektrická potenciálna energia", ask: { q: "Tlačíš kladný náboj bližšie k inému kladnému náboju. Čo sa deje s jeho potenciálnou energiou?", o: ["Rastie", "Klesá", "Nemení sa"] }, p: [
  "Začnime tým, čo poznáš z mechaniky. Keď zdvihneš kameň, konáš prácu proti tiažovej sile a kameň získa potenciálnu energiu mgh. Keď ho pustíš, pole mu ju vráti ako pohybovú.",
  "V elektrickom poli je to rovnaké, lebo elektrostatická sila je tiež konzervatívna: práca, ktorú vykoná pri presune náboja, závisí len od začiatku a konca cesty. Keď tlačíš kladný náboj proti smeru poľa (napríklad bližšie k inému kladnému náboju), konáš prácu a jeho potenciálna energia rastie. Keď ho pustíš, pole ho urýchli.",
  "Vzťah medzi prácou poľa W a zmenou potenciálnej energie je:<span class=\"fm\">ΔE<sub>p</sub> = −W</span>Mínus hovorí, že keď pole koná kladnú prácu (náboj ide „dolu kopcom“), potenciálna energia klesá."
 ], c: "Kladný náboj sa voľne pohne v smere siločiar. Rastie jeho potenciálna energia, alebo klesá?", a: "Klesá. Pole koná kladnú prácu a potenciálna energia sa mení na kinetickú, ako pri padajúcom kameni." },
 { h: "2. Potenciál a napätie", ask: { q: "Je elektrický potenciál vektor, alebo skalár?", o: ["Skalár, číslo so znamienkom", "Vektor", "Raz vektor, raz skalár"] }, p: [
  "Potenciálna energia závisí od toho, aký veľký náboj do poľa vložíme. Aby sme mali veličinu, ktorá opisuje len samotné pole, vydelíme ju nábojom. Tak vznikne <b>potenciál</b>:<span class=\"fm\">φ = E<sub>p</sub>/Q₀   (jednotka volt, V = J/C)</span>",
  "Potenciál je pre energiu tým, čím je intenzita pre silu: intenzita je sila na jednotkový náboj, potenciál energia na jednotkový náboj. Zásadný rozdiel je, že potenciál je <b>skalár</b>, obyčajné číslo so znamienkom, bez smeru. Dá sa prirovnať k nadmorskej výške v teréne.",
  "Samotná hodnota potenciálu závisí od toho, kde si zvolíme nulu. Fyzikálny význam má až rozdiel potenciálov medzi dvoma bodmi, <b>napätie</b>:<span class=\"fm\">U = φ<sub>A</sub> − φ<sub>B</sub></span>Práca, ktorú pole vykoná pri presune náboja Q z A do B, je W = Q·U. Batéria 9 V dodá každému coulombu, ktorý ňou prejde, 9 J.",
  "Pre častice sa používa jednotka <b>elektrónvolt</b>: energia, ktorú získa náboj e po prechode napätím 1 V, teda 1 eV = 1,602·10⁻¹⁹ J."
 ], c: "Akú prácu vykoná pole pri presune náboja 2 μC z miesta s potenciálom 50 V na miesto s potenciálom 20 V?", a: "W = QU = 2·10⁻⁶·(50 − 20) = 6·10⁻⁵ J." },
 { h: "3. Ekvipotenciálne plochy", ask: { q: "Náboj sa presunie po ekvipotenciálnej ploche. Akú prácu vykoná pole?", o: ["Nulovú", "Kladnú", "Zápornú"] }, p: [
  "<b>Ekvipotenciálna plocha</b> spája body s rovnakým potenciálom. Je to to isté ako vrstevnica na turistickej mape, ktorá spája body s rovnakou nadmorskou výškou.",
  "Keď sa náboj pohybuje po ekvipotenciálnej ploche, napätie medzi začiatkom a koncom je nulové a pole nekoná žiadnu prácu. Práca je nulová len vtedy, keď je sila kolmá na pohyb. Preto sú <b>siločiary vždy kolmé na ekvipotenciálne plochy</b>, presne ako spádnica na vrstevnice.",
  "V homogénnom poli sú ekvipotenciálne plochy rovnobežné roviny kolmé na siločiary. Okolo bodového náboja sú to sústredné gule. Kde sú ekvipotenciály nahusto, potenciál sa mení rýchlo a pole je silné.",
  { pic: "ekvi", cap: "Ekvipotenciálne plochy sú všade kolmé na siločiary." }
 ], c: "Akú prácu vykoná pole, keď náboj obehne po kružnici so stredom v bodovom náboji?", a: "Nulovú. Celá kružnica leží na jednej ekvipotenciálnej ploche (guli)." },
 { h: "4. Potenciál z intenzity", ask: { q: "Ideš v smere siločiar. Čo robí potenciál?", o: ["Klesá", "Rastie", "Nemení sa"] }, p: [
  "Ak poznáme pole, potenciál dostaneme sčítaním práce pozdĺž cesty. Pre jednotkový náboj:<span class=\"fm\">φ<sub>B</sub> − φ<sub>A</sub> = −∫<sub>A</sub><sup>B</sup> E·dr</span>Mínus znamená, že <b>v smere siločiar potenciál klesá</b>. Pole vždy mieri „z kopca“.",
  "V homogénnom poli je integrál jednoduchý súčin. Medzi dvoma bodmi vzdialenými d pozdĺž siločiar je napätie U = E·d. Odtiaľ je aj jednotka intenzity V/m: pole 1 000 V/m znamená, že na každom metri v smere poľa klesne potenciál o 1 000 V.",
  "Pre bodový náboj Q zvolíme nulu potenciálu v nekonečne a integrujeme E = Q/(4πε₀r²) od nekonečna po vzdialenosť r:<span class=\"fm\">φ = Q/(4πε₀r)</span>Všimni si rozdiel oproti intenzite: potenciál klesá s prvou mocninou vzdialenosti, intenzita s druhou. Znamienko potenciálu je rovnaké ako znamienko náboja."
 ], c: "Aký je potenciál vo vzdialenosti 3 m od náboja 2 nC?", a: "φ = 8,99·10⁹·2·10⁻⁹/3 ≈ 6 V." },
 { h: "5. Potenciál viacerých nábojov", ask: { q: "Prečo sa potenciál viacerých nábojov počíta ľahšie ako ich intenzita?", o: ["Sčítavajú sa čísla, nie vektory", "Potenciál je vždy kladný", "Netreba poznať vzdialenosti"] }, p: [
  "Pre viac nábojov platí superpozícia, ale oveľa pohodlnejšia než pri intenzite:<span class=\"fm\">φ = Σ Q<sub>i</sub>/(4πε₀r<sub>i</sub>)</span>Sčítavajú sa obyčajné čísla so znamienkami, žiadne vektory a žiadne rozkladanie do zložiek. To je hlavný dôvod, prečo sa potenciál zavádza.",
  "Príklad HRW 25.21 z prednášky: Q₁ = +Q je v bode x = 0, Q₂ = −3Q v bode x = d. Kde na osi x je potenciál nulový? Kladný a záporný príspevok sa musia vyrušiť: Q/|x| = 3Q/|d − x|. Záporný náboj je trikrát väčší, takže hľadaný bod musí byť od neho trikrát ďalej než od kladného.",
  "Medzi nábojmi: d − x = 3x, teda x = d/4. Naľavo od kladného náboja: d − x = 3·(−x), teda x = −d/2. Napravo od záporného náboja riešenie nie je, lebo tam je väčší náboj zároveň bližšie. Úloha má teda dve riešenia a zabudnúť na druhé je typická chyba.",
  { pic: "nulovyphi", cap: "Potenciál je nulový v dvoch bodoch: medzi nábojmi a naľavo od +Q." },
  "Potenciál nulový neznamená, že je tam nulové pole. V strede dipólu (medzi +Q a −Q) je φ = 0, ale intenzity oboch nábojov mieria rovnakým smerom a sčítajú sa. Naopak, v strede medzi dvoma rovnakými kladnými nábojmi je E = 0, ale potenciál je kladný."
 ], c: "Náboje +4 nC a −4 nC sú 2 m od seba. Aký je potenciál presne v strede medzi nimi?", a: "Nulový. Príspevky +36 V a −36 V sa vyrušia. Intenzita tam však nulová nie je." },
 { h: "6. Intenzita z potenciálu", ask: { q: "Potenciál je v celej oblasti rovnaký. Aká je tam intenzita?", o: ["Nulová", "Najväčšia", "Nedá sa určiť"] }, p: [
  "Ide to aj opačne. Ak poznáme potenciál v každom bode, intenzitu dostaneme derivovaním:<span class=\"fm\">E<sub>x</sub> = −∂φ/∂x,   E<sub>y</sub> = −∂φ/∂y,   E<sub>z</sub> = −∂φ/∂z     skrátene     E = −grad φ</span>",
  "Symbol ∂ je parciálna derivácia: derivuješ podľa jednej súradnice a ostatné považuješ za konštanty. Gradient je vektor, ktorý mieri v smere najprudšieho rastu potenciálu. Mínus pred ním hovorí, že intenzita mieri opačne, v smere najprudšieho poklesu.",
  "Príklad: φ = 5x² (V). E<sub>x</sub> = −10x, v bode x = 2 m je to −20 V/m. Druhý príklad: φ = 3x + 4y. E<sub>x</sub> = −3, E<sub>y</sub> = −4, veľkosť intenzity je √(9 + 16) = 5 V/m.",
  "V praxi je to výhodná cesta: najprv ľahko spočítať skalárny potenciál a z neho derivovaním dostať pole, namiesto vektorového sčítavania intenzít."
 ], c: "Potenciál je φ = 2x² − 3y (V). Aké sú zložky intenzity v bode (1 m; 5 m)?", a: "E_x = −4x = −4 V/m, E_y = +3 V/m." },
 { h: "7. Potenciálna energia sústavy nábojov", ask: { q: "Kladný a záporný náboj sú blízko seba. Aké znamienko má potenciálna energia sústavy?", o: ["Záporné", "Kladné", "Je nulová"] }, p: [
  "Koľko práce treba na to, aby sme k sebe priniesli dva náboje z veľkej diaľky? Prvý náboj položíme zadarmo. Vytvorí potenciál φ = Q₁/(4πε₀r) a druhý náboj v ňom získa energiu Q₂φ:<span class=\"fm\">E<sub>p</sub> = Q₁Q₂/(4πε₀r)</span>",
  "Znamienko vyjde samo. Pre súhlasné náboje je energia kladná: museli sme ich k sebe tlačiť. Pre opačné je záporná: priťahujú sa a prácu by sme museli vynaložiť na ich roztrhnutie.",
  "Pri viacerých nábojoch spočítaj energiu pre <b>každú dvojicu</b> a sčítaj, každú dvojicu len raz. Tri náboje tvoria tri dvojice, štyri náboje šesť. Tri rovnaké náboje q vo vrcholoch rovnostranného trojuholníka so stranou a majú energiu 3·q²/(4πε₀a)."
 ], c: "Náboje +2 μC a −3 μC sú 0,5 m od seba. Aká je potenciálna energia sústavy?", a: "E_p = 8,99·10⁹·(2·10⁻⁶)·(−3·10⁻⁶)/0,5 ≈ −0,108 J. Záporná, lebo sa priťahujú." },
 { h: "8. Potenciál vodiča a hroty", ask: { q: "Vnútri nabitej vodivej gule je E = 0. Je tam aj potenciál nulový?", o: ["Nie, je rovnaký ako na povrchu", "Áno", "Je nekonečný"] }, p: [
  "Vnútri nabitého vodiča je E = 0. Keďže intenzita je záporná derivácia potenciálu, nulová intenzita znamená, že potenciál sa nemení. <b>Celý vodič má rovnaký potenciál</b> a jeho povrch je ekvipotenciálna plocha.",
  "Pre nabitú vodivú guľu s polomerom R: vonku je potenciál ako od bodového náboja, φ = Q/(4πε₀r). Na povrchu dosiahne hodnotu Q/(4πε₀R) a tú si drží v celom vnútri. Tu je dôležitý chyták: vnútri je E = 0, ale potenciál nulový nie je. Nulová intenzita znamená len to, že sa potenciál nemení.",
  "Na vodiči nepravidelného tvaru sa náboj nerozloží rovnomerne. Najviac sa ho nahromadí tam, kde je povrch najviac zakrivený, teda na <b>hrotoch</b>. Keďže E = σ/ε₀, je tam aj najsilnejšie pole. Môže byť také silné, že ionizuje okolitý vzduch a náboj začne unikať. To je <b>korónový výboj</b>, viditeľný ako slabé svetielkovanie. Využíva ho bleskozvod a je to dôvod, prečo majú zariadenia vysokého napätia zaoblené tvary."
 ], c: "Vodivá guľa s polomerom 0,1 m má náboj 1 nC. Aký je potenciál v jej strede?", a: "Rovnaký ako na povrchu: φ = 8,99·10⁹·10⁻⁹/0,1 ≈ 90 V." }
],
theory: [
 { h: "Potenciálna energia a potenciál", items: [
  "Elektrostatická sila je konzervatívna, podobne ako tiažová. Presun kladného náboja proti poľu je ako dvíhanie kameňa.",
  "<b>ΔE<sub>p</sub> = −W</b>, kde W je práca poľa.",
  "<b>Potenciál φ = E<sub>p</sub>/Q₀</b> [V = J/C]. Je to skalár a vlastnosť poľa v danom bode.",
  "<b>Napätie U = φ<sub>A</sub> − φ<sub>B</sub> = ∫E·dr</b>. Práca poľa pri presune náboja: W = QU.",
  "1 eV = 1,602·10⁻¹⁹ J."
 ]},
 { h: "Ekvipotenciálne plochy", items: [
  "Plochy s rovnakým potenciálom. Sú vždy kolmé na siločiary.",
  "Pri pohybe po ekvipotenciále pole nekoná prácu.",
  "Homogénne pole: roviny. Bodový náboj: sústredné gule."
 ]},
 { h: "Výpočty", items: [
  "Z intenzity: φ = −∫E·dr. V smere siločiar potenciál klesá. V homogénnom poli U = Ed.",
  "Bodový náboj: <b>φ = Q/(4πε₀r)</b>, nula v nekonečne.",
  "Superpozícia: φ = ΣQ<sub>i</sub>/(4πε₀r<sub>i</sub>). Sčítavajú sa čísla so znamienkami, nie vektory.",
  "Z potenciálu: <b>E = −grad φ</b>, napríklad E<sub>x</sub> = −∂φ/∂x.",
  "Energia dvojice nábojov: E<sub>p</sub> = Q₁Q₂/(4πε₀r). Pri viacerých nábojoch sčítaj všetky dvojice, každú raz."
 ]},
 { h: "Vodiče", items: [
  "V nabitom vodiči je E = 0, preto je potenciál v celom objeme rovnaký.",
  "Nabitá guľová plocha s polomerom R: vonku φ = Q/(4πε₀r), vnútri stále φ = Q/(4πε₀R).",
  "Na nesymetrickom vodiči je najväčšia hustota náboja na hrotoch. Silné pole tam ionizuje vzduch a vzniká korónový výboj."
 ]}
],
traps: [
 "Potenciál je skalár, intenzita vektor.",
 "E = 0 neznamená φ = 0 (vnútro nabitej vodivej gule).",
 "φ = 0 neznamená E = 0 (stred dipólu).",
 "Pozor na znamienka mínus vo φ = −∫E·dr a E = −grad φ."
],
examples: [
 { t: "HRW 25.21: Q₁ = +Q je v x = 0, Q₂ = −3Q v x = d. Kde na osi x je φ = 0?", s: [
  "Podmienka: Q/|x| = 3Q/|d − x|.",
  "Medzi nábojmi: d − x = 3x, teda x = d/4.",
  "Vľavo od Q₁: d − x = −3x, teda x = −d/2.",
  "Vpravo od Q₂ riešenie nie je, bližší je tam väčší záporný náboj." ]},
 { t: "Potenciál je φ(x) = 5x² (V). Aké je E<sub>x</sub> v bode x = 2 m?", s: [
  "E<sub>x</sub> = −dφ/dx = −10x.",
  "V x = 2 m: E<sub>x</sub> = −20 V/m." ]}
],
formulas: [
 { n: "Potenciál", f: "φ = E<sub>p</sub>/Q₀", w: "definícia, jednotka V" },
 { n: "Napätie", f: "U = φ<sub>A</sub> − φ<sub>B</sub> = ∫E·dr", w: "medzi bodmi A a B" },
 { n: "Práca poľa", f: "W = QU,  ΔE<sub>p</sub> = −W", w: "presun náboja" },
 { n: "Potenciál z intenzity", f: "φ = −∫E·dr", w: "od referenčného bodu" },
 { n: "Homogénne pole", f: "U = E·d", w: "pozdĺž siločiar" },
 { n: "Potenciál bodového náboja", f: "φ = Q/(4πε₀r)", w: "φ(∞) = 0" },
 { n: "Superpozícia potenciálov", f: "φ = ΣQ<sub>i</sub>/(4πε₀r<sub>i</sub>)", w: "sústava nábojov, skalárny súčet" },
 { n: "Intenzita z potenciálu", f: "E = −grad φ,  E<sub>x</sub> = −∂φ/∂x", w: "známe φ(x, y, z)" },
 { n: "Energia dvojice nábojov", f: "E<sub>p</sub> = Q₁Q₂/(4πε₀r)", w: "sústava: súčet cez dvojice" },
 { n: "Nabitá vodivá guľa", f: "φ = Q/(4πε₀R) vnútri aj na povrchu", w: "r ≤ R" },
 { n: "Elektrónvolt", f: "1 eV = 1,602·10⁻¹⁹ J", w: "energia častíc" }
],
explain: { q: "Vysvetli rozdiel medzi intenzitou a potenciálom a prečo vnútri nabitého vodiča môže byť E = 0, hoci potenciál nulový nie je.", keys: ["Intenzita je sila na jednotkový náboj (vektor), potenciál energia na jednotkový náboj (skalár)", "Intenzita je záporná derivácia potenciálu: E = −grad φ", "E = 0 znamená, že sa potenciál nemení, nie že je nulový", "Celý vodič má rovnaký potenciál, pre guľu φ = Q/(4πε₀R)"] },
quiz: [
 { q: "Elektrický potenciál je…", o: ["skalár", "vektor", "sila", "tok"], e: "Potenciál je číslo v každom bode poľa. Vektorom je intenzita E.", h: "Má potenciál smer, alebo je to len číslo so znamienkom?" },
 { q: "Čo platí vnútri nabitej vodivej gule s polomerom R?", o: ["E = 0 a φ = Q/(4πε₀R)", "E = 0 a φ = 0", "E ≠ 0 a φ je stále", "E = σ/ε₀"], e: "Pole vnútri je nulové, preto sa potenciál nemení a má rovnakú hodnotu ako na povrchu.", h: "Vnútri vodiča je E = 0, teda potenciál sa nemení. Akú hodnotu má na povrchu?" },
 { q: "Elektrón je urýchlený napätím 100 V. Akú energiu získa?", o: ["100 eV", "100 J", "1,6·10⁻¹⁹ J", "100 V"], e: "W = eU = 100 eV = 1,6·10⁻¹⁷ J.", h: "Energia W = Q·U. Elektrónvolt je energia, ktorú získa elementárny náboj pri napätí 1 V." },
 { q: "Aký je vzťah medzi ekvipotenciálnymi plochami a siločiarami?", o: ["sú na seba kolmé", "sú rovnobežné", "zvierajú uhol 45°", "nesúvisia"], e: "Po ekvipotenciále sa práca nekoná, takže E nemá zložku pozdĺž nej.", h: "Pri pohybe po ekvipotenciálnej ploche pole nekoná prácu. Kedy je práca sily nulová?" },
 { q: "Aký je potenciál náboja 1,0 nC vo vzdialenosti 0,50 m?", o: ["18 V", "9 V", "36 V", "4,5 V"], e: "φ = 8,99·10⁹·10⁻⁹/0,5 ≈ 18 V. Hodnota 36 by vyšla s r² (zámena s intenzitou).", h: "φ = kQ/r, k = 9·10⁹ N·m²/C², 1 nC = 10⁻⁹ C." },
 { q: "HRW 25.21: +Q je v x = 0 a −3Q v x = d. Kde na osi x je potenciál nulový?", o: ["x = d/4 a x = −d/2", "x = d/2 a x = −d", "x = d/3 a x = 3d/2", "len x = d/4"], e: "Z podmienky Q/|x| = 3Q/|d − x| vyjdú dva body: medzi nábojmi d/4 a vľavo od +Q bod −d/2.", h: "Q/|x| = 3Q/|d − x|. Skús zvlášť oblasť medzi nábojmi a oblasť naľavo od +Q." },
 { q: "Potenciál je φ = 5x² (V). Aká je zložka E<sub>x</sub> v bode x = 2 m?", o: ["−20 V/m", "+20 V/m", "−10 V/m", "+10 V/m"], e: "E<sub>x</sub> = −dφ/dx = −10x = −20 V/m.", h: "E<sub>x</sub> = −dφ/dx." },
 { q: "Čo platí v strede dipólu (v polovici medzi +Q a −Q)?", o: ["E ≠ 0 a φ = 0", "E = 0 a φ = 0", "E = 0 a φ ≠ 0", "E ≠ 0 a φ ≠ 0"], e: "Potenciály sa odčítajú na nulu, ale intenzity oboch nábojov mieria rovnakým smerom a sčítajú sa.", h: "Potenciály od +Q a −Q sú v strede rovnako veľké s opačným znamienkom. Intenzity oboch mieria rovnakým smerom." },
 { q: "Kde je na nesymetrickom nabitom vodiči najväčšia plošná hustota náboja?", o: ["na hrotoch", "na plochých častiach", "všade rovnaká", "vnútri vodiča"], e: "Na hrotoch je σ aj E najväčšie, preto tam vzniká korónový výboj.", h: "Kde je povrch vodiča najviac zakrivený?" },
 { q: "V homogénnom poli 200 V/m sa posunieš o 5 cm v smere poľa. Ako sa zmení potenciál?", o: ["klesne o 10 V", "vzrastie o 10 V", "klesne o 4 000 V", "nezmení sa"], e: "Δφ = −E·d = −200·0,05 = −10 V. V smere siločiar potenciál klesá.", b: true, h: "U = E·d a v smere poľa potenciál klesá. 5 cm = 0,05 m." },
 { q: "Tri rovnaké náboje +q sú vo vrcholoch rovnostranného trojuholníka so stranou a. Aká je potenciálna energia sústavy?", o: ["3kq²/a", "kq²/a", "6kq²/a", "9kq²/a"], e: "Sú tri dvojice, každá prispieva kq²/a. Hodnota 6kq²/a počíta každú dvojicu dvakrát.", b: true, h: "Spočítaj energiu každej dvojice nábojov a sčítaj. Koľko dvojíc tvoria tri náboje?" }
]
}
],
/* ------------------------------- FINAL BOSS ------------------------------- */
boss: [
 { q: "Aký smer má okamžitá rýchlosť vzhľadom na trajektóriu?", o: ["dotyčnice", "kolmice", "do stredu krivosti", "vždy rovnaký ako zrýchlenie"], e: "v = dr/dt mieri vždy po dotyčnici k trajektórii.", h: "Rýchlosť je derivácia polohy. Kam mieri, keď sa bod pohybuje po krivke?" },
 { q: "Vodorovný vrh z výšky 20 m rýchlosťou 15 m/s (g = 10 m/s²). Aký je dolet?", o: ["30 m", "15 m", "45 m", "60 m"], e: "Doba pádu t = √(2·20/10) = 2 s, dolet 15·2 = 30 m.", h: "Doba pádu t = √(2h/g), dolet D = v·t." },
 { q: "Bod obieha s ω = 10 rad/s po kružnici R = 0,3 m. Aké je normálové zrýchlenie?", o: ["30 m/s²", "3 m/s²", "300 m/s²", "0,3 m/s²"], e: "a<sub>n</sub> = ω²R = 100·0,3 = 30 m/s².", h: "a<sub>n</sub> = ω²R." },
 { q: "Teleso dopadne voľným pádom rýchlosťou 20 m/s (g = 10 m/s²). Z akej výšky padalo?", o: ["20 m", "10 m", "40 m", "2 m"], e: "h = v²/(2g) = 400/20 = 20 m.", h: "v² = 2gh." },
 { q: "Na teleso 2 kg v pokoji pôsobí 3 s výsledná sila 6 N. Akú rýchlosť získa?", o: ["9 m/s", "3 m/s", "6 m/s", "18 m/s"], e: "Impulz F·t = 18 N·s = m·v, teda v = 9 m/s.", h: "Impulz: F·t = m·v." },
 { q: "Pružina s tuhosťou 400 N/m je stlačená o 5 cm. Aká je jej potenciálna energia?", o: ["0,5 J", "1 J", "10 J", "20 J"], e: "E<sub>p</sub> = ½kx² = ½·400·0,05² = 0,5 J.", h: "E<sub>p</sub> = ½kx², 5 cm = 0,05 m." },
 { q: "Vozík 2 kg idúci 3 m/s narazí do stojaceho vozíka 1 kg a spoja sa. Aká je spoločná rýchlosť?", o: ["2 m/s", "1 m/s", "1,5 m/s", "3 m/s"], e: "Zachovanie hybnosti: 2·3 = (2 + 1)·v, teda v = 2 m/s.", h: "Zachovanie hybnosti: m₁v = (m₁ + m₂)V." },
 { q: "Akú prácu vykoná normálová sila pri posune telesa po vodorovnej podlahe?", o: ["nulovú", "mgs", "f·mg·s", "zápornú"], e: "Normálová sila je kolmá na posunutie, cos 90° = 0.", h: "Aký uhol zviera normálová sila s posunutím?" },
 { q: "Aký je moment zotrvačnosti disku okolo osi kolmej na disk, prechádzajúcej jeho okrajom?", o: ["(3/2)mR²", "½mR²", "mR²", "2mR²"], e: "Steinerova veta: ½mR² + mR² = (3/2)mR².", h: "Steinerova veta: J = ½mR² + mR²." },
 { q: "Obruč sa valí bez kĺzania. Aký podiel jej kinetickej energie tvorí rotácia?", o: ["1/2", "1/3", "2/3", "celú"], e: "Rotácia: ½·mR²·(v/R)² = ½mv². Posuv: ½mv². Každá časť je polovica.", h: "Obruč má J = mR² a ω = v/R. Porovnaj ½Jω² s ½mv²." },
 { q: "Planéta má dvojnásobnú hmotnosť a dvojnásobný polomer oproti Zemi. Aké je zrýchlenie na jej povrchu?", o: ["g/2", "2g", "g", "g/4"], e: "a<sub>g</sub> = GM/R²: 2/(2²) = 1/2.", h: "g ~ M/R²." },
 { q: "Ktorý dôvod menšieho g na rovníku je nepravdivý?", o: ["G je na rovníku menšie", "rotácia Zeme", "sploštenie Zeme", "väčšia vzdialenosť od stredu Zeme"], e: "G je univerzálna konštanta, všade rovnaká.", h: "Skutočné dôvody sú tri: rotácia, sploštenie a nehomogenita Zeme. Ktorá možnosť medzi ne nepatrí?" },
 { q: "Náboje +2 μC a −2 μC sú vo vzdialenosti 0,3 m. Aká sila medzi nimi pôsobí?", o: ["0,4 N, príťažlivá", "0,4 N, odpudivá", "0,13 N, príťažlivá", "1,2 N, príťažlivá"], e: "F = 8,99·10⁹·4·10⁻¹²/0,09 ≈ 0,40 N. Opačné náboje sa priťahujú.", h: "F = k|Q₁Q₂|/r², opačné náboje sa priťahujú." },
 { q: "Čo platí presne v strede medzi dvoma rovnakými kladnými nábojmi?", o: ["E = 0 a φ ≠ 0", "E = 0 a φ = 0", "E ≠ 0 a φ = 0", "E ≠ 0 a φ ≠ 0"], e: "Intenzity mieria proti sebe a rušia sa. Potenciály sú oba kladné a sčítajú sa.", lv: "l7", h: "Intenzity od oboch nábojov sú v strede rovnako veľké a opačné. Potenciály sú čísla so znamienkom." },
 { q: "Prečo mikrovlnná rúra ohrieva vodu?", o: ["striedavé pole otáča dipólové molekuly vody", "ionizuje molekuly vody", "zvyšuje elektrický náboj vody", "homogénne pole ťahá molekuly jedným smerom"], e: "Molekula vody je dipól. Pole ju neustále pretáča a zrážky so susedmi dávajú teplo.", h: "Molekula vody je dipól a pole v rúre neustále mení smer." },
 { q: "Náboj Q je v strede gule. Ako sa zmení tok jej povrchom, ak polomer zdvojnásobíme?", o: ["nezmení sa", "bude štvornásobný", "bude dvojnásobný", "bude polovičný"], e: "Tok závisí len od náboja vnútri: Φ = Q/ε₀.", h: "Tok závisí len od náboja vnútri plochy." },
 { q: "Vodič má na povrchu σ = 8,854·10⁻⁹ C/m². Aká je intenzita tesne pri povrchu?", o: ["1 000 V/m", "500 V/m", "2 000 V/m", "nulová"], e: "E = σ/ε₀ = 8,854·10⁻⁹/8,854·10⁻¹² = 1 000 V/m. 500 V/m by platilo pre nevodivú dosku.", h: "Vodič: E = σ/ε₀." },
 { q: "Medzi doskami vzdialenými 2 mm je homogénne pole 1 000 V/m. Aké je medzi nimi napätie?", o: ["2 V", "0,5 V", "20 V", "2 000 V"], e: "U = E·d = 1000·0,002 = 2 V.", lv: "l7", h: "U = E·d, 2 mm = 0,002 m." },
 { q: "Potenciál je φ = 3x + 4y (V, m). Aká je veľkosť intenzity?", o: ["5 V/m", "3 V/m", "4 V/m", "7 V/m"], e: "E = (−3, −4) V/m, veľkosť √(9 + 16) = 5 V/m.", lv: "l7", h: "E<sub>x</sub> = −3 V/m, E<sub>y</sub> = −4 V/m, veľkosť √(E<sub>x</sub>² + E<sub>y</sub>²)." },
 { q: "Protón prejde z miesta s potenciálom 100 V do miesta s potenciálom 0 V. Akú prácu vykoná pole?", o: ["+100 eV", "−100 eV", "nulovú", "+100 J"], e: "W = QU = e·100 V = +100 eV. Kladný náboj sa pohybuje v smere klesajúceho potenciálu.", lv: "l7", h: "W = Q·(φ<sub>A</sub> − φ<sub>B</sub>), náboj protónu je +e." }
]
});

/* hotové ilustrácie postupov; v dátach { pic: "energia" | "hybnost" | "kinematika", cap: "popis" } */
Object.assign(PICS, {
  energia: `<svg viewBox="0 0 300 160" role="img" aria-label="Gulička na vrchu svahu má polohovú energiu, dole pohybovú">
    <path d="M30,46 Q72,136 200,136 L290,136" fill="none" class="sf"/>
    <line x1="14" y1="46" x2="14" y2="136" class="dash"/><text x="24" y="96" class="m">h</text>
    <circle cx="33" cy="33" r="10" class="bd"/><circle cx="222" cy="126" r="10" class="bd"/>
    ${arrow(234, 126, 282, 126, "fa")}<text x="262" y="112">v</text>
    <text x="118" y="34">Eₚ = mgh</text><text x="205" y="92">Eₖ = ½mv²</text></svg>`,
  hybnost: `<svg viewBox="0 0 300 160" role="img" aria-label="Dva vozíky pred zrážkou a spojené po zrážke">
    <line x1="10" y1="118" x2="290" y2="118" class="sf"/><line x1="158" y1="20" x2="158" y2="140" class="dash"/>
    <text x="80" y="26" class="m">pred zrážkou</text><text x="228" y="26" class="m">po zrážke</text>
    <rect x="18" y="88" width="42" height="30" rx="3" class="bd"/><text x="39" y="104">m₁</text>
    ${arrow(64, 103, 98, 103, "fa")}<text x="82" y="88">v</text>
    <rect x="104" y="88" width="42" height="30" rx="3" class="bd"/><text x="125" y="104">m₂</text>
    <rect x="172" y="88" width="42" height="30" rx="3" class="bd"/><text x="193" y="104">m₁</text>
    <rect x="214" y="88" width="42" height="30" rx="3" class="bd"/><text x="235" y="104">m₂</text>
    ${arrow(260, 103, 290, 103, "fa")}<text x="276" y="88">V</text>
    <text x="150" y="150" class="m">m₁v = (m₁ + m₂)V</text></svg>`,
  kinematika: `<svg viewBox="0 0 300 160" role="img" aria-label="Parabolická dráha šikmého vrhu s počiatočnou rýchlosťou">
    ${arrow(24, 138, 290, 138, "ax")}${arrow(24, 138, 24, 16, "ax")}<text x="282" y="150" class="m">x</text><text x="12" y="22" class="m">y</text>
    <path d="M24,138 Q146,-40 268,138" fill="none" class="dash"/>
    <circle cx="146" cy="49" r="7" class="bd"/>${arrow(24, 138, 62, 84, "fa")}<text x="74" y="78">v₀</text>
    <text x="216" y="34">x(t), y(t)</text></svg>`
});
Object.assign(PICS, (() => {
  const S = (h, alt, g) => `<svg viewBox="0 0 300 ${h}" role="img" aria-label="${alt}">${g}</svg>`;
  const t = (x, y, s, c) => `<text x="${x}" y="${y}"${c ? ` class="${c}"` : ""}>${s}</text>`;
  const ln = (x1, y1, x2, y2, c) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${c}"/>`;
  const ci = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" class="${c}"/>`;
  const ch = (x, y, s, r) => ci(x, y, r || 11, "bd") + t(x, y + 1, s);
  const rad = (cx, cy, r1, r2, n, inw) => Array.from({ length: n }, (_, i) => { const a = 2 * Math.PI * i / n, c = Math.cos(a), q = Math.sin(a);
    return inw ? arrow(cx + r2 * c, cy + r2 * q, cx + r1 * c, cy + r1 * q, "fl") : arrow(cx + r1 * c, cy + r1 * q, cx + r2 * c, cy + r2 * q, "fl"); }).join("");
  const field = (ys, x1, x2) => ys.map(y => arrow(x1, y, x2, y, "fl")).join("");
  const sub = (a, b) => `${a}<tspan font-size="10" dy="4">${b}</tspan>`;
  return {
    draha: S(150, "Zakrivená trajektória medzi bodmi A a B a priame posunutie", `<path d="M40,110 C90,10 170,150 250,60" class="th"/>` + arrow(40, 110, 250, 60, "fa") + ci(40, 110, 4, "bd") + ci(250, 60, 4, "bd") + t(28, 122, "A") + t(264, 52, "B") + t(120, 30, "trajektória, dĺžka = dráha s", "s") + t(170, 100, "Δr")),
    atan: S(170, "Bod na krivke s tečným zrýchlením po dotyčnici a normálovým do stredu krivosti", `<path d="M30,140 Q150,-20 270,140" class="th"/>` + arrow(90, 80, 135.8, 49.5, "fa") + t(148, 40, "aₜ") + arrow(90, 80, 117.8, 121.6, "fa") + t(128, 134, "aₙ") + arrow(90, 80, 163.6, 91.1, "ac") + t(176, 94, "a", "r") + ci(90, 80, 5, "bd")),
    kruznica: S(180, "Pohyb po kružnici: rýchlosť po dotyčnici, normálové zrýchlenie do stredu", ci(150, 95, 60, "ol") + ln(150, 95, 202, 65, "dash") + t(170, 72, "R", "m") + arrow(202, 65, 174.5, 17.4, "fa") + t(162, 14, "v") + arrow(202, 65, 172, 82.3, "ac") + t(196, 92, "aₙ", "r") + ci(150, 95, 3, "bd") + ci(202, 65, 5, "bd") + t(140, 112, "ω", "m")),
    vodorovny: S(172, "Vodorovný vrh z veže: počiatočná rýchlosť vodorovne, dráha je polovica paraboly", ln(20, 150, 290, 150, "sf") + `<rect x="30" y="50" width="30" height="100" class="bd"/><path d="M60,50 Q160,50 230,150" class="dash"/>` + ln(18, 50, 18, 150, "dash") + t(9, 100, "h", "m") + arrow(60, 50, 106, 50, "fa") + t(86, 37, "v₀") + ci(60, 50, 5, "bd") + ci(230, 150, 4, "bd") + t(145, 163, "D = v₀·t", "m")),
    moment: S(150, "Tyč otočná okolo osi, sila pôsobí na konci, rameno je vzdialenosť od osi", ln(50, 90, 240, 90, "sf") + ci(50, 90, 7, "bd") + arrow(240, 90, 240, 136, "fa") + t(255, 122, "F") + ln(50, 70, 240, 70, "dash") + t(145, 58, "d (rameno)", "m") + t(50, 112, "os", "s") + t(150, 26, "M = F·d")),
    steiner: S(150, "Tyč s osou cez ťažisko a rovnobežnou osou na konci vo vzdialenosti d", ln(40, 100, 260, 100, "sf") + ln(150, 42, 150, 126, "dash") + t(150, 30, sub("J", "T")) + ln(40, 42, 40, 126, "gs") + t(40, 30, "J") + ln(40, 122, 150, 122, "ax") + t(95, 137, "d = L/2", "m") + t(215, 60, "J = " + sub("J", "T") + `<tspan dy="-4"> + md²</tspan>`)),
    valenie: S(172, "Valiace sa koleso: ťažisko má rýchlosť v, vrchný bod dvojnásobnú, bod dotyku stojí", ln(20, 150, 290, 150, "sf") + ci(150, 95, 55, "ol") + arrow(150, 95, 205, 95, "fa") + t(214, 84, sub("v", "T")) + arrow(150, 40, 258, 40, "fa") + t(272, 30, sub("2v", "T")) + ci(150, 95, 3, "bd") + ci(150, 150, 4, "bd") + t(150, 163, "bod dotyku: v = 0", "m") + t(124, 78, "ω", "m")),
    supka: S(172, "Teleso mimo guľovej šupky je priťahované k stredu, vnútri šupky je sila nulová", ci(72, 85, 45, "ol") + ci(72, 85, 2.5, "bd") + ci(140, 85, 5, "bd") + arrow(134, 85, 96, 85, "fa") + t(128, 70, "F") + t(80, 152, "mimo: ako bod v strede", "s") + ci(228, 85, 45, "ol") + ci(242, 70, 5, "bd") + t(226, 98, "F = 0") + t(228, 152, "vnútri šupky", "s")),
    vyska: S(172, "Zem s polomerom R a teleso vo výške h nad povrchom", ci(105, 112, 58, "bd") + ci(105, 112, 2.5, "bd") + ln(105, 112, 105, 54, "dash") + t(116, 86, "R", "m") + ln(105, 54, 105, 20, "gs") + t(116, 36, "h", "m") + ci(105, 18, 5, "bd") + t(105, 130, "Zem", "s") + t(228, 60, sub("a", "g") + `<tspan dy="-4"> = GM/(R + h)²</tspan>`) + t(232, 90, "R + h sa meria", "s") + t(232, 104, "od stredu Zeme", "s")),
    silociary: S(172, "Siločiary vychádzajú z kladného náboja a vchádzajú do záporného", rad(80, 82, 15, 54, 8) + ch(80, 82, "+") + rad(220, 82, 17, 56, 8, true) + ch(220, 82, "−") + t(80, 158, "od kladného", "s") + t(220, 158, "k zápornému", "s")),
    superpozicia: S(130, "Tretí náboj medzi dvoma kladnými nábojmi, sily od oboch mieria proti sebe", ln(50, 70, 250, 70, "dash") + ch(50, 70, "Q₁", 14) + ch(250, 70, "Q₂", 18) + arrow(117, 70, 156, 70, "fa") + t(160, 54, "od Q₁", "s") + arrow(117, 70, 78, 70, "fa") + t(86, 54, "od Q₂", "s") + ci(117, 70, 6, "bd") + t(83, 104, "x", "m") + t(183, 104, "L − x", "m") + ln(117, 92, 117, 112, "dash")),
    stvorec: S(196, "Štvorec s nábojmi Q1 v protiľahlých vrcholoch a Q2 vo zvyšných, sily na jeden náboj Q1", `<rect x="110" y="55" width="110" height="110" class="dash"/>` + arrow(110, 55, 78, 23, "fa") + t(60, 14, "od Q₁", "s") + arrow(110, 55, 164, 55, "fa") + arrow(110, 55, 110, 109, "fa") + t(170, 40, "od Q₂", "s") + ch(110, 55, "Q₁", 14) + ch(220, 165, "Q₁", 14) + ch(220, 55, "Q₂", 14) + ch(110, 165, "Q₂", 14) + t(165, 184, "a", "m")),
    dipol: S(172, "Dipól v homogénnom poli: sily na oba náboje sú opačné a dipól otáčajú", field([24, 152], 20, 280) + t(268, 12, "E") + ln(115, 115, 185, 55, "sf") + arrow(185, 55, 238, 55, "fa") + t(250, 44, "F") + arrow(115, 115, 62, 115, "fa") + t(50, 104, "F") + ch(185, 55, "+") + ch(115, 115, "−") + t(160, 98, "p") + t(150, 140, "súčet síl je 0, moment nie", "s")),
    valecpole: S(160, "Uzavretý valec v homogénnom poli: jednou podstavou pole vchádza, druhou vychádza", field([30, 80, 130], 15, 285) + `<ellipse cx="90" cy="80" rx="13" ry="40" class="gs"/><ellipse cx="210" cy="80" rx="13" ry="40" class="gs"/>` + ln(90, 40, 210, 40, "gs") + ln(90, 120, 210, 120, "gs") + t(56, 60, "−ES") + t(246, 60, "+ES") + t(150, 100, "plášť: 0", "s") + t(150, 150, "spolu Φ = 0", "m")),
    gauss3: S(172, "Tri Gaussove plochy: guľa okolo bodového náboja, valec okolo vlákna, krabička cez dosku", t(52, 12, "bodový náboj", "s") + ci(52, 80, 36, "gs") + ch(52, 80, "+", 9) + t(52, 152, "guľa", "m") + t(150, 12, "vlákno", "s") + ln(150, 22, 150, 136, "sf") + `<ellipse cx="150" cy="48" rx="28" ry="9" class="gs"/><ellipse cx="150" cy="110" rx="28" ry="9" class="gs"/>` + ln(122, 48, 122, 110, "gs") + ln(178, 48, 178, 110, "gs") + t(150, 152, "valec", "m") + t(250, 12, "doska", "s") + ln(250, 22, 250, 136, "sf") + `<rect x="226" y="60" width="48" height="38" class="gs"/>` + t(250, 152, "krabička", "m")),
    pologula: S(164, "Pologuľa v homogénnom poli: siločiary vchádzajú základňou a vychádzajú guľovým povrchom", field([55, 80, 105], 20, 282) + ln(110, 35, 110, 125, "gs") + `<path d="M110,35 A45,45 0 0 1 110,125" class="gs"/>` + t(70, 146, "základňa: −πR²E", "s") + t(214, 146, "guľový povrch: +πR²E", "s")),
    supkavodic: S(190, "Nevodivá guľa s nábojom plus Q vo vodivej guľovej vrstve s nábojom mínus Q", ci(80, 95, 74, "ol") + ci(80, 95, 54, "ol") + ci(80, 95, 26, "bd") + t(80, 96, "+Q") + t(80, 32, "vodič", "s") + t(228, 40, "guľa: E ~ r", "s") + t(228, 68, "medzera: E ~ 1/r²", "s") + t(228, 96, "vo vodiči: E = 0", "s") + t(228, 124, "vonku: E = 0", "s") + t(228, 156, "vnútorná stena: −Q", "s")),
    ekvi: S(176, "Ekvipotenciálne plochy sú kolmé na siločiary: gule okolo náboja, roviny v homogénnom poli", rad(78, 80, 14, 62, 8) + ci(78, 80, 28, "gs") + ci(78, 80, 46, "gs") + ch(78, 80, "+", 9) + field([40, 80, 120], 168, 288) + ln(200, 24, 200, 136, "gs") + ln(232, 24, 232, 136, "gs") + ln(264, 24, 264, 136, "gs") + t(150, 164, "modré: siločiary · červené: ekvipotenciály", "s")),
    nulovyphi: S(124, "Os x s nábojmi plus Q a mínus 3Q a dva body s nulovým potenciálom", arrow(15, 60, 288, 60, "ax") + t(282, 76, "x", "m") + ch(120, 60, "+", 10) + ch(240, 60, "−", 13) + ci(150, 60, 6, "gs") + ci(60, 60, 6, "gs") + t(120, 88, "+Q", "m") + t(240, 90, "−3Q", "m") + t(150, 36, "φ = 0") + t(60, 36, "φ = 0") + t(150, 108, "x = d/4", "s") + t(60, 108, "x = −d/2", "s"))
  };
})());

GEN.fy1 = {
 l1: [
  () => { const a = rnd([2, 3, 4]), b = rnd([1, 2, 3, 5]), t = rnd([2, 3]), v = 2 * a * t + b;
    return hint("Rýchlosť je derivácia polohy: v = dx/dt. Derivuj člen po člene a dosaď čas.", mk(`Poloha je x(t) = ${a}t² + ${b}t (m, s). Aká je rýchlosť v čase t = ${t} s?`, v, "m/s", [a * t + b, a * t * t + b * t, 2 * a * t], `v = dx/dt = ${2 * a}t + ${b}. V čase ${t} s je to ${v} m/s.`)); },
  () => { const t = rnd([2, 3, 4, 5]), h = 5 * t * t;
    return hint("Voľný pád: h = ½gt².", mk(`Kameň padá voľným pádom ${t} s (g = 10 m/s²). Akú výšku prepadol?`, h, "m", [10 * t, 10 * t * t, 5 * t], `h = ½gt² = ½·10·${t}² = ${h} m.`)); },
  () => { const v = rnd([10, 20, 30]), R = rnd([50, 100, 200]), a = v * v / R;
    return hint("Normálové zrýchlenie: a<sub>n</sub> = v²/R.", mk(`Auto ide zákrutou s polomerom ${R} m stálou rýchlosťou ${v} m/s. Aké je jeho normálové zrýchlenie?`, a, "m/s²", [v / R, 0, 2 * a], `a<sub>n</sub> = v²/R = ${v * v}/${R} = ${num(a)} m/s².`)); },
  () => { const t = rnd([1, 2, 3]), h = 5 * t * t, v = rnd([4, 6, 8, 12]), D = v * t;
    return hint("Najprv doba pádu t = √(2h/g), potom dolet D = v·t.", mk(`Guľku vystrelíš vodorovne rýchlosťou ${v} m/s z výšky ${h} m (g = 10 m/s²). Ako ďaleko dopadne?`, D, "m", [v * h / 10, v, h], `Doba pádu t = √(2·${h}/10) = ${t} s, dolet ${v}·${t} = ${D} m.`)); },
  () => { const w = rnd([2, 4, 5]), R = rnd([0.2, 0.5, 1.5]), v = w * R;
    return hint("Rýchlosť bodu na obvode: v = ωR.", mk(`Koleso s polomerom ${num(R)} m sa otáča uhlovou rýchlosťou ${w} rad/s. Aká je rýchlosť bodu na obvode?`, v, "m/s", [w / R, w * w * R, w * R * R], `v = ωR = ${w}·${num(R)} = ${num(v)} m/s.`)); },
  () => { const v = rnd([10, 20, 30]), a = rnd([2, 4, 5]), s = v * v / (2 * a);
    return hint("Čas v zadaní nie je. Použi v² = v₀² − 2as a koncovú rýchlosť 0.", mk(`Auto brzdí z rýchlosti ${v} m/s so stálym spomalením ${a} m/s². Aká je brzdná dráha?`, s, "m", [v * v / a, v / a, v / (2 * a)], `Z v² = v₀² − 2as: s = v₀²/(2a) = ${v * v}/${2 * a} = ${num(s)} m.`)); }
 ],
 l2: [
  () => { const m = rnd([2, 4, 5]), F = rnd([10, 20, 30]), a = F / m;
    return hint("Druhý Newtonov zákon: a = F/m.", mk(`Na teleso s hmotnosťou ${m} kg pôsobí výsledná sila ${F} N. Aké má zrýchlenie?`, a, "m/s²", [F * m, m / F, F / (2 * m)], `a = F/m = ${F}/${m} = ${num(a)} m/s².`)); },
  () => { const m = rnd([50, 60, 80]), a = rnd([1, 2, 3]), N = m * (10 + a);
    return hint("Váha ukazuje normálovú silu. Pri zrýchlení nahor N = m(g + a).", mk(`Človek s hmotnosťou ${m} kg stojí na váhe vo výťahu, ktorý zrýchľuje nahor ${a} m/s² (g = 10 m/s²). Akú silu váha ukáže?`, N, "N", [m * (10 - a), m * 10, m * a], `N = m(g + a) = ${m}·${10 + a} = ${N} N.`)); },
  () => { const F = rnd([20, 40, 100]), s = rnd([2, 5, 10]), W = F * s / 2;
    return hint("W = F·s·cos α, cos 60° = 0,5.", mk(`Sila ${F} N pôsobí pod uhlom 60° k smeru pohybu na dráhe ${s} m. Akú prácu vykoná?`, W, "J", [F * s, F * s * 0.866, 0], `W = F·s·cos 60° = ${F}·${s}·0,5 = ${W} J.`)); },
  () => { const m = rnd([2, 4, 10]), v = rnd([3, 5, 10]), E = m * v * v / 2;
    return hint("E<sub>k</sub> = ½mv².", mk(`Aká je kinetická energia telesa s hmotnosťou ${m} kg pri rýchlosti ${v} m/s?`, E, "J", [m * v * v, m * v, m * v / 2], `E<sub>k</sub> = ½mv² = ½·${m}·${v * v} = ${E} J.`)); },
  () => { const m1 = rnd([2, 3, 4]), v = rnd([6, 12]), m2 = rnd([1, 2]), V = m1 * v / (m1 + m2);
    return hint("Zachovanie hybnosti: m₁v = (m₁ + m₂)V.", mk(`Vozík ${m1} kg idúci ${v} m/s narazí do stojaceho vozíka ${m2} kg a spoja sa. Aká je spoločná rýchlosť?`, V, "m/s", [v, v / 2, m2 * v / (m1 + m2)], `Hybnosť: ${m1}·${v} = (${m1} + ${m2})·V, teda V = ${num(V)} m/s.`)); },
  () => { const k = rnd([100, 200, 400]), x = rnd([5, 10, 20]), E = k * x * x / 20000;
    return hint("E<sub>p</sub> = ½kx². Stlačenie prepočítaj z cm na metre.", mk(`Pružina s tuhosťou ${k} N/m je stlačená o ${x} cm. Aká je jej potenciálna energia?`, E, "J", [2 * E, k * x / 200, k * x / 100], `E<sub>p</sub> = ½kx² = ½·${k}·${num(x / 100)}² = ${num(E)} J.`)); },
  () => { const m = rnd([0.5, 1, 2]), v = rnd([10, 20]), t = rnd([0.01, 0.05, 0.1]), F = m * v / t;
    return hint("Impulz sily: F = m·Δv/Δt.", mk(`Teleso s hmotnosťou ${num(m)} kg zastaví z rýchlosti ${v} m/s za ${num(t)} s. Aká stredná sila naň pôsobila?`, F, "N", [m * v, m * v * t, m * v / (2 * t)], `F = Δp/Δt = ${num(m * v)}/${num(t)} = ${num(F)} N.`)); }
 ],
 l3: [
  () => { const F = rnd([10, 20, 50]), d = rnd([0.2, 0.4, 0.5]), M = F * d;
    return hint("Moment sily: M = F·d.", mk(`Sila ${F} N pôsobí kolmo na rameno dlhé ${num(d)} m. Aký je moment sily?`, M, "N·m", [F / d, F * d * d, F], `M = F·d = ${F}·${num(d)} = ${num(M)} N·m.`)); },
  () => { const m1 = rnd([1, 2]), m2 = rnd([3, 6]), L = rnd([4, 8]), x = m2 * L / (m1 + m2);
    return hint("Ťažisko: x<sub>T</sub> = (m₁·0 + m₂·L)/(m₁ + m₂).", mk(`Teleso ${m1} kg je v bode x = 0 a teleso ${m2} kg v bode x = ${L} m. Kde je ťažisko?`, x, "m", [L / 2, m1 * L / (m1 + m2), L], `x<sub>T</sub> = (${m1}·0 + ${m2}·${L})/(${m1} + ${m2}) = ${num(x)} m.`)); },
  () => { const m = rnd([2, 4, 10]), R = rnd([0.1, 0.2, 0.5]), J = m * R * R / 2;
    return hint("Plný disk: J = ½mR².", mk(`Aký je moment zotrvačnosti plného disku s hmotnosťou ${m} kg a polomerom ${num(R)} m okolo jeho osi?`, J, "kg·m²", [m * R * R, m * R / 2, 0.4 * m * R * R], `J = ½mR² = ½·${m}·${num(R)}² = ${num(J)} kg·m².`)); },
  () => { const J1 = rnd([4, 6, 8]), w = rnd([1, 2, 3]), J2 = rnd([1, 2]), w2 = J1 * w / J2;
    return hint("Zachovanie momentu hybnosti: J₁ω₁ = J₂ω₂.", mk(`Krasokorčuliarka sa točí ${w} rad/s s momentom zotrvačnosti ${J1} kg·m². Pritiahne ruky a ten klesne na ${J2} kg·m². Aká bude uhlová rýchlosť?`, w2, "rad/s", [w, J2 * w / J1, J1 * w], `J₁ω₁ = J₂ω₂, teda ω₂ = ${J1}·${w}/${J2} = ${num(w2)} rad/s.`)); },
  () => { const J = rnd([0.5, 2, 4]), w = rnd([2, 4, 10]), E = J * w * w / 2;
    return hint("Kinetická energia rotácie: E<sub>k</sub> = ½Jω².", mk(`Zotrvačník s momentom zotrvačnosti ${num(J)} kg·m² sa otáča ${w} rad/s. Akú má kinetickú energiu?`, E, "J", [J * w * w, J * w, J * w / 2], `E<sub>k</sub> = ½Jω² = ½·${num(J)}·${w * w} = ${num(E)} J.`)); },
  () => { const M = rnd([2, 6, 10]), J = rnd([0.5, 2, 4]), e = M / J;
    return hint("Pohybová rovnica rotácie: ε = M/J.", mk(`Na teleso s momentom zotrvačnosti ${num(J)} kg·m² pôsobí moment sily ${M} N·m. Aké je uhlové zrýchlenie?`, e, "rad/s²", [M * J, J / M, M], `ε = M/J = ${M}/${num(J)} = ${num(e)} rad/s².`)); }
 ],
 l4: [
  () => { const k = rnd([2, 3, 4, 5]);
    return hint("Sila klesá s druhou mocninou vzdialenosti: F ~ 1/r².", mk(`Vzdialenosť stredov dvoch telies sa zväčší ${k}-krát. Koľkokrát klesne gravitačná sila?`, k * k, "-krát", [k, 2 * k, k * k * k], `Sila je úmerná 1/r², klesne teda ${k}² = ${k * k}-krát.`)); },
  () => { const n = rnd([1, 2, 3]), a = 9.8 / ((n + 1) * (n + 1));
    return hint("Vzdialenosť od stredu je R + h, takže a<sub>g</sub> = 9,8·(R/(R + h))².", mk(`Aké je gravitačné zrýchlenie vo výške ${n === 1 ? "R" : n + "R"} nad povrchom Zeme (na povrchu 9,8 m/s²)?`, a, "m/s²", [9.8 / (n + 1), 9.8 / (n * n + 1), 9.8 / (2 * n + 2) / 2], `Vzdialenosť od stredu je ${n + 1}R, zrýchlenie je 9,8/${(n + 1) * (n + 1)} = ${num(a)} m/s².`)); },
  () => { const a = rnd([2, 4, 8]), b = rnd([2, 4]), r = a / (b * b);
    return hint("g ~ M/R²: vynásob pomerom hmotností a vydeľ druhou mocninou pomeru polomerov.", mk(`Planéta má ${a}-krát väčšiu hmotnosť a ${b}-krát väčší polomer než Zem. Koľkonásobok zemského g je zrýchlenie na jej povrchu?`, r, "g", [a / b, a * b, b * b / a], `a<sub>g</sub> = GM/R², teda ${a}/${b}² = ${num(r)} g.`)); },
  () => { const a = rnd([2, 4, 8]), b = rnd([2, 4]), r = a / (b * b);
    return hint("F ~ m₁m₂/r²: vynásob pomerom hmotnosti a vydeľ druhou mocninou pomeru vzdialeností.", mk(`Hmotnosť jedného z dvoch telies sa zväčší ${a}-krát a vzdialenosť ich stredov ${b}-krát. Na koľkonásobok sa zmení gravitačná sila?`, r, "-násobok", [a / b, a * b, b * b / a], `F je úmerná m₁m₂/r²: ${a}/${b}² = ${num(r)}-násobok.`)); }
 ],
 l5: [
  () => { const n = rnd([5, 10, 20, 50]);
    return hint("Počet elektrónov n = Q/e, e = 1,602·10⁻¹⁹ C.", mk(`Teleso má náboj −${num(n * 1.602e-19)} C. Koľko elektrónov má navyše?`, n, "", [n * 10, n / 5, n * 2], `n = Q/e = ${num(n * 1.602e-19)}/1,602·10⁻¹⁹ = ${n}.`)); },
  () => { const q1 = rnd([1, 2, 3]), q2 = rnd([1, 2, 4]), r = rnd([0.1, 0.3, 1]), F = 9e9 * q1 * q2 * 1e-12 / (r * r);
    return hint("Coulombov zákon: F = k·|Q₁Q₂|/r², 1 μC = 10⁻⁶ C.", mk(`Náboje ${q1} μC a ${q2} μC sú vo vzdialenosti ${num(r)} m. Akou silou na seba pôsobia (k = 9·10⁹ N·m²/C²)?`, F, "N", [F * r, F * 1000, F / 10], `F = k·Q₁Q₂/r² = 9·10⁹·${q1}·10⁻⁶·${q2}·10⁻⁶/${num(r)}² = ${num(F)} N.`)); },
  () => { const F = rnd([0.01, 0.02, 0.06]), Q = rnd([1, 2, 5]), E = F / (Q * 1e-6);
    return hint("Intenzita: E = F/Q, 1 μC = 10⁻⁶ C.", mk(`Na náboj ${Q} μC pôsobí v poli sila ${num(F)} N. Aká je intenzita poľa?`, E, "N/C", [F * Q, E / 1000, E * 10], `E = F/Q = ${num(F)}/${Q}·10⁻⁶ = ${num(E)} N/C.`)); },
  () => { const Q = rnd([1, 2, 4]), r = rnd([0.1, 0.5, 2]), E = 9 * Q / (r * r);
    return hint("Pole bodového náboja: E = kQ/r², 1 nC = 10⁻⁹ C.", mk(`Aká je intenzita poľa bodového náboja ${Q} nC vo vzdialenosti ${num(r)} m (k = 9·10⁹ N·m²/C²)?`, E, "N/C", [9 * Q / r, 9 * Q * r, E * 10], `E = k·Q/r² = 9·10⁹·${Q}·10⁻⁹/${num(r)}² = ${num(E)} N/C.`)); },
  () => { const k = rnd([2, 3, 4]), L = rnd([12, 60]), x = L / (1 + k);
    return hint("Sily sa rovnajú, keď náboj/x² je pre oba náboje rovnaké. Odmocni a vyrieš pre x.", mk(`Kladné náboje Q a ${k * k}Q sú ${L} cm od seba. Ako ďaleko od menšieho náboja je bod s nulovou silou na tretí náboj?`, x, "cm", [L / 2, L / (1 + k * k), L * k / (1 + k)], `x = L·√Q₁/(√Q₁ + √Q₂) = ${L}/(1 + ${k}) = ${num(x)} cm.`)); },
  () => { const Q = rnd([2, 5]), E = rnd([1000, 4000]), F = Q * 1e-6 * E;
    return hint("F = Q·E, 1 μC = 10⁻⁶ C.", mk(`Náboj ${Q} μC je v poli s intenzitou ${E} N/C. Aká sila naň pôsobí?`, F, "N", [F * 1000, E / Q, F / 10], `F = QE = ${Q}·10⁻⁶·${E} = ${num(F)} N.`)); }
 ],
 l6: [
  () => { const E = rnd([100, 200, 400]), S = rnd([0.5, 2]), al = rnd([0, 60]), F = E * S * (al ? 0.5 : 1);
    return hint("Φ = E·S·cos α.", mk(`Homogénne pole ${E} N/C prechádza rovinnou plochou ${num(S)} m². Normála plochy zviera s poľom uhol ${al}°. Aký je tok?`, F, "N·m²/C", [E * S * 0.866, E / S, 0], `Φ = ES cos α = ${E}·${num(S)}·${al ? "0,5" : "1"} = ${num(F)} N·m²/C.`)); },
  () => { const F0 = rnd([300, 600, 1200]), k = rnd([2, 3, 4]);
    return hint("Tok závisí len od náboja vnútri, nie od veľkosti plochy.", mk(`Uzavretou plochou s nábojom Q vnútri prechádza tok ${F0} N·m²/C. Aký bude tok, ak náboj vnútri zväčšíme ${k}-krát a plochu zdvojnásobíme?`, F0 * k, "N·m²/C", [F0 * k * 2, F0 * k / 2, F0], `Tok závisí len od náboja vnútri, nie od veľkosti plochy: ${k}·${F0} = ${F0 * k} N·m²/C.`)); },
  () => { const F0 = rnd([600, 1200, 3000]);
    return hint("Kocka má 6 rovnakých stien, každou prejde šestina toku.", mk(`Náboj je v strede kocky a celkový tok jej povrchom je ${F0} N·m²/C. Aký tok prechádza jednou stenou?`, F0 / 6, "N·m²/C", [F0, F0 / 4, F0 / 8], `Šesť rovnocenných stien: ${F0}/6 = ${F0 / 6} N·m²/C.`)); },
  () => { const E0 = rnd([600, 900, 1200]), k = rnd([2, 3]);
    return hint("Pole vlákna klesá ako 1/r.", mk(`Vo vzdialenosti r od dlhého nabitého vlákna je intenzita ${E0} N/C. Aká je vo vzdialenosti ${k}r?`, E0 / k, "N/C", [E0 / (k * k), E0 * k, E0], `Pole vlákna klesá ako 1/r: ${E0}/${k} = ${E0 / k} N/C.`)); },
  () => { const n = rnd([1, 2, 5]);
    return hint("Vodič: E = σ/ε₀, ε₀ = 8,854·10⁻¹² C²/(N·m²).", mk(`Vodič má na povrchu plošnú hustotu náboja ${num(n * 8.854)}·10⁻⁹ C/m². Aká je intenzita tesne nad povrchom?`, n * 1000, "N/C", [n * 500, n * 2000, 0], `E = σ/ε₀ = ${num(n * 8.854)}·10⁻⁹/8,854·10⁻¹² = ${n * 1000} N/C.`)); },
  () => { const n = rnd([2, 4, 6]);
    return hint("Nevodivá doska: E = σ/(2ε₀).", mk(`Nekonečná nevodivá doska má plošnú hustotu náboja ${num(n * 8.854)}·10⁻⁹ C/m². Aká je intenzita poľa?`, n * 500, "N/C", [n * 1000, n * 250, 0], `E = σ/(2ε₀) = ${n * 500} N/C. Pri doske je v menovateli dvojka.`)); },
  () => { const E0 = rnd([800, 1200, 2000]), k = rnd([2, 4]);
    return hint("Vnútri rovnomerne nabitej gule rastie E priamo úmerne vzdialenosti od stredu.", mk(`Rovnomerne nabitá nevodivá guľa má na povrchu intenzitu ${E0} N/C. Aká je vo vzdialenosti R/${k} od stredu?`, E0 / k, "N/C", [E0 * k, E0 / (k * k), 0], `Vnútri gule rastie E úmerne r: ${E0}/${k} = ${E0 / k} N/C.`)); }
 ],
 l7: [
  () => { const Q = rnd([1, 2, 4]), r = rnd([0.5, 2, 3]), f = 8.99 * Q / r;
    return hint("φ = kQ/r, k = 9·10⁹ N·m²/C², 1 nC = 10⁻⁹ C.", mk(`Aký je potenciál vo vzdialenosti ${num(r)} m od bodového náboja ${Q} nC?`, f, "V", [8.99 * Q / (r * r), 8.99 * Q * r, f * 10], `φ = k·Q/r = 8,99·10⁹·${Q}·10⁻⁹/${num(r)} = ${num(f)} V.`)); },
  () => { const Q = rnd([1, 2, 5]), a = rnd([50, 80, 120]), b = rnd([20, 30]), W = Q * 1e-6 * (a - b);
    return hint("W = Q·(φ<sub>A</sub> − φ<sub>B</sub>), 1 μC = 10⁻⁶ C.", mk(`Náboj ${Q} μC prejde z miesta s potenciálom ${a} V na miesto s potenciálom ${b} V. Akú prácu vykoná pole?`, W, "J", [Q * 1e-6 * (a + b), Q * 1e-6 * a, -W], `W = Q·U = ${Q}·10⁻⁶·(${a} − ${b}) = ${num(W)} J.`)); },
  () => { const E = rnd([500, 1000, 2000]), d = rnd([2, 5, 10]), U = E * d / 1000;
    return hint("U = E·d, milimetre prepočítaj na metre.", mk(`Medzi doskami vzdialenými ${d} mm je homogénne pole ${E} V/m. Aké je medzi nimi napätie?`, U, "V", [E * d, E / d, U * 100], `U = E·d = ${E}·${num(d / 1000)} = ${num(U)} V.`)); },
  () => { const a = rnd([2, 3, 5]), x = rnd([1, 2, 3]), E = -2 * a * x;
    return hint("E<sub>x</sub> = −dφ/dx.", mk(`Potenciál je φ = ${a}x² (V, m). Aká je zložka E<sub>x</sub> v bode x = ${x} m?`, E, "V/m", [-E, -a * x, -a * x * x], `E<sub>x</sub> = −dφ/dx = −${2 * a}x = ${num(E)} V/m.`)); },
  () => { const p = rnd([[3, 4, 5], [6, 8, 10], [5, 12, 13]]);
    return hint("E<sub>x</sub> = −∂φ/∂x, E<sub>y</sub> = −∂φ/∂y, veľkosť √(E<sub>x</sub>² + E<sub>y</sub>²).", mk(`Potenciál je φ = ${p[0]}x + ${p[1]}y (V, m). Aká je veľkosť intenzity?`, p[2], "V/m", [p[0] + p[1], p[0], p[1]], `E = (−${p[0]}, −${p[1]}) V/m, veľkosť √(${p[0]}² + ${p[1]}²) = ${p[2]} V/m.`)); },
  () => { const U = rnd([50, 200, 1000]), W = U * 1.602e-19;
    return hint("W = e·U, e = 1,602·10⁻¹⁹ C.", mk(`Elektrón je urýchlený napätím ${U} V. Akú energiu získa v jouloch?`, W, "J", [W * 1000, 1.602e-19, 1.602e-19 / U], `W = eU = 1,602·10⁻¹⁹·${U} = ${num(W)} J (teda ${U} eV).`)); },
  () => { const q1 = rnd([1, 2]), q2 = rnd([-3, 2, -1]), r = rnd([0.5, 1]), E = 8.99e9 * q1 * q2 * 1e-12 / r;
    return hint("E<sub>p</sub> = k·Q₁Q₂/r aj so znamienkami nábojov.", mk(`Náboje ${q1} μC a ${q2 < 0 ? "−" + (-q2) : q2} μC sú ${num(r)} m od seba. Aká je potenciálna energia sústavy?`, E, "J", [-E, E / r * 2, E * 10], `E<sub>p</sub> = k·Q₁Q₂/r = ${num(E)} J. ${q2 < 0 ? "Je záporná, lebo náboje sa priťahujú." : "Je kladná, lebo náboje sa odpudzujú."}`)); }
 ]
};
