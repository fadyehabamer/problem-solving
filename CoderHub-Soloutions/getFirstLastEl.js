function getFirstLastEl(numbers) {
    // write your code here
    let newArr = [];
    let first = numbers[0];
    let last = numbers[numbers.length - 1];

    if (numbers.length === 1) {
        newArr.push(first);
    }
    else {

        newArr.push(first);
        newArr.push(last);
    }
    return newArr;
}
console.log(getFirstLastEl([2]));