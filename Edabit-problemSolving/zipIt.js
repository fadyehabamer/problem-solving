function zipIt(women, men) {
    let arr = [];
    if (women.length == men.length) {
        // pair the i-th woman with the i-th man
        for (let i = 0; i < women.length; i++) {
            arr.push([women[i], men[i]])
        }
    }
    else{
        return "sizes don't match"
    }
    return arr
}
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]))