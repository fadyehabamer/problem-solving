function rootCheck(sqr, num) {
    // write your code here
    var sqrRoot = Math.sqrt(sqr);
    // Math.pow(n, 1/root);
    //  8 4 0
    //  36 6 0
    if (sqrRoot == num) {
        return sqrRoot;
    }else {
        return 0;
    }

}

console.log(rootCheck(36, 6));