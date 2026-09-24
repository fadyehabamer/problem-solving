function subArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return null;
    }
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr2[i] - arr1[i]);
    }
    return result;
}
console.log(subArrays([4 , 2 , 88],[2 , 4 , 88]));
