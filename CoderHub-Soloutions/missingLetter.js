function missingLetter(txt) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var txtArray = txt.split("");
    var missingLetter = "";
    var index = 0;
    for (var i = 0; i < txtArray.length - 1; i++) {
        if (alphabet.indexOf(txtArray[i]) !== -1) {
            index = alphabet.indexOf(txtArray[i]);
            if (alphabet[index + 1] !== txtArray[i + 1]) {
                missingLetter = alphabet[index + 1];
                break;
            } else {
                missingLetter = "No Missing Letter";
            }
        }

    }
    return missingLetter;
}

console.log(missingLetter("ab")); 