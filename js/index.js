var conversionRate = [["g", "kg", 0.001], ["kg", "g", 1000], ["lb", "g", 453.592], ["g", "lb", 0.00220462], ["lb", "kg", 0.453592], ["kg", "lb", 2.20462], ["lb", "oz", 16], ["oz", "lb", 0.0625], ["ml", "l", 0.001], ["l", "ml", 1000], ["US tsp", "US tbsp", 0.3333], ["US tbsp", "US tsp", 3], ["US tsp", "US cup", 0.0205372], ["US cup", "US tsp", 48.6922], ["US tbsp", "US cup", 0.0616115], ["US cup", "US tbsp", 16.2307], ["US tsp", "ml", 4.92892], ["ml", "US tsp", 0.202884], ["US tbsp", "ml", 14.7868], ["ml", "US tbsp", 0.067628], ["US tsp", "l", 0.00492892], ["l", "US tsp", 202.884], ["US tbsp", "l", 0.0147868], ["l", "US tbsp", 67.628], ["Imp tsp", "Imp tbsp", 0.3333], ["Imp tbsp", "Imp tsp", 3], ["Imp tsp", "Imp cup", 0.0208333], ["Imp cup", "Imp tsp", 48], ["Imp tbsp", "Imp cup", 0.0625], ["Imp cup", "Imp tbsp", 16], ["Imp tsp", "ml", 5.91939], ["ml", "Imp tsp", 0.168936], ["Imp tbsp", "ml", 17.7582], ["ml", "Imp tbsp", 0.0563121], ["Imp tsp", "l", 0.00591939], ["l", "Imp tsp", 168.936], ["Imp tbsp", "l", 0.0177582], ["l", "Imp tbsp", 56.3121]];

var unitConvert = function unitConvert(fromNum, fromUnit, toUnit, conversionRate) {
   var result = 0;
   if (fromUnit == toUnit) {
      result = fromNum;
   } else {
      var tempArr = [];
      for (var i = 0; i < conversionRate.length; i++) {
         if (conversionRate[i][0] == fromUnit) {
            tempArr.push(conversionRate[i]);
         }
      }
      for (var _i = 0; _i < tempArr.length; _i++) {
         if (tempArr[_i][1] == toUnit) {
            result = tempArr[_i][2] * fromNum;
         }
      }
   }
   return result;
};

//Event Handling
$("#fromNum").keyup(function () {
   var fromNum = $("#fromNum").val();
   var fromUnit = $("#fromUnit").val();
   var toUnit = $("#toUnit").val();

   $("#toNum").val(unitConvert(fromNum, fromUnit, toUnit, conversionRate));
});
$("#fromUnit").change(function () {
   var fromNum = $("#fromNum").val();
   var fromUnit = $("#fromUnit").val();
   var toUnit = $("#toUnit").val();

   $("#toNum").val(unitConvert(fromNum, fromUnit, toUnit, conversionRate));
});
$("#toNum").keyup(function () {
   var toNum = $("#toNum").val();
   var fromUnit = $("#fromUnit").val();
   var toUnit = $("#toUnit").val();

   $("#fromNum").val(unitConvert(toNum, toUnit, fromUnit, conversionRate));
});
$("#toUnit").change(function () {
   var toNum = $("#toNum").val();
   var fromUnit = $("#fromUnit").val();
   var toUnit = $("#toUnit").val();

   $("#fromNum").val(unitConvert(toNum, toUnit, fromUnit, conversionRate));
});