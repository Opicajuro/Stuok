# Prezeranie a oprava odpovedí v skúšobnom teste

Schválené Arturom 14. 11. 2026 (malá zmena, krátky dizajn).

## Prečo
Na písomke sa dá v hárku vrátiť a odpoveď opraviť. Skúšobný test doteraz po odpovedi hneď skočil ďalej a späť sa nedalo.

## Čo
- Platí len pre skúšobný test kapitoly (`kind: "boss"`). Kvízy levelov sa nemenia.
- Rad čísel 1–n: zodpovedané, aktuálna, nezodpovedané; ťuk na číslo skočí na otázku.
- Odpoveď sa dá meniť do odovzdania; vybraná sa len zvýrazní, správnosť sa počas testu neukazuje. Po ťuku test skočí na ďalšiu otázku.
- „← Predošlá“, „Ďalšia →“ a „Odovzdať test“ (s počtom nezodpovedaných a potvrdením). Po uplynutí času sa test odovzdá sám.
- Body, denník chýb a rozložené opakovanie sa vyhodnotia až pri odovzdaní. Nezodpovedaná otázka sa ráta ako nesprávna.
- Obrazovka výsledku ostáva rovnaká.

## Prístupy
Zvažované: (a) iba prezeranie bez zmeny odpovede, (b) prezeranie so zmenou odpovede. Artur zvolil (b), lebo zodpovedá ostrému testu.
