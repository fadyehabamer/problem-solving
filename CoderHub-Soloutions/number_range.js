function numbers_range(number) {
    let range = [];
    for (var i = 0; i < number+1; i++) {
        range.push(i);
    }
    //conver array to string
    return range.join(' ');
}
console.log(numbers_range(5))