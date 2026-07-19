function tribonacci(num) {
    // write your code here
    // Write a function that receives a number of type integer and returns the numbers in Tribonacci Sequence with the number of that number, Tribonacci Sequence is similar to Fibonacci Sequence but adds the last 3 numbers


    let tribonacciSequence = [0, 0, 1];
    let tribonacciSequenceLength = tribonacciSequence.length;

    if (num === 0) {
        return [];
    }

    if (num === 1) {
        return [0];
    }   

    if (num === 2) {
        return [0, 0];
    }

    if (num === 3) {
        return [0, 0, 1];
    }

    while (tribonacciSequenceLength < num) {
        let lastThreeNumbers = tribonacciSequence.slice(-3);
        let sumOfLastThreeNumbers = lastThreeNumbers.reduce((a, b) => a + b, 0);
        tribonacciSequence.push(sumOfLastThreeNumbers);
        tribonacciSequenceLength++;
    }

    return tribonacciSequence;

    

}
