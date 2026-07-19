function firstNVowels(phrase, n) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var result = '';
    var phraseArray = phrase.split('');
    // console.log(phraseArray)
    for (var i = 0; i < phraseArray.length; i++) {
        if (vowels.includes(phraseArray[i])) {
            result += phraseArray[i];
        }
    }
    var resArray = result.split('');

    if (resArray.length < n) {
        console.log('invalid');
    } else if (resArray.length > n) {
        console.log(resArray.slice(0, n).join(''));
    }
    else {
        console.log(result);
    }
}
firstNVowels('Sharpening skills', 3);