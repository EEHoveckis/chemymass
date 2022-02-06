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
// Standard Long Mode - Get molar mass and element percentages:
const formula = "H₂SO₄";
const precision = 3;
console.log(chemymass(formula, precision));

// Standard Short Mode - Get only number:
const formula = "H₂SO₄";
const precision = 7;
console.log(chemymass.short(formula, precision));
```

## 📰 Notes
* `precision` is optional parameter which defaults to 3 if not passed to function.
* **(1.0.9 and below)** Crystal Hydrates like `Na₂SO₄·10H₂O` have to be written without multiplication sign like `Na₂SO₄(H₂O)₁₀`.
* **(1.0.10)** Crystal Hydrates work without any modifications. Formulas can be with signs "·", "×" or "*".
* This module understands both normal numbers and subscripts. You don't have to specifically convert them.
* The CAS-number version was removed for **1.0.10** due to being a bit buggy.

## 👨‍⚖️ License
[ChemyMass](https://github.com/EEHoveckis/ChemyMass) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Permissions beyond the scope of this license may be available on request.

[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)
