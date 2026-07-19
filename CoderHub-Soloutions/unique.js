function unique(arr) {
    // return elements which only repeated once
    let final = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            // 2 -> 0     ,    2 -> 5  X
            // 2 -> 1     ,    2 -> 5  X
            // 2 -> 2     ,    2 -> 5  X
            // 8 -> 3     ,    8 -> 3  true
            final.push(arr[i])
        }
    }
    return final;

}

console.log(unique([2, 2, 2, 8, 2, 2]))