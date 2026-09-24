function factorial(number) {
    // negative or fractional input never reaches 0 and would recurse forever
    if (!Number.isInteger(number) || number < 0) {
        throw new RangeError('factorial is only defined for non-negative integers');
    }
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);    
}