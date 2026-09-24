function arrayOfMultiples(num, length) {
    let new_arr = [];
    for (let i = 1; i <= length;i++){
        new_arr.push(num * i)
    }
    return new_arr;
}
console.log(arrayOfMultiples(7,5));
