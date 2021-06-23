var atom = require("./atom.js");

function calculateWeight(formula) {
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const number = "0123456789.";

	total = new Array();
	level = 0;
	total[0] = 0;
	i = 0;
	mass = 0;
	name = '';
	elmass = new Array();
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

function rounded(number, init_precision) {
	var rounded = Math.round(number * Math.pow(10, init_precision)) / Math.pow(10, init_precision);
	var numStr = rounded + "";
	var precis = (numStr.substring(numStr.indexOf(".") + 1, numStr.length)).length;
	if (numStr.indexOf(".") != -1) {
		var extrazeros = (init_precision - precis < 0) ? 0 : init_precision - precis;
		for (var i = 0; i < extrazeros; i++) {
			rounded = rounded + "0";
		}
	}
	return rounded;
}

module.exports = function(formula, precision) {
	if (!formula) return "Missing Formula";
	if (precision == undefined) precision = 3;
	var weight = calculateWeight(formula);

	weight = rounded(total[0], precision);
	var output = `${formula}:\n`;
	for (ele in elmass[0]) {
		eltotal = eval(elmass[0][ele] * atom[ele]);
		output += `${elmass[0][ele]} ${ele} * ${atom[ele]} = ${rounded(eltotal, precision)} (${rounded(eltotal / total[0] * 100, precision)}% of mass)\n`;
	}
	output += `Total: ${weight} g/mol`;
	return output;
};

module.exports.short = function(formula, precision) {
	if (!formula) return "Missing Formula";
	if (precision == undefined) precision = 3;
	var weight = calculateWeight(formula);

	weight = rounded(total[0], precision);
	return `${weight} g/mol`;
};
