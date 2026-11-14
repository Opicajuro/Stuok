---
name: fact-check
description: "Kontrola vecnej správnosti obsahu predmetu v Študijnom Queste: vzorce, definície, konštanty, číselné výsledky príkladov, správne odpovede kvízu a matematika generátorov GEN. Použi po napísaní nového predmetu alebo levelu, pred odovzdaním, alebo keď Artur povie „over“, „skontroluj fakty“, „je to správne?“. Pri tvorbe opraví zjavné chyby sám; pri kontrole existujúceho obsahu najprv dá krátku správu a nechá Artura vybrať, čo opraviť. Nie na štýl, gramatiku ani vzhľad. Kombinuj s /deep-research, keď treba overiť veľa údajov z prednášok. Keywords: fact-check, verify formulas, check answers, accuracy review, hallucination check."
---

# Kontrola faktov v obsahu predmetu

Cieľ: dostať z hry vážne vecné chyby skôr, než sa ich Artur naučí na test. Nerob úplný audit; sústreď sa na tých pár tvrdení, ktoré by ho na písomke stáli body.

Obsah predmetu je v súbore predmetu `subjects/<id>.js` (kým hra nie je rozdelená, objekt v poli `SUBJECTS` v `index.html`) a jeho počítacie úlohy v `GEN[<id>]`. Schéma je v komentári na začiatku `index.html`.

Režim urči z požiadavky, Artura sa naň nepýtaj:

- **Tvorba**: predmet alebo level práve vzniká. Kontrolu spusti až keď je celý napísaný. Zjavné chyby oprav rovno, nezastavuj prácu samostatnou správou. Pri odovzdaní stručne spomeň len podstatné opravy a to, čo ostalo neisté.
- **Kontrola**: obsah už existuje a Artur chce vedieť, či sedí. Najprv správa, úpravy až po jeho výbere.

## Čo prečítať

Prečítaj celý rozsah (celý predmet, alebo len level či kapitolu, ak Artur rozsah zúžil): `lesson` vrátane `c`/`a`, `theory`, `traps`, `examples`, `formulas`, `quiz`, `boss` a generátory v `GEN`.

Pri jednom čítaní si potichu zapíš rizikové miesta:

- vzorce, definície, znamienkové konvencie a jednotky;
- konštanty a ich hodnoty (g, k = 9·10⁹, ε₀ …) a či sú v zadaní uvedené, keď ich treba;
- číselné výsledky v `examples` a v odpovediach `a` — prepočítaj ich;
- **kvíz**: je `o[0]` naozaj správna odpoveď? Sú zlé možnosti naozaj zlé a navzájom rôzne? Nesedí vysvetlenie `e` s inou možnosťou?
- **GEN**: počíta funkcia správnu hodnotu? Nemôže sa niektorá zlá hodnota v poli rovnať správnej pre niektoré vylosované čísla? Dá sa výsledok spočítať z hlavy (na teste nie je kalkulačka)?
- slová „vždy“, „nikdy“, „len“, „každý“;
- rozpory medzi levelmi (iné značenie, iná hodnota tej istej konštanty);
- podozrivo presné tvrdenia bez opory v materiáloch.

Neoveruj každé tvrdenie. Preskoč správne veci, štylistické preferencie a neškodné zjednodušenia.

## Overenie zoznamu

1. Najprv Arturove materiály (prednášky, cvičenia, riešené príklady). Majú prednosť pri značení a rozsahu. Hra sama seba dokázať nemôže.
2. Potom webové zdroje pre to, čo závisí od presného alebo odborného údaju. Bežný prvý prechod si vystačí so 6–8 vyhľadávaniami. Zdroj si prečítaj, úryvok z výsledkov vyhľadávania nie je dôkaz. Pri väčšej várke použi `/deep-research`.
3. Výpočty over prepočítaním (ručne alebo krátkym skriptom v Node), nie odhadom.

Pri zloženom tvrdení izoluj sporú časť a over presne tú. Na zjavnú chybu stačí jeden dôveryhodný zdroj (učebnica HRW, oficiálne tabuľky); spornú vec podlož dvoma.

„Nenašiel som spoľahlivý zdroj“ neznamená „nepravda“. Ak overenie nič nerozhodne, povedz to; nevymýšľaj verdikt.

## Arturove materiály sú schválený vstup

Neopravuj obsah tak, aby odporoval Arturovým prednáškam alebo cvičeniam. Ak dôkazy naznačujú, že chyba je priamo v materiáli (napr. riešenie v materiáli uvádza 38,2 N, výpočet dáva 38,6 N), neupravuj potichu. Polož Arturovi otázku (nástroj `AskUserQuestion`): ktoré miesto, čo hovorí materiál, čo hovorí výpočet či zdroj, a možnosti: nechať podľa materiálu / opraviť / uviesť obe hodnoty s poznámkou. Platí to aj vtedy, keď už úpravy inak schválil.

## Krátka správa (režim kontroly)

V prvom prechode 3–8 užitočných zistení, alebo menej, ak ich menej je. Skupiny v tomto poradí, prázdnu vynechaj, nadpisy ako tučný text (nie `#`):

- **A. Vecná chyba**
- **B. Nepresná formulácia**
- **C. Treba overiť** — len ak na tom záleží

Zistenia čísluj priebežne. Každé má tučný riadok s číslom, miestom a problémom, napr. `**1. Level 4 · kvíz · zlá odpoveď označená ako správna**`, a presne tri odrážky:

- **Pôvodné znenie:** citát len relevantnej časti;
- **Problém:** čo je zle a aká je správna vec, prípadne stručný zdroj;
- **Návrh úpravy:** len zmena alebo krátka náhrada.

Žiadne skóre, percentá istoty, metodika ani výpis správnych tvrdení. Ak nič podstatné nenájdeš, povedz, aký rozsah si prešiel a že si nenašiel zjavnú chybu — netvrď, že je obsah bezchybný.

## Výber po správe

Ak sú zistenia a úpravy ešte neboli schválené, posledná akcia ťahu je `AskUserQuestion` s možnosťami: opraviť všetko / opraviť len potvrdené chyby (A) / nechať bez zmien. Artur môže cez „Other“ napísať čísla zistení, napr. `1, 3`.

Pred odpoveďou nič neupravuj. Po schválení zmeň len schválené miesta a pri kvíze zachovaj pravidlo, že správna odpoveď je prvá v poli `o`.

---
Upravené zo skillu `fact-check` projektu [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) (MIT, © 2026 THU-MAIC), pozri `../LICENSE-OpenMAIC`.
