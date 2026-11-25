/* Materiály v elektrotechnice (MTD, FEKT VUT). Podklady: skriptá Jirák a kol. a riešené numerické cvičenia.
   Schéma predmetu je v komentári na začiatku index.html. Hodnoty na kartách Vzorce sú zo skrípt,
   hodnoty v zadaniach príkladov z cvičení ostávajú tak, ako ich dal vyučujúci. Na teste je povolená kalkulačka. */
SUBJECTS.push({
id: "mte",
open: true,
name: "Materiály v elektrotechnike",
note: "MTD · skriptá a numerické cvičenia · kalkulačka povolená",
chapters: [
 { name: "Kapitola 1 · Zloženie a štruktúra látok", note: "Atómy, väzby, kryštály, poruchy, pásový model.",
   exam: { n: 5, minutes: 45, levels: ["l1", "l2", "l3", "l4"] } }
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
}
],
boss: []
});

GEN.mte = {
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
