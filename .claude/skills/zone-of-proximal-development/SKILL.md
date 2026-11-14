---
name: zone-of-proximal-development
description: "Návrh kvízov, precvičovania a opakovania v Študijnom Queste podľa zóny najbližšieho vývoja: samostatný pokus, cielená pomoc, nová úloha bez nápovedy a ďalší krok podľa skutočného výkonu. Použi pri písaní alebo úprave quiz, boss, traps, examples a GEN pre level, pri návrhu herných mechaník okolo kvízu a opakovania, alebo keď si Artur chce v chate precvičiť jednu úlohu („precvič ma“, „daj mi príklad“). Jednu otázku na teóriu nerozťahuj na celý cyklus. Keywords: quiz design, practice, scaffolding, spaced repetition, drill me, exercise."
---

# Precvičovanie podľa zóny najbližšieho vývoja

Hra nemá len generovať otázky. Má zistiť, kde Artur zatiaľ samostatne nevie, dať mu presne tú pomoc, ktorá ho posunie, a potom to overiť novou úlohou bez nápovedy.

Zóna najbližšieho vývoja (Vygotskij) je teoretický pojem o vzťahu medzi tým, čo človek zvládne sám, a tým, čo zvládne s pomocou. Kroky nižšie (samostatný pokus, opora, jej odobratie) sú didaktický návrh inšpirovaný touto teóriou, nie Vygotského postup. Jeden kvíz ukáže výkon v danej úlohe a s danou pomocou, nie trvalú „úroveň“.

## Ako sa to mapuje na hru

| Krok | Kde v hre | Na čo dbať |
| --- | --- | --- |
| Samostatný pokus | `quiz`, `boss`, skúšobný test kapitoly | Pred odpoveďou nič neprezradí odpoveď: ani iná otázka, ani jej možnosti, ani výklad otvorený vedľa. |
| Cielené vysvetlenie | `e` pri otázke, `traps`, `examples` | Vysvetli *prečo*, nie len čo je správne. Typickú chybu označ ako typickú chybu, nie „ty si urobil“. |
| Pomoc s krokmi | `examples` (pri silách štyri kroky: sily, osi, rovnice po zložkách, výpočet), nákresy `fig`/`pic` | Pomoc rieši konkrétne miesto, kde sa zasekol; kľúčový krok nech urobí sám. |
| Nová úloha bez nápovedy | `GEN` (nové čísla), rozložené opakovanie, oprava len chybných otázok | Rovnaká zručnosť a obtiažnosť, iné čísla alebo situácia. Nepridávaj nové pravidlo. |
| Ďalší krok | odomknutie levelu po 100 %, návrat chyby na druhý deň a po troch dňoch | Rozhoduje skutočný výkon, nie počet pokusov či otočených strán. |

## Pravidlá pri písaní otázok

- Každá otázka má jasný účel: diagnóza, ukážka pri vysvetlení, precvičenie s pomocou, samostatná kontrola, alebo rozšírenie. Rozšírenie (nové pravidlo) nepočítaj ako dôkaz, že level vie.
- Zlé možnosti majú zodpovedať skutočným typickým chybám (zabudnutý faktor ½, zlé znamienko, zámena dráhy a posunutia), nie náhodným číslam.
- Skontroluj krížové prezradenie: zadanie alebo možnosti jednej otázky nesmú prezradiť odpoveď inej v tom istom kvíze. Ukážkový príklad vo výklade nesmie mať rovnaké čísla ako kvízová otázka.
- `GEN`: prvý návrat chyby má tie isté vedomosti a kroky, mení čísla alebo povrchovú situáciu. Zlé hodnoty sa pre žiadne vylosované čísla nesmú zhodovať so správnou.
- Nehodnoť podľa jednej odpovede. Jedna správna odpoveď znamená „túto úlohu zvládol bez nápovedy“, nie „ovláda celú tému“. Preto otázka vypadne z opakovania až po 3 správnych odpovediach.
- Kto vie, nech nemusí prechádzať pomoc. Kto sa zasekne, nech sa vie vrátiť k výkladu alebo príkladu. Ak hra niečo nevie rozhodnúť sama, ponúkni voľbu (napr. „ukáž vysvetlenie“) a netvrď, že rozhodla.

## Precvičovanie v chate

Keď si Artur chce precvičiť priamo v rozhovore:

1. Daj jednu krátku úlohu k cieľu a popros o odpoveď aj s dôvodom kľúčového kroku. Pred pokusom nedávaj postup ani výsledok.
2. Spoj dôkaz s výkladom: „Napísal si…, to môže znamenať…“. Ak rôzne vysvetlenia vedú k rôznej pomoci, polož jednu otázku, ktorá ich rozlíši. V tej istej správe neprezraď odpoveď na ňu.
3. Pomoc podľa toho, kde sa zasekol:

| Kde sa zasekol | Pomoc | Čo urobí sám |
| --- | --- | --- |
| Prehliadol podmienku | Ukáž na podmienku alebo polož smerovú otázku | Určí vzťah a ďalší krok |
| Pozná pojem, stráca sa v krokoch | Kostra krokov, nákres, čiastočne vyriešená úloha | Doplní kľúčový krok a zdôvodní ho |
| Chýba mu vedomosť | Krátky výklad, ukážka na *inej* úlohe | Použije metódu na pôvodnej úlohe |
| Opakovane neúspešný | Zmenši cieľ, vráť sa k predpokladu, iná reprezentácia | Splní menší krok, ktorý má zmysel |

4. Po každej pomoci nechaj priestor na odpoveď a počkaj. Nedokonči za neho celú úvahu.
5. Potom daj novú porovnateľnú úlohu bez kľúčovej nápovedy. Ak si pozrel riešenie, označ úlohu ako „videl riešenie“ a samostatnosť over na inej.
6. Na konci krátky záznam: čo skúsil sám, akú pomoc dostal, čo potom urobil sám, ako dopadla nová úloha a čo ďalej (samostatné precvičenie, ďalšia pomoc, doplnenie výkladu, koniec). Neodohrané pokusy nevypĺňaj.

---
Upravené zo skillu `zone-of-proximal-development` projektu [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) (MIT, © 2026 THU-MAIC), pozri `../LICENSE-OpenMAIC`. Teoretické zdroje: Vygotsky (1978) *Mind in Society*, s. 84–91; Wood, Bruner & Ross (1976), doi:10.1111/j.1469-7610.1976.tb00381.x; Collins, Brown & Holum (1991) *Cognitive apprenticeship*, American Educator.
