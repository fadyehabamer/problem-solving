function primeNums(array) {
    array = array.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true; 
    });
    console.log(array);
    console.log(array.length);


}


// console.log(numArray);
primeNums([12, 4, 44, 89])
