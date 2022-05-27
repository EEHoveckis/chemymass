// Import neccesary modules
import atom from "./atom.js";

import crystalHydrate from "./crystalHydrate.js";
import replacer from "./replacer.js";

// Define constants.
const number = "0123456789.";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Main calculation function.
export default (formula) => {

	// Copy the original and replace all unicode symbols for calculation.
	formula = replacer(formula);

	// Test if formula is crystal hydrate.
	function countRegex(formula) {
		const regexTest = /[·*×]/g;
		return ((formula || '').match(regexTest) || []).length;
	};

	const regexCount = countRegex(formula);
	if (regexCount == 0) { // No crystal hydrate symbols found. Proceed as usual.
	} else if (regexCount == 1) { // Found crystal hydrate symbol. Convert to calculatable form.
		formula = crystalHydrate(formula);
	} else { // Found too many crystal hydrate symbols. Invalid formula.
		throw "Invalid formula!\nMolar mass can't be calculated!";
	}

	// Calculate molar mass.
	let total = new Array();
	total[0] = 0;
	let elmass = new Array();
	let level = 0,
		i = 0,
		mass = 0;
	let name = '';
	for (i = 0; i < elmass.length; i++) {
		elmass[i] = null;
	}
	elmass[0] = new Array();
	for (i = 0; i < elmass[0].length; i++) {
		elmass[0][i] = 0;
	}
	i = 0;
	while (formula.charAt(i) != "") {
		if (!`${uppercase + lowercase + number}()`.includes(formula.charAt(i))) i++;
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
		} else if (uppercase.includes(formula.charAt(i))) {
			name = formula.charAt(i);
			while (lowercase.includes(formula.charAt(i + 1)) && formula.charAt(i + 1) != "") name += formula.charAt(++i);
			mass = atom[name];
		}
		let amount = "";
		while (number.includes(formula.charAt(i + 1)) && formula.charAt(i + 1) != "") amount += formula.charAt(++i);
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
	return {
		total: total,
		elmass: elmass
	};
};
