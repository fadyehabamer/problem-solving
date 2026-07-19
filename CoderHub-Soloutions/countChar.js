function countChar(sentence, ch) {
    var count = 0;
    for (var i = 0; i < sentence.length; i++) {
        if (sentence.charAt(i) == ch) {
        count++;
        }
    }
    return count;
}