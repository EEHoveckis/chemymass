module.exports = function(printFormula) {
  printFormula = printFormula.replace(/ /g, "");
  printFormula = printFormula.replace(/×/g, " · ");
  printFormula = printFormula.replace(/\*/g, " · ");
  printFormula = printFormula.replace(/-/g, "");
  printFormula = printFormula.replace(/0/g, "₀");
  printFormula = printFormula.replace(/1/g, "₁");
  printFormula = printFormula.replace(/2/g, "₂");
  printFormula = printFormula.replace(/3/g, "₃");
  printFormula = printFormula.replace(/4/g, "₄");
  printFormula = printFormula.replace(/5/g, "₅");
  printFormula = printFormula.replace(/6/g, "₆");
  printFormula = printFormula.replace(/7/g, "₇");
  printFormula = printFormula.replace(/8/g, "₈");
  printFormula = printFormula.replace(/9/g, "₉");

  return printFormula;
};
