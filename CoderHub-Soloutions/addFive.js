function addFive(arr) {
    arr.map((item, index) => {
        arr[index] = item + 5;
    })
    return (arr);
}
addFive(["hi", "G", "welcome"])