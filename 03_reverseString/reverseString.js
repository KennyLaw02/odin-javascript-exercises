const reverseString = function(inputString) {
    let inputArray = inputString.split('');
    inputArray.reverse();
    return inputArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
