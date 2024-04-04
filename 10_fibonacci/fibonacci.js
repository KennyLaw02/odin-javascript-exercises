const fibonacci = function(n) {
    if (!Number.isInteger(n)) {
        n = parseInt(n);
    }
    if (n < 0) {
        return "OOPS";
    }
    // 0th fib should just return 0
    if (n === 0) {
        return 0;
    }
    let fibSequence = [1, 1];
    for (let i = 0; i < n - 2; i++) {
        fibSequence.push(
            fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2],
        );
    }
    return fibSequence[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
