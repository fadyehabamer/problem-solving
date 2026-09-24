let findNemo = (sentence) => {
    let index = sentence.split(" ").indexOf("Nemo");
    if (index === -1) {
        return "I can't find Nemo :(";
    }
    return "I found Nemo at " + (index + 1) + "!";
}
console.log(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"))
