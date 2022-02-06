//Require neccesary files and modules.
const atom = require("./modules/atom.js");
const pretify = require("./modules/pretify.js");
const replacer = require("./modules/replacer.js");
const crystalHydrate = require("./modules/crystalHydrate.js");

// Define constants.
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789.";
let prettyFormula;

// Main calculation function.
function calculateWeight(formula) {

  // Copy the original and replace all unicode symbols for calculation.
  let printFormula = formula;
  prettyFormula = pretify(printFormula);
  formula = replacer(formula);

  // Test if formula is crystal hydrate.
  function countRegex(formula) {
    const regexTest = /[·*×]/g
    return ((formula || '').match(regexTest) || []).length;
  };

  regexCount = countRegex(formula);
  if (regexCount == 0) { // No crystal hydrate symbols found. Proceed as usual.
  } else if (regexCount == 1) { // Found crystal hydrate symbol. Convert to calculatable form.
    formula = crystalHydrate(formula);
  } else { // Found too many crystal hydrate symbols. Invalid formula.
    throw "Invalid formula!\nMolar mass can't be calculated!";
  }

  // Calculate molar mass.
  total = new Array();
  elmass = new Array();
  level = total[0] = i = mass = 0;
  name = '';
  for (i = 0; i < elmass.length; i++) {
    elmass[i] = null;
  }
  elmass[0] = new Array();
  for (i = 0; i < elmass[0].length; i++) {
    elmass[0][i] = 0;
  }
  i = 0;
  while (formula.charAt(i) != "") {
    if ((uppercase + lowercase + number + "()").indexOf(formula.charAt(i)) == -1) i++;
    while (formula.charAt(i) == "(") {
      level++;
      i++;
      total[level] = 0;
      elmass[level] = new Array();
      for (h = 0; i < elmass[level].length; h++) {
        elmass[level][i] = 0;
      }
    }
    if (formula.charAt(i) == ")") {
      mass = total[level];
      name = '';
      level--;
    } else if (uppercase.indexOf(formula.charAt(i)) != -1) {
      name = formula.charAt(i);
      while (lowercase.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "") name += formula.charAt(++i);
      mass = atom[name];
    }
    var amount = "";
    while (number.indexOf(formula.charAt(i + 1)) != -1 && formula.charAt(i + 1) != "") amount += formula.charAt(++i);
    if (amount == "") amount = "1";
    total[level] += mass * parseFloat(amount);
    if (name == "") {
      for (ele in elmass[level + 1]) {
        totalnumber = parseFloat(elmass[level + 1][ele]) * amount
        if (elmass[level][ele] == null) {
          elmass[level][ele] = totalnumber;
        } else {
          elmass[level][ele] = totalnumber + parseFloat(elmass[level][ele]);
        }
      }
    } else {
      if (elmass[level][name] == null) {
        elmass[level][name] = amount;
      } else {
        elmass[level][name] = parseFloat(elmass[level][name]) + parseFloat(amount);
      }
    }
    i++;
  }
}

function rounded(number, precision) {
  var rounded = Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
  var numStr = rounded + "";
  var precis = (numStr.substring(numStr.indexOf(".") + 1, numStr.length)).length;
  if (numStr.indexOf(".") != -1) {
    var extrazeros = (precision - precis < 0) ? 0 : precision - precis;
    for (var i = 0; i < extrazeros; i++) {
      rounded = rounded + "0";
    }
  }
  return rounded;
}

// Standard Long Mode - Get molar mass and element percentages
module.exports = function(formula, precision) {
  if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  var weight = calculateWeight(formula);

  weight = rounded(total[0], precision);
  var output = `${prettyFormula}:\n`;
  for (ele in elmass[0]) {
    eltotal = eval(elmass[0][ele] * atom[ele]);
    output += `${elmass[0][ele]} ${ele} * ${atom[ele]} = ${rounded(eltotal, precision)} (${rounded(eltotal / total[0] * 100, precision)}% of mass)\n`;
  }
  if (isNaN(weight)) {
    throw "Unknown element detected!\nMolar mass can't be calculated.";
  } else {
    output += `Total: ${weight} g/mol`;
  }
  return output;
};

// Standard Short Mode - Get only number
module.exports.short = function(formula, precision) {
  if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  var weight = calculateWeight(formula);

  weight = rounded(total[0], precision);
  if (isNaN(weight)) {
    throw `Unknown element detected!\nMolar mass can't be calculated.`;
  } else {
    return `${weight} g/mol`;
  }
};
