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

# Výklad ako rozhovor, nápoveda, vysvetli vlastnými slovami

Schválené študentom 14. 11. 2026 („Všetko znie dobre“, „Urob všetky“). Inšpirované skillmi z Lockinu (OpenMAIC): learning-to-learn (tip pred vysvetlením), zone-of-proximal-development (nápoveda, overenie bez nej), feynman-learning (vysvetli vlastnými slovami).

- **Rozhovor:** časť výkladu môže mať `ask: { q, o }` (správna prvá). Bot sa spýta, hráč si tipne alebo tip preskočí, potom sa odkryje časť. Ďalšie časti, zhrnutie a „vysvetli“ sú skryté, kým nie je výklad prejdený; „Zobraziť celý výklad bez tipov“ odkryje všetko. Postup sa ukladá (`chat`), „Prejsť výklad znova s tipmi“ ho vynuluje.
- **Nápoveda:** pole `h` pri otázke kvízu, `boss` aj pri generovaných úlohách (`hint(h, mk(...))`). Tlačidlo pred odpoveďou; správne s nápovedou = polovičné XP, nie je to „správne“ pre 100 %, otázka ide do opakovania, nie do denníka chýb. Skúšobný test nápovedu nemá.
- **Vysvetli vlastnými slovami:** `explain: { q, keys }` na level. Text sa ukladá priebežne (`explain`), po „Porovnať so vzorom“ si hráč odškrtáva kľúčové myšlienky. Nehodnotí sa, neovplyvňuje odomykanie.

**Zmena 15. 11. 2026:** výklad ako rozhovor s Quest botom (pole `ask`, avatar a meno bota vo výklade aj v kvíze) študent zamietol („ten quest bot je blbosť“) a bol celý odstránený. Výklad sa zobrazuje celý naraz ako predtým. Nápoveda a „vysvetli vlastnými slovami“ ostávajú.

# Otvorené levely

Schválené študentom 15. 11. 2026: výklad a vzorce všetkých levelov sú otvorené, zamknutý je len kvíz, kým kvíz predošlého levelu nie je na 100 % v jednom pokuse. Skúšobný test sa odomyká ako predtým.
