const convertToCelsius = function(fVal) {
    let celsiusVal = ((fVal - 32) * 5) / 9;
    return parseFloat(celsiusVal.toFixed(1));
};

const convertToFahrenheit = function(celsiusVal) {
    let fVal = (celsiusVal * 9) / 5 + 32;
    return parseFloat(fVal.toFixed(1));
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
