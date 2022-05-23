// Import neccesary modules
const atom = require("./atom.js");
const crystalHydrate = require("./crystalHydrate.js");
const replacer = require("./replacer.js");

// Define constants.
const number = "0123456789.";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Main calculation function.
module.exports = function(formula) {

  // Copy the original and replace all unicode symbols for calculation.
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
  return total, elmass;
};
