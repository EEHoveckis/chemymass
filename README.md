<h1 align="center">ChemyMass</h1>
<p align="center">Simple Molar Mass Calculator</p>
<p align="center">
<a href="https://nodei.co/npm/chemymass/"><img src="https://nodei.co/npm/chemymass.png"></a>
</p>

## 📝 Description
ChemyMass - Simple molar mass calculator, calculates molar mass of chemical.

## 🔧 Setup
ChemyMass is easy to setup, just do:
```
npm i chemymass
```

## 📕 Usage
To require ChemyMass in your program do:
```
const chemyMass = require('ChemyMass');
```

Long Mode - Get molar mass and element percentages:
```
var formula = 'H2SO4';
var precision = 3;
console.log(chemyMass(formula, precision));
```

Short Mode - Get only number:
```
var formula = 'H2SO4';
var precision = 7;
console.log(chemyMass.short(formula, precision));
```

Note: `Precision` is optional parameter which defaults to 3 if not passed to function.

## 👨‍⚖️ License
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

[ChemyMass](https://github.com/EEHoveckis/ChemyMass) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/). Permissions beyond the scope of this license may be available on request.
