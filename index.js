// Require / Import neccesary files and modules.
const atom = require("./modules/atom.js");
const calculateWeight = require("./modules/calculateWeight.js");
const pretify = require("./modules/pretify.js");
const round = require("./modules/round.js");

// Define constants
const usableUnits = ["g/mol", "kg/mol", "Da", "amu", "u"];

// Standard Long Mode - Get molar mass and element percentages.
module.exports = function(formula, precision, units) {
  if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  if (!units) units = "g/mol";
  if (usableUnits.indexOf(units) === -1) throw "Wrong units format passed! Molar mass can't be calculated.";
  let weight = calculateWeight(formula);
  weight = round(total[0], precision);

  prettyFormula = pretify(formula);
  var output = `${prettyFormula}:\n`;
  for (ele in elmass[0]) {
    eltotal = eval(elmass[0][ele] * atom[ele]);
    output += `${elmass[0][ele]} ${ele} · ${atom[ele]} = ${round(eltotal, precision)} (${round(eltotal / total[0] * 100, precision)}% of mass)\n`;
  }
  if (isNaN(weight)) {
    throw "Unknown element detected!\nMolar mass can't be calculated.";
  } else {
    output += `Total: ${weight} ${units}`;
  }
  return output;
};

// Standard Short Mode - Get only molar mass.
module.exports.short = function(formula, precision, units) {
  if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  if (!units) units = "g/mol";
  if (usableUnits.indexOf(units) === -1) throw "Wrong units format passed! Molar mass can't be calculated.";
  var weight = calculateWeight(formula);

  weight = round(total[0], precision);
  if (isNaN(weight)) {
    throw `Unknown element detected!\nMolar mass can't be calculated.`;
  } else {
    return `${weight} ${units}`;
  }
};

// Standard Verbal Mode - Get molar mass and element percentages from query.
// Formula API by NIH NCI/CADD Group
module.exports.verbal = async function(query, precision, units) {
  if (!query) throw "Missing query!\nPlease supply search query!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  if (!units) units = "g/mol";
  if (usableUnits.indexOf(units) === -1) throw "Wrong units format passed! Molar mass can't be calculated.";

  const response = await fetch(`https://cactus.nci.nih.gov/chemical/structure/${query}/formula`);
  if (!response.ok) throw "Couldn't find anything from the given query!\nTry again with different query!\nMolar mass can't be calculated.";
  const formula = await response.text();

  var weight = calculateWeight(formula);

  prettyFormula = pretify(formula);
  weight = round(total[0], precision);
  var output = `${query} - ${prettyFormula}:\n`;
  for (ele in elmass[0]) {
    eltotal = eval(elmass[0][ele] * atom[ele]);
    output += `${elmass[0][ele]} ${ele} · ${atom[ele]} = ${round(eltotal, precision)} (${round(eltotal / total[0] * 100, precision)}% of mass)\n`;
  }
  if (isNaN(weight)) {
    throw "Unknown element detected!\nMolar mass can't be calculated.";
  } else {
    output += `Total: ${weight} ${units}`;
  }
  return output;
};

// Short Verbal Mode - Get only molar mass from query.
// Formula API by NIH NCI/CADD Group
module.exports.verbalShort = async function(query, precision, units) {
  if (!query) throw "Missing query!\nPlease supply search query!\nMolar mass can't be calculated.";
  if (!precision) precision = 3;
  if (!units) units = "g/mol";
  if (usableUnits.indexOf(units) === -1) throw "Wrong units format passed! Molar mass can't be calculated.";

  const response = await fetch(`https://cactus.nci.nih.gov/chemical/structure/${query}/formula`);
  if (!response.ok) throw "Couldn't find anything from the given query!\nTry again with different query!\nMolar mass can't be calculated.";
  const formula = await response.text();

  var weight = calculateWeight(formula);
  var output = round(total[0], precision);
  return `${output} ${units}`;
};
