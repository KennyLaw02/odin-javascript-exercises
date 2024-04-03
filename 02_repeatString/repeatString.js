const repeatString = function(stringGiven, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    }
    let result = "";
    for (let i = 0; i < repetitions; i++) {
        result += stringGiven;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
