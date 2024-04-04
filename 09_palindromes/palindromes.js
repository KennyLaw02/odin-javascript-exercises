function isAlphanumeric(letter) {
    return /^[a-zA-Z0-9]+$/.test(letter);
}
const palindromes = function(givenString) {
    // Remove uppercases
    givenString = givenString.toLowerCase();

    let stringArray = givenString.split("");
    // Filter out punctuation
    stringArray = stringArray.filter((letter) => {
       return isAlphanumeric(letter) 
    })
    let reverseArray = [...stringArray];
    reverseArray.reverse();
    // Loop through both arrays. If we hit ANY mismatch
    // immediately return false
    for (let i = 0; i < stringArray.length; i++) {
        if (reverseArray[i] !== stringArray[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
