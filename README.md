<h1 align="center">🧪 chemymass</h1>
<p align="center">Simple Molar Mass Calculator</p>

## 📝 Description
chemymass - Simple molar mass calculator. Calculates molar mass for any valid formula.


## 🔧 Installation
chemymass is easy to install, just do:
```sh
npm i chemymass
```

## 📕 Usage
chemymass from v2 is an ESM-only module - you are not able to import it with `require()`.

If you cannot switch to ESM, please use v1 which remains compatible with CommonJS.
```sh
npm i chemymass@1
```

Ways to call the module from your program:

```js
// Standard Long Mode - Get molar mass and element percentages.
import chemymass from "chemymass";

const formula = "H₂SO₄";
const precision = 3;
const units = "g/mol";
console.log(chemymass(formula, precision, units));

/* Output:
H₂SO₄:
2 H · 1.007825 = 2.016 (2.055% of mass)
1 S · 32.066 = 32.066 (32.694% of mass)
4 O · 15.9994 = 63.998 (65.251% of mass)
Total: 98.079 g/mol
*/
```
```js
// Standard Short Mode - Get only molar mass.
import { short } from "chemymass";

const formula = "CuSO₄ · 5H₂O";
const precision = 7;
const units = "amu";
console.log(chemymass.short(formula, precision, units));

/* Output:
249.6848500 amu
*/
```
```js
// Standard Verbal Mode - Get molar mass and element percentages from query.
import { verbal } from "chemymass";

const query = "Sugar";
const precision = 7;
const units = "Da";
chemymass.verbal(query, precision, units)
  .then(output => console.log(output));

/* Output:
Sugar - C₁₂H₂₂O₁₁:
12 C · 12.011 = 144.1320000 (42.1072251% of mass)
22 H · 1.007825 = 22.1721500 (6.4774492% of mass)
11 O · 15.9994 = 175.9934000 (51.4153256% of mass)
Total: 342.2975500 Da
*/
```
```js
// Short Verbal Mode - Get only molar mass from query.
import { verbalShort } from "chemymass";

const query = "58-08-2";
const precision = 7;
const units = "u";
chemymass.verbalShort(query, precision, units)
  .then(output => console.log(output));

/* Output:
194.1918500 u
*/
```

## 📰 Notes
* Crystal Hydrates work without any modifications. Formulas can be with signs `·`, `×` or `*`.

* Verbal mode supported query types: `Plain Text Name`, `CAS number`, `SMILES`, `IUPAC`, `FICTS identifier`, `Cactvs HASHISY`, `uuuuu identifier`.

* `units` is optional parameter which defaults to `g/mol`. Available options are `g/mol` (Grams per mole); `kg/mol` (Kilograms per mole); `Da` (Daltons); `amu` (Atomic mass unit); `u` (Same as amu) or `""` (No units - just number).

* `precision` is optional parameter which defaults to 3 if not passed to function.

* This module understands both normal numbers and subscripts. You don't have to specifically convert them.

* Verbal mode is made possible by [NIH NCI/CADD Group](https://cactus.nci.nih.gov/)! Without their [API](https://cactus.nci.nih.gov/chemical/structure), verbal mode probably wouldn't be a thing.

## 👨‍⚖️ License
[chemymass](https://github.com/EEHoveckis/chemymass) by [EEHoveckis](https://github.com/EEHoveckis) is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).\
Permissions beyond the scope of this license may be available on request.\
[![Creative Commons Attribution 4.0 International License](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)
