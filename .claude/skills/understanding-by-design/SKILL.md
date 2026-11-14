---
name: understanding-by-design
description: "Spätný návrh (Understanding by Design) kapitoly alebo levelu v Študijnom Queste: najprv čo má študent na teste vedieť, potom ako to hra overí (skúšobný test, boss, kvíz, GEN), až nakoniec výklad. Použi pri navrhovaní novej kapitoly či levelu z prednášok, keď treba rozhodnúť, čo do levelu patrí a čo nie, alebo keď level pôsobí ako zoznam faktov bez pointy. Keywords: backward design, UbD, plan chapter, exam scope, enduring understanding."
---

# Spätný návrh kapitoly

Navrhuj odzadu: najprv, čo má študent po kapitole vedieť a preniesť na nové úlohy; potom, ako hra dokáže, že to vie; až potom výklad, ktorý ho tam dovedie.

Kapitola = látka jedného testu (`chapters[i]` s `exam`). Pravidlá testu patria kapitole, nie predmetu. Ďalšie kapitoly nenavrhuj dopredu — vzniknú, až keď študent nahrá ďalšie prednášky.

## 1. Očakávané výsledky

1. Z pravidiel testu, osnovy a prednášok zisti rozsah kapitoly. Čo je neisté (napr. či patrí potenciál do Písomného testu 1), zapíš ako otvorenú otázku a povedz študentovi.
2. Napíš 1–3 vety **trvalého porozumenia**: myšlienka, ktorú si má odniesť a použiť na novú úlohu, nie zoznam faktov. Napr. „Pohyb v osiach x a y sú nezávislé; spája ich len čas.“
3. Ku každému levelu 1–2 **kľúčové otázky**, ku ktorým sa výklad vracia. Napr. „Kedy smiem nahradiť teleso hmotným bodom?“ Kľúčovou otázkou otvor prvú časť výkladu.

## 2. Dôkazy porozumenia — pred výkladom

Skôr než napíšeš `lesson`, urči, ako hra overí, že to vie:

- **Skúšobný test kapitoly** (`exam`): typ a obtiažnosť otázok ako na skutočnom teste (jedna správna odpoveď, bez kalkulačky, na čas).
- **Boss otázky** (`b: true`, `boss`): to, čo spája viac levelov alebo je kľúčové pre test.
- **Kvíz**: odhaľuje typické mylné predstavy; zlé možnosti = skutočné chyby.
- **GEN**: prenos na nové čísla a situácie.

Výklad a príklady musia na tieto dôkazy pripraviť. Žiadna otázka v teste kapitoly nesmie prísť bez toho, aby ju výklad pokryl.

## 3. Učebná cesta (WHERETO)

Skontroluj ňou výklad levelu:

- **W — kam a prečo**: podtitul `sub` a prvá časť výkladu hovoria, na čo je level dobrý.
- **H — háčik**: skutočná situácia alebo rozpor, ktorý otvorí kľúčovú otázku (letuška v lietadle, bežec na štadióne).
- **E — vybaviť**: výklad buduje pojem krok za krokom, s odvodením, nie len so vzorcom; obrázky (`fig`, `pic`) tam, kde pomôžu.
- **E — zažiť**: kontrolné otázky `c`/`a` a riešené príklady, ktoré študent prejde sám.
- **R — premyslieť**: tá istá myšlienka v inej situácii, chyták z `traps`.
- **T — prispôsobiť**: oporu pre toho, kto sa zasekne (kroky v `examples`), výzvu pre toho, kto vie (boss).
- **O — usporiadať**: poradie častí, pri ktorom porozumenie postupne rastie a výklad sa na konci vráti ku kľúčovej otázke.

Nadpisy písať ako otázky alebo situácie, nie ako obsah učebnice. Text po slovensky, české odborné termíny v zátvorke.

## Kontrola kvality

- Trvalé porozumenie, kľúčové otázky a dôkazy sú napísané ešte pred výkladom.
- Každá časť výkladu odpovedá na „ktorému porozumeniu alebo otázke slúži?“. Ak neodpovedá, prepíš ju alebo vyhoď.
- Abstraktný pojem má aspoň jednu úlohu, kde ho študent sám použije, nie len číta.
- Pred písaním celej kapitoly ukáž študentovi plán (pozri `curriculum-planner` a `brainstorming`) a počkaj na súhlas.

---
Upravené zo skillu `understanding-by-design` projektu [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) (MIT, © 2026 THU-MAIC), pozri `../LICENSE-OpenMAIC`. Metóda: Wiggins & McTighe, *Understanding by Design*.
