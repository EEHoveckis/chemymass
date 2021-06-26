<h1 align="center">ChemyMass</h1>
<p align="center">Simple Molar Mass Calculator</p>
<p align="center">
<a href="https://nodei.co/npm/chemymass/"><img src="https://nodei.co/npm/chemymass.png"></a>
</p>

## 📝 Description
ChemyMass - Simple molar mass calculator. Calculates molar mass for any valid formula.

## 🔧 Setup
ChemyMass is easy to setup, just do:
```
npm i chemymass
```

## 📕 Usage
To require ChemyMass in your program do:
```js
const chemyMass = require('ChemyMass');
```
Ways to call module from your program:

```js
//Long Mode - Get molar mass and element percentages:
var formula = 'H₂SO₄';
var precision = 3;
console.log(chemyMass(formula, precision));

//Short Mode - Get only number:
var formula = 'H₂SO₄';
var precision = 7;
console.log(chemyMass.short(formula, precision));
```

## 📰 Notes
* `Precision` is optional parameter which defaults to 3 if not passed to function.
* Crystal Hydrates like `CaSC₄·2H₂O` or `Na₂SO₄·10H₂O` have to be written without multiplication sign like this: `CaSC₄(H₂O)₂` and `Na₂SO₄(H₂O)₁₀`.
* This module understands both normal numbers and subscripts. You don't have to specifically convert them.

## 👨‍⚖️ License
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

[ChemyMass](https://github.com/EEHoveckis/ChemyMass) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Permissions beyond the scope of this license may be available on request.
