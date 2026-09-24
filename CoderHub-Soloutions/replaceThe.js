function replaceThe(txt) {
    let myarr = txt.split(" ");
    let vowels = ["a", "e", "i", "o", "u"];
    myarr.forEach((item, index) => {
        // a trailing "the" has no next word to look at, so leave it as is
        if (item.toLowerCase() === "the" && myarr[index + 1]) {
            // console.log(myarr[index + 1]);
            // get the next element
            if (vowels.includes(myarr[index + 1][0].toLowerCase())) {
                myarr[index] = "an";
            } else {
                myarr[index] = "a";
            }

        }
    });
    return(myarr.join(" "));
}
replaceThe(`I like to go to the park`)


console.log(123); 