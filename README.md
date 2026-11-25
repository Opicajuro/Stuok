# Študijný Quest

Gamifikovaná študijná hra na prípravu na písomky: levely s výkladom, vzorcami a kvízmi, skúšobný test na čas a opakovanie chýb. Obsahuje predmety **Fyzika 1** (BPC-FY1, FEKT VUT) a **Materiály v elektrotechnike** (MTD, FEKT VUT, podľa skrípt a numerických cvičení, postupne pribúdajú kapitoly). Predmet sa prepína tlačidlami na mape.

**Hrať:** https://opicajuro.github.io/Stuok/

## Ako sa hrá

- **Level** má tri karty: *Výklad* (s kontrolnými otázkami a nákresmi), *Vzorce* a *Kvíz*.
- **Vysvetli vlastnými slovami**: na konci výkladu napíšeš vysvetlenie a porovnáš ho s kľúčovými myšlienkami. Text sa uloží.
- **Nápoveda** v kvíze ukáže postup bez výsledku. Správna odpoveď s ňou dá polovicu XP, neráta sa do 100 % a otázka sa vráti v opakovaní.
- **Kvíz** je pri každom pokuse iný: časť otázok sa losuje a počítacie úlohy dostanú nové čísla. Po každej odpovedi vidíš vysvetlenie. Na predošlé otázky sa dá vrátiť a pozrieť si odpoveď aj vysvetlenie.
- **Výklad a vzorce** všetkých levelov sú otvorené od začiatku. **Kvíz ďalšieho levelu** sa odomkne, keď kvíz predošlého spravíš aspoň na **75 %**. **100 %** v jednom pokuse bez nápovedy je zlatá značka „zvládnuté“.
- **Materiály v elektrotechnike** nemajú odomykanie: všetky kvízy aj skúšobný test sú otvorené hneď. Skúšobný test má 5 otázok zo všetkých tém a 45 minút, počíta sa s kalkulačkou.
- **Skúšobný test kapitoly** sa odomkne, keď máš kvízy všetkých jej levelov aspoň na 75 %. Beží na čas, bez vysvetlení, s počtom otázok a bodmi ako na ostrom teste. Na otázky sa dá vrátiť a odpoveď zmeniť až do odovzdania.
- **Denník chýb** zbiera otázky, v ktorých si sa pomýlil. **Opakovanie na dnes** ich vracia hneď, na druhý deň a po troch dňoch, kým nemajú tri správne odpovede.
- **Vlastný tréning**: vyber si témy a počet otázok, bez vplyvu na odomykanie.

Postup sa ukladá v prehliadači (`localStorage`, kľúč `studyquest.v2`), teda zvlášť pre každé zariadenie a adresu.

## Štruktúra

Statická stránka bez buildu, stačí otvoriť `index.html`.

| Súbor | Obsah |
| --- | --- |
| `index.html` | Kostra stránky a **schéma predmetu** v komentári na začiatku |
| `style.css` | Vzhľad (svetlý aj tmavý režim) |
| `core.js` | Registre `SUBJECTS`, `GEN`, `PICS` a pomocné funkcie pre nákresy a počítacie úlohy |
| `subjects/<id>.js` | Jeden súbor na predmet: levely, ilustrácie, generátory úloh |
| `game.js` | Logika hry |

## Pridanie predmetu

1. Vytvor `subjects/<id>.js` podľa schémy v komentári v `index.html` (`SUBJECTS.push({...})`, voliteľne `GEN.<id>` a `PICS`).
2. Pridaj riadok `<script src="subjects/<id>.js"></script>` do `index.html` medzi `core.js` a `game.js`.

Pravidlá obsahu: v kvíze je správna odpoveď vždy **prvá** v poli `o` (hra možnosti zamieša), počítacie úlohy majú čísla počítateľné z hlavy, texty po slovensky s českými termínmi v zátvorke.

S Claude Code stačí nahrať prednášky a povedať „pridaj predmet“. Postup vedú skilly v `.claude/skills/`:

| Skill | Na čo |
| --- | --- |
| `brainstorming` | Návrh najprv, až potom stavanie |
| `curriculum-planner` | Plán levelov z prednášok so schválením, potom stavba level po leveli |
| `understanding-by-design` | Čo do kapitoly patrí, odvodené od testu |
| `zone-of-proximal-development` | Kvízy, precvičovanie a opakovanie |
| `learning-to-learn` | Učebné stratégie vo výklade |
| `feynman-learning` | Vysvetľovanie vlastnými slovami v chate |
| `fact-check` | Kontrola vzorcov, čísel a správnych odpovedí |

## Licencie

Skilly `fact-check`, `zone-of-proximal-development`, `learning-to-learn`, `feynman-learning`, `understanding-by-design` a `curriculum-planner` sú upravené zo skillov projektu [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) (MIT, © 2026 THU-MAIC), pozri `.claude/skills/LICENSE-OpenMAIC`. Skill `brainstorming` pochádza z [obra/superpowers](https://github.com/obra/superpowers).
