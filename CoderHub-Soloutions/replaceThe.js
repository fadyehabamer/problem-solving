function replaceThe(txt) {
    let myarr = txt.split(" ");
    let vowels = ["a", "e", "i", "o", "u"];
    myarr.forEach((item, index) => {
        if (item.toLowerCase() === "the") {
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