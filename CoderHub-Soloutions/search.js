function search(word, character) {
	// return the index of the first occurrence of character in word
    // if there is no occurrence of character in word, return -1
    // if there is more than one occurrence of character in word, return the index of the first occurrence
    // if there is no occurrence of character in word, return -1

    var index = -1;
    for (var i = 0; i < word.length; i++) {
        if (word[i] === character) {
            index = i;
            break;
        }
    }
    return index;

}