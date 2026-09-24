function findElement92(numbers) {
    // write your code here
    // return the index of the first element that is equal to 92
    // if there is no such element, return 92
    // start from the "not found" answer so an empty array also returns 92
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 92) {
            return i;
        }
    }
    return 92;
    
}
