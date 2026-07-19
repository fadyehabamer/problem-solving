function wordLength(arr) {
    let final = []
    for (let i = 0; i < arr.length; i++) {
        final.push(arr[i].length);
    }
    return final;
}

console.log(wordLength(["wait","go" , "run"]))