const sumAll = function(number1, number2) {
    let finalResult = 0;
    if (number1 < 0 || number2 < 0 || typeof number1 != "number" || typeof number2 != "number") {
        return "ERROR";
    }
    if (number1 > number2) {
        let numberTransition = number1;
        number1 = number2;
        number2 = numberTransition;
    }
    for (let i = number1; i <= number2; i++) {
        finalResult += i;
    }
    return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
