function primeNums(array) {
    array = array.filter((number) => {
        // 0, 1 and negatives are not prime (the loop below never runs for them)
        if (number < 2) return false;
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true; 
    });
    console.log(array);
    console.log(array.length);
    return array;

}


// console.log(numArray);
primeNums([12, 4, 44, 89])
