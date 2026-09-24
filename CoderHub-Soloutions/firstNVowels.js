function firstNVowels(phrase, n) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = '';
    for (var i = 0; i < phrase.length; i++) {
        if (vowels.includes(phrase[i])) {
            result += phrase[i];
        }
    }

    if (result.length < n) {
        return 'invalid';
    }
    return result.slice(0, n);
}
console.log(firstNVowels('Sharpening skills', 3));
