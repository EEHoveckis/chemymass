module.exports = function(number, precision) {
  var rounded = Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
  var numStr = rounded + "";
  var precis = (numStr.substring(numStr.indexOf(".") + 1, numStr.length)).length;
  if (numStr.indexOf(".") != -1) {
    var extrazeros = (precision - precis < 0) ? 0 : precision - precis;
    for (var i = 0; i < extrazeros; i++) {
      rounded = rounded + "0";
    }
  }
  return rounded;
};
