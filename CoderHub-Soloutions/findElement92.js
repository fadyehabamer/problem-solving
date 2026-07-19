function findElement92(numbers) {
    // write your code here
    // return the index of the first element that is equal to 92
    // if there is no such element, return 92
    let index = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 92) {
            index = i;
            break;
        }
        else {
            index = 92;
        }
    }
    return index;
    
}
