// Require / Import neccesary files and modules.
import fetch from "node-fetch";

import atom from "./modules/atom.js";
import calculateWeight from "./modules/calculateWeight.js";
import pretify from "./modules/pretify.js";
import round from "./modules/round.js";

// Define constants
const usableUnits = ["g/mol", "kg/mol", "Da", "amu", "u", ""];

// Standard Long Mode - Get molar mass and element percentages.
export default (formula, precision, units) => {
	if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
	if (!precision) precision = 3;
	if (!units) units = "g/mol";
	if (!usableUnits.includes(units)) throw "Wrong units format passed! Molar mass can't be calculated.";
	let result = calculateWeight(formula);
	let weight = round(result.total, precision);
	let elmass = result.elmass;

	let prettyFormula = pretify(formula);
	let output = `${prettyFormula}:\n`;
	for (let ele in elmass[0]) {
		let eltotal = eval(elmass[0][ele] * atom[ele]);
		output += `${elmass[0][ele]} ${ele} · ${atom[ele]} = ${round(eltotal, precision)} (${round(eltotal / weight * 100, precision)}% of mass)\n`;
	}
	if (isNaN(weight)) {
		throw "Unknown element detected!\nMolar mass can't be calculated.";
	} else {
		output += `Total: ${weight} ${units}`;
	}
	return output;
};

// Standard Short Mode - Get only molar mass.
export function short(formula, precision, units) {
	if (!formula) throw "Missing formula!\nPlease supply formula!\nMolar mass can't be calculated.";
	if (!precision) precision = 3;
	if (!units) units = "g/mol";
	if (!usableUnits.includes(units)) throw "Wrong units format passed! Molar mass can't be calculated.";
	let result = calculateWeight(formula);
	let weight = round(result.total, precision);

	if (isNaN(weight)) {
		throw `Unknown element detected!\nMolar mass can't be calculated.`;
	} else {
		return `${weight} ${units}`;
	}
}

// Standard Verbal Mode - Get molar mass and element percentages from query.
// Formula API by NIH NCI/CADD Group
export async function verbal(query, precision, units) {
	if (!query) throw "Missing query!\nPlease supply search query!\nMolar mass can't be calculated.";
	if (!precision) precision = 3;
	if (!units) units = "g/mol";
	if (!usableUnits.includes(units)) throw "Wrong units format passed! Molar mass can't be calculated.";

	const response = await fetch(`https://cactus.nci.nih.gov/chemical/structure/${query}/formula`);
	if (!response.ok) throw "Couldn't find anything from the given query!\nTry again with different query!\nMolar mass can't be calculated.";
	const formula = await response.text();

	let result = calculateWeight(formula);
	let weight = round(result.total, precision);
	let elmass = result.elmass;

	let prettyFormula = pretify(formula);
	let output = `${query} - ${prettyFormula}:\n`;
	for (let ele in elmass[0]) {
		let eltotal = eval(elmass[0][ele] * atom[ele]);
		output += `${elmass[0][ele]} ${ele} · ${atom[ele]} = ${round(eltotal, precision)} (${round(eltotal / weight * 100, precision)}% of mass)\n`;
	}
	if (isNaN(weight)) {
		throw "Unknown element detected!\nMolar mass can't be calculated.";
	} else {
		output += `Total: ${weight} ${units}`;
	}
	return output;
}

// Short Verbal Mode - Get only molar mass from query.
// Formula API by NIH NCI/CADD Group
export async function verbalShort(query, precision, units) {
	if (!query) throw "Missing query!\nPlease supply search query!\nMolar mass can't be calculated.";
	if (!precision) precision = 3;
	if (!units) units = "g/mol";
	if (!usableUnits.includes(units)) throw "Wrong units format passed! Molar mass can't be calculated.";

	const response = await fetch(`https://cactus.nci.nih.gov/chemical/structure/${query}/formula`);
	if (!response.ok) throw "Couldn't find anything from the given query!\nTry again with different query!\nMolar mass can't be calculated.";
	const formula = await response.text();

	let result = calculateWeight(formula);
	let weight = result.total;
	const output = round(weight, precision);
	return `${output} ${units}`;
}
