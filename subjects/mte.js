/* Materiály v elektrotechnice (MTD, FEKT VUT). Podklady: skriptá Jirák a kol. a riešené numerické cvičenia.
   Schéma predmetu je v komentári na začiatku index.html. Hodnoty na kartách Vzorce sú zo skrípt,
   hodnoty v zadaniach príkladov z cvičení ostávajú tak, ako ich dal vyučujúci. Na teste je povolená kalkulačka. */
SUBJECTS.push({
id: "mte",
open: true,
name: "Materiály v elektrotechnike",
note: "MTD · skriptá a numerické cvičenia · kalkulačka povolená",
chapters: [
 { name: "Kapitola 1 · Zloženie a štruktúra látok", note: "Atómy, väzby, kryštály, poruchy, pásový model.", exam: null },
 { name: "Kapitola 2 · Vodivé a odporové materiály", note: "Vodivosť kovov, supravodivosť, termoelektrina, kovy v praxi.", exam: null },
 { name: "Kapitola 3 · Magnetické materiály", note: "Magnetizácia, permeabilita, hysterézia a straty.", exam: null },
 { name: "Kapitola 4 · Polovodiče", note: "Vlastný a prímesový polovodič, vedenie prúdu. Skúšobný test je z celého predmetu.",
   exam: { n: 5, minutes: 45, levels: ["l1", "l2", "l3", "l4", "l5", "l6", "l7", "l8", "l9", "l10", "l11", "l12"] } }
],
levels: [

/* ---------- L1 ---------- */
{
id: "l1", ch: 0, title: "Atómy a väzby", sub: "prečo látka drží pokope",
lesson: [
 { h: "1. Materiál a jeho vlastnosti", p: [
  "<b>Materiál</b> je látka určená na výrobu technických zariadení, ktorá má vlastnosti potrebné na daný účel: polyetylén na izoláciu, kremík na čipy. Vyrába sa zo <b>surovín</b> (suroviny), ktoré tie vlastnosti ešte nemajú: ropa, kaučuk, kremenný piesok.",
  "Vlastnosti materiálu sa dajú riadiť dvoma spôsobmi. <b>Zmenou zloženia</b>: zliatiny medi, železo s kremíkom na transformátorové plechy, kremík s prímesou 3. alebo 5. skupiny ako polovodič. Výsledok môže mať vlastnosti, ktoré nemá žiadna zo zložiek. <b>Zmenou štruktúry</b>: uhlík ako diamant, grafit alebo grafén; meď tvrdá alebo mäkká podľa žíhania. Táto zmena býva vratná.",
  "Pri každej nameranej hodnote treba uviesť podmienky merania (teplota, tlak). Bez nich sa čísla z rôznych tabuliek nedajú porovnať. V tomto predmete to uvidíš na rezistivite aj na koncentrácii nosičov."
 ]},
 { h: "2. Stavba atómu", p: [
  "Atóm má jadro (protóny, neutróny) a elektrónový obal a navonok je neutrálny. Takmer celá hmotnosť je v jadre, rozmer atómu je rádovo 10⁻¹⁰ m.",
  "Stav elektrónu v atóme opisujú štyri <b>kvantové čísla</b>: hlavné n (vrstvy K, L, M, N), vedľajšie l = 0 … n − 1 (orbitály s, p, d, f), magnetické m = −l … +l a spinové s = ±½. <b>Pauliho princíp</b>: v atóme nemôžu byť dva elektróny so všetkými štyrmi číslami rovnakými.",
  "Obal sa zapĺňa podľa dvoch pravidiel. <b>Energetická výhodnosť</b>: elektróny obsadzujú najprv hladiny s najnižšou energiou. <b>Maximálna multiplicita</b> (Hundovo pravidlo): v orbitáloch s rovnakou energiou je čo najviac nespárovaných spinov."
 ], c: "Koľko elektrónov sa zmestí do jedného orbitálu a prečo?", a: "Dva, s opačnými spinmi. Majú rovnaké n, l, m, takže sa musia líšiť aspoň spinom (Pauliho princíp)." },
 { h: "3. Ionizačná energia a elektronegativita", p: [
  "<b>Ionizačná energia</b> je práca potrebná na odtrhnutie najvoľnejšie viazaného elektrónu od atómu. Sodík ju má 5,1 eV, preto elektrón ľahko odovzdá. <b>Elektrónová afinita</b> je energia, ktorá sa uvoľní, keď sa voľný elektrón pripojí k neutrálnemu atómu; chlór ju má veľkú (3,8 eV).",
  "<b>Elektronegativita</b> hovorí, ako silno atóm drží valenčné elektróny vo väzbe. V Paulingovej stupnici má fluór 4,0, kyslík 3,5, chlór 3,0, kremík 1,8 a sodík 0,9. Čím väčší je rozdiel elektronegativít dvoch atómov, tým viac je väzba iónová."
 ]},
 { h: "4. Chemické väzby", p: [
  "Väzba vznikne, keď má spojená sústava nižšiu energiu než oddelené atómy. Atómy sa pritom snažia dosiahnuť konfiguráciu najbližšieho vzácneho plynu (8 elektrónov na poslednej vrstve, hélium 2). V prvom priblížení: kov + nekov dáva iónovú väzbu, nekov + nekov kovalentnú, kov + kov kovovú.",
  "<b>Iónová (heteropolárna) väzba</b>: atóm kovu odovzdá elektrón atómu nekovu, vzniknú katión a anión, ktoré sa priťahujú. Príklad NaCl, KCl. Iónový kryštál je pevný, krehký, má vysoký bod topenia a je to izolant s vyššou permitivitou. Roztavený alebo rozpustený vo vode vedie prúd ako elektrolyt (vodič II. triedy).",
  "<b>Kovalentná (homeopolárna) väzba</b>: dva atómy zdieľajú elektrónový pár s opačnými spinmi. Je <b>smerová</b> a ich počet je obmedzený počtom nespárovaných elektrónov. Príklady H₂, Cl₂, diamant (izolant), kremík (polovodič). Pri rovnakej elektronegativite je väzba nepolárna; pri rozdielnej sa pár posunie k elektronegativnejšiemu atómu a väzba je <b>polárna</b> s dipólovým momentom. Podtyp je <b>datívna</b> väzba, kde pár dodá len jeden atóm (polovodiče A<sup>III</sup>B<sup>V</sup> ako GaAs).",
  "<b>Kovová väzba</b>: kovy majú málo valenčných elektrónov. Zdieľajú ich všetky naraz ako <b>elektrónový plyn</b>, ktorý drží pohromade mriežku kladných iónov. Odtiaľ kujnosť a vysoká elektrická aj tepelná vodivosť."
 ], c: "Prečo je iónový kryštál NaCl izolant, ale jeho roztok vo vode vedie prúd?", a: "V kryštáli sú ióny pevne v mriežke a voľné elektróny nie sú. V roztoku sa ióny môžu pohybovať, takže náboj prenášajú ióny (elektrolyt)." },
 { h: "5. Fyzikálne väzby", p: [
  "Fyzikálne (medzimolekulové, van der Waalsove) väzby sú elektrostatické sily medzi časťami molekúl. Sú asi o rád slabšie než chemické. Patria sem <b>van der Waalsove</b> väzby (dipólová, indukčná, disperzná) a <b>vodíkový mostík</b>.",
  "Vodíkový mostík je z nich najpevnejší. Vďaka nemu je voda pri izbovej teplote kvapalina, hoci by podľa malej molekulovej hmotnosti mala byť plyn."
 ]}
],
theory: [
 { h: "Materiál", items: ["Materiál = látka s vlastnosťami pre daný účel; surovina ich ešte nemá.", "Vlastnosti sa riadia zmenou zloženia (zliatiny, prímesi) alebo štruktúry (diamant/grafit, žíhanie).", "Pri nameraných hodnotách treba uvádzať podmienky merania."] },
 { h: "Atóm", items: ["Kvantové čísla n, l, m, s; Pauliho princíp.", "Zapĺňanie: energetická výhodnosť, maximálna multiplicita.", "Ionizačná energia, elektrónová afinita, elektronegativita."] },
 { h: "Väzby", items: ["Iónová (kov + nekov): NaCl, krehký izolant, v roztoku elektrolyt.", "Kovalentná (nekov + nekov): smerová, diamant, Si; polárna pri rozdielnej elektronegativite; datívna v GaAs.", "Kovová (kov + kov): elektrónový plyn, vodivosť a kujnosť.", "Fyzikálne: van der Waalsove a vodíkový mostík, asi o rád slabšie."] }
],
traps: ["Molekula s polárnymi väzbami môže byť nepolárna, lebo dipólové momenty väzieb sa sčítajú vektorovo.", "Ionizačná energia sa spotrebuje (odtrhnutie), elektrónová afinita sa uvoľní (pripojenie).", "Diamant aj kremík majú kovalentnú väzbu, no diamant je izolant a kremík polovodič."],
examples: [
 { t: "Akú väzbu čakáš v KF, Cl₂ a v hliníku?", s: [
  "KF: draslík je kov (elektronegativita 0,8), fluór nekov (4,0). Veľký rozdiel, väzba iónová.",
  "Cl₂: dva rovnaké atómy, rozdiel elektronegativít nulový. Kovalentná nepolárna väzba.",
  "Hliník: kov + kov, kovová väzba s elektrónovým plynom, preto dobrý vodič."] }
],
formulas: [
 { n: "Elektronegativita (relatívna)", f: "X = (ionizačná energia + elektrónová afinita) / (to isté pre Li)", w: "skriptá: vzťahuje sa k lítiu" },
 { n: "Elektronegativita – Pauling", f: "F 4,0 · O 3,5 · Cl 3,0 · H 2,1 · Si 1,8 · Na 0,9 · K 0,8", w: "väčší rozdiel = iónovejšia väzba" },
 { n: "Kvantové čísla", f: "n = 1, 2, 3 …;  l = 0 … n − 1;  m = −l … +l;  s = ±½", w: "stav elektrónu v atóme" },
 { n: "Väzba podľa prvkov", f: "kov + nekov → iónová;  nekov + nekov → kovalentná;  kov + kov → kovová", w: "prvé priblíženie" },
 { n: "Konštanty", f: "e = 1,602·10⁻¹⁹ C,  1 eV = 1,602·10⁻¹⁹ J,  m<sub>e</sub> = 9,109·10⁻³¹ kg", w: "tabuľka skrípt 1.1.1" }
],
explain: { q: "Vysvetli spolužiakovi, prečo meď vedie prúd a kuchynská soľ v kryštáli nie, hoci obe látky držia pokope elektrickými silami.", keys: ["V medi je kovová väzba, valenčné elektróny tvoria elektrónový plyn", "Voľné elektróny sa môžu pohybovať a prenášať náboj", "V NaCl je iónová väzba, elektróny sú pevne pri iónoch", "Ióny sú v kryštáli pevne v mriežke, preto nevedie; v roztoku sa pohnú"] },
quiz: [
 { q: "Aká väzba vzniká medzi kovom a nekovom, napríklad v NaCl?", o: ["iónová", "kovalentná", "kovová", "vodíkový mostík"], e: "Kov (Na) odovzdá elektrón nekovu (Cl), vzniknú opačne nabité ióny, ktoré sa priťahujú. Kovalentná je medzi nekovmi, kovová medzi kovmi.", h: "Kov elektrón ľahko odovzdá, nekov ho ochotne prijme." },
 { q: "Čo hovorí Pauliho princíp?", o: ["V atóme nemôžu byť dva elektróny so všetkými kvantovými číslami rovnakými.", "Elektróny obsadzujú najprv hladiny s najnižšou energiou.", "V orbitáli je čo najviac nespárovaných spinov.", "Elektrón sa nedá z atómu odtrhnúť."], e: "Druhá možnosť je pravidlo energetickej výhodnosti, tretia pravidlo maximálnej multiplicity. Pauliho princíp zakazuje dva elektróny v rovnakom stave.", h: "Ide o zákaz rovnakého stavu dvoch elektrónov." },
 { q: "Ktorá väzba je smerová a jej počet je obmedzený počtom nespárovaných elektrónov?", o: ["kovalentná", "iónová", "kovová", "van der Waalsova"], e: "Kovalentná väzba je zdieľaný pár konkrétnych dvoch atómov, preto má smer (valenčné uhly). Iónová a kovová pôsobia do všetkých strán.", h: "Pri ktorej väzbe dva konkrétne atómy zdieľajú pár elektrónov?" },
 { q: "Prečo majú kovy vysokú elektrickú vodivosť?", o: ["Valenčné elektróny tvoria elektrónový plyn a môžu sa voľne pohybovať.", "Majú veľkú ionizačnú energiu.", "Ich atómy sú spojené smerovými kovalentnými väzbami.", "Ich ióny sa v mriežke voľne pohybujú."], e: "Kovová väzba: všetky valenčné elektróny zdieľa celý kryštál, sú voľné a nesú prúd. Ióny ostávajú v uzloch mriežky.", h: "Čo spája kladné ióny v kove?" },
 { q: "Čo je elektronegativita?", o: ["Miera sily, ktorou atóm vo väzbe drží valenčné elektróny", "Energia na odtrhnutie elektrónu", "Energia uvoľnená pri pripojení elektrónu", "Náboj iónu"], e: "Odtrhnutie elektrónu je ionizačná energia, pripojenie elektrónová afinita. Elektronegativita opisuje správanie atómu vo väzbe.", h: "Týka sa atómu viazaného v molekule." },
 { q: "Väzba medzi atómami s rozdielnou elektronegativitou, ktoré zdieľajú pár elektrónov, je…", o: ["polárna kovalentná", "nepolárna kovalentná", "kovová", "vždy iónová"], e: "Zdieľaný pár sa posunie k elektronegativnejšiemu atómu, vznikne dipólový moment. Pri veľkom rozdiele prechádza väzba až k iónovej.", h: "Zdieľanie ostáva, ale pár nie je v strede." },
 { q: "Ktorá fyzikálna väzba je najpevnejšia a drží vodu v kvapalnom stave?", o: ["vodíkový mostík", "disperzná", "indukčná", "kovová"], e: "Vodíkový mostík je najpevnejšia z fyzikálnych väzieb. Kovová je chemická väzba.", h: "Kladný vodík jednej molekuly a záporný kyslík druhej." },
 { q: "Fyzikálne väzby sú v porovnaní s chemickými…", o: ["asi o rád slabšie", "rovnako silné", "asi o rád silnejšie", "silnejšie len pri nízkej teplote"], e: "Skriptá: energia fyzikálnych väzieb je asi o rád menšia než chemických.", h: "Preto sa molekulové kryštály ľahko topia." },
 { q: "Ktorý polovodič je príkladom datívnej (koordinačne kovalentnej) väzby?", o: ["GaAs", "Si", "NaCl", "Cu"], e: "V polovodičoch A<sup>III</sup>B<sup>V</sup> (GaAs, InSb) dodá zdieľaný pár len jeden z atómov. Si má bežnú kovalentnú väzbu.", h: "Hľadaj zlúčeninu prvkov 3. a 5. skupiny." },
 { q: "Riadenie vlastností zmenou štruktúry je napríklad…", o: ["žíhanie medi na mäkkú", "pridanie kremíka do železa", "prímes fosforu do kremíka", "zliatina medi so zinkom"], e: "Žíhanie mení usporiadanie (štruktúru), zloženie ostáva. Ostatné možnosti menia zloženie.", h: "Pri ktorej možnosti sa nepridáva žiadny iný prvok?", b: true }
]
},

/* ---------- L2 ---------- */
{
id: "l2", ch: 0, title: "Kryštálová mriežka", sub: "bunka, zaplnenie, hustota",
lesson: [
 { h: "1. Kryštál a amorfná látka", p: [
  "Atómy sa v tuhej látke ukladajú tak, aby mala sústava čo najmenšiu energiu. <b>Kryštalická látka</b> má pravidelné usporiadanie na veľkú vzdialenosť (ďalekodosahové). Má pravidelný tvar, <b>anizotropiu</b> vlastností (v rôznych smeroch iné) a presnú teplotu topenia.",
  "<b>Amorfná látka</b> (sklo, plasty) je usporiadaná len na krátku vzdialenosť. Je <b>izotropná</b> a mäkne v rozsahu teplôt, bez presného bodu topenia.",
  "<b>Monokryštál</b> má v celom objeme rovnako orientovanú mriežku (kremíkový ingot). <b>Polykryštál</b> sa skladá z mnohých zŕn s náhodnou orientáciou (bežné kovy). Prvok, ktorý vie existovať v rôznych kryštálových formách, má <b>alotropiu</b> (uhlík: diamant, grafit); pri zlúčeninách a zliatinách sa to volá polymorfia.",
  "Väzby z predošlého levelu určujú typ kryštálu: iónové (ióny), atómové (kovalentná väzba, atómy), kovové (katióny a elektrónový plyn) a molekulové (van der Waals, molekuly)."
 ]},
 { h: "2. Elementárna bunka", p: [
  "<b>Elementárna bunka</b> (elementární buňka) je najmenší rovnobežnosten, ktorého posúvaním v smere troch osí poskladáš celú mriežku. Hrany sú a, b, c, uhly α, β, γ. Všetky kryštály patria do <b>7 kryštalografických sústav</b> (kubická, tetragonálna, ortorombická, monoklinická, triklinická, trigonálna, hexagonálna) a <b>14 Bravaisových mriežok</b>.",
  "V kubickej sústave poznáme tri bunky: <b>jednoduchú</b> (SC, atómy len v rohoch), <b>priestorovo centrovanú</b> (BCC, navyše atóm v strede, napr. Fe, W) a <b>plošne centrovanú</b> (FCC, navyše atóm v strede každej steny, napr. Cu, Al, Ag).",
  "Koľko atómov patrí jednej bunke? Atóm v rohu delí 8 buniek, takže bunke patrí jeho 1/8. Atóm na stene delia 2 bunky (1/2), atóm vnútri patrí celý.<span class=\"fm\">N = (rohy)·1/8 + (steny)·1/2 + (vnútri)·1</span>SC: 8·1/8 = 1. BCC: 1 + 1 = 2. FCC: 1 + 6·1/2 = 4."
 ], c: "Koľko atómov pripadá na bunku FCC a prečo nie 14?", a: "4. Rohov je 8, ale každý patrí bunke len z 1/8 (spolu 1); stien je 6, každá z 1/2 (spolu 3)." },
 { h: "3. Zaplnenie priestoru", p: [
  "Atómy si predstavíme ako tuhé gule s polomerom r, ktoré sa dotýkajú. <b>Zaplnenie</b> D je podiel objemu, ktorý gule zaberú:<span class=\"fm\">D = N·(4/3)πr³ / a³</span>",
  "Kľúč je nájsť, kde sa gule dotýkajú. SC: pozdĺž hrany, a = 2r. BCC: pozdĺž telesovej uhlopriečky, a√3 = 4r. FCC: pozdĺž stenovej uhlopriečky, a√2 = 4r. Po dosadení sa r vykráti:<span class=\"fm\">SC π/6 ≈ 0,52 · BCC π√3/8 ≈ 0,68 · FCC π√2/6 ≈ 0,74</span>",
  "FCC je <b>najtesnejšie uloženie</b>. Diamant (a aj Si, Ge) je naopak riedky: sú to dve FCC mriežky posunuté o štvrtinu telesovej uhlopriečky, N = 8, dotyk na a√3/4 = 2r, a D = π√3/16 ≈ 0,34. Kovalentné väzby sú smerové a nedovolia atómom sa natlačiť."
 ], c: "Prečo má diamant menšie zaplnenie než FCC, hoci má v bunke dvakrát viac atómov?", a: "Atómy sa dotýkajú už na štvrtine telesovej uhlopriečky, takže sú malé voči hrane bunky (r = a√3/8). Smerové kovalentné väzby nedovolia tesné uloženie." },
 { h: "4. Z hustoty k veľkosti atómu", p: [
  "Bunka váži toľko ako jej atómy. Hmotnosť jedného atómu je m = M/N<sub>A</sub>. Hmotnosť bunky je ρ·V, takže:<span class=\"fm\">ρ·a³ = N·M/N<sub>A</sub>   →   a³ = N·M/(ρ·N<sub>A</sub>)</span>",
  "Pozor na jednotky: ak je M v kg/kmol, ber N<sub>A</sub> = 6,022·10²⁶ kmol⁻¹ a jednotky sedia bez prevodu. Z hrany a potom dostaneš polomer z podmienky dotyku (pre FCC r = a√2/4).",
  "Opačne: koncentrácia atómov (počet v 1 m³) je N/a³, alebo bez bunky ρ·N<sub>A</sub>/M. Pre meď vyjde asi 8,4·10²⁸ m⁻³, pre kremík 8/a³ = 5,0·10²⁸ m⁻³."
 ]},
 { h: "5. Millerove indexy", p: [
  "Kryštál je anizotropný, preto treba vedieť pomenovať roviny. Rovinu opíšu <b>Millerove indexy (h k l)</b>: zistíš, kde rovina pretína osi x, y, z (v násobkoch a, b, c), urobíš <b>prevrátené hodnoty</b> a upravíš ich na najmenšie celé nesúdeliteľné čísla.",
  "Rovina rovnobežná s osou ju pretína v nekonečne, prevrátená hodnota je 0. Stena kocky kolmá na os x je (100), rovina cez dve protiľahlé hrany (110), rovina cez tri rohy priľahlé k jednému rohu (111). Všetky rovnobežné roviny majú rovnaké indexy."
 ], c: "Rovina pretína osi v bodoch x = 1, y = 2, z = ∞ (v násobkoch hrany). Aké má Millerove indexy?", a: "Prevrátené hodnoty 1, 1/2, 0; vynásobené dvoma: (2 1 0)." }
],
theory: [
 { h: "Kryštál vs. amorfná látka", items: ["Kryštál: ďalekodosahové usporiadanie, anizotropia, bod topenia.", "Amorfná: krátkodosahové, izotropia, mäknutie v rozsahu teplôt.", "Monokryštál, polykryštál; alotropia (C), polymorfia."] },
 { h: "Bunka", items: ["7 sústav, 14 Bravaisových mriežok.", "N = rohy/8 + steny/2 + vnútri: SC 1, BCC 2, FCC 4, diamant 8.", "Dotyk: SC a = 2r, BCC a√3 = 4r, FCC a√2 = 4r, diamant a√3/4 = 2r.", "Zaplnenie: 0,52 · 0,68 · 0,74 · 0,34."] },
 { h: "Hustota a Millerove indexy", items: ["ρ·a³ = N·M/N<sub>A</sub>; M v kg/kmol → N<sub>A</sub> = 6,022·10²⁶ kmol⁻¹.", "Koncentrácia atómov N/a³ = ρN<sub>A</sub>/M.", "(h k l) = prevrátené úseky na osiach, celé nesúdeliteľné; rovnobežná os → 0."] }
],
traps: ["Atóm v rohu nepatrí bunke celý, len z 1/8.", "M v kg/kmol vyžaduje N<sub>A</sub> v kmol⁻¹ (6,022·10²⁶), inak vyjde výsledok o 10³ zle.", "Najtesnejšie je FCC (0,74), nie BCC.", "a³ znamená umocniť aj mantisu, aj exponent: (5,43·10⁻¹⁰)³ = 1,60·10⁻²⁸ m³."],
examples: [
 { t: "Cvičenie 1: koľko atómov pripadá na bunku SC, BCC a FCC a aké je zaplnenie, ak sa atómy-gule dotýkajú?", s: [
  "Vzorce: <b>Počet atómov v bunke</b>, <b>Dotyk atómov</b>, <b>Zaplnenie</b>.",
  "SC: 8 rohov · 1/8 = 1 atóm; dotyk po hrane a = 2r; D = (4/3)πr³/(2r)³ = π/6 ≈ 0,52.",
  "BCC: 1 + 1 = 2; dotyk po telesovej uhlopriečke a = 4r/√3; D = 2·(4/3)πr³·3√3/(64r³) = π√3/8 ≈ 0,68.",
  "FCC: 1 + 6/2 = 4; dotyk po stenovej uhlopriečke a = 4r/√2; D = π√2/6 ≈ 0,74, najviac. To je dôkaz, že FCC je najtesnejšie uloženie."] },
 { t: "Cvičenie 2: koľko atómov pripadá na bunku diamantu a aké je jej zaplnenie?", s: [
  "Diamant = FCC (4 atómy) + 4 atómy vnútri bunky, spolu N = 8.",
  "Vnútorný atóm je na 1/4 telesovej uhlopriečky od rohu, vzdialenosť stredov a√3/4 = 2r, teda a = 8r/√3.",
  "D = 8·(4/3)πr³/a³ = π√3/16 ≈ 0,34. Diamant je „riedky“."] },
 { t: "Cvičenie 3: meď (FCC), ρ = 8 890 kg·m⁻³, M = 63,57 kg/kmol. Urč objem bunky, polomer a hmotnosť atómu.", s: [
  "Vzorce: <b>Hustota a bunka</b>, <b>Dotyk atómov</b> (FCC), <b>Hmotnosť atómu</b>.",
  "V = N·M/(ρ·N<sub>A</sub>) = 4·63,57/(8890·6,022·10²⁶) = 4,75·10⁻²⁹ m³.",
  "a = ∛V = 3,62·10⁻¹⁰ m; r = a√2/4 = 1,28·10⁻¹⁰ m.",
  "m = M/N<sub>A</sub> = 63,57/6,022·10²⁶ = 1,06·10⁻²⁵ kg."] },
 { t: "Polovodiče, cvičenie 1: koncentrácia atómov kremíka (diamant, a = 5,43·10⁻¹⁰ m) a germánia (a = 5,62·10⁻¹⁰ m, dané v zadaní).", s: [
  "Diamant má 8 atómov v bunke: N = 8/a³.",
  "Si: a³ = (5,43·10⁻¹⁰)³ = 1,60·10⁻²⁸ m³, N = 5,00·10²⁸ m⁻³.",
  "Ge so zadaným a: N = 8/(5,62·10⁻¹⁰)³ = 4,51·10²⁸ m⁻³. So skriptovým a₀ = 0,566 nm by vyšlo 4,41·10²⁸ m⁻³; v úlohe počítaj so zadanou hodnotou."] }
],
formulas: [
 { n: "Počet atómov v bunke", f: "N = (rohy)·1/8 + (steny)·1/2 + (vnútri)·1", w: "SC 1, BCC 2, FCC 4, diamant 8" },
 { n: "Dotyk atómov", f: "SC a = 2r · BCC a√3 = 4r · FCC a√2 = 4r · diamant a√3/4 = 2r", w: "kde sa gule dotýkajú" },
 { n: "Zaplnenie", f: "D = N·(4/3)πr³ / a³", w: "SC 0,52 · BCC 0,68 · FCC 0,74 · diamant 0,34" },
 { n: "Hustota a bunka", f: "ρ·a³ = N·M/N<sub>A</sub>  →  a = ∛(N·M/(ρN<sub>A</sub>))", w: "z hustoty hrana bunky" },
 { n: "Hmotnosť atómu", f: "m = M/N<sub>A</sub>", w: "M v kg/kmol, N<sub>A</sub> v kmol⁻¹" },
 { n: "Koncentrácia atómov", f: "n = N/a³ = ρ·N<sub>A</sub>/M", w: "počet atómov v 1 m³" },
 { n: "Millerove indexy", f: "(h k l) = prevrátené úseky na osiach, celé nesúdeliteľné", w: "rovnobežná os → index 0" },
 { n: "Konštanty", f: "N<sub>A</sub> = 6,022·10²⁶ kmol⁻¹ = 6,022·10²³ mol⁻¹ (skriptá 6,023·10²³)", w: "pozor na kmol" },
 { n: "Údaje zo skrípt", f: "Si a₀ = 0,543 nm · Ge a₀ = 0,566 nm · Cu ρ = 8 900 kg/m³", w: "tabuľka 4.1 a tabuľka kovov" }
],
explain: { q: "Vysvetli, ako z hustoty a molárnej hmotnosti medi zistíš veľkosť jej atómu.", keys: ["Bunka FCC obsahuje 4 atómy", "Hmotnosť bunky ρ·a³ sa rovná hmotnosti 4 atómov 4M/N<sub>A</sub>", "Z toho a³ a tretia odmocnina dá hranu", "Polomer z dotyku na stenovej uhlopriečke a√2 = 4r"] },
quiz: [
 { q: "Koľko atómov pripadá na elementárnu bunku BCC?", o: ["2", "1", "4", "9"], e: "8 rohov po 1/8 dá 1 a jeden atóm v strede patrí celý: spolu 2. Deväť by bolo, keby rohové atómy patrili bunke celé.", h: "Rohový atóm patrí bunke z 1/8." },
 { q: "Ktorá kubická mriežka má najväčšie zaplnenie priestoru?", o: ["plošne centrovaná (0,74)", "priestorovo centrovaná (0,68)", "jednoduchá (0,52)", "diamantová (0,34)"], e: "FCC je najtesnejšie uloženie guľí, D = π√2/6 ≈ 0,74.", h: "Porovnaj π/6, π√3/8 a π√2/6." },
 { q: "Kde sa dotýkajú atómy v mriežke FCC?", o: ["na stenovej uhlopriečke, a√2 = 4r", "na hrane, a = 2r", "na telesovej uhlopriečke, a√3 = 4r", "na štvrtine telesovej uhlopriečky"], e: "Na stene ležia rohový, stredový a rohový atóm na jednej uhlopriečke: 4 polomery. Telesová uhlopriečka platí pre BCC.", h: "Ktorý atóm FCC leží medzi dvoma rohmi?" },
 { q: "Čím sa líši amorfná látka od kryštalickej?", o: ["Je usporiadaná len na krátku vzdialenosť a nemá presný bod topenia.", "Je anizotropná.", "Má presne definovaný bod topenia.", "Skladá sa z mnohých zŕn."], e: "Amorfná: krátkodosahové usporiadanie, izotropia, mäknutie v rozsahu teplôt. Zrná má polykryštál.", h: "Sklo pri zohrievaní postupne mäkne." },
 { q: "Rovina je rovnobežná s osami y a z a pretína os x v bode a. Aké sú jej Millerove indexy?", o: ["(100)", "(010)", "(111)", "(110)"], e: "Úseky 1, ∞, ∞ → prevrátené 1, 0, 0.", h: "Rovnobežná os má index 0." },
 { q: "Prečo pri výpočte s M v kg/kmol berieš N<sub>A</sub> = 6,022·10²⁶?", o: ["Lebo to je počet častíc v kilomóle, jednotky potom sedia.", "Lebo je to presnejšia hodnota.", "Lebo tak to platí len pre kovy.", "Lebo hustota je v g/cm³."], e: "N<sub>A</sub> = 6,022·10²³ mol⁻¹ = 6,022·10²⁶ kmol⁻¹. Pri miešaní kmol a mol vyjde chyba 10³.", h: "1 kmol = 1000 mol." },
 { q: "Ako sa nazýva schopnosť prvku existovať v rôznych kryštálových formách (diamant, grafit)?", o: ["alotropia", "polymorfia", "anizotropia", "izotropia"], e: "Pri prvku alotropia, pri zlúčeninách a zliatinách polymorfia.", h: "Uhlík je prvok." },
 { q: "Koľko kryštalografických sústav a Bravaisových mriežok existuje?", o: ["7 a 14", "14 a 7", "4 a 7", "7 a 32"], e: "Skriptá: 7 kryštalografických sústav, 14 Bravaisových mriežok.", h: "Bravaisových mriežok je dvojnásobok počtu sústav." },
 { q: "Koľko atómov má bunka diamantu (aj Si, Ge)?", o: ["8", "4", "2", "6"], e: "FCC dá 4 atómy a 4 ďalšie sú vnútri bunky.", h: "FCC a k tomu atómy vnútri bunky.", b: true }
]
},

/* ---------- L3 ---------- */
{
id: "l3", ch: 0, title: "Poruchy kryštálov", sub: "vakancie, intersticiály, teplota",
lesson: [
 { h: "1. Skutočný kryštál nie je dokonalý", p: [
  "Mriežka z predošlého levelu je ideál. Skutočný kryštál má vždy poruchy, a tie ovplyvňujú elektrickú aj tepelnú vodivosť a pevnosť a umožňujú difúziu či iónovú implantáciu. Delíme ich na poruchy <b>geometrického usporiadania</b> a poruchy <b>chemického zloženia</b>.",
  "Podľa tvaru sú poruchy <b>bodové</b> (rozmer ako vzdialenosť atómov), <b>čiarové</b> (dislokácie pozdĺž čiar) a <b>plošné</b> (hranice zŕn, vrstevné chyby)."
 ]},
 { h: "2. Bodové poruchy", p: [
  "<b>Vakancia</b> je chýbajúci atóm v uzle mriežky. <b>Intersticiál</b> je atóm presunutý z uzla do medzimriežkovej polohy. <b>Substitučný atóm</b> je cudzí atóm v uzle (podobne veľký ako atómy mriežky); malý cudzí atóm môže sedieť aj v medzimriežkovej polohe.",
  "Kombinované poruchy: <b>Schottkyho porucha</b> je dvojica katiónovej a aniónovej vakancie (ióny odišli na povrch). <b>Frenkelova porucha</b> je dvojica vakancia + intersticiál: atóm preskočil z uzla do medzery."
 ], c: "Atóm preskočí z uzla do susednej medzery. Aká porucha vznikla?", a: "Frenkelova: vakancia na pôvodnom mieste a intersticiál v medzere." },
 { h: "3. Prečo počet vakancií rastie s teplotou", p: [
  "Na vytvorenie vakancie treba energiu W<sub>v</sub>. Tepelné kmity mriežky ju dodávajú náhodne a podiel atómov, ktoré ju dostanú, určuje Boltzmannov faktor e<sup>−W/kT</sup>:<span class=\"fm\">n<sub>v</sub> = N·e<sup>−W<sub>v</sub>/kT</sup></span>N je koncentrácia uzlových bodov (atómov) v m⁻³, k = 1,38·10⁻²³ J/K. Pre hliník uvádzajú skriptá W<sub>v</sub> ≈ 0,76 eV.",
  "Pre intersticiály platí rovnaký tvar s konštantou c (počet medzimriežkových polôh na jeden atóm):<span class=\"fm\">n<sub>i</sub> = c·N·e<sup>−W<sub>i</sub>/kT</sup></span>Pozor: tu je n<sub>i</sub> koncentrácia intersticiálov. V polovodičoch bude n<sub>i</sub> znamenať vlastnú koncentráciu nosičov. V cvičeniach sa intersticiál značí n<sub>m</sub>, W<sub>m</sub>, c′.",
  "Exponenciála robí obrovské rozdiely. Pre Al pri 25 °C je W/kT asi 29, pri 550 °C len asi 10,6. Počet vakancií tak vzrastie asi 10⁸-krát. Intersticiál potrebuje oveľa viac energie (napr. 3 eV), takže pri izbovej teplote ich prakticky nie je."
 ], c: "Prečo treba v exponente mať W v jouloch a T v kelvinoch?", a: "k je v J/K, takže W/(kT) je bezrozmerné len vtedy, keď W je v J a T v K. Energiu v eV vynásob 1,602·10⁻¹⁹, k °C pripočítaj 273,15." },
 { h: "4. Dislokácie a hranice zŕn", p: [
  "<b>Čiarové poruchy</b> (dislokácie: hranové, skrutkové, všeobecné) vznikajú pri raste kryštálu alebo mechanickom namáhaní. Ich vznik vyžaduje oveľa viac energie, takže ich počet sa s teplotou nemení.",
  "<b>Plošné poruchy</b> ležia pozdĺž plôch: hranice zŕn v polykryštáli, hranice podzŕn, vrstevné chyby."
 ]}
],
theory: [
 { h: "Rozdelenie", items: ["Geometrické (bodové, čiarové, plošné) a chemické (cudzie atómy).", "Bodové: vakancia, intersticiál, substitučný atóm; Schottkyho (pár vakancií), Frenkelova (vakancia + intersticiál).", "Dislokácie: hranové, skrutkové; počet nezávisí od teploty.", "Plošné: hranice zŕn, vrstevné chyby."] },
 { h: "Teplota", items: ["n<sub>v</sub> = N·e<sup>−W<sub>v</sub>/kT</sup>, Al: W<sub>v</sub> ≈ 0,76 eV (skriptá).", "n<sub>i</sub> = c·N·e<sup>−W<sub>i</sub>/kT</sup> pre intersticiály.", "W v J (eV·1,602·10⁻¹⁹), T v K (ϑ + 273,15).", "N = ρN<sub>A</sub>/M."] }
],
traps: ["Teplotu treba v kelvinoch, inak vyjde nezmysel.", "eV treba previesť na J, lebo k je v J/K.", "Kalkulačka môže pri e<sup>−119</sup> ukázať 0. Počítaj na dva kroky: e<sup>−119</sup> = (e<sup>−59,5</sup>)².", "Počet dislokácií s teplotou nerastie, počet vakancií áno."],
examples: [
 { t: "Cvičenie 4: koľko vakancií je v 1 m³ hliníka (FCC, ρ = 2 699 kg·m⁻³, M = 26,98 kg/kmol) pri 25 °C a pri 550 °C, ak W<sub>v</sub> = 0,75 eV (dané v zadaní)?", s: [
  "Vzorce: <b>Koncentrácia atómov</b>, <b>Vakancie</b>, <b>Prevody</b>.",
  "N = ρN<sub>A</sub>/M = 2699·6,022·10²⁶/26,98 = 6,02·10²⁸ m⁻³.",
  "W<sub>v</sub> = 0,75·1,602·10⁻¹⁹ = 1,20·10⁻¹⁹ J. T = 298,15 K a 823,15 K.",
  "Exponent pri 25 °C: −1,20·10⁻¹⁹/(1,38·10⁻²³·298,15) = −29,2; n<sub>v</sub> = 6,02·10²⁸·e<sup>−29,2</sup> = 1,25·10¹⁶ m⁻³.",
  "Pri 550 °C: exponent −10,6; n<sub>v</sub> = 1,54·10²⁴ m⁻³, asi 10⁸-krát viac."] },
 { t: "Cvičenie 5: intersticiály v hliníku, W<sub>m</sub> = 3 eV, c′ = 3, pri 20 °C a 550 °C.", s: [
  "Vzorec <b>Intersticiály</b> s N = 6,02·10²⁸ m⁻³ z cvičenia 4.",
  "W<sub>m</sub> = 3·1,602·10⁻¹⁹ = 4,81·10⁻¹⁹ J.",
  "Pri 293,15 K je exponent asi −118,8: n<sub>m</sub> = 3·6,02·10²⁸·e<sup>−118,8</sup> = 4,60·10⁻²³ m⁻³, prakticky nula.",
  "Pri 823,15 K: n<sub>m</sub> = 7,63·10¹⁰ m⁻³. Ak kalkulačka dá 0, počítaj e<sup>−118,8</sup> = (e<sup>−59,4</sup>)²."] }
],
formulas: [
 { n: "Vakancie", f: "n<sub>v</sub> = N·e<sup>−W<sub>v</sub>/kT</sup>", w: "N = koncentrácia atómov; Al W<sub>v</sub> ≈ 0,76 eV (skriptá)" },
 { n: "Intersticiály", f: "n<sub>i</sub> = c·N·e<sup>−W<sub>i</sub>/kT</sup>", w: "v cvičeniach n<sub>m</sub> = c′·N·e<sup>−W<sub>m</sub>/kT</sup>" },
 { n: "Koncentrácia atómov", f: "N = ρ·N<sub>A</sub>/M", w: "M v kg/kmol, N<sub>A</sub> = 6,022·10²⁶ kmol⁻¹" },
 { n: "Prevody", f: "W[J] = W[eV]·1,602·10⁻¹⁹,  T[K] = ϑ[°C] + 273,15", w: "vždy pred dosadením do exponentu" },
 { n: "Pomer pri dvoch teplotách", f: "n₂/n₁ = e<sup>(W/k)·(1/T₁ − 1/T₂)</sup>", w: "N sa vykráti" },
 { n: "Konštanty", f: "k = 1,38·10⁻²³ J/K,  kT pri 300 K ≈ 0,0259 eV", w: "Boltzmannova konštanta" }
],
explain: { q: "Vysvetli, prečo počet vakancií v kove rastie s teplotou tak prudko, kým počet dislokácií sa nemení.", keys: ["Vakancia potrebuje energiu W rádovo 1 eV, dodajú ju tepelné kmity", "Pravdepodobnosť je Boltzmannov faktor e<sup>−W/kT</sup>", "Malá zmena kT v menovateli exponentu znamená obrovskú zmenu počtu", "Dislokácia vyžaduje oveľa viac energie, tepelne nevzniká"] },
quiz: [
 { q: "Ako závisí koncentrácia vakancií od teploty?", o: ["exponenciálne rastie: n<sub>v</sub> = N·e<sup>−W/kT</sup>", "lineárne rastie", "klesá s teplotou", "nezávisí od teploty"], e: "Boltzmannov faktor e<sup>−W/kT</sup> rastie s T veľmi prudko.", h: "Čím väčšie kT, tým menší záporný exponent." },
 { q: "Čo je Frenkelova porucha?", o: ["vakancia a intersticiál vytvorené presunom atómu z uzla do medzery", "dvojica katiónovej a aniónovej vakancie", "cudzí atóm v uzle", "hranica zŕn"], e: "Dvojica vakancií je Schottkyho porucha, cudzí atóm v uzle je substitučná porucha.", h: "Atóm neodišiel na povrch, ostal v medzere." },
 { q: "Do vzťahu n<sub>v</sub> = N·e<sup>−W/kT</sup> dosadíš W v eV a T v °C. Čo sa stane?", o: ["Výsledok je úplne zlý, exponent nie je bezrozmerný.", "Výsledok je len o málo nepresný.", "Nič, vzťah platí v ľubovoľných jednotkách.", "Výsledok bude len v iných jednotkách."], e: "k je v J/K. W treba v J a T v K, inak je exponent rádovo zlý.", h: "Akú jednotku má k?" },
 { q: "Ktoré poruchy majú počet nezávislý od teploty?", o: ["dislokácie (čiarové)", "vakancie", "intersticiály", "Frenkelove poruchy"], e: "Dislokácie vznikajú pri raste a namáhaní, ich vznik vyžaduje veľa energie a tepelne nevznikajú.", h: "Ktoré poruchy sa netvoria tepelnými kmitmi?" },
 { q: "Prečo je pri izbovej teplote v hliníku prakticky nulový počet intersticiálov (W = 3 eV)?", o: ["W/kT je asi 119 a e<sup>−119</sup> je extrémne malé číslo.", "Hliník nemá medzimriežkové polohy.", "Intersticiály vznikajú len pri nízkej teplote.", "Konštanta c je nulová."], e: "kT pri 293 K je 0,025 eV, takže 3/0,025 ≈ 119.", h: "Porovnaj W s kT ≈ 0,025 eV." },
 { q: "Čo je N vo vzťahu pre koncentráciu vakancií?", o: ["koncentrácia uzlových bodov (atómov) v m⁻³", "počet atómov v bunke", "Avogadrova konštanta", "počet vakancií v bunke"], e: "N = ρN<sub>A</sub>/M, počet atómov v 1 m³.", h: "Jednotka výsledku je m⁻³." },
 { q: "Do ktorej skupiny patria hranice zŕn?", o: ["plošné poruchy", "bodové poruchy", "čiarové poruchy", "chemické poruchy"], e: "Hranice zŕn, podzŕn a vrstevné chyby sú plošné poruchy.", h: "Hranica medzi zrnami je plocha.", b: true }
]
},

/* ---------- L4 ---------- */
{
id: "l4", ch: 0, title: "Pásový model", sub: "kov, polovodič, izolant",
lesson: [
 { h: "1. Z hladín atómu pás kryštálu", p: [
  "V osamelom atóme má elektrón len určité dovolené energie (hladiny). Keď sa dva atómy priblížia, každá hladina sa vzájomným pôsobením rozdvojí. V kryštáli s N atómami sa každá hladina rozštiepi na N hladín, ktoré sú tak blízko seba (asi 10⁻²² eV), že tvoria takmer spojitý <b>pás dovolených energií</b>. Hladiny teda nepatria atómu, ale celému kryštálu.",
  "Najprv sa štiepia hladiny vonkajších elektrónov; vnútorné sú pod vplyvom bližšieho jadra a štiepia sa málo. Medzi pásmi ostávajú <b>zakázané pásy</b>, kde elektrón byť nemôže.",
  "V pásovom modeli kreslíme dva pásy: <b>valenčný</b> (z orbitálov obsadených elektrónmi) a <b>vodivostný</b> (z neobsadených). Medzi nimi je zakázaný pás so šírkou W<sub>g</sub>."
 ]},
 { h: "2. Kov", p: [
  "Lítium má jeden valenčný elektrón (2s¹). N atómov dá N elektrónov, ale pás 2s má N hladín a na každú sa zmestia dva elektróny. Pri 0 K je teda pás zaplnený len do polovice.",
  "Elektrón na najvyššej obsadenej hladine má hneď nad sebou voľnú hladinu. Elektrické pole ho ľahko posunie vyššie a vznikne prúd. Preto kov vedie aj pri absolútnej nule.",
  "Berýlium (2s²) by malo pás zaplnený celý, a predsa vedie: valenčný pás sa v kryštáli prekrýva s vyšším prázdnym pásom, takže voľné hladiny sú opäť hneď poruke."
 ], c: "Prečo vedie berýlium, hoci jeho 2s pás by mal byť celý zaplnený?", a: "Pás 2s sa v kryštáli prekryje s vyšším pásom 2p, takže nad obsadenými hladinami sú voľné." },
 { h: "3. Polovodič a izolant", p: [
  "Ak je valenčný pás celý zaplnený a od prázdneho vodivostného pásu ho delí zakázaný pás, elektróny sa nemajú kam posunúť a látka pri 0 K nevedie.",
  "<b>Izolant</b> má zakázaný pás široký niekoľko eV. Pri bežnej teplote a poli ho elektróny nepreskočia. <b>Vlastný polovodič</b> má asi 1 eV (Si 1,11 eV, Ge 0,67 eV podľa skrípt). Tepelné kmity prenesú časť elektrónov do vodivostného pásu a vo valenčnom po nich ostanú <b>diery</b>.",
  "Prúd potom vedú elektróny vo vodivostnom páse (veľa voľných hladín, málo elektrónov, väčšia pohyblivosť) aj diery vo valenčnom páse (menšia pohyblivosť). V prímesových polovodičoch pribudnú v zakázanom páse ďalšie hladiny; tie budú v kapitole o polovodičoch."
 ], c: "Prečo s teplotou vodivosť polovodiča rastie, ale vodivosť kovu nie?", a: "Polovodič získava s teplotou nové nosiče (elektróny preskakujú zakázaný pás). Kov má nosičov stále rovnako, s teplotou rastie len rozptyl na kmitoch mriežky." }
],
theory: [
 { h: "Pásy", items: ["N atómov → každá hladina sa rozštiepi na N blízkych hladín → pás.", "Valenčný pás (obsadené orbitály), vodivostný (neobsadené), medzi nimi zakázaný pás W<sub>g</sub>.", "Hladiny patria celému kryštálu."] },
 { h: "Typy látok", items: ["Kov: čiastočne zaplnený pás alebo prekrytie pásov, vedie aj pri 0 K.", "Vlastný polovodič: W<sub>g</sub> ≈ 1 eV (Si 1,11, Ge 0,67 eV), tepelne vznikajú páry elektrón–diera.", "Izolant: W<sub>g</sub> niekoľko eV.", "Prímesový polovodič: ďalšie hladiny v zakázanom páse."] }
],
traps: ["Zaplnený pás nevedie, aj keď je plný elektrónov: nemajú kam sa posunúť.", "Diera je vo valenčnom páse, nie vo vodivostnom.", "Kov s párnym počtom valenčných elektrónov (Be, Mg) vedie vďaka prekrytiu pásov."],
examples: [
 { t: "Porovnaj pásové modely kovu, polovodiča a izolantu.", s: [
  "Kov: valenčný pás čiastočne zaplnený (Li) alebo prekrytý s vyšším (Be). Voľné hladiny hneď nad obsadenými, vedie vždy.",
  "Polovodič: plný valenčný pás, prázdny vodivostný, medzi nimi asi 1 eV. Pri izbovej teplote preskočí malá časť elektrónov.",
  "Izolant: rovnaké usporiadanie, ale zakázaný pás niekoľko eV. Tepelná energia (kT ≈ 0,025 eV) nestačí."] }
],
formulas: [
 { n: "Šírka zakázaného pásu", f: "Si W<sub>g</sub> = 1,11 eV · Ge 0,67 eV · izolanty niekoľko eV", w: "tabuľka 4.1 skrípt (300 K)" },
 { n: "Tepelná energia", f: "kT ≈ 0,025 eV pri izbovej teplote", w: "porovnaj s W<sub>g</sub>" },
 { n: "Štiepenie hladín", f: "N atómov → N hladín v páse, 2 elektróny na hladinu", w: "Pauliho princíp" }
],
explain: { q: "Pomocou pásového modelu vysvetli, prečo je meď vodič, kremík polovodič a sklo izolant.", keys: ["V medi je pás čiastočne zaplnený, elektróny majú voľné hladiny hneď nad sebou", "Kremík má plný valenčný pás a zakázaný pás asi 1 eV", "Tepelné kmity prenesú časť elektrónov cez 1 eV, vzniknú elektróny a diery", "Sklo má zakázaný pás niekoľko eV, ten tepelná energia neprekoná"] },
quiz: [
 { q: "Prečo kov vedie prúd aj pri teplote blízkej 0 K?", o: ["Jeho valenčný pás je čiastočne zaplnený (alebo sa prekrýva s vyšším), takže elektróny majú kam sa posunúť.", "Pri 0 K má najviac voľných dier.", "Jeho zakázaný pás je asi 1 eV.", "Pri 0 K kov nevedie."], e: "Voľné hladiny hneď nad obsadenými umožnia elektrónom získať energiu od poľa.", h: "Čo je nad najvyššou obsadenou hladinou v kove?" },
 { q: "Aká je šírka zakázaného pásu kremíka podľa skrípt?", o: ["1,11 eV", "0,67 eV", "5 eV", "0,025 eV"], e: "Si 1,11 eV, Ge 0,67 eV (tabuľka 4.1, 300 K). 0,025 eV je kT.", h: "Kremík má väčší zakázaný pás ako germánium." },
 { q: "Čo je diera?", o: ["chýbajúci elektrón vo valenčnom páse, ktorý sa správa ako kladný nosič", "voľný elektrón vo vodivostnom páse", "vakancia v mriežke", "prímesový atóm"], e: "Keď elektrón preskočí do vodivostného pásu, vo valenčnom po ňom ostane neobsadený stav, diera.", h: "Vzniká spolu s voľným elektrónom." },
 { q: "Čím sa pásovým modelom líši izolant od vlastného polovodiča?", o: ["šírkou zakázaného pásu (niekoľko eV vs. asi 1 eV)", "izolant nemá valenčný pás", "izolant má čiastočne zaplnený pás", "polovodič nemá zakázaný pás"], e: "Usporiadanie je rovnaké, rozhoduje šírka zakázaného pásu.", h: "Usporiadanie pásov je rovnaké." },
 { q: "Na koľko hladín sa rozštiepi jedna hladina v kryštáli s N atómami?", o: ["na N", "na 2", "na 2N", "nerozštiepi sa"], e: "Každá hladina dá N blízkych hladín, na každú sa zmestia 2 elektróny.", h: "Jedna hladina od každého atómu." },
 { q: "Prečo majú elektróny vo vodivostnom páse väčšiu pohyblivosť než diery vo valenčnom?", o: ["Vodivostný pás má veľa voľných hladín a málo elektrónov.", "Elektrón je ťažší než diera.", "Diera sa nepohybuje vôbec.", "Valenčný pás je prázdny."], e: "Skriptá: elektrónová vodivosť – veľa hladín, málo elektrónov, vyššia pohyblivosť; dierová – veľa elektrónov, málo dier, nižšia pohyblivosť.", h: "Kde je viac miesta na pohyb?", b: true }
]
},
/* ---------- L5 ---------- */
{
id: "l5", ch: 1, title: "Vodivosť kovov", sub: "drift, pohyblivosť, rezistivita a teplota",
lesson: [
 { h: "1. Vodiče a dôkazy elektrónovej vodivosti", p: [
  "Pásový model z kapitoly 1 povedal, že kov má voľné elektróny. Teraz z toho spravíme čísla. Vodiče delíme na <b>vodiče I. triedy</b> s elektrónovou vodivosťou (kovy) a <b>vodiče II. triedy</b> s iónovou vodivosťou (elektrolyty). Vodivé sú aj roztavené kovy, ortuť a ionizované plyny (plazma).",
  "Klasická predstava (Drude, Lorentz): v uzloch mriežky sú kladné ióny, medzi nimi elektrónový plyn. Dôkazy, že prúd v kove nesú elektróny: pri prúde sa neprenáša látka, existuje termoemisia, magnetorezistencia a Tolmanov pokus (prúd v rotujúcej slučke po jej zabrzdení).",
  "Typické vlastnosti kovov: rezistivita 10⁻⁸ až 10⁻⁵ Ω·m, s teplotou rastie (nad Debyeovou teplotou lineárne), pod asi 20 K je úmerná T⁵, s tlakom väčšinou klesá a niektoré kovy sú pri teplotách blízko 0 K supravodivé."
 ]},
 { h: "2. Prúd z pohybu elektrónov", p: [
  "Pole E posúva elektróny malou <b>driftovou rýchlosťou</b> v (v cvičeniach v<sub>D</sub>). Za 1 s prejdú prierezom S elektróny z „valca“ s dĺžkou v, je ich n·S·v a každý nesie náboj q:<span class=\"fm\">I = n·q·S·v,   i = I/S = n·q·v</span>i je <b>prúdová hustota</b> (A·m⁻², v cvičeniach J), n koncentrácia voľných elektrónov.",
  "Driftová rýchlosť je úmerná poľu, konštanta úmernosti je <b>pohyblivosť</b> μ = v/E (m²·V⁻¹·s⁻¹). Dosadením dostaneme Ohmov zákon v diferenciálnom tvare:<span class=\"fm\">i = n·q·μ·E = γ·E,   γ = n·q·μ,   ρ = 1/γ</span>γ je <b>konduktivita</b> (S·m⁻¹), ρ <b>rezistivita</b> (Ω·m).",
  "Koncentrácia voľných elektrónov je n = z·N, kde z je počet valenčných elektrónov na atóm a N = ρ<sub>h</sub>·N<sub>A</sub>/A koncentrácia atómov z kapitoly 1 (ρ<sub>h</sub> hustota, A atómová hmotnosť v kg/kmol). Meď má jeden voľný elektrón na atóm: n ≈ 8,4·10²⁸ m⁻³.",
  "Driftová rýchlosť vychádza prekvapivo malá, desatiny milimetra za sekundu. Svetlo sa napriek tomu rozsvieti hneď: pole sa šíri vodičom takmer rýchlosťou svetla a pohne naraz všetkými elektrónmi."
 ], c: "Prečo je v kove driftová rýchlosť taká malá, keď prúd je veľký?", a: "Lebo voľných elektrónov je obrovské množstvo (asi 10²⁹ v m³). Veľký prúd dá aj malá rýchlosť, keď sa pohne veľa nábojov naraz." },
 { h: "3. Odpor, rezistivita a jednotky", p: [
  "Pre drôt s dĺžkou l a prierezom S platí:<span class=\"fm\">R = ρ·l/S</span>V praxi sa rezistivita kovov udáva v Ω·mm²·m⁻¹ (prierez v mm², dĺžka v m). Platí 1 Ω·m = 10⁶ Ω·mm²·m⁻¹ = 10² Ω·cm a 1 μΩ·m = 1 Ω·mm²·m⁻¹.",
  "Medzinárodný štandard je vzorne vyžíhaná meď: ρ = 1/58 Ω·mm²·m⁻¹ = 0,0172 μΩ·m pri 20 °C. Relatívna vodivosť (meď = 100): striebro 106, meď 100, hliník 62, zinok 31."
 ], c: "Koľko je 1,72·10⁻⁸ Ω·m v Ω·mm²·m⁻¹?", a: "0,0172 Ω·mm²·m⁻¹, lebo 1 Ω·m = 10⁶ Ω·mm²·m⁻¹." },
 { h: "4. Rezistivita a teplota", p: [
  "Rezistivita kovu rastie s teplotou, lebo kmitajúca mriežka elektróny viac rozptyľuje. Všeobecne ρ = ρ₀·[1 + α(T − T₀) + β(T − T₀)² + …]. V užšom rozsahu stačia dva členy:<span class=\"fm\">ρ = ρ₀·[1 + α·(ϑ − ϑ₀)],   α = (1/ρ₀)·dρ/dT</span>α je <b>teplotný súčiniteľ rezistivity</b> (K⁻¹), ρ₀ rezistivita pri vzťažnej teplote ϑ₀. Pre meď pri 20 °C α ≈ 3,93·10⁻³ K⁻¹. Rovnako sa mení odpor: R = R₀[1 + α(ϑ − ϑ₀)].",
  "Z toho sa dá zmerať teplota vinutia: ak odpor cievky vzrástol na R, je ϑ = ϑ₀ + (R/R₀ − 1)/α. α vždy patrí k určitej vzťažnej teplote ϑ₀; α vzťahované na 0 °C je pre meď asi 4,3·10⁻³ K⁻¹.",
  "Pri teplote topenia sa rezistivita zmení skokom. <b>Prímesi a nečistoty</b> rezistivitu vždy zvyšujú, preto má elektrovodná meď čistotu 99,9 % a viac. Rezistivita závisí aj od spôsobu spracovania a mechanického namáhania (ρ<sub>p</sub> = ρ(1 + a·σ))."
 ], c: "Odpor medenej cievky vzrástol o 10 %. O koľko stúpla teplota (α = 3,93·10⁻³ K⁻¹)?", a: "Δϑ = (R/R₀ − 1)/α = 0,1/3,93·10⁻³ ≈ 25 °C." },
 { h: "5. Zmesi kovov a tepelná vodivosť", p: [
  "<b>Heterogénna sústava</b> dvoch nemiešateľných kovov: rezistivitu odhadne <b>Lichteneckerov logaritmický vzťah</b> log ρ = v₁·log ρ₁ + v₂·log ρ₂, kde v₁ + v₂ = 1 sú objemové podiely. <b>Homogénna sústava</b> (tuhý roztok, zliatina): atómy podobnej veľkosti (rozdiel do 15 %) a rovnaký typ mriežky; rezistivita sa s koncentráciou mení spojite. Intermetalické zlúčeniny majú zložitý priebeh s extrémami.",
  "<b>Wiedemannov–Franzov zákon</b>: dobré elektrické vodiče sú aj dobré tepelné vodiče, lebo teplo aj náboj nesú tie isté voľné elektróny. Pomer tepelnej a elektrickej vodivosti je úmerný teplote:<span class=\"fm\">λ/γ = (π²k²/3e²)·T</span>"
 ]}
],
theory: [
 { h: "Prúd v kove", items: ["Vodiče I. triedy (elektróny) a II. triedy (ióny).", "I = n·q·S·v, i = n·q·v, μ = v/E.", "γ = n·q·μ, ρ = 1/γ, i = γE.", "n = z·N, N = ρ<sub>h</sub>N<sub>A</sub>/A; meď n ≈ 8,4·10²⁸ m⁻³."] },
 { h: "Rezistivita", items: ["R = ρl/S; 1 Ω·m = 10⁶ Ω·mm²/m = 10² Ω·cm.", "Meď: 1/58 Ω·mm²/m = 0,0172 μΩ·m pri 20 °C; Ag 106, Cu 100, Al 62, Zn 31 (relatívna vodivosť).", "ρ = ρ₀[1 + α(ϑ − ϑ₀)], Cu α ≈ 3,93·10⁻³ K⁻¹ (20 °C).", "Prímesi rezistivitu zvyšujú; Lichtenecker pre heterogénne zmesi.", "Wiedemann–Franz: λ/γ = (π²k²/3e²)T."] }
],
traps: ["Driftová rýchlosť nie je rýchlosť šírenia signálu.", "Prierez v mm² treba previesť na m² (1 mm² = 10⁻⁶ m²).", "α patrí k vzťažnej teplote ϑ₀; nemiešaj α pri 20 °C s R₀ pri 0 °C.", "Pri J = U/(ρl) sa prierez vykráti, netreba ho."],
examples: [
 { t: "Cvičenie 1: vodič s prierezom 1,00 mm², n = 5,00·10²⁸ m⁻³, v<sub>D</sub> = 1,50·10⁻⁴ m·s⁻¹. Aký tečie prúd?", s: [
  "Vzorec <b>Prúd a drift</b>: I = n·q·S·v.",
  "S = 1 mm² = 1·10⁻⁶ m².",
  "I = 5·10²⁸·1,602·10⁻¹⁹·10⁻⁶·1,5·10⁻⁴ = 1,20 A."] },
 { t: "Cvičenie 2: medený vodič l = 15,0 m, S = 0,100 mm², R = 2,58 Ω pri 20 °C. Rezistivita a prevod jednotiek.", s: [
  "Vzorec <b>Odpor drôtu</b>: ρ = R·S/l, S v m².",
  "ρ = 2,58·0,1·10⁻⁶/15 = 1,72·10⁻⁸ Ω·m.",
  "= 1,72·10⁻² Ω·mm²·m⁻¹ = 1,72·10⁻⁶ Ω·cm (1 Ω·m = 10⁶ Ω·mm²·m⁻¹ = 10² Ω·cm)."] },
 { t: "Cvičenie 3: striebro, ρ = 1,54·10⁻⁸ Ω·m (dané v zadaní), E = 100 V·m⁻¹, n = 5,80·10²⁸ m⁻³. Prúdová hustota, pohyblivosť, driftová rýchlosť.", s: [
  "Vzorce <b>Ohmov zákon v bode</b> a <b>Konduktivita</b>.",
  "i = E/ρ = 100/1,54·10⁻⁸ = 6,49·10⁹ A·m⁻².",
  "μ = 1/(n·q·ρ) = 1/(5,8·10²⁸·1,602·10⁻¹⁹·1,54·10⁻⁸) = 6,99·10⁻³ m²V⁻¹s⁻¹.",
  "v = μ·E = 0,699 m·s⁻¹. (Skriptá uvádzajú pre Ag 0,016 μΩ·m; v úlohe platí zadaná hodnota.)"] },
 { t: "Cvičenie 4: medený vodič 1,50 km, 5,00 mm², U = 100 V, ρ<sub>h</sub> = 8 890 kg·m⁻³, A = 63,57 kg/kmol, ρ = 1,724·10⁻⁸ Ω·m.", s: [
  "i = I/S = U/(ρ·l) = 100/(1,724·10⁻⁸·1500) = 3,87·10⁶ A·m⁻²; prierez sa vykráti.",
  "E = U/l = 100/1500 = 6,67·10⁻² V·m⁻¹.",
  "n = ρ<sub>h</sub>N<sub>A</sub>/A = 8,42·10²⁸ m⁻³ (1 voľný elektrón na atóm).",
  "μ = 1/(nqρ) = 4,30·10⁻³ m²V⁻¹s⁻¹; v = μE = 2,87·10⁻⁴ m·s⁻¹."] },
 { t: "Cvičenie 5: cievka z medi má pri 20 °C odpor 41,8 Ω, po prevádzke 49,2 Ω, α = 3,93·10⁻³ K⁻¹. Aká je teplota vinutia?", s: [
  "Vzorec <b>Teplotná závislosť</b>: R = R₀[1 + α(ϑ − ϑ₀)] → ϑ = ϑ₀ + (R/R₀ − 1)/α.",
  "ϑ = 20 + (49,2/41,8 − 1)/3,93·10⁻³ = 20 + 45,0 = 65,0 °C.",
  "Riešenie v cvičeniach ešte robí priemer (20 + 65)/2 = 42,5 °C. Na písomke uveď obe hodnoty; fyzikálne je 65 °C priemerná teplota vinutia."] }
],
formulas: [
 { n: "Prúd a drift", f: "I = n·q·S·v,   i = I/S = n·q·v", w: "v driftová rýchlosť, i prúdová hustota (v cvičeniach J)" },
 { n: "Pohyblivosť", f: "μ = v/E", w: "m²·V⁻¹·s⁻¹" },
 { n: "Konduktivita", f: "γ = n·q·μ,   ρ = 1/γ", w: "μ = 1/(n·q·ρ)" },
 { n: "Ohmov zákon v bode", f: "i = γ·E = E/ρ", w: "E = U/l v drôte" },
 { n: "Koncentrácia voľných elektrónov", f: "n = z·N = z·ρ<sub>h</sub>·N<sub>A</sub>/A", w: "z valenčné elektróny na atóm; Cu z = 1" },
 { n: "Odpor drôtu", f: "R = ρ·l/S", w: "S v m²" },
 { n: "Jednotky rezistivity", f: "1 Ω·m = 10⁶ Ω·mm²·m⁻¹ = 10² Ω·cm;  1 μΩ·m = 1 Ω·mm²·m⁻¹", w: "prevod" },
 { n: "Teplotná závislosť", f: "ρ = ρ₀[1 + α(ϑ − ϑ₀)],  R = R₀[1 + α(ϑ − ϑ₀)]", w: "ϑ = ϑ₀ + (R/R₀ − 1)/α" },
 { n: "Lichteneckerov vzťah", f: "log ρ = v₁·log ρ₁ + v₂·log ρ₂,  v₁ + v₂ = 1", w: "heterogénna zmes dvoch kovov" },
 { n: "Wiedemannov–Franzov zákon", f: "λ/γ = (π²k²/3e²)·T", w: "tepelná a elektrická vodivosť kovov" },
 { n: "Údaje zo skrípt (20 °C)", f: "Cu 0,0172 · Al 0,0294 · Ag 0,016 · W 0,055 · Fe 0,098 μΩ·m;  Cu α ≈ 3,93·10⁻³ K⁻¹", w: "tabuľka 2.2" },
 { n: "Konštanty", f: "q = 1,602·10⁻¹⁹ C,  N<sub>A</sub> = 6,022·10²⁶ kmol⁻¹,  k = 1,38·10⁻²³ J/K", w: "" }
],
explain: { q: "Vysvetli, prečo sa medený drôt pri zahriatí stane horším vodičom a ako sa z toho dá zmerať teplota vinutia.", keys: ["Počet voľných elektrónov v kove sa s teplotou nemení", "Mriežka viac kmitá a elektróny viac rozptyľuje, pohyblivosť klesá", "Rezistivita rastie približne lineárne: ρ = ρ₀[1 + α(ϑ − ϑ₀)]", "Zo zmeny odporu vyjde ϑ = ϑ₀ + (R/R₀ − 1)/α"] },
quiz: [
 { q: "Ako súvisí konduktivita kovu s koncentráciou a pohyblivosťou elektrónov?", o: ["γ = n·q·μ", "γ = n·q/μ", "γ = μ/(n·q)", "γ = n·μ/q"], e: "i = n·q·v a v = μE, teda i = nqμE = γE.", h: "Začni od i = n·q·v." },
 { q: "Aká je rezistivita medzinárodného štandardu medi pri 20 °C?", o: ["1/58 Ω·mm²·m⁻¹ = 0,0172 μΩ·m", "1/62 Ω·mm²·m⁻¹", "0,0294 μΩ·m", "1,72 Ω·m"], e: "Vzorne vyžíhaná meď 1/58 Ω·mm²/m. 0,0294 μΩ·m je hliník.", h: "Konduktivita 58 MS/m." },
 { q: "Koľko Ω·mm²·m⁻¹ je 1 Ω·m?", o: ["10⁶", "10³", "10⁻⁶", "10²"], e: "1 m² = 10⁶ mm², preto sa číslo vynásobí 10⁶. 10² platí pre Ω·cm.", h: "Koľko mm² má 1 m²?" },
 { q: "Čo je dôkazom, že prúd v kove nesú elektróny?", o: ["Tolmanov pokus, termoemisia, pri prúde sa neprenáša látka", "Kov sa pri prúde rozpúšťa", "Kov vedie len pri vysokej teplote", "Rezistivita s teplotou klesá"], e: "Skriptá: neprenáša sa látka, termoemisia, magnetorezistencia, Tolmanov pokus.", h: "Keby prúd niesli ióny, prenášal by sa materiál." },
 { q: "Ako sa mení rezistivita kovu pri bežných teplotách?", o: ["rastie približne lineárne s teplotou", "klesá exponenciálne", "nemení sa", "rastie s T⁵"], e: "Nad Debyeovou teplotou lineárne; T⁵ platí pod asi 20 K.", h: "Ako polovodič sa kov nespráva." },
 { q: "Ako ovplyvnia prímesi a nečistoty rezistivitu kovu?", o: ["zvýšia ju", "znížia ju", "nezmenia ju", "zvýšia ju len pri nízkej teplote"], e: "Cudzie atómy rozptyľujú elektróny. Preto má elektrovodná meď čistotu aspoň 99,9 %.", h: "Cudzí atóm je porucha mriežky." },
 { q: "Čo vyjadruje Wiedemannov–Franzov zákon?", o: ["pomer tepelnej a elektrickej vodivosti kovu je úmerný T", "rezistivita je úmerná T⁵", "odpor rastie lineárne s teplotou", "rezistivita zmesi je vážený priemer logaritmov"], e: "λ/γ = (π²k²/3e²)T: teplo aj náboj nesú tie isté voľné elektróny.", h: "Týka sa tepelnej vodivosti λ." },
 { q: "Zoraď kovy podľa relatívnej vodivosti od najlepšieho.", o: ["Ag > Cu > Al > Zn", "Cu > Ag > Al > Zn", "Al > Cu > Ag > Zn", "Ag > Al > Cu > Zn"], e: "Ag 106, Cu 100, Al 62, Zn 31.", h: "Striebro je o kúsok lepšie než meď.", b: true }
]
},

/* ---------- L6 ---------- */
{
id: "l6", ch: 1, title: "Supravodivosť a termoelektrina", sub: "nulový odpor, dotykové a termoelektrické napätie",
lesson: [
 { h: "1. Supravodivosť", p: [
  "V predošlom leveli rezistivita kovu s klesajúcou teplotou klesala. Pri niektorých kovoch sa pri <b>kritickej teplote T<sub>k</sub></b> zrazu prepadne na nemerateľnú hodnotu. To je <b>supravodivosť</b> (supravodivost). Objavil ju Kamerlingh Onnes v roku 1911 na ortuti pri 4,12 K, krátko po skvapalnení hélia.",
  "Supravodivosť ničí <b>magnetické pole</b>. Kritická intenzita, pri ktorej pri danej teplote zanikne, je<span class=\"fm\">H<sub>k</sub> = H₀·[1 − (T/T<sub>k</sub>)²]</span>Pri T = 0 je H<sub>k</sub> = H₀, pri T = T<sub>k</sub> je nulová. Krivka H<sub>k</sub>(T) je hranica supravodivého stavu.",
  "Príklady T<sub>k</sub>: Hg 4,12 K, Pb 7,26 K, Nb 9,25 K, Sn 3,69 K, Al 1,14 K; zliatiny a zlúčeniny Nb₃Sn (18 K), Nb–Zr, V₃Ga. <b>Ideálne (mäkké) supravodiče</b> (Pb, Sn, Hg) majú H<sub>k</sub> = 10³–10⁴ A/m, <b>neideálne (tvrdé)</b> (V, Nb, Nb₃Sn, Nb–Zr) 10⁵–10⁶ A/m a hodia sa na magnety.",
  "<b>Vysokoteplotné supravodiče</b> sú keramické oxidy: YBa₂Cu₃O₇ (90 K, 1987) supravodí už v kvapalnom dusíku (77 K). Ďalšie míľniky: Meissnerov jav (1934, supravodič vytlačí magnetické pole), BCS teória (1957). <b>Supervodivosť</b> (hypervodivosť) je naopak len veľmi malá, ale merateľná rezistivita veľmi čistých kovov pri nízkej teplote."
 ], c: "Supravodič s T<sub>k</sub> = 9 K a H₀ = 1·10⁵ A/m chladíš na 4,5 K. Aké pole ešte znesie?", a: "H<sub>k</sub> = H₀[1 − (4,5/9)²] = 1·10⁵·0,75 = 7,5·10⁴ A/m." },
 { h: "2. Dotykové napätie", p: [
  "Keď sa dotknú dva rôzne kovy, elektróny prechádzajú z jedného do druhého, kým sa nevyrovná energia. Na styku vznikne <b>dotykový rozdiel potenciálov</b> U₁₂. Závisí od rozdielu výstupných prác a od pomeru koncentrácií elektrónov, nie od veľkosti styku:<span class=\"fm\">U₁₂ = V₂ − V₁ + (kT/e)·ln(n₂/n₁),   V = W<sub>v</sub>/e</span>W<sub>v</sub> je výstupná práca elektrónu z kovu, V výstupný potenciál, n koncentrácia elektrónov.",
  "Pri izbovej teplote je kT/e ≈ 0,025 V. Rozhoduje teda rozdiel výstupných potenciálov (desatiny voltu), logaritmický člen je len malá korekcia."
 ]},
 { h: "3. Termoelektrické napätie", p: [
  "V uzavretom obvode z dvoch kovov sú dva styky. Ak majú rovnakú teplotu, ich dotykové napätia sú opačné a vyrušia sa. Ak má jeden styk teplotu T a druhý T₀, rozdiely výstupných potenciálov sa stále odčítajú, ale logaritmické členy nie:<span class=\"fm\">U<sub>T</sub> = U₁₂ + U₂₁ = (k/e)·(T − T₀)·ln(n₁/n₂) = α<sub>T</sub>·(T − T₀)</span>α<sub>T</sub> je <b>súčiniteľ termoelektrického napätia</b> (V/K). Toto je <b>Seebeckov jav</b>; na ňom funguje termočlánok. Rozdiel teplôt je v °C aj v K rovnaký.",
  "Opačný jav, keď prúd cez styk ho ohrieva alebo chladí, je <b>Peltierov jav</b>; termoelektrický jav v rôznych častiach toho istého vodiča je <b>Thomsonov jav</b>.",
  "Pozor na mieru: vzorec s ln(n₁/n₂) je klasický model. Dáva správny tvar (napätie úmerné rozdielu teplôt), ale pre čisté kovy preceňuje skutočné hodnoty. Namerané súčinitele voči platine sú rádovo μV/K: meď +7,2 až +7,7, železo +18,7, konštantán −34,7 až −30,4, kremík +448 μV/K. Preto sa termočlánky robia z dvojíc s veľmi odlišným α<sub>T</sub>, napríklad meď–konštantán."
 ], c: "Prečo termočlánok s oboma spojmi pri rovnakej teplote nedáva žiadne napätie?", a: "Dotykové napätia dvoch spojov sú rovnako veľké a opačné, súčet je nulový. Napätie vznikne len pri rozdiele teplôt T − T₀." }
],
theory: [
 { h: "Supravodivosť", items: ["Pod T<sub>k</sub> rezistivita prudko klesne na nemerateľnú hodnotu (Hg 4,12 K, 1911).", "H<sub>k</sub> = H₀[1 − (T/T<sub>k</sub>)²].", "Ideálne (Pb, Sn, Hg; H<sub>k</sub> 10³–10⁴ A/m) a neideálne (Nb, V, Nb₃Sn; 10⁵–10⁶ A/m).", "Vysokoteplotné: YBa₂Cu₃O₇ 90 K."] },
 { h: "Termoelektrina", items: ["U₁₂ = V₂ − V₁ + (kT/e)ln(n₂/n₁), V = W<sub>v</sub>/e.", "U<sub>T</sub> = (k/e)(T − T₀)ln(n₁/n₂) = α<sub>T</sub>(T − T₀) (klasický model).", "Seebeckov, Peltierov, Thomsonov jav.", "α<sub>T</sub> voči Pt: Cu ≈ +7,5, Fe ≈ +18,8, konštantán ≈ −32 μV/K."] }
],
traps: ["Dotykové napätie nezávisí od veľkosti styku.", "V termočlánku sa výstupné potenciály odčítajú, ostane len logaritmický člen.", "Rozdiel teplôt v K a v °C je rovnaký, samotná teplota v exponente či v kT nie.", "Pri T = T<sub>k</sub> je kritické pole nulové, nie H₀."],
examples: [
 { t: "Cvičenie 6: výstupný potenciál medi 4,29 V, tantalu 4,14 V (dané v zadaní), n<sub>Cu</sub> = 8,42·10²⁸ m⁻³, n<sub>Ta</sub> = 5,53·10²⁸ m⁻³, 20 °C. Aké je dotykové napätie?", s: [
  "Vzorec <b>Dotykové napätie</b>, index 2 = meď, 1 = tantal.",
  "V₂ − V₁ = 4,29 − 4,14 = 0,15 V.",
  "kT/e = 1,38·10⁻²³·293,15/1,602·10⁻¹⁹ = 0,02525 V; ln(8,42/5,53) = 0,420.",
  "U₁₂ = 0,15 + 0,02525·0,420 = 0,15 + 0,0106 = 0,16 V. Rozhoduje rozdiel potenciálov."] },
 { t: "Cvičenie 7: termočlánok meď–tantal, rozdiel teplôt spojov 65,0 °C. Teoretické termoelektrické napätie?", s: [
  "Vzorec <b>Termoelektrické napätie</b>: výstupné potenciály sa odčítajú.",
  "U<sub>T</sub> = (k/e)·ΔT·ln(n₂/n₁) = (1,38·10⁻²³·65/1,602·10⁻¹⁹)·0,420 = 2,35 mV.",
  "Podľa klasického modelu. Skutočný článok Cu–Ta dáva len rádovo 0,1–0,2 mV (súčinitele asi 7 a 4,5 μV/K voči Pt); vzorec ber ako skúškový tvar."] },
 { t: "Kritické pole supravodiča: olovo, T<sub>k</sub> = 7,26 K, H₀ = 6,4·10⁴ A/m. Aké pole znesie pri 4,2 K (kvapalné hélium)?", s: [
  "Vzorec <b>Kritické pole</b>.",
  "(T/T<sub>k</sub>)² = (4,2/7,26)² = 0,335.",
  "H<sub>k</sub> = 6,4·10⁴·(1 − 0,335) = 4,3·10⁴ A/m."] }
],
formulas: [
 { n: "Kritické pole supravodiča", f: "H<sub>k</sub> = H₀·[1 − (T/T<sub>k</sub>)²]", w: "nad H<sub>k</sub> supravodivosť zanikne" },
 { n: "Dotykové napätie", f: "U₁₂ = V₂ − V₁ + (kT/e)·ln(n₂/n₁)", w: "V = W<sub>v</sub>/e výstupný potenciál" },
 { n: "Termoelektrické napätie", f: "U<sub>T</sub> = (k/e)·(T − T₀)·ln(n₁/n₂) = α<sub>T</sub>·(T − T₀)", w: "klasický model; ΔT v K = v °C" },
 { n: "Tepelné napätie", f: "kT/e ≈ 0,0253 V pri 20 °C", w: "k = 1,38·10⁻²³ J/K, e = 1,602·10⁻¹⁹ C" },
 { n: "Kritické teploty", f: "Hg 4,12 · Pb 7,26 · Nb 9,25 · Sn 3,69 · Al 1,14 K · Nb₃Sn 18 K · YBa₂Cu₃O₇ 90 K", w: "skriptá" },
 { n: "α<sub>T</sub> voči platine", f: "Cu +7,2…+7,7 · Fe +18,7 · konštantán −34,7…−30,4 · Si +448 μV/K", w: "tabuľka 2.1" }
],
explain: { q: "Vysvetli, prečo termočlánok meria teplotu a prečo potrebuje dva rôzne kovy.", keys: ["Na styku dvoch kovov vzniká dotykové napätie", "V uzavretom obvode sú dva styky s opačným napätím", "Pri rovnakej teplote sa vyrušia, pri rozdiele teplôt ostane U<sub>T</sub> = α<sub>T</sub>(T − T₀)", "Pri rovnakom kove by bol súčiniteľ nulový, napätie by nevzniklo"] },
quiz: [
 { q: "Čo sa stane so supravodivosťou, ak pri teplote pod T<sub>k</sub> zvýšiš magnetické pole nad H<sub>k</sub>?", o: ["zanikne", "zosilnie", "nezmení sa", "T<sub>k</sub> stúpne"], e: "H<sub>k</sub> = H₀[1 − (T/T<sub>k</sub>)²] je hranica supravodivého stavu.", h: "Magnetické pole supravodivosť ničí." },
 { q: "Aké je kritické pole pri T = T<sub>k</sub>?", o: ["nulové", "H₀", "H₀/2", "nekonečné"], e: "[1 − (T<sub>k</sub>/T<sub>k</sub>)²] = 0.", h: "Dosaď T = T<sub>k</sub>." },
 { q: "Ktoré supravodiče sa hodia na silné magnety?", o: ["neideálne (tvrdé), napr. Nb₃Sn, Nb–Zr", "ideálne (mäkké), napr. Pb, Hg", "všetky rovnako", "len vysokoteplotné"], e: "Neideálne znesú H<sub>k</sub> 10⁵–10⁶ A/m, ideálne len 10³–10⁴ A/m.", h: "Potrebuješ veľké kritické pole." },
 { q: "Od čoho nezávisí dotykové napätie dvoch kovov?", o: ["od veľkosti stykovej plochy", "od rozdielu výstupných prác", "od pomeru koncentrácií elektrónov", "od teploty"], e: "Skriptá: na veľkosti stykového miesta nezávisí.", h: "Pozri vzorec, čo v ňom chýba." },
 { q: "Prečo sa vo vzorci pre termoelektrické napätie neobjavia výstupné potenciály?", o: ["V dvoch spojoch sa odčítajú.", "Sú pri všetkých kovoch rovnaké.", "Závisia od teploty.", "Sú zanedbateľné."], e: "U<sub>T</sub> = U₁₂ + U₂₁; rozdiel V₂ − V₁ je v jednom spoji kladný, v druhom záporný.", h: "Obvod má dva spoje s opačným poradím kovov." },
 { q: "Ako sa volá jav, keď prúd prechádzajúci stykom dvoch kovov ho ohrieva alebo chladí?", o: ["Peltierov", "Seebeckov", "Thomsonov", "Meissnerov"], e: "Seebeck: rozdiel teplôt dá napätie; Peltier: prúd dá teplo alebo chlad; Thomson: v rôznych častiach toho istého vodiča.", h: "Je to opak termočlánku." },
 { q: "U ortuti objavil supravodivosť Kamerlingh Onnes pri teplote…", o: ["4,12 K", "77 K", "90 K", "0,52 K"], e: "1911, ortuť 4,12 K. 90 K je YBa₂Cu₃O₇, 77 K bod varu dusíka.", h: "Krátko po skvapalnení hélia.", b: true }
]
},

/* ---------- L7 ---------- */
{
id: "l7", ch: 1, title: "Kovy v praxi", sub: "vodiče, odpory, pájky, kontakty, termočlánky, uhlík",
lesson: [
 { h: "1. Elektrovodné kovy", p: [
  "Z predošlých levelov vieme, čo rezistivitu zväčšuje. Teraz to použijeme pri výbere materiálu. Elektrovodný kov má mať malú rezistivitu, dobrú spracovateľnosť, odolnosť voči korózii, mechanickú pevnosť, ľahké spájanie a pájanie, dostupnosť a nízku cenu.",
  "<b>Meď</b>: štandard je vzorne vyžíhaná meď 1/58 Ω·mm²/m. Vodivosť zhoršujú najmä Fe, Si, P a kyslík (Cu₂O). <b>Vodíková choroba medi</b>: Cu₂O + H₂ → 2 Cu + H₂O, vznikajúca para meď rozrušuje. Preto sa na vákuové účely používa bezkyslíkatá meď. Použitie: vodiče, drôty, troleje, plošné spoje (leptajú sa chloridom železitým). Zliatiny: bronzy (Cu–Sn), mosadze (Cu–Zn), Cu–Ni (odporové).",
  "<b>Hliník</b> (62 % vodivosti medi, ale ľahší): na vzduchu oxiduje, chráni ho vrstva Al₂O₃ (eloxovanie = anodická oxidácia). Pri styku s inými kovmi v prítomnosti elektrolytu hrozí elektrolytická korózia. Použitie: vonkajšie vedenia, vinutia, káble, elektrolytické kondenzátory. Elektrovodné zliatiny Aldrey, Condal; konštrukčný Dural."
 ]},
 { h: "2. Odporové materiály", p: [
  "Odporový materiál chce opak: <b>veľkú rezistivitu</b>, <b>malý teplotný súčiniteľ rezistivity</b> (odpor sa s teplotou nemení), malú tepelnú rozťažnosť, pevnosť pri vysokých teplotách, stálosť a nízku cenu.",
  "Na <b>meracie prístroje a odporové normály</b>: 0,4–0,5 Ω·mm²/m, takmer nulové α a malé termoelektrické napätie voči medi. Typicky <b>manganín</b> (86 Cu, 12 Mn, 2 Ni; 0,43 μΩ·m, α ≈ ±2,5·10⁻⁶ K⁻¹) a <b>konštantán</b> (54 Cu, 45 Ni; 0,5 μΩ·m, ale −40 μV/K voči medi, preto sa hodí do termočlánkov).",
  "Na <b>elektrotepelné zariadenia</b> (500–1 350 °C) zliatiny Cr–Ni–Fe (<b>chromnikl</b>, nichróm; 0,85–1,1 Ω·mm²/m) a Fe–Cr–Al (<b>kanthal</b>, fechral; 1,25–1,45 Ω·mm²/m, na povrchu ochranná vrstva Al₂O₃). Pre vyššie teploty Mo, W v inertnej atmosfére, nekovové silit (SiC) a grafit."
 ], c: "Prečo je na odporový normál vhodný manganín a nie meď?", a: "Manganín má asi 25× väčšiu rezistivitu a takmer nulový teplotný súčiniteľ, takže odpor sa s teplotou nemení. Meď má α ≈ 3,9·10⁻³ K⁻¹." },
 { h: "3. Pájky, kontakty, termočlánky a uhlík", p: [
  "<b>Pájky</b>: mäkké (teplota topenia do 500 °C), tvrdé (nad 500 °C) a špeciálne nízkotaviteľné (Woodov kov). Mäkké sú olovnaté (Pb, Sn) alebo bezolovnaté (Sn s Ag, Cu, Zn, Bi, Sb). <b>Tavidlo</b> očistí povrch od oxidov, zlepší zmáčavosť a zabráni oxidácii; obsahuje nosič (kolofónia, organické kyseliny), aktivátory, aditíva a rozpúšťadlá.",
  "<b>Kontakty (doteky)</b> majú mať malý prechodový odpor, odolnosť voči opaľovaniu a zváraniu oblúkom a voči korózii. Pre slabé prúdy drahé kovy (Au, Pt, Ag), pre stredné a veľké zaťaženie W a spekané materiály W–Cu, W–Ag, Ag–Ni, Ag–grafit.",
  "<b>Termočlánky</b> (podľa tabuľky skrípt): meď–konštantán −200 až +400 °C, železo–konštantán −200 až +600 °C, NiCr–Ni (chromel–alumel) 0 až 900 °C (krátkodobo 1 200 °C), PtRh–Pt 0 až 1 300 °C (krátkodobo 1 600 °C). Požaduje sa veľká citlivosť, čo najlineárnejšia U<sub>T</sub>(T) a stálosť.",
  "<b>Elektrotechnický uhlík</b>: pevný, s malým trením, mazivý, dobre vodivý a nezvárateľný. Elektrografit (1,5–6·10⁻⁵ Ω·m) na kefky elektrických strojov a zberače, kovografit (impregnovaný kovmi), ďalej elektródy do oblúkových pecí, batérie a súčasti vákuovej techniky."
 ]}
],
theory: [
 { h: "Elektrovodné kovy", items: ["Požiadavky: malá ρ, spracovateľnosť, korózia, pevnosť, spájanie, cena.", "Meď 1/58 Ω·mm²/m; nečistoty Fe, Si, P, O₂; vodíková choroba Cu₂O + H₂.", "Hliník 62 % vodivosti, Al₂O₃, eloxovanie, elektrolytická korózia; Aldrey, Dural."] },
 { h: "Odporové materiály", items: ["Veľká ρ, malé α, stálosť.", "Normály: manganín, konštantán (0,4–0,5 Ω·mm²/m).", "Teplo: chromnikl (0,85–1,1), kanthal/fechral (1,25–1,45 Ω·mm²/m).", "Vysoké teploty: Mo, W, SiC, grafit."] },
 { h: "Ostatné", items: ["Pájky mäkké do 500 °C, tvrdé nad 500 °C; tavidlo.", "Kontakty: Au, Pt, Ag; W, W–Cu, Ag–Ni.", "Termočlánky: Cu–Ko do 400 °C, Fe–Ko do 600 °C, NiCr–Ni do 900 °C, PtRh–Pt do 1 300 °C.", "Uhlík: kefky, zberače, elektródy."] }
],
traps: ["Odporový materiál potrebuje malý teplotný súčiniteľ, nie len veľkú rezistivitu.", "Konštantán má malé α, ale veľké termoelektrické napätie voči medi (preto termočlánok Cu–Ko).", "Mäkká pájka je do 500 °C, nie do 300 °C."],
examples: [
 { t: "Vyber materiál: odporový normál, vykurovacia špirála do 1 200 °C a termočlánok do 1 500 °C.", s: [
  "Normál: manganín, lebo má takmer nulové α a malé termoelektrické napätie voči medi.",
  "Špirála: kanthal (Fe–Cr–Al, do 1 350 °C), chráni ho vrstva Al₂O₃.",
  "Termočlánok: PtRh–Pt, krátkodobo do 1 600 °C."] }
],
formulas: [
 { n: "Relatívna vodivosť", f: "Ag 106 · Cu 100 · Al 62 · Zn 31", w: "meď = 100" },
 { n: "Odporové materiály", f: "manganín 0,43 · konštantán 0,5 · chromnikl 1,1 · kanthal 1,39–1,45 μΩ·m", w: "tabuľka 2.11" },
 { n: "Pájky", f: "mäkké < 500 °C < tvrdé", w: "podľa teploty topenia" },
 { n: "Termočlánky – rozsah", f: "Cu–Ko −200…400 · Fe–Ko −200…600 · NiCr–Ni 0…900 · PtRh–Pt 0…1300 °C", w: "tabuľka 2.13" },
 { n: "Vodíková choroba medi", f: "Cu₂O + H₂ → 2 Cu + H₂O", w: "preto bezkyslíkatá meď do vákua" }
],
explain: { q: "Vysvetli, prečo sa na vodič berie čistá meď, ale na rezistor zliatina, napríklad manganín.", keys: ["Vodič má mať čo najmenšiu rezistivitu, preto čistý kov", "Prímesi rezistivitu zvyšujú", "Rezistor potrebuje veľkú rezistivitu a odpor nezávislý od teploty", "Zliatina ako manganín má veľkú ρ a takmer nulové α"] },
quiz: [
 { q: "Ktorú vlastnosť musí mať materiál na odporový normál?", o: ["takmer nulový teplotný súčiniteľ rezistivity", "čo najmenšiu rezistivitu", "veľké termoelektrické napätie voči medi", "nízku teplotu topenia"], e: "Odpor normálu sa nesmie meniť s teplotou a nesmie vytvárať termoelektrické napätie na prípojkách z medi.", h: "Normál má mať stálu hodnotu." },
 { q: "Čo je vodíková choroba medi?", o: ["Cu₂O s vodíkom vytvorí vodnú paru, ktorá meď rozruší", "rozpúšťanie medi vo vode", "korózia medi v styku s hliníkom", "zvýšenie vodivosti vodíkom"], e: "Cu₂O + H₂ → 2 Cu + H₂O; preto bezkyslíkatá meď pre vákuum.", h: "Problémom je kyslík viazaný v medi." },
 { q: "Do akej teploty sa používa termočlánok meď–konštantán?", o: ["asi do 400 °C (krátkodobo 600 °C)", "do 1 300 °C", "do 900 °C", "len pod 0 °C"], e: "Cu–Ko −200 až +400 °C. Vysoké teploty zvládne PtRh–Pt.", h: "Meď pri vyšších teplotách oxiduje." },
 { q: "Ktorá zliatina sa hodí na vykurovacie telesá do 1 300 °C?", o: ["kanthal (Fe–Cr–Al)", "manganín", "mosadz", "bronz"], e: "Kanthal má veľkú rezistivitu a chráni ho vrstva Al₂O₃.", h: "Potrebuješ žiaruvzdornosť." },
 { q: "Mäkké pájky sú tie, ktoré sa tavia…", o: ["do 500 °C", "nad 500 °C", "do 100 °C", "nad 1 000 °C"], e: "Skriptá: mäkké do 500 °C, tvrdé nad 500 °C.", h: "Hranica je 500 °C." },
 { q: "Prečo hrozí korózia pri spojení hliníka s meďou vo vlhku?", o: ["vzniká galvanický článok (elektrolytická korózia)", "hliník je mäkší", "meď oxiduje rýchlejšie", "hliník sa rozpúšťa vo vode"], e: "Dva rôzne kovy a elektrolyt tvoria článok, menej ušľachtilý hliník sa rozpúšťa.", h: "Dva kovy + elektrolyt = …" },
 { q: "Na čo sa používa elektrografit?", o: ["kefky elektrických strojov a smykové zberače", "vinutia transformátorov", "pájky", "odporové normály"], e: "Má malé trenie, je mazivý, vodivý a nezvárateľný.", h: "Kĺzavý kontakt na rotujúcom komutátore.", b: true }
]
},
/* ---------- L8 ---------- */
{
id: "l8", ch: 2, title: "Magnetizácia a permeabilita", sub: "B, H, M, J, κ, μr a domény",
lesson: [
 { h: "1. Odkiaľ sa berie magnetizmus látok", p: [
  "Vodivosť kovov sme vysvetlili pohybom elektrónov. Rovnaké elektróny robia aj magnetizmus: každý elektrón má <b>spinový</b> magnetický moment (otáčanie okolo vlastnej osi) a <b>dráhový</b> (orbitálny) moment z obehu okolo jadra. Jadrové momenty sú o niekoľko rádov menšie.",
  "Podľa toho, či sa momenty v atóme vykompenzujú, delíme látky: <b>diamagnetiká</b> majú spinové aj dráhové momenty vykompenzované (meď, zlato, zinok, voda, vzácne plyny), <b>paramagnetiká</b> nevykompenzované (platina, hliník, mangán), <b>feromagnetiká</b> majú nevykompenzované spinové momenty na niektorej vnútornej vrstve obalu (železo, kobalt, nikel, gadolínium a ich zliatiny)."
 ]},
 { h: "2. Základné vzťahy", p: [
  "Látka v poli s intenzitou H (A/m) sa zmagnetizuje. Indukcia B (T) je súčet časti od samotného poľa a časti, ktorú pridá látka, <b>magnetickú polarizáciu</b> J<sub>m</sub> (T):<span class=\"fm\">B = μ₀H + J<sub>m</sub> = μ₀H + μ₀M</span>M je <b>magnetizácia</b> (A/m). Je to obdoba D = ε₀E + P pri dielektrikách.",
  "Magnetizácia je úmerná poľu, konštanta je <b>magnetická susceptibilita</b> κ (v niektorých textoch χ):<span class=\"fm\">M = κ·H,   B = μ₀(1 + κ)H = μ₀μ<sub>r</sub>H,   μ<sub>r</sub> = 1 + κ</span>μ₀ = 4π·10⁻⁷ H/m. Diamagnetiká majú κ malé záporné (μ<sub>r</sub> tesne pod 1), paramagnetiká malé kladné, feromagnetiká obrovské a závislé od H.",
  "Polarizácia J<sub>m</sub> sa píše s indexom, aby sa nepomýlila s prúdovou hustotou ani s momentom zotrvačnosti. Jednotka J<sub>m</sub> je tesla, jednotka M je A/m."
 ], c: "Pole H = 10 A/m vytvorí v látke polarizáciu J<sub>m</sub> = 3·10⁻⁶ T. Aká je susceptibilita?", a: "κ = J<sub>m</sub>/(μ₀H) = 3·10⁻⁶/(1,2566·10⁻⁶·10) = 0,24, teda μ<sub>r</sub> = 1,24." },
 { h: "3. Domény a Curieov bod", p: [
  "Feromagnetikum sa skladá z <b>domén</b> (Weissových oblastí), v ktorých sú spinové momenty vďaka výmenným silám spontánne rovnobežné. Domény oddeľujú <b>Blochove steny</b>, v ktorých sa smer momentov postupne stáča. Bez vonkajšieho poľa sú domény orientované tak, že sa navonok vyrušia.",
  "Pri <b>antiferomagnetikách</b> sú momenty dvoch rovnakých podmriežok A a B antiparalelné a vyrušia sa. <b>Ferimagnetiká</b> (ferity, oxidové polovodiče) majú podmriežky s rôznymi iónmi, momenty sa vyrušia len čiastočne: je to nevykompenzovaný antiferomagnetizmus.",
  "Nad <b>Curieovým bodom</b> tepelný pohyb rozbije rovnobežné usporiadanie a látka prejde do paramagnetického stavu: Fe 768 °C, Ni 358 °C, Co 1 131 °C. Pri feritoch sa používa <b>technický Curieov bod</b>, teplota, pri ktorej počiatočná permeabilita klesne na 50 % hodnoty pri 20 °C.",
  "Susceptibilita paramagnetika klesá s teplotou podľa <b>Curieho zákona</b> κ = C/T (T v kelvinoch), teda κ₂ = κ₁·T₁/T₂. Cvičenie ho používa na Fe₂O₃; hematit je v skutočnosti pri izbovej teplote slabý feromagnet, v úlohe ho berieme ako paramagnet."
 ]},
 { h: "4. Krivka prvotnej magnetizácie a permeabilita", p: [
  "Ak dáš odmagnetovaný feromagnet do rastúceho poľa, B(H) opisuje <b>krivka prvotnej magnetizácie</b>. Má štyri oblasti: I. vratné posuny Blochových stien, II. nevratné posuny stien (strmý nárast), III. stáčanie polarizácie domén do smeru poľa, IV. <b>nasýtenie</b>.",
  "Permeabilita feromagnetika preto nie je konštanta. <b>Počiatočná</b> μ<sub>r poč</sub> je sklon krivky v počiatku, <b>maximálna</b> μ<sub>r max</sub> sklon dotyčnice z počiatku ku krivke, <b>diferenciálna</b> μ<sub>r dif</sub> strmosť krivky v danom bode. Teplotnú závislosť opisuje teplotný súčiniteľ permeability α<sub>μ</sub>."
 ]}
],
theory: [
 { h: "Rozdelenie", items: ["Diamagnetiká (Cu, Au, Zn, voda): momenty vykompenzované, κ < 0 malé.", "Paramagnetiká (Pt, Al, Mn): κ > 0 malé, Curieho zákon κ = C/T.", "Feromagnetiká (Fe, Co, Ni, Gd): domény, Blochove steny, κ veľké.", "Antiferomagnetiká a ferimagnetiká (ferity)."] },
 { h: "Vzťahy", items: ["B = μ₀H + J<sub>m</sub>, J<sub>m</sub> = μ₀M, M = κH.", "μ<sub>r</sub> = 1 + κ = B/(μ₀H), μ₀ = 4π·10⁻⁷ H/m.", "Curieov bod: Fe 768 °C, Ni 358 °C, Co 1 131 °C; technický Curieov bod feritov (50 % μ<sub>r poč</sub>).", "Krivka prvotnej magnetizácie: vratné a nevratné posuny stien, stáčanie, nasýtenie; μ<sub>r poč</sub>, μ<sub>r max</sub>, μ<sub>r dif</sub>."] }
],
traps: ["J<sub>m</sub> je v tesla, M v A/m: J<sub>m</sub> = μ₀M.", "μ<sub>r</sub> = 1 + κ, nie κ.", "V Curieho zákone treba teplotu v kelvinoch.", "Permeabilita feromagnetika závisí od H, nie je to jedna konštanta."],
examples: [
 { t: "Magnetické materiály, cvičenie 1: J<sub>m</sub> = 3,00·10⁻⁶ T, H = 10,0 A·m⁻¹. Urč B, κ<sub>m</sub> a μ<sub>r</sub>.", s: [
  "Vzorce <b>Indukcia a polarizácia</b>, <b>Susceptibilita</b>.",
  "μ₀H = 4π·10⁻⁷·10 = 1,257·10⁻⁵ T; B = 1,257·10⁻⁵ + 0,300·10⁻⁵ = 1,557·10⁻⁵ T.",
  "κ<sub>m</sub> = J<sub>m</sub>/(μ₀H) = 3·10⁻⁶/1,257·10⁻⁵ = 0,24.",
  "μ<sub>r</sub> = 1 + κ = 1,24. Kontrola: B/(μ₀H) = 1,557/1,257 = 1,24."] },
 { t: "Magnetické materiály, cvičenie 2: Fe₂O₃ (v úlohe paramagnetikum), κ = 1,4·10⁻³ pri 20 °C, H = 10⁶ A·m⁻¹. B, M, J<sub>m</sub> pri 20 °C a pri 77,3 K.", s: [
  "Vzorec <b>Curieho zákon</b>: κ₂ = κ₁·T₁/T₂ = 1,4·10⁻³·293/77,3 = 5,31·10⁻³.",
  "20 °C: M = κH = 1,40·10³ A/m; J<sub>m</sub> = μ₀M = 1,76·10⁻³ T; B = μ₀(1 + κ)H = 1,258 T.",
  "77,3 K: M = 5,31·10³ A/m; J<sub>m</sub> = 6,67·10⁻³ T; B = 1,263 T.",
  "B sa mení len na 3. desatinnom mieste, lebo κ je malé a B ≈ μ₀H."] }
],
formulas: [
 { n: "Indukcia a polarizácia", f: "B = μ₀H + J<sub>m</sub>,   J<sub>m</sub> = μ₀M", w: "J<sub>m</sub> v T, M v A/m" },
 { n: "Susceptibilita", f: "M = κ·H,   κ = J<sub>m</sub>/(μ₀H)", w: "v niektorých textoch χ" },
 { n: "Permeabilita", f: "B = μ₀μ<sub>r</sub>H,   μ<sub>r</sub> = 1 + κ = B/(μ₀H)", w: "lineárne látky" },
 { n: "Curieho zákon", f: "κ = C/T  →  κ₂ = κ₁·T₁/T₂", w: "paramagnetiká, T v K" },
 { n: "Curieove body", f: "Fe 768 °C · Ni 358 °C · Co 1 131 °C", w: "nad nimi paramagnetický stav" },
 { n: "Konštanty", f: "μ₀ = 4π·10⁻⁷ H/m = 1,2566·10⁻⁶ H/m", w: "permeabilita vákua" }
],
explain: { q: "Vysvetli, čo sa deje v železe, keď ho vložíš do rastúceho magnetického poľa, až kým sa nenasýti.", keys: ["Železo má domény so spontánne rovnobežnými spinmi, navonok sa vyrušia", "Najprv sa vratne posúvajú Blochove steny, potom nevratne", "Potom sa polarizácia domén stáča do smeru poľa", "Keď sú všetky momenty v smere poľa, nastane nasýtenie"] },
quiz: [
 { q: "Aký je vzťah medzi B, H a magnetickou polarizáciou J<sub>m</sub>?", o: ["B = μ₀H + J<sub>m</sub>", "B = μ₀(H + J<sub>m</sub>)", "B = J<sub>m</sub>/μ₀ + H", "B = μ₀H·J<sub>m</sub>"], e: "J<sub>m</sub> je v tesla a pripočíta sa k μ₀H. S magnetizáciou: B = μ₀(H + M).", h: "Všetky sčítané členy musia byť v tesla." },
 { q: "Ako súvisí relatívna permeabilita so susceptibilitou?", o: ["μ<sub>r</sub> = 1 + κ", "μ<sub>r</sub> = κ", "μ<sub>r</sub> = 1 − κ", "μ<sub>r</sub> = 1/κ"], e: "B = μ₀(1 + κ)H = μ₀μ<sub>r</sub>H.", h: "Vákuum má κ = 0 a μ<sub>r</sub> = 1." },
 { q: "Ktorá látka je diamagnetická?", o: ["meď", "hliník", "platina", "železo"], e: "Diamagnetiká: Cu, Au, Zn, voda. Al a Pt sú paramagnetiká, Fe feromagnetikum.", h: "Momenty má vykompenzované." },
 { q: "Čo sú Blochove steny?", o: ["hraničné vrstvy medzi doménami, v ktorých sa stáča smer spinov", "hranice zŕn v polykryštáli", "podmriežky feritu", "oblasti s nulovou indukciou"], e: "Domény oddeľujú Blochove steny; ich posun je prvá fáza magnetizácie.", h: "Súvisí s doménami." },
 { q: "Čo sa stane s feromagnetikom nad Curieovým bodom?", o: ["prejde do paramagnetického stavu", "stane sa supravodičom", "stane sa diamagnetikom", "zvýši sa mu permeabilita"], e: "Tepelný pohyb rozbije rovnobežnú orientáciu spinov v doménach. Fe 768 °C.", h: "Tepelný pohyb vs. výmenné sily." },
 { q: "Paramagnetikum má pri 300 K susceptibilitu 1,5·10⁻³. Aká bude pri 150 K podľa Curieho zákona?", o: ["3,0·10⁻³", "0,75·10⁻³", "1,5·10⁻³", "6,0·10⁻³"], e: "κ₂ = κ₁·T₁/T₂ = 1,5·10⁻³·2.", h: "κ je nepriamo úmerná T." },
 { q: "Čím sa ferimagnetikum (ferit) líši od antiferomagnetika?", o: ["momenty podmriežok sa vyrušia len čiastočne, lebo podmriežky sú z rôznych iónov", "momenty sú všetky rovnobežné", "nemá žiadne podmriežky", "je to vždy kov"], e: "Antiferomagnetikum má podmriežky rovnaké a momenty sa vyrušia; ferit má rôzne, ostane výsledný moment.", h: "Nevykompenzovaný antiferomagnetizmus." },
 { q: "Čo opisuje oblasť IV na krivke prvotnej magnetizácie?", o: ["nasýtenie", "vratné posuny Blochových stien", "nevratné posuny stien", "stáčanie polarizácie domén"], e: "I vratné posuny, II nevratné posuny, III stáčanie, IV nasýtenie.", h: "Posledná oblasť krivky.", b: true }
]
},

/* ---------- L9 ---------- */
{
id: "l9", ch: 2, title: "Hysterézia a straty", sub: "mäkké a tvrdé materiály, straty pri striedavom poli",
lesson: [
 { h: "1. Hysterézna slučka", p: [
  "V predošlom leveli sme magnetovali od nuly po nasýtenie. Keď pole znova zmenšíš, B sa nevracia po tej istej krivke: nevratné posuny stien si materiál „pamätá“. Závislosť B(H) pri striedavom magnetovaní tvorí <b>hysteréznu slučku</b>. Pri veľmi pomalých zmenách je to statická slučka, pri striedavom poli dynamická; jej tvar závisí od frekvencie a priebehu B a H.",
  "Dôležité body slučky: <b>remanentná indukcia</b> B<sub>r</sub> (ostane pri H = 0), <b>koercitívna sila</b> H<sub>c</sub> (pole, ktoré treba na zníženie B na nulu), <b>indukcia nasýtenia</b> B<sub>s</sub>."
 ]},
 { h: "2. Mäkké a tvrdé materiály", p: [
  "Hlavné kritérium je koercitívna sila: H<sub>c</sub> &lt; 10³ A/m znamená <b>magneticky mäkký</b> materiál (úzka slučka), H<sub>c</sub> &gt; 10³ A/m <b>magneticky tvrdý</b> (široká slučka).",
  "<b>Mäkké</b> chcú malú H<sub>c</sub>, veľkú počiatočnú aj maximálnu permeabilitu, malé hysterézne straty a ľahké nasýtenie. Použitie: transformátory, stroje, tlmivky, relé, jadrá cievok. Kompaktné: čisté železo, oceľ s kremíkom (transformátorové a dynamové plechy, Si zvyšuje rezistivitu), zliatiny Fe–Ni–Co (μ<sub>r poč</sub> až 300 000, B<sub>s</sub> až 2,4 T). <b>Mäkké ferity</b> (kubická mriežka) majú veľkú rezistivitu, preto malé straty vírivými prúdmi a hodia sa na vysoké frekvencie, ale B<sub>s</sub> len do 0,3 T.",
  "<b>Tvrdé</b> sú permanentné magnety: veľká H<sub>c</sub>, veľká B<sub>r</sub>, malá permeabilita a veľký <b>maximálny energetický súčin (BH)<sub>max</sub></b> (J/m³), energia poľa v okolí jednotkového objemu magnetu. Oceľ s W, Cr, Mo, Co (1–2,5 kJ/m³), Al–Ni(–Co) (15–45 kJ/m³), zlúčeniny vzácnych zemín RCo₅, R₂Co₁₇, najčastejšie samárium (H<sub>c</sub> stovky kA/m, okolo 300 kJ/m³), bárnaté ferity s hexagonálnou mriežkou (28–35 kJ/m³). Pre pamäťové médiá sa chce <b>pravouhlá</b> slučka."
 ], c: "Prečo sa jadro transformátora robí z mäkkého materiálu?", a: "Jadro sa každú periódu premagnetuje. Úzka slučka (malá H<sub>c</sub>) znamená malú plochu slučky, teda malé hysterézne straty, a veľká permeabilita dá veľký tok pri malom prúde." },
 { h: "3. Straty pri striedavom poli", p: [
  "Pri každom premagnetovaní sa časť energie mení na teplo. Straty sa udávajú ako <b>merné straty</b> (W/kg) alebo <b>stratové číslo</b> (merné straty pri B<sub>m</sub> = 1 T alebo 1,5 T a 50 Hz). Celkové straty sú súčtom troch zložiek: P = P<sub>h</sub> + P<sub>v</sub> + P<sub>z</sub>.",
  "<b>Hysterézne straty</b> sú úmerné ploche statickej slučky. Za jeden cyklus sa stratí stále rovnaká energia, takže straty rastú priamo s frekvenciou: P<sub>h</sub> ~ f·B<sub>m</sub><sup>1,6</sup>.",
  "<b>Straty vírivými prúdmi</b>: striedavý tok indukuje v materiáli prúdy, ktoré ho zahrievajú. Rastú s druhou mocninou frekvencie aj hrúbky: P<sub>v</sub> ~ f²·d²·B<sub>m</sub>²·γ. Znižujú sa väčšou rezistivitou (kremík v oceli, ferity) a rozdelením materiálu na tenké izolované plechy. <b>Straty magnetickým oneskorením</b> P<sub>z</sub> sa prejavia pri slabých poliach v mäkkých materiáloch, najmä feritoch.",
  "Pri rovnakej amplitúde B a sínusovom priebehu teda platí pre novú frekvenciu f₂:<span class=\"fm\">p(f₂) = (f₂/f₁)·p<sub>h1</sub> + (f₂/f₁)²·p<sub>v1</sub></span>Ak poznáš len celkové straty pri dvoch frekvenciách, máš dve rovnice o dvoch neznámych p<sub>h</sub> a p<sub>v</sub>."
 ], c: "Pri 50 Hz sú hysterézne straty 1 W/kg a vírivé 0,5 W/kg. Aké budú celkové pri 100 Hz?", a: "2·1 + 4·0,5 = 4 W/kg. Hysterézne sa zdvojnásobia, vírivé zoštvornásobia." }
],
theory: [
 { h: "Slučka", items: ["B<sub>r</sub> remanentná indukcia, H<sub>c</sub> koercitívna sila, B<sub>s</sub> nasýtenie.", "Mäkké H<sub>c</sub> &lt; 10³ A/m (úzka slučka), tvrdé H<sub>c</sub> &gt; 10³ A/m (široká).", "(BH)<sub>max</sub> kritérium permanentných magnetov.", "Pravouhlá slučka pre pamäte."] },
 { h: "Materiály", items: ["Mäkké: Fe, Fe–Si plechy, Fe–Ni–Co (μ<sub>r poč</sub> do 300 000, B<sub>s</sub> do 2,4 T), mäkké ferity (B<sub>s</sub> do 0,3 T, vysoké f).", "Tvrdé: oceľ s W, Cr, Mo, Co (1–2,5 kJ/m³), AlNi(Co) (15–45), SmCo (~300 kJ/m³), Ba ferity (28–35)."] },
 { h: "Straty", items: ["P = P<sub>h</sub> + P<sub>v</sub> + P<sub>z</sub>; merné straty W/kg, stratové číslo pri 1 T / 1,5 T a 50 Hz.", "P<sub>h</sub> ~ f·B<sub>m</sub><sup>1,6</sup> (plocha slučky).", "P<sub>v</sub> ~ f²d²B<sub>m</sub>²γ; znižujú plechy a ferity.", "p(f₂) = (f₂/f₁)p<sub>h1</sub> + (f₂/f₁)²p<sub>v1</sub>."] }
],
traps: ["Hysterézne straty rastú s f, vírivé s f². Netreba ich obe násobiť rovnako.", "Mäkký materiál nemá malú remanenciu, ale malú koercitívnu silu.", "Ferity majú malé vírivé straty vďaka veľkej rezistivite, ale nízke nasýtenie.", "Vzťah p(f₂) platí len pri rovnakej amplitúde B."],
examples: [
 { t: "Magnetické materiály, cvičenie 3: plechy 0,10 mm (p<sub>h</sub> = 1,1, p<sub>v</sub> = 0,10 W/kg) a 0,35 mm (p<sub>h</sub> = 0,50, p<sub>v</sub> = 0,30 W/kg) pri 50 Hz. Celkové straty pri 50, 150 a 400 Hz.", s: [
  "Vzorec <b>Straty pri inej frekvencii</b>, x = f/50.",
  "0,10 mm: 50 Hz 1,1 + 0,1 = 1,2 W/kg; 150 Hz (x = 3) 3·1,1 + 9·0,1 = 4,2 W/kg; 400 Hz (x = 8) 8·1,1 + 64·0,1 = 15,2 W/kg.",
  "0,35 mm: 0,8 W/kg; 3·0,5 + 9·0,3 = 4,2 W/kg; 8·0,5 + 64·0,3 = 23,2 W/kg.",
  "Pri 400 Hz je hrubší plech horší, lebo vírivé straty (∝ d²f²) prevládnu."] },
 { t: "Magnetické materiály, cvičenie 4: celkové merné straty 2,00 W/kg pri 100 Hz a 7,00 W/kg pri 200 Hz. Aké budú pri 400 Hz?", s: [
  "Vzorec <b>Rozdelenie strát</b>: dve rovnice o dvoch neznámych.",
  "100 Hz: p<sub>h</sub> + p<sub>v</sub> = 2. 200 Hz (x = 2): 2p<sub>h</sub> + 4p<sub>v</sub> = 7.",
  "Z prvej p<sub>h</sub> = 2 − p<sub>v</sub>; 4 − 2p<sub>v</sub> + 4p<sub>v</sub> = 7 → p<sub>v</sub> = 1,5 W/kg, p<sub>h</sub> = 0,5 W/kg.",
  "400 Hz (x = 4): 4·0,5 + 16·1,5 = 26 W/kg."] }
],
formulas: [
 { n: "Delenie mäkké/tvrdé", f: "H<sub>c</sub> &lt; 10³ A/m mäkký · H<sub>c</sub> &gt; 10³ A/m tvrdý", w: "skriptá" },
 { n: "Celkové straty", f: "P = P<sub>h</sub> + P<sub>v</sub> + P<sub>z</sub>", w: "hysterézne, vírivé, oneskorením" },
 { n: "Hysterézne straty", f: "P<sub>h</sub> ~ f·B<sub>m</sub><sup>1,6</sup>", w: "úmerné ploche slučky" },
 { n: "Straty vírivými prúdmi", f: "P<sub>v</sub> ~ f²·d²·B<sub>m</sub>²·γ", w: "d hrúbka plechu, γ konduktivita" },
 { n: "Straty pri inej frekvencii", f: "p(f₂) = (f₂/f₁)·p<sub>h1</sub> + (f₂/f₁)²·p<sub>v1</sub>", w: "rovnaká amplitúda B, sínus" },
 { n: "Rozdelenie strát", f: "p₁ = p<sub>h</sub> + p<sub>v</sub>;  p₂ = x·p<sub>h</sub> + x²·p<sub>v</sub>", w: "x = f₂/f₁, dve rovnice" },
 { n: "Energetický súčin", f: "(BH)<sub>max</sub> [J/m³]: oceľ 1–2,5 · AlNiCo 15–45 · Ba ferit 28–35 · SmCo ~300 kJ/m³", w: "permanentné magnety" }
],
explain: { q: "Vysvetli, prečo sa jadro transformátora skladá z tenkých izolovaných plechov z kremíkovej ocele, a nie z jedného kusa železa.", keys: ["Striedavý tok indukuje v jadre vírivé prúdy, ktoré ho zahrievajú", "Vírivé straty rastú s druhou mocninou hrúbky", "Tenké izolované plechy prerušia dráhu vírivých prúdov", "Kremík zvyšuje rezistivitu, tým vírivé prúdy ďalej klesnú"] },
quiz: [
 { q: "Čo je koercitívna sila?", o: ["intenzita poľa, pri ktorej indukcia na slučke klesne na nulu", "indukcia, ktorá ostane pri H = 0", "maximálna indukcia materiálu", "energia na jeden cyklus"], e: "H<sub>c</sub> je priesečník slučky s osou H. Indukcia pri H = 0 je remanencia B<sub>r</sub>.", h: "Priesečník s osou H." },
 { q: "Ktorý materiál je magneticky mäkký?", o: ["materiál s H<sub>c</sub> &lt; 10³ A/m", "materiál s H<sub>c</sub> &gt; 10³ A/m", "materiál s veľkým (BH)<sub>max</sub>", "materiál s malou permeabilitou"], e: "Skriptá: H<sub>c</sub> &lt; 10³ A/m mäkké, nad 10³ A/m tvrdé.", h: "Úzka slučka." },
 { q: "Ako rastú straty vírivými prúdmi s frekvenciou pri rovnakej amplitúde B?", o: ["s f²", "s f", "s √f", "nezávisia od f"], e: "P<sub>v</sub> ~ f²d²B<sub>m</sub>²γ. Hysterézne rastú s f.", h: "Indukované napätie aj prúd rastú s f." },
 { q: "Prečo sa mäkké ferity používajú pri vysokých frekvenciách?", o: ["majú veľkú rezistivitu, preto malé straty vírivými prúdmi", "majú najväčšiu indukciu nasýtenia", "majú najväčšiu koercitívnu silu", "sú lacnejšie ako oceľ"], e: "Ferity sú oxidové polovodiče s veľkou ρ. B<sub>s</sub> majú naopak nízke, do 0,3 T.", h: "Vírivé straty ~ γ." },
 { q: "Pri 50 Hz sú p<sub>h</sub> = 0,6 W/kg a p<sub>v</sub> = 0,2 W/kg. Aké sú celkové straty pri 150 Hz?", o: ["3,6 W/kg", "2,4 W/kg", "7,2 W/kg", "1,8 W/kg"], e: "x = 3: 3·0,6 + 9·0,2 = 1,8 + 1,8 = 3,6 W/kg.", h: "Hysterézne ×3, vírivé ×9." },
 { q: "Ktorý materiál má najväčší energetický súčin (BH)<sub>max</sub>?", o: ["SmCo (vzácne zeminy)", "bárnatý ferit", "AlNiCo", "uhlíková oceľ s W"], e: "SmCo okolo 300 kJ/m³, AlNiCo 15–45, Ba ferit 28–35, oceľ 1–2,5.", h: "Moderné silné magnety." },
 { q: "Čo je stratové číslo?", o: ["merné straty pri B<sub>m</sub> = 1 T (alebo 1,5 T) a 50 Hz", "plocha hysteréznej slučky", "pomer hysteréznych a vírivých strát", "straty pri nasýtení"], e: "Merné straty v W/kg pri dohodnutých podmienkach.", h: "Porovnávacia hodnota plechov." },
 { q: "Ako sa znížia straty vírivými prúdmi v jadre?", o: ["tenkými izolovanými plechmi a väčšou rezistivitou materiálu", "hrubším plechom", "nižšou rezistivitou", "väčšou koercitívnou silou"], e: "P<sub>v</sub> ~ d²γ: menšia hrúbka a menšia konduktivita.", h: "Pozri, od čoho závisí P<sub>v</sub>.", b: true }
]
},
/* ---------- L10 ---------- */
{
id: "l10", ch: 3, title: "Vlastný polovodič", sub: "n·p = n_i², Fermiho hladina, N_C a N_V",
lesson: [
 { h: "1. Polovodičové materiály", p: [
  "V pásovom modeli z kapitoly 1 mal polovodič zakázaný pás asi 1 eV. Teraz z neho vypočítame počet nosičov. Polovodiče majú rezistivitu 10⁻⁶ až 10⁸ Ω·m a ich konduktivita s teplotou väčšinou rastie. Vyše 90 % súčiastok je z troch materiálov: kremík, arzenid gália a germánium.",
  "<b>Elementárne polovodiče</b> Si a Ge kryštalizujú v diamantovej mriežke (každý atóm má 4 susedov, kovalentná väzba, 4 valenčné elektróny). Súčiastky zo Si sú použiteľné do asi 400 K, z Ge do 330 K. <b>Binárne A<sup>III</sup>B<sup>V</sup></b> (GaAs, InP, GaP) majú sfaleritovú mriežku a hodia sa na vyššie teploty, frekvencie a optoelektroniku (GaAs do 670 K). Ďalej sú tuhé roztoky (Ga<sub>x</sub>In<sub>1−x</sub>Sb, zložením sa nastaví W<sub>g</sub>), oxidové polovodiče (termistory, ferity) a organické polovodiče (OLED displeje).",
  "<b>Vlastný (intrinzický)</b> polovodič má všetky uzly obsadené atómami základného prvku. <b>Prímesový</b> má časť uzlov obsadenú atómami s iným počtom valenčných elektrónov (pre Si a Ge prvky 3. a 5. skupiny)."
 ]},
 { h: "2. Generácia, rekombinácia a n·p = n<sub>i</sub>²", p: [
  "Tepelná energia mriežky stále prenáša elektróny cez zakázaný pás: <b>generácia</b> G = g, nezávislá od počtu voľných elektrónov. Opačne elektrón padne späť do diery: <b>rekombinácia</b> R = n·p·r, úmerná koncentráciám oboch. V rovnováhe G = R, takže súčin n·p je pri danej teplote stály:<span class=\"fm\">n·p = n<sub>i</sub>²</span>To je <b>základný vzťah termodynamickej rovnováhy</b>. Vo vlastnom polovodiči n = p = n<sub>i</sub>. Platí aj v prímesovom polovodiči, preto z neho budeme počítať menšinové nosiče."
 ], c: "Prečo generácia nezávisí od počtu voľných elektrónov, ale rekombinácia áno?", a: "Viazaných elektrónov vo valenčnom páse je o rády viac než voľných, takže zásoba na generáciu je prakticky stála. Rekombinácia potrebuje stretnutie elektrónu s dierou, preto rastie s n aj p." },
 { h: "3. Fermiho–Diracova funkcia a hustota stavov", p: [
  "Pravdepodobnosť, že hladina s energiou W je obsadená elektrónom, dáva <b>Fermiho–Diracova funkcia</b>:<span class=\"fm\">f(W) = 1 / [1 + e<sup>(W − W<sub>F</sub>)/kT</sup>]</span>W<sub>F</sub> je <b>Fermiho energia</b>; hladina W<sub>F</sub> je obsadená s pravdepodobnosťou 50 %. Pravdepodobnosť diery je 1 − f. Ak je W − W<sub>F</sub> &gt; 3kT, stačí Maxwellova–Boltzmannova funkcia e<sup>−(W − W<sub>F</sub>)/kT</sup> (chyba pod 5 %); takéto polovodiče sú <b>nedegenerované</b>.",
  "<b>Hustota stavov</b> g(W) hovorí, koľko stavov na jednotku objemu je pri danej energii; v parabolickom páse rastie ako √(W − W<sub>C</sub>). Počet elektrónov je integrál hustoty stavov krát pravdepodobnosť obsadenia cez celý vodivostný pás."
 ]},
 { h: "4. Koncentrácia nosičov a Fermiho hladina", p: [
  "Riešením integrálu pre nedegenerovaný polovodič:<span class=\"fm\">n = N<sub>C</sub>·e<sup>−(W<sub>C</sub> − W<sub>F</sub>)/kT</sup>,   p = N<sub>V</sub>·e<sup>−(W<sub>F</sub> − W<sub>V</sub>)/kT</sup></span>kde <b>efektívne hustoty stavov</b> sú<span class=\"fm\">N<sub>C</sub> = 2·(2π·m<sub>n</sub>·kT/h²)<sup>3/2</sup>,   N<sub>V</sub> = 2·(2π·m<sub>p</sub>·kT/h²)<sup>3/2</sup></span>m<sub>n</sub>, m<sub>p</sub> sú efektívne hmotnosti elektrónu a diery, h Planckova konštanta.",
  "Vynásobením zmizne W<sub>F</sub> a ostane závislosť od teploty:<span class=\"fm\">n<sub>i</sub>² = N<sub>C</sub>·N<sub>V</sub>·e<sup>−W<sub>g</sub>/kT</sup>   →   n<sub>i</sub> = √(N<sub>C</sub>N<sub>V</sub>)·e<sup>−W<sub>g</sub>/2kT</sup></span>Pozor na dvojku v menovateli exponentu. Pri izbovej teplote má Ge (W<sub>g</sub> = 0,67 eV) asi o tri rády viac nosičov než Si (1,11 eV). S teplotou n<sub>i</sub> prudko rastie.",
  "Z n = p vyjde poloha Fermiho hladiny vlastného polovodiča W<sub>i</sub>:<span class=\"fm\">W<sub>i</sub> = (W<sub>C</sub> + W<sub>V</sub>)/2 + ½kT·ln(N<sub>V</sub>/N<sub>C</sub>) = W<sub>V</sub> + W<sub>g</sub>/2 + ¾kT·ln(m<sub>p</sub>/m<sub>n</sub>)</span>Pri 0 K leží presne v strede zakázaného pásu. S teplotou sa mierne posúva; pre Si, Ge a GaAs je posun zanedbateľný (pri Si okolo 10 meV).",
  "Skriptá (tab. 4.1, 300 K): Si n<sub>i</sub> = 1,45·10¹⁶ m⁻³, Ge 2,4·10¹⁹ m⁻³. Tabuľkové n<sub>i</sub> sú namerané; ak ich dopočítaš z N<sub>C</sub>, N<sub>V</sub> a W<sub>g</sub>, vyjde o niečo iné číslo, lebo malá zmena W<sub>g</sub> v exponente veľa zmení. Cvičenia používajú Si 9,65·10¹⁵ a Ge 2,33·10¹⁹ m⁻³ (novšie merania); v úlohe ber zadanú hodnotu."
 ], c: "Prečo má germánium pri izbovej teplote oveľa viac vlastných nosičov než kremík?", a: "Má užší zakázaný pás (0,67 eV vs 1,11 eV). V exponente e<sup>−W<sub>g</sub>/2kT</sup> je rozdiel 0,22 eV/0,026 eV ≈ 8,5, teda e<sup>8,5</sup> ≈ 5000-krát." }
],
theory: [
 { h: "Materiály", items: ["Si, GaAs, Ge = 90 % súčiastok; Si do 400 K, Ge 330 K, GaAs 670 K.", "Si, Ge: diamantová mriežka; A<sup>III</sup>B<sup>V</sup>: sfaleritová.", "Tuhé roztoky (nastavenie W<sub>g</sub>), oxidové, organické polovodiče."] },
 { h: "Rovnováha", items: ["G = R → n·p = n<sub>i</sub>².", "Fermi–Dirac f = 1/(1 + e<sup>(W−W<sub>F</sub>)/kT</sup>), f(W<sub>F</sub>) = 1/2.", "Nedegenerovaný: W − W<sub>F</sub> &gt; 3kT, Maxwell–Boltzmann."] },
 { h: "Vzťahy", items: ["n = N<sub>C</sub>e<sup>−(W<sub>C</sub>−W<sub>F</sub>)/kT</sup>, p = N<sub>V</sub>e<sup>−(W<sub>F</sub>−W<sub>V</sub>)/kT</sup>.", "N<sub>C,V</sub> = 2(2πm<sub>n,p</sub>kT/h²)<sup>3/2</sup>.", "n<sub>i</sub> = √(N<sub>C</sub>N<sub>V</sub>)e<sup>−W<sub>g</sub>/2kT</sup>.", "W<sub>i</sub> = W<sub>V</sub> + W<sub>g</sub>/2 + ¾kT ln(m<sub>p</sub>/m<sub>n</sub>).", "γ<sub>i</sub> = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>)."] }
],
traps: ["V n<sub>i</sub> je exponent −W<sub>g</sub>/(2kT), nie −W<sub>g</sub>/kT.", "W<sub>g</sub> v eV treba previesť na J (alebo kT na eV).", "Vo vlastnom polovodiči sa pohyblivosti sčítajú: γ = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>).", "n·p = n<sub>i</sub>² platí aj v prímesovom polovodiči."],
examples: [
 { t: "Polovodiče, cvičenie 2: čisté Ge má pri 20 °C rezistivitu 0,470 Ω·m, μ<sub>n</sub> = 0,39, μ<sub>p</sub> = 0,19 m²V⁻¹s⁻¹. Aká je n<sub>i</sub>? To isté pre Si: 2 350 Ω·m, 0,135 a 0,048.", s: [
  "Vzorec <b>Konduktivita vlastného polovodiča</b>: γ = 1/ρ = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>) → n<sub>i</sub> = 1/(ρ·q·(μ<sub>n</sub> + μ<sub>p</sub>)).",
  "Ge: n<sub>i</sub> = 1/(0,47·1,602·10⁻¹⁹·0,58) = 2,29·10¹⁹ m⁻³.",
  "Si: n<sub>i</sub> = 1/(2350·1,602·10⁻¹⁹·0,183) = 1,45·10¹⁶ m⁻³, presne hodnota zo skrípt."] },
 { t: "Polovodiče, cvičenie 3: n<sub>i</sub> a γ vlastného Si (W<sub>g</sub> = 1,11 eV, N<sub>C</sub> = 2,8·10²⁵, N<sub>V</sub> = 1,04·10²⁵ m⁻³) pri 20, 100 a 200 °C; to isté pre Ge (0,67 eV, 1,04·10²⁵, 6,0·10²⁴).", s: [
  "Vzorec <b>Vlastná koncentrácia</b> n<sub>i</sub> = √(N<sub>C</sub>N<sub>V</sub>)·e<sup>−W<sub>g</sub>/2kT</sup>, potom γ = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>).",
  "Si: √(N<sub>C</sub>N<sub>V</sub>) = 1,71·10²⁵ m⁻³. Pri 293,15 K exponent −1,11·1,602·10⁻¹⁹/(2·1,38·10⁻²³·293,15) = −21,98 → n<sub>i</sub> = 4,87·10¹⁵ m⁻³, γ = 1,43·10⁻⁴ S/m.",
  "Si pri 373,15 K: 5,41·10¹⁷ m⁻³, γ = 1,59·10⁻² S/m; pri 473,15 K: 2,08·10¹⁹ m⁻³, γ = 0,610 S/m.",
  "Ge: 1,37·10¹⁹ (γ = 1,27 S/m), 2,35·10²⁰ (21,9 S/m), 2,13·10²¹ m⁻³ (198 S/m).",
  "Kontrola: s teplotou n<sub>i</sub> prudko rastie; Ge má menší W<sub>g</sub>, preto viac nosičov."] },
 { t: "Polovodiče, cvičenie 4: poloha Fermiho hladiny vo vlastnom Si pri 0, 100, 300 a 500 K, m<sub>p</sub>/m<sub>n</sub> = 0,67, W<sub>g</sub> = 1,11 eV.", s: [
  "Vzorec <b>Fermiho hladina vlastného polovodiča</b>: W<sub>F</sub> − W<sub>V</sub> = W<sub>g</sub>/2 + ¾kT·ln(m<sub>p</sub>/m<sub>n</sub>).",
  "Prvý člen 0,555 eV; ln 0,67 = −0,400, druhý člen je záporný.",
  "0 K: 0,555 eV; 100 K: 0,555 − ¾·0,00862·0,400 = 0,552 eV; 300 K: 0,547 eV; 500 K: 0,542 eV.",
  "Hladina sa s teplotou posúva mierne k valenčnému pásu, lebo m<sub>p</sub> &lt; m<sub>n</sub>."] }
],
formulas: [
 { n: "Rovnováha", f: "n·p = n<sub>i</sub>²", w: "generácia = rekombinácia; aj v prímesovom" },
 { n: "Fermiho–Diracova funkcia", f: "f(W) = 1/[1 + e<sup>(W − W<sub>F</sub>)/kT</sup>]", w: "f(W<sub>F</sub>) = 0,5; nad 3kT Maxwell–Boltzmann" },
 { n: "Koncentrácia elektrónov a dier", f: "n = N<sub>C</sub>·e<sup>−(W<sub>C</sub> − W<sub>F</sub>)/kT</sup>,  p = N<sub>V</sub>·e<sup>−(W<sub>F</sub> − W<sub>V</sub>)/kT</sup>", w: "nedegenerovaný polovodič" },
 { n: "Efektívna hustota stavov", f: "N<sub>C</sub> = 2(2π·m<sub>n</sub>·kT/h²)<sup>3/2</sup>,  N<sub>V</sub> = 2(2π·m<sub>p</sub>·kT/h²)<sup>3/2</sup>", w: "~ T<sup>3/2</sup>" },
 { n: "Vlastná koncentrácia", f: "n<sub>i</sub> = √(N<sub>C</sub>·N<sub>V</sub>)·e<sup>−W<sub>g</sub>/2kT</sup>", w: "n<sub>i</sub>² = N<sub>C</sub>N<sub>V</sub>e<sup>−W<sub>g</sub>/kT</sup>" },
 { n: "Fermiho hladina vlastného polovodiča", f: "W<sub>i</sub> = (W<sub>C</sub> + W<sub>V</sub>)/2 + ½kT·ln(N<sub>V</sub>/N<sub>C</sub>) = W<sub>V</sub> + W<sub>g</sub>/2 + ¾kT·ln(m<sub>p</sub>/m<sub>n</sub>)", w: "pri 0 K v strede pásu" },
 { n: "Konduktivita vlastného polovodiča", f: "γ = 1/ρ = q·n<sub>i</sub>·(μ<sub>n</sub> + μ<sub>p</sub>)", w: "n = p = n<sub>i</sub>" },
 { n: "Si a Ge pri 300 K (skriptá)", f: "Si: W<sub>g</sub> 1,11 eV, n<sub>i</sub> 1,45·10¹⁶ m⁻³, N<sub>C</sub> 2,8·10²⁵, N<sub>V</sub> 1,04·10²⁵, μ<sub>n</sub> 0,135, μ<sub>p</sub> 0,048 · Ge: 0,67 eV, 2,4·10¹⁹, 1,04·10²⁵, 6,0·10²⁴, 0,39, 0,19", w: "tab. 4.1; cvičenia: n<sub>i</sub> Si 9,65·10¹⁵, Ge 2,33·10¹⁹" },
 { n: "Konštanty", f: "k = 1,38·10⁻²³ J/K,  q = 1,602·10⁻¹⁹ C,  h = 6,626·10⁻³⁴ J·s,  kT(300 K) = 0,0259 eV", w: "" }
],
explain: { q: "Vysvetli, prečo počet voľných elektrónov v čistom kremíku s teplotou rastie exponenciálne a prečo je ich v germániu oveľa viac.", keys: ["Elektrón musí získať energiu aspoň W<sub>g</sub> a preskočiť zakázaný pás", "Pravdepodobnosť je úmerná e<sup>−W<sub>g</sub>/2kT</sup>", "S rastúcou T sa exponent zmenšuje a n<sub>i</sub> prudko rastie", "Ge má menší W<sub>g</sub> (0,67 eV) než Si (1,11 eV), preto viac nosičov"] },
quiz: [
 { q: "Aký je základný vzťah termodynamickej rovnováhy v polovodiči?", o: ["n·p = n<sub>i</sub>²", "n + p = n<sub>i</sub>", "n = p vždy", "n·p = N<sub>C</sub>·N<sub>V</sub>"], e: "Z rovnováhy generácie a rekombinácie g = n·p·r. Platí aj pre prímesový polovodič, kde n ≠ p.", h: "Generácia = rekombinácia." },
 { q: "S akou pravdepodobnosťou je obsadená Fermiho hladina?", o: ["50 %", "100 %", "0 %", "závisí od teploty"], e: "f(W<sub>F</sub>) = 1/(1 + e⁰) = 1/2.", h: "Dosaď W = W<sub>F</sub>." },
 { q: "Ako závisí n<sub>i</sub> od šírky zakázaného pásu?", o: ["n<sub>i</sub> ~ e<sup>−W<sub>g</sub>/2kT</sup>", "n<sub>i</sub> ~ e<sup>−W<sub>g</sub>/kT</sup>", "n<sub>i</sub> ~ W<sub>g</sub>", "n<sub>i</sub> ~ 1/W<sub>g</sub>"], e: "n<sub>i</sub>² = N<sub>C</sub>N<sub>V</sub>e<sup>−W<sub>g</sub>/kT</sup>, po odmocnení dvojka v menovateli.", h: "Najprv n<sub>i</sub>², potom odmocnina." },
 { q: "Kde leží Fermiho hladina vlastného polovodiča pri 0 K?", o: ["v strede zakázaného pásu", "pri dne vodivostného pásu", "pri vrchole valenčného pásu", "vo vodivostnom páse"], e: "W<sub>i</sub> = (W<sub>C</sub> + W<sub>V</sub>)/2 + člen úmerný T, ktorý pri 0 K zmizne.", h: "Člen s kT je pri 0 K nulový." },
 { q: "Kedy môžeš namiesto Fermiho–Diracovej funkcie použiť Maxwellovu–Boltzmannovu?", o: ["keď je W − W<sub>F</sub> &gt; 3kT (nedegenerovaný polovodič)", "vždy", "len pri 0 K", "len v kovoch"], e: "Chyba je potom pod 5 %. Degenerované polovodiče vyžadujú Fermiho–Diracovu funkciu.", h: "Ďaleko od W<sub>F</sub> je 1 v menovateli zanedbateľná." },
 { q: "Čisté Ge má ρ = 0,47 Ω·m a μ<sub>n</sub> + μ<sub>p</sub> = 0,58 m²V⁻¹s⁻¹. Aká je n<sub>i</sub>?", o: ["2,29·10¹⁹ m⁻³", "4,58·10¹⁹ m⁻³", "1,45·10¹⁶ m⁻³", "2,29·10¹⁶ m⁻³"], e: "n<sub>i</sub> = 1/(ρq(μ<sub>n</sub> + μ<sub>p</sub>)) = 1/(0,47·1,602·10⁻¹⁹·0,58).", h: "γ = 1/ρ = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>)." },
 { q: "Do akej teploty sú použiteľné súčiastky z kremíka podľa skrípt?", o: ["asi 400 K", "asi 330 K", "asi 670 K", "asi 1 000 K"], e: "Si 400 K, Ge 330 K, GaAs 670 K. Súvisí so šírkou zakázaného pásu.", h: "Ge má užší pás, vydrží menej." },
 { q: "Ktorý polovodič z A<sup>III</sup>B<sup>V</sup> je najpoužívanejší?", o: ["GaAs", "InSb", "SiC", "GaN"], e: "Skriptá: arzenid gália, sfaleritová mriežka.", h: "Druhý najpoužívanejší polovodič vôbec.", b: true }
]
},

/* ---------- L11 ---------- */
{
id: "l11", ch: 3, title: "Prímesový polovodič", sub: "donory, akceptory, plná ionizácia",
lesson: [
 { h: "1. Donory a akceptory", p: [
  "Vlastný polovodič z predošlého levelu má málo nosičov. Prímesi ich dodajú. Atóm 5. skupiny (P, As, Sb) v mriežke Si má o elektrón viac, než treba na štyri väzby. Piaty elektrón je viazaný slabo a už pri izbovej teplote odíde do vodivostného pásu. Taký atóm je <b>donor</b>, po ionizácii nesie kladný nepohyblivý náboj a polovodič je typu <b>N</b>.",
  "Atóm 3. skupiny (B, Al, Ga, In) má o elektrón menej. Chýbajúcu väzbu doplní elektrón z valenčného pásu a po ňom ostane diera. Taký atóm je <b>akceptor</b>, ionizovaný nesie záporný náboj a polovodič je typu <b>P</b>.",
  "Ionizačnú energiu donoru odhadneme podľa atómu vodíka (13,5 eV) zmenšeného prostredím kryštálu:<span class=\"fm\">W<sub>I</sub> = (m<sub>n</sub>/m₀)·W<sub>H</sub>/ε<sub>r</sub>²</span>Si (m<sub>n</sub> = 0,4m₀, ε<sub>r</sub> = 12): asi 0,04 eV; Ge (0,2m₀, 16): asi 0,01 eV. Je to porovnateľné s tepelnou energiou kT ≈ 0,026 eV, preto sú prímesi pri izbovej teplote prakticky všetky ionizované.",
  "V pásovom modeli ležia donorové hladiny W<sub>D</sub> tesne pod vodivostným pásom, akceptorové W<sub>A</sub> tesne nad valenčným. Väčšinové nosiče v N type sú elektróny (n<sub>n</sub>), menšinové diery (p<sub>n</sub>); v P type naopak p<sub>p</sub> a n<sub>p</sub>."
 ], c: "Prečo je antimón v germániu donor?", a: "Sb je z 5. skupiny, má 5 valenčných elektrónov. Štyri tvoria väzby s Ge, piaty je slabo viazaný a ľahko prejde do vodivostného pásu." },
 { h: "2. Nábojová neutralita a plná ionizácia", p: [
  "Homogénny polovodič v rovnováhe je navonok neutrálny:<span class=\"fm\">q·(p − n + N<sub>D</sub><sup>+</sup> − N<sub>A</sub><sup>−</sup>) = 0</span>Pri izbovej teplote sú v Si, Ge aj GaAs všetky prímesi ionizované (<b>stav plnej ionizácie</b>): N<sub>D</sub><sup>+</sup> = N<sub>D</sub>, N<sub>A</sub><sup>−</sup> = N<sub>A</sub>.",
  "Spolu s n·p = n<sub>i</sub>² vyjde pre N typ kvadratická rovnica s riešením n<sub>n</sub> = ½[(N<sub>D</sub> − N<sub>A</sub>) + √((N<sub>D</sub> − N<sub>A</sub>)² + 4n<sub>i</sub>²)]. Obvykle je N<sub>D</sub> − N<sub>A</sub> ≫ n<sub>i</sub>, a potom stačí:<span class=\"fm\">n<sub>n</sub> ≈ N<sub>D</sub> − N<sub>A</sub>,   p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub></span>Pre P typ analogicky p<sub>p</sub> ≈ N<sub>A</sub> − N<sub>D</sub>, n<sub>p</sub> = n<sub>i</sub>²/p<sub>p</sub>.",
  "Polovodič s donormi aj akceptormi je <b>kompenzovaný</b>; pri N<sub>D</sub> = N<sub>A</sub> úplne kompenzovaný."
 ], c: "Prečo v N type klesne počet dier, keď pridáš donory?", a: "Súčin n·p = n<sub>i</sub>² je pri danej teplote stály. Viac elektrónov znamená viac rekombinácie, takže dier je menej: p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub>." },
 { h: "3. Ako počítať s atómovými percentami", p: [
  "Prímes sa často zadáva v atómových percentách. 0,01 at. % znamená, že prímesou je 0,01/100 = 10⁻⁴ zo všetkých atómov:<span class=\"fm\">N<sub>D</sub> = (at. %/100)·N</span>N je koncentrácia atómov polovodiča (z kapitoly 1: N = 8/a³ alebo ρN<sub>A</sub>/M).",
  "Konduktivita prímesového polovodiča:<span class=\"fm\">γ = q·(n·μ<sub>n</sub> + p·μ<sub>p</sub>)</span>V N type dominuje člen n·μ<sub>n</sub>, menšinové diery sú zanedbateľné, ale napíš ich. Pozor: v P type majú väčšinové diery pohyblivosť μ<sub>p</sub>."
 ]},
 { h: "4. Fermiho hladina a teplota", p: [
  "V N type je Fermiho hladina nad W<sub>i</sub>, v hornej polovici zakázaného pásu; v plnej ionizácii W<sub>F</sub> = W<sub>C</sub> − kT·ln(N<sub>C</sub>/(N<sub>D</sub> − N<sub>A</sub>)). V P type je pod W<sub>i</sub>. Ak sa W<sub>F</sub> priblíži k pásu na menej než 3kT, polovodič je <b>degenerovaný</b> (N⁺ alebo P⁺).",
  "Koncentrácia väčšinových nosičov v závislosti od teploty má tri oblasti: pri nízkej teplote postupná <b>ionizácia prímesí</b> (sklon úmerný ionizačnej energii), potom <b>plná ionizácia</b> (n ≈ N<sub>D</sub>, takmer konštantné), a pri vysokej teplote <b>vlastná vodivosť</b>, keď n<sub>i</sub> prekročí N<sub>D</sub> (sklon úmerný W<sub>g</sub>)."
 ]}
],
theory: [
 { h: "Prímesi", items: ["Donor (5. skupina: P, As, Sb) → N typ, ionizovaný +.", "Akceptor (3. skupina: B, Al, Ga, In) → P typ, ionizovaný −.", "W<sub>I</sub> = (m<sub>n</sub>/m₀)·13,5 eV/ε<sub>r</sub>²: Si ≈ 0,04 eV, Ge ≈ 0,01 eV.", "Väčšinové n<sub>n</sub>, p<sub>p</sub>; menšinové p<sub>n</sub>, n<sub>p</sub>."] },
 { h: "Plná ionizácia", items: ["Neutralita p − n + N<sub>D</sub><sup>+</sup> − N<sub>A</sub><sup>−</sup> = 0.", "n<sub>n</sub> ≈ N<sub>D</sub> − N<sub>A</sub>, p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub>; P typ analogicky.", "N<sub>D</sub> = (at. %/100)·N.", "γ = q(nμ<sub>n</sub> + pμ<sub>p</sub>).", "Kompenzovaný, degenerovaný (N⁺, P⁺)."] },
 { h: "Teplota", items: ["Ionizácia prímesí → plná ionizácia → vlastná vodivosť."] }
],
traps: ["Atómové percentá deľ 100: 0,01 % = 10⁻⁴.", "Menšinové nosiče počítaj cez n<sub>i</sub>², nie ako N<sub>D</sub> − n<sub>i</sub>.", "V P type násob väčšinové diery μ<sub>p</sub>, nie μ<sub>n</sub>.", "Donor po ionizácii je kladný, nie záporný (odovzdal elektrón)."],
examples: [
 { t: "Polovodiče, cvičenie 5: Ge s 0,0100 at. % antimónu, 20 °C, všetky prímesi ionizované; N<sub>Ge</sub> = 4,506·10²⁸ m⁻³, n<sub>i</sub> = 2,33·10¹⁹ m⁻³ (dané v zadaní). Urč n<sub>n</sub>, p<sub>n</sub> a γ.", s: [
  "Sb je v 5. skupine → donor, typ N.",
  "N<sub>D</sub> = 10⁻⁴·4,506·10²⁸ = 4,506·10²⁴ m⁻³ = n<sub>n</sub> (plná ionizácia).",
  "p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub> = (2,33·10¹⁹)²/4,506·10²⁴ = 1,205·10¹⁴ m⁻³.",
  "γ = q(n<sub>n</sub>μ<sub>n</sub> + p<sub>n</sub>μ<sub>p</sub>) = 1,602·10⁻¹⁹·(4,506·10²⁴·0,39 + …) = 2,815·10⁵ S·m⁻¹."] },
 { t: "Polovodiče, cvičenie 6: Ge s 0,0010 at. % bóru, 20 °C, rovnaké N a n<sub>i</sub>. Urč p<sub>p</sub>, n<sub>p</sub> a γ.", s: [
  "B je v 3. skupine → akceptor, typ P.",
  "p<sub>p</sub> = 10⁻⁵·4,506·10²⁸ = 4,506·10²³ m⁻³.",
  "n<sub>p</sub> = n<sub>i</sub>²/p<sub>p</sub> = 1,205·10¹⁵ m⁻³.",
  "γ = q(p<sub>p</sub>μ<sub>p</sub> + n<sub>p</sub>μ<sub>n</sub>) = 1,602·10⁻¹⁹·4,506·10²³·0,19 = 1,372·10⁴ S·m⁻¹. Pozor, diery majú pohyblivosť 0,19."] }
],
formulas: [
 { n: "Ionizačná energia prímesi", f: "W<sub>I</sub> = (m<sub>n</sub>/m₀)·W<sub>H</sub>/ε<sub>r</sub>²,  W<sub>H</sub> = 13,5 eV", w: "Si ≈ 0,04 eV, Ge ≈ 0,01 eV" },
 { n: "Nábojová neutralita", f: "p − n + N<sub>D</sub><sup>+</sup> − N<sub>A</sub><sup>−</sup> = 0", w: "homogénny polovodič" },
 { n: "Plná ionizácia – N typ", f: "n<sub>n</sub> ≈ N<sub>D</sub> − N<sub>A</sub>,   p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub>", w: "N<sub>D</sub> − N<sub>A</sub> ≫ n<sub>i</sub>" },
 { n: "Plná ionizácia – P typ", f: "p<sub>p</sub> ≈ N<sub>A</sub> − N<sub>D</sub>,   n<sub>p</sub> = n<sub>i</sub>²/p<sub>p</sub>", w: "" },
 { n: "Presné riešenie", f: "n<sub>n</sub> = ½[(N<sub>D</sub> − N<sub>A</sub>) + √((N<sub>D</sub> − N<sub>A</sub>)² + 4n<sub>i</sub>²)]", w: "keď prímesí nie je oveľa viac ako n<sub>i</sub>" },
 { n: "Atómové percentá", f: "N<sub>D</sub> = (at. %/100)·N", w: "N koncentrácia atómov polovodiča" },
 { n: "Konduktivita", f: "γ = q·(n·μ<sub>n</sub> + p·μ<sub>p</sub>)", w: "" },
 { n: "Fermiho hladina N typu", f: "W<sub>F</sub> = W<sub>C</sub> − kT·ln(N<sub>C</sub>/(N<sub>D</sub> − N<sub>A</sub>))", w: "plná ionizácia; &lt; 3kT od pásu = degenerovaný" }
],
explain: { q: "Vysvetli, prečo pridanie fosforu do kremíka zvýši počet elektrónov a zároveň zníži počet dier.", keys: ["Fosfor má 5 valenčných elektrónov, štyri tvoria väzby, piaty je voľný", "Pri izbovej teplote sú všetky donory ionizované, n ≈ N<sub>D</sub>", "Súčin n·p = n<sub>i</sub>² je pri danej teplote stály", "Preto diery klesnú na p = n<sub>i</sub>²/N<sub>D</sub>"] },
quiz: [
 { q: "Ktorý prvok je v kremíku donorom?", o: ["fosfor", "bór", "hliník", "gálium"], e: "Donory sú z 5. skupiny (P, As, Sb), akceptory z 3. skupiny (B, Al, Ga, In).", h: "Donor má o elektrón viac než Si." },
 { q: "Aký náboj nesie ionizovaný akceptor?", o: ["záporný, nepohyblivý", "kladný, nepohyblivý", "záporný, pohyblivý", "žiadny"], e: "Akceptor prijal elektrón z valenčného pásu, je záporný a sedí v mriežke.", h: "Akceptor elektrón prijíma." },
 { q: "V N type pri plnej ionizácii je n<sub>n</sub> = 10²² m⁻³ a n<sub>i</sub> = 10¹⁶ m⁻³. Koľko je dier?", o: ["10¹⁰ m⁻³", "10¹⁶ m⁻³", "10²² m⁻³", "10⁶ m⁻³"], e: "p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub> = 10³²/10²² = 10¹⁰.", h: "n·p = n<sub>i</sub>²." },
 { q: "Koľko je 0,01 atómového percenta ako podiel atómov?", o: ["10⁻⁴", "10⁻²", "10⁻⁶", "10⁻³"], e: "0,01/100 = 10⁻⁴.", h: "Percentá deľ 100." },
 { q: "Čo je kompenzovaný polovodič?", o: ["obsahuje donory aj akceptory", "obsahuje len donory", "je bez prímesí", "má Fermiho hladinu vo vodivostnom páse"], e: "Pri N<sub>D</sub> = N<sub>A</sub> je úplne kompenzovaný.", h: "Prímesi sa navzájom vyrovnávajú." },
 { q: "Kedy je polovodič degenerovaný?", o: ["keď je Fermiho hladina bližšie než 3kT k pásu", "keď nemá prímesi", "keď je úplne kompenzovaný", "pri 0 K"], e: "N⁺ pri priblížení k vodivostnému pásu, P⁺ k valenčnému.", h: "Súvisí s hranicou 3kT pre Maxwellovu–Boltzmannovu funkciu." },
 { q: "Čo sa deje s koncentráciou elektrónov v N type pri veľmi vysokej teplote?", o: ["prudko rastie, prevládne vlastná vodivosť", "klesne na nulu", "ostane rovná N<sub>D</sub>", "klesá lineárne"], e: "Keď n<sub>i</sub> prekročí N<sub>D</sub>, rozhoduje generácia cez zakázaný pás; sklon je úmerný W<sub>g</sub>.", h: "n<sub>i</sub> s teplotou prudko rastie." },
 { q: "V P type počítaš konduktivitu. Ktorou pohyblivosťou násobíš väčšinové nosiče?", o: ["μ<sub>p</sub> (diery)", "μ<sub>n</sub> (elektróny)", "súčtom μ<sub>n</sub> + μ<sub>p</sub>", "žiadnou"], e: "Väčšinové sú diery, γ ≈ q·p<sub>p</sub>·μ<sub>p</sub>.", h: "Čo sú väčšinové nosiče v P type?", b: true }
]
},

/* ---------- L12 ---------- */
{
id: "l12", ch: 3, title: "Vedenie prúdu v polovodiči", sub: "drift, difúzia, pohyblivosť a teplota",
lesson: [
 { h: "1. Tepelný a driftový pohyb", p: [
  "Nosiče z predošlých levelov sa bez poľa pohybujú chaoticky tepelným pohybom, medzi zrážkami s mriežkou. Ak sa všetka tepelná energia mení na kinetickú:<span class=\"fm\">v<sub>t</sub> = √(3kT/m<sub>n</sub>)</span>Pri 300 K je to rádovo 100 km/s.",
  "Pole E k tomu pridá malý usmernený <b>drift</b>. Driftová rýchlosť je v<sub>dn</sub> = μ<sub>n</sub>·E, kde pohyblivosť<span class=\"fm\">μ<sub>n</sub> = q·t<sub>n</sub>/m<sub>n</sub></span>závisí od strednej doby medzi zrážkami t<sub>n</sub> a efektívnej hmotnosti. Energiu, ktorú nosič získa od poľa, odovzdá pri zrážkach mriežke: polovodič sa zahrieva."
 ], c: "Prečo je driftová rýchlosť oveľa menšia než tepelná?", a: "Tepelný pohyb je chaotický a rýchly, ale bez smeru. Pole medzi zrážkami pridá len malú usmernenú zložku, ktorá sa po každej zrážke znova začína." },
 { h: "2. Driftový a difúzny prúd", p: [
  "Prúdová hustota sa skladá z príspevku elektrónov a dier, J = J<sub>n</sub> + J<sub>p</sub>. <b>Driftový prúd</b> spôsobuje pole:<span class=\"fm\">J<sub>drift</sub> = q·n·μ<sub>n</sub>·E + q·p·μ<sub>p</sub>·E,   γ = q(nμ<sub>n</sub> + pμ<sub>p</sub>)</span>",
  "V polovodiči je ešte <b>difúzny prúd</b>: nosiče sa pohybujú z miesta s vyššou koncentráciou na miesto s nižšou, a keďže nesú náboj, tečie prúd aj bez poľa:<span class=\"fm\">J<sub>n dif</sub> = q·D<sub>n</sub>·grad n,   J<sub>p dif</sub> = −q·D<sub>p</sub>·grad p</span>D je <b>difúzny koeficient</b> (m²/s). Diery idú proti gradientu, preto mínus.",
  "Difúzia a drift sú spojené <b>Einsteinovým vzťahom</b>:<span class=\"fm\">D<sub>n</sub>/μ<sub>n</sub> = D<sub>p</sub>/μ<sub>p</sub> = kT/q</span>Pri 300 K je kT/q ≈ 0,0259 V, takže pre Si elektróny D<sub>n</sub> = 0,135·0,0259 ≈ 3,5·10⁻³ m²/s. Celková prúdová hustota je súčet všetkých štyroch členov."
 ], c: "Môže v polovodiči tiecť prúd bez elektrického poľa?", a: "Áno, difúzny prúd, ak je koncentrácia nosičov nerovnomerná (napríklad pri prechode PN)." },
 { h: "3. Pohyblivosť a konduktivita s teplotou", p: [
  "Pohyblivosť znižujú zrážky. Pri nízkej teplote prevláda <b>rozptyl na ionizovaných prímesiach</b>: pomalé nosiče sa dlho zdržia v Coulombovom poli iónu a vychýlia sa viac. Pri vysokej teplote prevláda <b>mriežkový rozptyl</b> na tepelných kmitoch. V prechodnej oblasti sa prevrátené hodnoty sčítajú:<span class=\"fm\">1/μ = 1/μ<sub>I</sub> + 1/μ<sub>L</sub></span>Zložka μ<sub>I</sub> s teplotou rastie (približne ~ T<sup>3/2</sup>), μ<sub>L</sub> klesá (~ T<sup>−3/2</sup>), preto má pohyblivosť pri strednej teplote maximum.",
  "Konduktivita prímesového polovodiča γ = q·n·μ teda s teplotou najprv rastie (ionizácia prímesí), v oblasti plnej ionizácie je n stále a γ môže mierne klesať s pohyblivosťou, a pri vysokej teplote prudko rastie (vlastná vodivosť). Preto sa polovodiče hodia na termistory a súčiastky majú hornú pracovnú teplotu."
 ]}
],
theory: [
 { h: "Pohyb nosičov", items: ["Tepelná rýchlosť v<sub>t</sub> = √(3kT/m<sub>n</sub>) ≈ 100 km/s pri 300 K.", "Drift v = μE, μ = q·t/m.", "J = qnμ<sub>n</sub>E + qpμ<sub>p</sub>E + qD<sub>n</sub>grad n − qD<sub>p</sub>grad p.", "Einstein D/μ = kT/q."] },
 { h: "Teplota", items: ["1/μ = 1/μ<sub>I</sub> + 1/μ<sub>L</sub>: prímesi pri nízkej T, mriežka pri vysokej T.", "γ(T): ionizácia → plná ionizácia (γ ~ μ) → vlastná vodivosť."] }
],
traps: ["Difúzny prúd tečie aj bez poľa.", "Pri difúzii dier je znamienko mínus.", "Pohyblivosť nie je monotónna funkcia teploty: rozptyl na prímesiach a na mriežke pôsobia opačne.", "Einsteinov vzťah: D = μ·kT/q, nie μ·q/kT."],
examples: [
 { t: "Difúzny koeficient elektrónov v Si pri 300 K (μ<sub>n</sub> = 0,135 m²V⁻¹s⁻¹).", s: [
  "Vzorec <b>Einsteinov vzťah</b>: D<sub>n</sub> = μ<sub>n</sub>·kT/q.",
  "kT/q = 1,38·10⁻²³·300/1,602·10⁻¹⁹ = 0,0258 V.",
  "D<sub>n</sub> = 0,135·0,0258 = 3,49·10⁻³ m²/s (35 cm²/s)."] },
 { t: "Tepelná rýchlosť elektrónu v Si pri 300 K, m<sub>n</sub> = 0,26·m₀.", s: [
  "Vzorec <b>Tepelná rýchlosť</b>: v<sub>t</sub> = √(3kT/m<sub>n</sub>).",
  "m<sub>n</sub> = 0,26·9,109·10⁻³¹ = 2,37·10⁻³¹ kg.",
  "v<sub>t</sub> = √(3·1,38·10⁻²³·300/2,37·10⁻³¹) = 2,3·10⁵ m/s, rádovo 100 km/s ako v skriptách."] }
],
formulas: [
 { n: "Tepelná rýchlosť", f: "v<sub>t</sub> = √(3kT/m<sub>n</sub>)", w: "≈ 10⁵ m/s pri 300 K" },
 { n: "Driftová rýchlosť a pohyblivosť", f: "v<sub>dn</sub> = μ<sub>n</sub>·E,   μ<sub>n</sub> = q·t<sub>n</sub>/m<sub>n</sub>", w: "t<sub>n</sub> stredná doba medzi zrážkami" },
 { n: "Driftový prúd", f: "J = q(nμ<sub>n</sub> + pμ<sub>p</sub>)·E = γE", w: "" },
 { n: "Difúzny prúd", f: "J<sub>n dif</sub> = q·D<sub>n</sub>·grad n,   J<sub>p dif</sub> = −q·D<sub>p</sub>·grad p", w: "z vyššej koncentrácie do nižšej" },
 { n: "Einsteinov vzťah", f: "D<sub>n</sub>/μ<sub>n</sub> = D<sub>p</sub>/μ<sub>p</sub> = kT/q", w: "kT/q ≈ 0,0259 V pri 300 K" },
 { n: "Celková pohyblivosť", f: "1/μ = 1/μ<sub>I</sub> + 1/μ<sub>L</sub>", w: "I prímesi (nízka T), L mriežka (vysoká T)" },
 { n: "Konštanty", f: "m₀ = 9,109·10⁻³¹ kg,  k = 1,38·10⁻²³ J/K,  q = 1,602·10⁻¹⁹ C", w: "" }
],
explain: { q: "Vysvetli, prečo konduktivita dotovaného kremíka pri zahrievaní najprv rastie, potom sa takmer nemení a nakoniec prudko rastie.", keys: ["Pri nízkej teplote sa postupne ionizujú prímesi, pribúdajú nosiče", "Keď sú všetky ionizované, n ≈ N<sub>D</sub> je stále; γ sleduje len pohyblivosť", "Pohyblivosť pri vyššej teplote klesá mriežkovým rozptylom", "Pri vysokej teplote prevládne vlastná vodivosť, n<sub>i</sub> prekročí N<sub>D</sub>"] },
quiz: [
 { q: "Čo spôsobuje difúzny prúd v polovodiči?", o: ["nerovnomerná koncentrácia nosičov", "elektrické pole", "magnetické pole", "rozptyl na mriežke"], e: "Nosiče sa pohybujú z miesta s vyššou koncentráciou na miesto s nižšou; prúd tečie aj bez poľa.", h: "grad n." },
 { q: "Ako súvisí difúzny koeficient s pohyblivosťou?", o: ["D = μ·kT/q", "D = μ·q/kT", "D = kT/(qμ)", "D = μ²"], e: "Einsteinov vzťah D/μ = kT/q.", h: "kT/q je napätie asi 26 mV." },
 { q: "Ktorý rozptyl prevláda pri nízkych teplotách?", o: ["na ionizovaných prímesiach", "na tepelných kmitoch mriežky", "na hraniciach zŕn", "na elektrónoch"], e: "Pomalé nosiče sa dlho zdržia v poli iónu. Mriežkový rozptyl prevláda pri vysokej teplote.", h: "Pri nízkej T sú nosiče pomalé." },
 { q: "Ako sa skladajú pohyblivosti od dvoch rozptylových mechanizmov?", o: ["1/μ = 1/μ<sub>I</sub> + 1/μ<sub>L</sub>", "μ = μ<sub>I</sub> + μ<sub>L</sub>", "μ = μ<sub>I</sub>·μ<sub>L</sub>", "μ = √(μ<sub>I</sub>μ<sub>L</sub>)"], e: "Zrážky sa sčítajú, takže prevrátené hodnoty pohyblivostí sa sčítajú.", h: "Viac zrážok = menšia pohyblivosť." },
 { q: "Aká je tepelná rýchlosť elektrónov v polovodiči pri 300 K?", o: ["rádovo 100 km/s", "rádovo mm/s", "rádovo m/s", "rýchlosť svetla"], e: "v<sub>t</sub> = √(3kT/m<sub>n</sub>) ≈ 10⁵ m/s. Drift je oveľa pomalší.", h: "Kinetická energia ≈ 3/2 kT." },
 { q: "Kam ide energia, ktorú nosič získa od elektrického poľa?", o: ["pri zrážkach ju odovzdá mriežke, polovodič sa zahrieva", "nosič ju natrvalo uchová", "vyžiari sa ako svetlo vždy", "zmení sa na magnetické pole"], e: "To je Joulovo teplo.", h: "Prečo sa súčiastky zahrievajú?", b: true }
]
}
],
boss: []
});

GEN.mte = {
 l10: [
  () => { const [nm, Wg, NC, NV, mu] = rnd([["Si", 1.11, 2.8e25, 1.04e25, 0.183], ["Ge", 0.67, 1.04e25, 6.0e24, 0.58]]), t = rnd([20, 50, 100, 150, 200]), T = t + 273.15, x = Wg * 1.602e-19 / (2 * 1.38e-23 * T), ni = Math.sqrt(NC * NV) * Math.exp(-x);
    return hint("n<sub>i</sub> = √(N<sub>C</sub>N<sub>V</sub>)·e<sup>−W<sub>g</sub>/2kT</sup>, W<sub>g</sub> v J, T v K.", mk(`Vlastný ${nm}: W<sub>g</sub> = ${num(Wg)} eV, N<sub>C</sub> = ${num(NC)} m⁻³, N<sub>V</sub> = ${num(NV)} m⁻³. Aká je koncentrácia nosičov pri ${t} °C podľa vzorca?`, ni, "m⁻³", [Math.sqrt(NC * NV) * Math.exp(-2 * x), ni * 100, ni / 100], `√(N<sub>C</sub>N<sub>V</sub>) = ${num(Math.sqrt(NC * NV))}; W<sub>g</sub>/2kT = ${num(x, 4)}; n<sub>i</sub> = ${num(ni)} m⁻³.`)); },
  () => { const [nm, rho, mu, mus] = rnd([["Ge", 0.47, 0.58, "0,39 + 0,19"], ["Si", 2350, 0.183, "0,135 + 0,048"], ["Ge", 0.5, 0.58, "0,39 + 0,19"], ["Si", 2300, 0.183, "0,135 + 0,048"]]), ni = 1 / (rho * 1.602e-19 * mu);
    return hint("γ = 1/ρ = q·n<sub>i</sub>(μ<sub>n</sub> + μ<sub>p</sub>).", mk(`Čistý ${nm} má rezistivitu ${num(rho)} Ω·m a pohyblivosti ${mus} m²V⁻¹s⁻¹. Aká je vlastná koncentrácia nosičov?`, ni, "m⁻³", [ni / 2, 2 * ni, ni * mu / 0.39], `n<sub>i</sub> = 1/(${num(rho)}·1,602·10⁻¹⁹·${num(mu)}) = ${num(ni)} m⁻³.`)); },
  () => { const r = rnd([0.5, 0.55, 0.67, 0.8, 1.5]), Wg = rnd([1.11, 0.67, 1.43]), T = rnd([100, 200, 300, 400, 500]), W = Wg / 2 + 0.75 * 1.38e-23 * T * Math.log(r) / 1.602e-19;
    return hint("W<sub>F</sub> − W<sub>V</sub> = W<sub>g</sub>/2 + ¾kT·ln(m<sub>p</sub>/m<sub>n</sub>), kT prepočítaj na eV.", mk(`Vlastný polovodič má W<sub>g</sub> = ${num(Wg)} eV a pomer efektívnych hmotností m<sub>p</sub>/m<sub>n</sub> = ${num(r)}. Ako vysoko nad W<sub>V</sub> leží Fermiho hladina pri ${T} K?`, W, "eV", [Wg / 2, Wg / 2 - 0.75 * 1.38e-23 * T * Math.log(r) / 1.602e-19, Wg / 2 + 0.5 * 1.38e-23 * T * Math.log(r) / 1.602e-19 + 0.01], `kT = ${num(1.38e-23 * T / 1.602e-19, 3)} eV; W<sub>F</sub> − W<sub>V</sub> = ${num(Wg / 2, 4)} + ¾·${num(1.38e-23 * T / 1.602e-19, 3)}·ln ${num(r)} = ${num(W, 4)} eV.`, 4)); }
 ],
 l11: [
  () => { const [nm, N, ni, mn, mp, nmS] = rnd([["Ge", 4.41e28, 2.4e19, 0.39, 0.19, "germánia"], ["Si", 5.0e28, 1.45e16, 0.135, 0.048, "kremíka"]]), [pr, typ] = rnd([["antimónu", "N"], ["fosforu", "N"], ["arzénu", "N"], ["bóru", "P"], ["gália", "P"], ["india", "P"]]), at = rnd([0.001, 0.0001, 0.01, 0.00001]), Nd = at / 100 * N, min = ni * ni / Nd, g = 1.602e-19 * (typ === "N" ? Nd * mn + min * mp : Nd * mp + min * mn);
    return hint(`${typ === "N" ? "Donor (5. skupina)" : "Akceptor (3. skupina)"}: väčšinové = (at. %/100)·N, menšinové = n<sub>i</sub>²/väčšinové, γ = q(nμ<sub>n</sub> + pμ<sub>p</sub>).`, mk(`Vzorka ${nmS} (N = ${num(N)} m⁻³, n<sub>i</sub> = ${num(ni)} m⁻³) obsahuje ${String(at).replace(".", ",")} at. % ${pr}, všetky ionizované. Aká je konduktivita?`, g, "S·m⁻¹", [1.602e-19 * Nd * (typ === "N" ? mp : mn), g * 100, 1.602e-19 * Nd * 100 * (typ === "N" ? mn : mp)], `Typ ${typ}; väčšinové ${num(Nd)} m⁻³, menšinové ${num(min)} m⁻³; γ = 1,602·10⁻¹⁹·(${num(Nd)}·${num(typ === "N" ? mn : mp)} + …) = ${num(g)} S·m⁻¹.`)); },
  () => { const [nm, ni] = rnd([["Si", 1.45e16], ["Ge", 2.4e19], ["Si", 9.65e15]]), Nd = rnd([1e20, 1e21, 5e21, 1e22, 1e23]), p = ni * ni / Nd;
    return hint("p<sub>n</sub> = n<sub>i</sub>²/n<sub>n</sub>, n<sub>n</sub> ≈ N<sub>D</sub>.", mk(`${nm} typu N má N<sub>D</sub> = ${num(Nd)} m⁻³ (plná ionizácia), n<sub>i</sub> = ${num(ni)} m⁻³. Aká je koncentrácia menšinových dier?`, p, "m⁻³", [ni, Nd, p * 1000], `p<sub>n</sub> = (${num(ni)})²/${num(Nd)} = ${num(p)} m⁻³.`)); }
 ],
 l12: [
  () => { const [nm, mu] = rnd([["elektrónov v Si", 0.135], ["dier v Si", 0.048], ["elektrónov v Ge", 0.39], ["dier v Ge", 0.19], ["elektrónov v GaAs", 0.95]]), T = rnd([250, 300, 350, 400]), D = mu * 1.38e-23 * T / 1.602e-19;
    return hint("Einsteinov vzťah D = μ·kT/q.", mk(`Aký je difúzny koeficient ${nm} (μ = ${num(mu)} m²V⁻¹s⁻¹) pri ${T} K?`, D, "m²·s⁻¹", [mu * 1.602e-19 / (1.38e-23 * T), D * 100, mu / 0.0259], `kT/q = ${num(1.38e-23 * T / 1.602e-19, 3)} V; D = ${num(mu)}·${num(1.38e-23 * T / 1.602e-19, 3)} = ${num(D)} m²·s⁻¹.`)); },
  () => { const r = rnd([0.26, 0.5, 1, 0.067]), T = rnd([77, 300, 400]), m = r * 9.109e-31, v = Math.sqrt(3 * 1.38e-23 * T / m);
    return hint("v<sub>t</sub> = √(3kT/m<sub>n</sub>).", mk(`Aká je tepelná rýchlosť elektrónu s efektívnou hmotnosťou ${num(r)}·m₀ pri ${T} K?`, v, "m·s⁻¹", [v * v / 1e5, Math.sqrt(1.38e-23 * T / m), v / 1000], `v<sub>t</sub> = √(3·1,38·10⁻²³·${T}/${num(m)}) = ${num(v)} m·s⁻¹.`)); }
 ],
 l8: [
  () => { const H = rnd([5, 10, 20, 50, 100]), Jm = rnd([1, 2, 3, 5, 8]) * 1e-6, mu0 = 4 * Math.PI * 1e-7, k = Jm / (mu0 * H), B = mu0 * H + Jm;
    return hint("κ = J<sub>m</sub>/(μ₀H), μ<sub>r</sub> = 1 + κ.", mk(`V poli H = ${H} A·m⁻¹ má látka magnetickú polarizáciu ${num(Jm)} T. Aká je jej relatívna permeabilita?`, 1 + k, "", [k, B / mu0, 1 - k], `μ₀H = ${num(mu0 * H)} T; κ = ${num(Jm)}/${num(mu0 * H)} = ${num(k)}; μ<sub>r</sub> = 1 + κ = ${num(1 + k, 4)}.`, 4)); },
  () => { const k1 = rnd([0.8, 1.0, 1.4, 2.0]) * 1e-3, t1 = rnd([20, 25]), T1 = t1 + 273.15, T2 = rnd([77.3, 150, 200, 373.15]), H = rnd([1e5, 5e5, 1e6]), k2 = k1 * T1 / T2, M = k2 * H;
    return hint("Curieho zákon κ₂ = κ₁T₁/T₂ (K), potom M = κH.", mk(`Paramagnetikum má pri ${t1} °C susceptibilitu ${num(k1)}. Aká je jeho magnetizácia v poli ${num(H)} A·m⁻¹ pri ${num(T2, 4)} K?`, M, "A·m⁻¹", [k1 * H, k1 * t1 / T2 * H, M * 4 * Math.PI * 1e-7], `κ₂ = ${num(k1)}·${num(T1, 5)}/${num(T2, 4)} = ${num(k2)}; M = κ₂H = ${num(M)} A·m⁻¹.`)); }
 ],
 l9: [
  () => { const ph = rnd([0.5, 0.8, 1.1, 1.5]), pv = rnd([0.1, 0.2, 0.3, 0.5]), f1 = 50, f2 = rnd([100, 150, 200, 400]), x = f2 / f1, p = x * ph + x * x * pv;
    return hint("p(f₂) = (f₂/f₁)·p<sub>h</sub> + (f₂/f₁)²·p<sub>v</sub>.", mk(`Plech má pri 50 Hz hysterézne straty ${num(ph)} W/kg a straty vírivými prúdmi ${num(pv)} W/kg. Aké sú celkové merné straty pri ${f2} Hz (rovnaká amplitúda B)?`, p, "W/kg", [x * (ph + pv), x * x * (ph + pv), ph + pv], `x = ${f2}/50 = ${x}; p = ${x}·${num(ph)} + ${x * x}·${num(pv)} = ${num(p)} W/kg.`)); },
  () => { const ph = rnd([0.5, 1, 1.5, 2]), pv = rnd([0.5, 1, 1.5]), f1 = 100, f2 = 200, f3 = rnd([300, 400, 500]), p1 = ph + pv, p2 = 2 * ph + 4 * pv, x = f3 / f1, p3 = x * ph + x * x * pv;
    return hint("Dve rovnice: p₁ = p<sub>h</sub> + p<sub>v</sub>, p₂ = 2p<sub>h</sub> + 4p<sub>v</sub>; potom p₃ = x·p<sub>h</sub> + x²·p<sub>v</sub>.", mk(`Celkové merné straty ocele sú ${num(p1)} W/kg pri 100 Hz a ${num(p2)} W/kg pri 200 Hz. Aké budú pri ${f3} Hz?`, p3, "W/kg", [p1 * x, p1 * x * x, p2 * x / 2], `p<sub>v</sub> = (p₂ − 2p₁)/2 = ${num(pv)}, p<sub>h</sub> = ${num(ph)} W/kg; p₃ = ${x}·${num(ph)} + ${x * x}·${num(pv)} = ${num(p3)} W/kg.`)); }
 ],
 l5: [
  () => { const n = rnd([5.0e28, 5.86e28, 8.42e28, 8.5e28]), S = rnd([0.5, 1, 1.5, 2.5, 4]), v = rnd([1.0e-4, 1.5e-4, 2.0e-4, 3.0e-4]), I = n * 1.602e-19 * S * 1e-6 * v, Ss = String(S).replace(".", ",");
    return hint("I = n·q·S·v, prierez v m².", mk(`Vodič s prierezom ${Ss} mm² má ${num(n)} voľných elektrónov v m³ a driftová rýchlosť je ${num(v)} m·s⁻¹. Aký tečie prúd?`, I, "A", [I * 1e6, I / 1000, I * 1000], `I = ${num(n)}·1,602·10⁻¹⁹·${Ss}·10⁻⁶·${num(v)} = ${num(I)} A.`)); },
  () => { const l = rnd([10, 15, 20, 25, 50]), S = rnd([0.1, 0.25, 0.5, 0.75, 1]), rho = rnd([1.72e-8, 2.94e-8, 1.6e-8]), R = rho * l / (S * 1e-6), Ss = String(S).replace(".", ",");
    return hint("ρ = R·S/l, S v m².", mk(`Drôt dĺžky ${l} m s prierezom ${Ss} mm² má odpor ${num(R, 3)} Ω. Aká je jeho rezistivita?`, rho, "Ω·m", [rho * 1e6, rho * 1e3, rho / 1e2], `ρ = ${num(R, 3)}·${Ss}·10⁻⁶/${l} = ${num(rho)} Ω·m = ${num(rho * 1e6)} Ω·mm²·m⁻¹.`)); },
  () => { const [nm, rho, n] = rnd([["meď", 1.72e-8, 8.42e28], ["striebro", 1.6e-8, 5.86e28], ["hliník", 2.94e-8, 1.81e29], ["zlato", 2.2e-8, 5.9e28]]), E = rnd([0.05, 0.1, 1, 10, 100]), mu = 1 / (n * 1.602e-19 * rho), v = mu * E;
    return hint("μ = 1/(n·q·ρ), v = μ·E.", mk(`V kove ${nm} (ρ = ${num(rho)} Ω·m, n = ${num(n)} m⁻³) je pole ${num(E)} V·m⁻¹. Aká je driftová rýchlosť elektrónov?`, v, "m·s⁻¹", [mu, v * 1000, n * 1.602e-19 * rho * E], `μ = 1/(${num(n)}·1,602·10⁻¹⁹·${num(rho)}) = ${num(mu)} m²V⁻¹s⁻¹; v = μE = ${num(v)} m·s⁻¹.`)); },
  () => { const R0 = rnd([20, 30, 41.8, 50, 100]), dt = rnd([20, 30, 45, 60, 80]), a = 3.93e-3, R = R0 * (1 + a * dt), t = 20 + dt;
    return hint("R = R₀[1 + α(ϑ − ϑ₀)] → ϑ = ϑ₀ + (R/R₀ − 1)/α.", mk(`Medená cievka má pri 20 °C odpor ${num(R0, 4)} Ω, po zahriatí ${num(R, 4)} Ω (α = 3,93·10⁻³ K⁻¹). Aká je teplota vinutia?`, t, "°C", [dt, 20 + dt / 2, 20 + dt * 2], `ϑ = 20 + (${num(R, 4)}/${num(R0, 4)} − 1)/3,93·10⁻³ = ${num(t, 3)} °C.`)); }
 ],
 l6: [
  () => { const V2 = rnd([4.29, 4.5, 4.65]), V1 = rnd([4.14, 4.25, 4.3, 4.0]), n2 = rnd([8.42e28, 8.47e28]), n1 = rnd([5.53e28, 5.86e28, 1.81e29]), t = rnd([20, 25, 100]), T = t + 273.15, U = V2 - V1 + 1.38e-23 * T / 1.602e-19 * Math.log(n2 / n1);
    return hint("U₁₂ = V₂ − V₁ + (kT/e)·ln(n₂/n₁), T v K.", mk(`Kov 2 má výstupný potenciál ${num(V2, 3)} V a n₂ = ${num(n2)} m⁻³, kov 1 má ${num(V1, 3)} V a n₁ = ${num(n1)} m⁻³. Aké je dotykové napätie U₁₂ pri ${t} °C?`, U, "V", [V2 - V1, U + 0.1, V2 - V1 + 1.38e-23 * t / 1.602e-19 * Math.log(n2 / n1) + 0.05], `kT/e = ${num(1.38e-23 * T / 1.602e-19, 4)} V; U₁₂ = ${num(V2 - V1, 3)} + ${num(1.38e-23 * T / 1.602e-19, 4)}·(${num(Math.log(n2 / n1), 3)}) = ${num(U, 3)} V.`)); },
  () => { const n2 = rnd([8.42e28, 8.47e28]), n1 = rnd([5.53e28, 5.86e28, 2.6e28]), dT = rnd([20, 50, 65, 100, 150]), U = 1.38e-23 * dT / 1.602e-19 * Math.log(n2 / n1);
    return hint("U<sub>T</sub> = (k/e)·ΔT·ln(n₂/n₁), výstupné potenciály sa odčítajú.", mk(`Termočlánok z dvoch kovov s koncentráciami elektrónov ${num(n2)} a ${num(n1)} m⁻³ má rozdiel teplôt spojov ${dT} °C. Aké je termoelektrické napätie podľa klasického modelu?`, U, "V", [U * 1000, 1.38e-23 * (dT + 273.15) / 1.602e-19 * Math.log(n2 / n1), U * 10], `U<sub>T</sub> = (1,38·10⁻²³·${dT}/1,602·10⁻¹⁹)·ln(${num(n2 / n1, 3)}) = ${num(U)} V.`)); },
  () => { const [nm, Tk, H0] = rnd([["olovo", 7.26, 6.4e4], ["cín", 3.69, 2.4e4], ["niób", 9.25, 1.6e5], ["ortuť", 4.12, 3.3e4]]), T = rnd([0.25, 0.5, 0.6, 0.8]) * Tk, Hk = H0 * (1 - (T / Tk) ** 2);
    return hint("H<sub>k</sub> = H₀[1 − (T/T<sub>k</sub>)²].", mk(`Supravodič ${nm} má T<sub>k</sub> = ${num(Tk, 3)} K a H₀ = ${num(H0)} A·m⁻¹. Aké je kritické pole pri ${num(T, 3)} K?`, Hk, "A·m⁻¹", [H0 * (1 - T / Tk), H0, H0 * (T / Tk) ** 2], `H<sub>k</sub> = ${num(H0)}·[1 − (${num(T, 3)}/${num(Tk, 3)})²] = ${num(Hk)} A·m⁻¹.`)); }
 ],
 l2: [
  () => { const [nm, st, N, rho, M] = rnd([["meď", "FCC", 4, 8890, 63.57], ["hliník", "FCC", 4, 2699, 26.98], ["striebro", "FCC", 4, 10500, 107.87], ["nikel", "FCC", 4, 8900, 58.69], ["železo α", "BCC", 2, 7870, 55.85], ["volfrám", "BCC", 2, 19300, 183.84]]);
    const a = Math.cbrt(N * M / (rho * 6.022e26)), fcc = st === "FCC", r = fcc ? a * Math.SQRT2 / 4 : a * Math.sqrt(3) / 4, Ms = String(M).replace(".", ",");
    return hint(`${st}: ${N} atómy v bunke. ρa³ = N·M/N<sub>A</sub>, potom dotyk ${fcc ? "a√2 = 4r" : "a√3 = 4r"}.`, mk(`Kov ${nm} (${st}) má hustotu ${rho} kg·m⁻³ a molárnu hmotnosť ${Ms} kg/kmol. Aký je polomer atómu, ak sa atómy dotýkajú?`, r, "m", [a, fcc ? a * Math.sqrt(3) / 4 : a * Math.SQRT2 / 4, r * 10], `a = ∛(${N}·${Ms}/(${rho}·6,022·10²⁶)) = ${num(a)} m; r = ${fcc ? "a√2/4" : "a√3/4"} = ${num(r)} m.`)); },
  () => { const [nm, rho, M] = rnd([["meď", 8890, 63.57], ["hliník", 2699, 26.98], ["striebro", 10500, 107.87], ["zlato", 19300, 196.97], ["volfrám", 19300, 183.84]]);
    const n = rho * 6.022e26 / M, Ms = String(M).replace(".", ",");
    return hint("Koncentrácia atómov N = ρ·N<sub>A</sub>/M, M v kg/kmol a N<sub>A</sub> v kmol⁻¹.", mk(`Koľko atómov je v 1 m³ kovu ${nm} (ρ = ${rho} kg·m⁻³, M = ${Ms} kg/kmol)?`, n, "m⁻³", [n / 1000, M * 6.022e26 / rho, n * 1000], `N = ${rho}·6,022·10²⁶/${Ms} = ${num(n)} m⁻³.`)); },
  () => { const [nm, D, w1, w2, w3] = rnd([["jednoduchej", 0.5236, 0.6802, 0.7405, 0.3401], ["priestorovo centrovanej", 0.6802, 0.5236, 0.7405, 0.3401], ["plošne centrovanej", 0.7405, 0.6802, 0.5236, 0.3401], ["diamantovej", 0.3401, 0.5236, 0.6802, 0.7405]]);
    return hint("Zaplnenie D = N·(4/3)πr³/a³ s podmienkou dotyku.", mk(`Aké je zaplnenie priestoru v ${nm} kubickej mriežke tuhými guľami, ktoré sa dotýkajú?`, D, "", [w1, w2, w3], "SC π/6 ≈ 0,524; BCC π√3/8 ≈ 0,680; FCC π√2/6 ≈ 0,740; diamant π√3/16 ≈ 0,340.")); }
 ],
 l3: [
  () => { const W = rnd([0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1.0]), t = rnd([20, 25, 100, 200, 300, 400, 500]), T = t + 273.15, N = 6.02e28, x = W * 1.602e-19 / (1.38e-23 * T), nv = N * Math.exp(-x), Ws = String(W).replace(".", ",");
    return hint("n<sub>v</sub> = N·e<sup>−W/kT</sup>, W v J, T v K.", mk(`Kov má 6,02·10²⁸ atómov v m³ a energia na vznik vakancie je ${Ws} eV. Aká je koncentrácia vakancií pri ${t} °C?`, nv, "m⁻³", [nv * 1000, nv / 1000, N * Math.exp(-x / 2)], `W/kT = ${Ws}·1,602·10⁻¹⁹/(1,38·10⁻²³·${num(T, 5)}) = ${num(x, 4)}; n<sub>v</sub> = 6,02·10²⁸·e<sup>−${num(x, 4)}</sup> = ${num(nv)} m⁻³.`)); },
  () => { const W = rnd([0.6, 0.7, 0.75, 0.8, 1.0]), t1 = rnd([20, 25]), t2 = rnd([300, 400, 500, 600]), T1 = t1 + 273.15, T2 = t2 + 273.15, y = W * 1.602e-19 / 1.38e-23 * (1 / T1 - 1 / T2), r = Math.exp(y), Ws = String(W).replace(".", ",");
    return hint("Pomer n₂/n₁ = e<sup>(W/k)(1/T₁ − 1/T₂)</sup>, N sa vykráti.", mk(`Koľkokrát vzrastie koncentrácia vakancií, ak teplota stúpne z ${t1} °C na ${t2} °C (W<sub>v</sub> = ${Ws} eV)?`, r, "-krát", [r * 100, r / 100, T2 / T1], `(W/k)(1/T₁ − 1/T₂) = ${num(y, 4)}; pomer = e<sup>${num(y, 4)}</sup> = ${num(r)}.`)); }
 ]
};
