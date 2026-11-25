# Predmet Materiály v elektrotechnike

Schválené študentom 25. 11. 2026: zoznam 14 levelov „Áno, ale bez podmienky splnenia predošlého testu“; písomka „4/5 otázok zo všetkých tém“; kalkulačka povolená.

## Prečo
Druhý predmet vedľa Fyziky 1. Študent má skriptá (Jirák a kol., MTD – časť Materiály v elektrotechnice) a riešené numerické cvičenia (25 príkladov). Hra má pomôcť na písomku s počítacími príkladmi na kalkulačku.

## Čo
- Súbor `subjects/mte.js`, id `mte`, 5 kapitol podľa skrípt, 14 levelov (poradie ako v skriptách):
  1. Atómy a väzby · 2. Kryštálová mriežka · 3. Poruchy kryštálov · 4. Pásový model ·
  5. Vodivosť kovov · 6. Supravodivosť a termoelektrina · 7. Kovy v praxi ·
  8. Magnetizácia a permeabilita · 9. Hysterézia a straty ·
  10. Vlastný polovodič · 11. Prímesový polovodič · 12. Vedenie prúdu v polovodiči ·
  13. Polarizácia · 14. Vodivosť, straty a prieraz izolantov.
- Všetkých 25 príkladov z cvičení vo vzorových príkladoch; kvíz: otázky na pochopenie (aj z kontrolných otázok skrípt) + generované príklady rovnakého typu s novými číslami. Čísla na kalkulačku (pravidlo „z hlavy“ platí len pre Fyziku 1).
- Čísla: hodnoty zo zadaní cvičení ostávajú v tých úlohách; karty Vzorce, výklad a otázky na fakty používajú hodnoty skrípt (Si n<sub>i</sub> = 1,45·10¹⁶ m⁻³, Ge n<sub>i</sub> = 2,4·10¹⁹ m⁻³, Ge a₀ = 0,566 nm, Ag 0,016 μΩ·m …). Pri klasickom modeli dotykového napätia a pri Fe₂O₃ ako paramagnete krátka poznámka. Podklad: správa deep-research „Vzorce Materiály v elektrotechnike“.
- Značenie zo skrípt (γ konduktivita, ρ rezistivita, W energia, ϑ teplota v °C, κ susceptibilita, J<sub>m</sub> magnetická polarizácia), texty po slovensky, české termíny v zátvorke.

## Herné pravidlá predmetu
- **Bez odomykania:** pole `open: true` v predmete. Všetky kvízy aj skúšobný test sú hneď dostupné (`unlocked`, `bossUnlocked` vrátia true). Fyzika 1 sa nemení.
- **Jeden skúšobný test zo všetkých tém:** `exam` pri poslednej kapitole s `levels` = všetky levely (už podporované v `exam()` cez Object.assign). 5 otázok, 45 minút (môj odhad, mení sa jedným číslom), bez bodovej tabuľky.

## Prístupy
Zvažované: (A) plné levely s výkladom, (B) len precvičovanie, (C) čakať na prednášky. Študent poslal skriptá → A podľa skrípt.

## Necháva sa na stavbu
Konkrétne otázky, nákresy (bunky, pásové modely, hysterézna slučka), generátory.
