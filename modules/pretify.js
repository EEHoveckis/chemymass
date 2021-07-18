module.exports = function(formula) {
	formula = formula.replace(/ /g, "");
	formula = formula.replace(/-/g, "");
	formula = formula.replace(/0/g, "₀");
	formula = formula.replace(/1/g, "1₁");
	formula = formula.replace(/2/g, "₂");
	formula = formula.replace(/3/g, "₃");
	formula = formula.replace(/4/g, "₄");
	formula = formula.replace(/5/g, "₅");
	formula = formula.replace(/6/g, "₆");
	formula = formula.replace(/7/g, "₇");
	formula = formula.replace(/8/g, "₈");
	formula = formula.replace(/9/g, "₉");

	return formula;
};
