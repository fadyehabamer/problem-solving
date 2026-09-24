function wordRepeat(word, n) {
    //repeat word n times and add space in between

    //your code here
    // join() puts the space only between words (no trailing space)
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(word);
    }
    return result.join(" ");

}

console.log(wordRepeat("abc",3));