
function longestZero(str) {
    //  "00100010000"
    var longest = 0; // 2 3 
    var current = 0; // 1 2 0 1 2 3 0 1 2 3 4 

    for (var i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            current++;
        } else {
            if (current > longest) {
                longest = current;
            }
            current = 0;
        }
    }
    if (current > longest) {
        longest = current;
    }

    var final = ''; // let is block scope so we need to declare final outside the loop as var
    for (let i = 0; i < longest; i++) {
        final += "0";
    }

    return final;
}

console.log(longestZero("00100010000"));
