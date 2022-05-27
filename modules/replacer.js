export default formula => {
	formula = formula.replace(/ /g, "");
	formula = formula.replace(/-/g, "");
	formula = formula.replace(/₀/g, "0");
	formula = formula.replace(/₁/g, "1");
	formula = formula.replace(/₂/g, "2");
	formula = formula.replace(/₃/g, "3");
	formula = formula.replace(/₄/g, "4");
	formula = formula.replace(/₅/g, "5");
	formula = formula.replace(/₆/g, "6");
	formula = formula.replace(/₇/g, "7");
	formula = formula.replace(/₈/g, "8");
	formula = formula.replace(/₉/g, "9");

	return formula;
};
