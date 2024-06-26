const sumAll = function(num1, num2) {
    // Check negatives and check non-number args
    if (
        num1 < 0 ||
        !Number.isInteger(num1) ||
        num2 < 0 ||
        !Number.isInteger(num2)
    ) {
        return "ERROR";
    }
    let start = num1 < num2 ? num1 : num2;
    let end = num1 > num2 ? num1 : num2;

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
