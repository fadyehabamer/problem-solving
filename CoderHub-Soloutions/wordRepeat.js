function wordRepeat(word, n) {
    //repeat word n times and add space in between

    //your code here
    var result = "";
    for (var i = 0; i < n; i++) {
        result += word + " ";
    }
    return result;

}

console.log(wordRepeat("abc",3));