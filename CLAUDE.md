# Študijný Quest – pokyny pre Claude

## Postup práce
- Pracuj na pridelenej vetve, do `main` choď cez pull request. `main` chráni ruleset: len pull request, len Squash and merge, bez force pushu.
- **Pull request po overení hneď zlúč (Squash and merge), nepýtaj sa.** Potom vetvu zosúlaď s `main` (`git merge origin/main`), aby ďalší pull request nemal konflikt.
- Pred zlúčením over zmenu v prehliadači (Playwright s emuláciou iPhonu, svetlý aj tmavý režim).
- Pred novou funkciou alebo novým predmetom použi skill `brainstorming`: najprv konkrétny návrh, potom stavanie. Otázky len tam, kde sa návrh bez odpovede urobiť nedá.

## Obsah
- Schéma predmetu je v komentári na začiatku `index.html`, jeden súbor na predmet v `subjects/<id>.js`.
- V kvíze je správna odpoveď vždy prvá v poli `o`. Nové otázky pridávaj na koniec zoznamu, lebo id otázky je jej poradie a používa ho uložený postup (denník chýb, opakovanie).
- Texty po slovensky, české odborné termíny v zátvorke, značenie ako v prednáškach (φ potenciál, J moment zotrvačnosti, ε uhlové zrýchlenie, f trenie, ε<sub>r</sub> relatívna permitivita).
- Každý vzorec a každá konštanta, ktorú level používa vo výklade, kvíze, príkladoch alebo generátoroch, musí byť na karte Vzorce toho levelu. Značky sú vždy tie z prednášky (napr. τ dĺžková hustota, β odpor prostredia, r\* hmotný stred).
- Počítacie úlohy majú čísla počítateľné z hlavy, na teste nie je kalkulačka.
- Nový predmet a každú várku materiálov over cez `/deep-research` a skill `fact-check`. Študentove materiály majú prednosť pri značení a rozsahu.
- O študentovi píš ako o „študentovi“, nie menom.
