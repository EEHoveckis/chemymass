<h1 align="center">chemymass</h1>
<p align="center">Simple Molar Mass Calculator</p>
<p align="center">

## 📝 Description
chemymass - Simple molar mass calculator. Calculates molar mass for any valid formula.


## 🔧 Setup
chemymass is easy to setup, just do:
```
npm i chemymass
```

## 📕 Usage
To require chemymass in your program do:
```js
const chemymass = require("chemymass");
```
Ways to call chemymass from your program:

```js
// Standard Long Mode - Get molar mass and element percentages.
const formula = "H₂SO₄";
const precision = 3;
console.log(chemymass(formula, precision));

// Standard Short Mode - Get only molar mass.
const formula = "CuSO₄·5H₂O";
const precision = 7;
console.log(chemymass.short(formula, precision));

// Standard Verbal Mode - Get molar mass and element percentages from query.
const query = "Sugar";
const precision = 7;
chemymass.verbal(query, precision)
  .then(output => console.log(output));

// Short Verbal Mode - Get only molar mass from query.
const query = "58-08-2";
const precision = 7;
chemymass.verbalShort(query, precision)
  .then(output => console.log(output));
```

## 📰 Notes
* **(1.0.10^)** Crystal Hydrates work without any modifications. Formulas can be with signs `·`, `×` or `*`.

* This module understands both normal numbers and subscripts. You don't have to specifically convert them.

* Verbal mode supported query types: `Plain Text Name`, `CAS number`, `SMILES`, `IUPAC`, `FICTS identifier`, `Cactvs HASHISY`, `uuuuu identifier`.

* `precision` is optional parameter which defaults to 3 if not passed to function.

* Verbal mode is made possible by [NIH NCI/CADD Group](https://cactus.nci.nih.gov/)! Without their [API](https://cactus.nci.nih.gov/chemical/structure), verbal mode wouldn't be a thing.

## 👨‍⚖️ License
[ChemyMass](https://github.com/EEHoveckis/ChemyMass) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).\
Permissions beyond the scope of this license may be available on request.\
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)
