function capSpace(txt) {
    s2 = txt.toLowerCase();
    result = "";
    for (i = 0; i < txt.length; i++) {
        if (txt[i] !== s2[i]) {
            result = result + ' ' + txt[i];
        } else {
            result = result + s2[i];
        }
    }
    result.split(' ');
    console.log (result.toLowerCase());
}

capSpace("iLikeSwimming!")


