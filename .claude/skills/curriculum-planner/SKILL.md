---
name: curriculum-planner
description: "Plánovanie a stavba nového predmetu alebo novej kapitoly v Študijnom Queste z študentových prednášok: zoznam levelov so schválením pred stavaním, potom stavba level po leveli. Použi, keď študent nahrá prednášky nového predmetu alebo ďalšiu várku do existujúceho („pridaj predmet“, „nové prednášky“, „ďalšia kapitola“). Nie na úpravu jedného existujúceho levelu. Keywords: add subject, new lectures, plan levels, curriculum, course outline."
---

# Plán a stavba predmetu alebo kapitoly

Predmet je séria levelov, ktoré študent prechádza po poradí; kapitola je úsek, ktorý končí jedným testom. Jednotkou práce je stále jeden level. Tvoja úloha: ujasniť zadanie, dostať súhlas so *zoznamom* levelov a doviesť sériu od prvého levelu po posledný bez straty nite.

Súvisiace skilly: `brainstorming` (návrh najprv, povinný pred každou novou prácou), `understanding-by-design` (čo do kapitoly patrí), `zone-of-proximal-development` a `learning-to-learn` (kvízy a výklad), `fact-check` a `/deep-research` (overenie).

## Krok 1 — Ujasnenie, ale návrh najprv

Študent chce postup „návrh najprv“: predlož konkrétny návrh a nech povie, čo sa mu páči a nepáči. Otázky len tam, kde sa návrh bez odpovede urobiť nedá.

- Čo sa dá rozumne predpokladať, **povedz ako rozhodnutie, ktoré môže zmeniť**: „Výklad po slovensky, české termíny v zátvorke, skúšobný test podľa pravidiel predmetu — ak to chceš inak, povedz.“
- Typicky naozaj otvorené: dátum a pravidlá testu (počet otázok, čas, bodová tabuľka), rozsah kapitoly, či má predmet počítacie úlohy.
- Ak treba pýtať, jedno kolo = jedno volanie `AskUserQuestion`, najviac tri veci. Každé ďalšie kolo začni tým, čo si si vzal z predchádzajúceho. Najviac dve-tri kolá.
- Otázka sa kladie nástrojom, nie v texte správy.

## Krok 2 — Overenie pred súhlasom

Ešte pred návrhom zoznamu spusti `/deep-research` na vzorce, definície a číselné výsledky z nových materiálov. Študentove materiály majú prednosť pri značení a rozsahu; výskum ich kontroluje a dopĺňa. Plán, ktorý študent schváli, musíš potom postaviť — nech stojí na overených faktoch.

## Krok 3 — Súhlas so zoznamom

**Nestavaj nič, kým študent neschváli celý zoznam.** V chate ukáž:

- názov predmetu/kapitoly, `id` predmetu a počet levelov;
- **každý level na jeden riadok**: názov a jednou vetou, čo po ňom študent vie;
- kapitolu a jej `exam` (n, minúty, body), ak je známy;
- čo si rozhodol za neho a s čím môže nesúhlasiť: poradie, obtiažnosť, čo si vynechal.

Potom `AskUserQuestion`: súhlasím / zmeniť počet / zmeniť poradie / pridať alebo vyhodiť level. Ticho ani nejasná odpoveď nie je súhlas. Pri zmene ukáž upravený zoznam a pýtaj sa znova.

## Návrh série

- **Nadväznosť**: každý level začína tam, kde skončil predošlý. Čo sa predpokladá, muselo byť skôr vysvetlené.
- **Samostatné levely**: level dáva zmysel aj sám — vlastný úvod, pointa, vzorce, kvíz.
- **Opakovanie**: od druhého levelu otvor výklad tým, že predošlú myšlienku *použiješ* na novú úlohu, nie že ju zopakuješ.
- **Krivka obtiažnosti**: rastie plynulo. Ak jeden level nesie celú ťažkú časť, rozdeľ ho a povedz to v kroku 3.
- **Názvy hovoria, čo level robí**: „Gaussova veta: náboj vo vnútri určí tok“ namiesto „Elektrostatika II“.
- **Kapitoly nenavrhuj dopredu.** Vzniknú, až keď prídu ďalšie prednášky.

## Krok 4 — Stavba

Po súhlase:

1. Vytvor súbor predmetu podľa schémy v komentári na začiatku `index.html` (`subjects/<id>.js` po rozdelení hry), s `chapters` a prázdnym `levels`.
2. Pre každý level v poradí: `lesson` (s obrázkami `fig`/`pic`, kde pomôžu; pri silách riešenie v štyroch krokoch), `theory`, `traps`, `examples`, `formulas`, `quiz` (správna odpoveď vždy prvá v `o`), voliteľne `GEN` s číslami počítateľnými z hlavy.
3. Pred ďalším levelom si prečítaj, čo naozaj vzniklo v predošlých, nie čo si plánoval.
4. Po každom leveli napíš do chatu jeden krátky odsek: čo level pokrýva a odkiaľ začína ďalší. Bez detailov nástrojov a bez opakovania celého plánu.
5. Na záver `boss` a `fact-check` celého predmetu, potom skontroluj hru v prehliadači.

Chyba v jednom leveli nezastaví ostatné; zapíš ju do zoznamu na prepracovanie.

## Koniec

Na záver: čo vzniklo (levely po poradí), ako to otvoriť, a zoznam toho, čo zlyhalo alebo by si spravil inak — alebo veta, že nič také nie je.

---
Upravené zo skillu `curriculum-planner` projektu [OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) (MIT, © 2026 THU-MAIC), pozri `../LICENSE-OpenMAIC`.
