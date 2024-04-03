const removeFromArray = function(inputArray, ...toRemove) {
    const toRemoveArr = [...toRemove];
    return inputArray.filter((element) => {
        return !toRemoveArr.includes(element);
    });
};

// Do not edit below this line
module.exports = removeFromArray;
