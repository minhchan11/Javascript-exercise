var number1 = parseFloat(prompt("What is your height in meter?"));
var number2 = parseInt(prompt("What is your weight in kilogram?"));


var heights = Math.pow(number1, 2);
var weight = number2;


var BMI = function(weight,heights) {
return weight/heights;
};

alert(BMI(weight,heights));



// Shruti code
// var inputtedHeight = parseFloat(prompt("Enter your Height:"));
// var inputtedWeight = parseFloat(prompt("Enter your weight:"));
//
// var calculatedBMI = inputtedWeight/Math.pow(inputtedHeight,2);
// alert(calculatedBMI)
