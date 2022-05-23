// Formula pretifier for output

module.exports = function(formula) {
  formula = formula.replace(/ /g, "");
  formula = formula.replace(/·/g, " · ");
  formula = formula.replace(/×/g, " · ");
  formula = formula.replace(/\*/g, " · ");
  formula = formula.replace(/-/g, "");
  formula = formula.replace(/0/g, "₀");
  formula = formula.replace(/1/g, "₁");
  formula = formula.replace(/2/g, "₂");
  formula = formula.replace(/3/g, "₃");
  formula = formula.replace(/4/g, "₄");
  formula = formula.replace(/5/g, "₅");
  formula = formula.replace(/6/g, "₆");
  formula = formula.replace(/7/g, "₇");
  formula = formula.replace(/8/g, "₈");
  formula = formula.replace(/9/g, "₉");

  // Second round for crystal hydrates
  formula = formula.replace(/( · ₀H)/g, " · 0H");
  formula = formula.replace(/( · ₁H)/g, " · 1H");
  formula = formula.replace(/( · ₂H)/g, " · 2H");
  formula = formula.replace(/( · ₃H)/g, " · 3H");
  formula = formula.replace(/( · ₄H)/g, " · 4H");
  formula = formula.replace(/( · ₅H)/g, " · 5H");
  formula = formula.replace(/( · ₆H)/g, " · 6H");
  formula = formula.replace(/( · ₇H)/g, " · 7H");
  formula = formula.replace(/( · ₈H)/g, " · 8H");
  formula = formula.replace(/( · ₉H)/g, " · 9H");

  return formula;
};
