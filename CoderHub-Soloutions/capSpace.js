function capSpace(txt) {
    let lower = txt.toLowerCase();
    let result = "";
    for (let i = 0; i < txt.length; i++) {
        // a capital letter starts a new word (but not at the very start)
        if (txt[i] !== lower[i] && i > 0) {
            result = result + ' ' + lower[i];
        } else {
            result = result + lower[i];
        }
    }
    return result;
}

console.log(capSpace("iLikeSwimming!"))
