export default (formula) => {
	let newFormula;
	let check1 = /·/.test(formula);
	let check2 = /\*/.test(formula);
	let check3 = /×/.test(formula);

	if (check1) {
		newFormula = formula.split("·");
	} else if (check2) {
		newFormula = formula.split("*");
	} else {
		newFormula = formula.split("×");
	}

	let hydrate = newFormula[1];
	if (hydrate.charAt(0) == "H") {
		newFormula = `${newFormula[0]}H2O`;
		return newFormula;
	} else {
		newFormula = `${newFormula[0]}(H2O)${hydrate.charAt(0)}`;
		return newFormula;
	}
};
