# Prezeranie a oprava odpovedí v skúšobnom teste

Schválené študentom 14. 11. 2026 (malá zmena, krátky dizajn).

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
Zvažované: (a) iba prezeranie bez zmeny odpovede, (b) prezeranie so zmenou odpovede. Študent zvolil (b), lebo zodpovedá ostrému testu.

# 3 životy v kvíze

Schválené študentom 14. 11. 2026: „Každý test má 3 životy“ (variant A, životy na jeden kvíz).

- Každý kvíz okrem skúšobného testu začína s 3 životmi (`LIVES` v `game.js`); chyba vezme jeden.
- Pri 0 životoch tlačidlo po vysvetlení ukáže „Došli životy · zobraziť výsledok“ a kvíz skončí; výsledok spomenie, na ktorej otázke.
- Nezobrazené otázky sa nerátajú do denníka chýb; percentá levelu sa rátajú zo všetkých otázok kvízu.
- Skúšobný test životy nemá, lebo správnosť ukazuje až po odovzdaní.
- Zamietnuté: spoločné srdcia pre celú hru s dobíjaním (variant B) — riziko zablokovania pred testom.
