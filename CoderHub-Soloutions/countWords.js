function countWords(txt) {
    // split on any run of whitespace and drop empty pieces, so '' -> 0
    var words = txt.split(/\s+/).filter(Boolean);
    return(words.length); 
}
countWords('Tell me how to make your day happy')