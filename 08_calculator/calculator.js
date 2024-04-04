const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(givenArray) {
    let result = givenArray.reduce((accumulator, currVal) => {
        return accumulator + currVal;
    }, 0);
    return result;
};

const multiply = function(givenArray) {
    return givenArray.reduce((accumulator, currVal) => {
        return accumulator * currVal;
    });
};

const power = function(base, exponent) {
    return base ** exponent;
};

const factorial = function(start) {
    if (start === 0) {
        return 1;
    }
    return start * factorial(start - 1);
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
