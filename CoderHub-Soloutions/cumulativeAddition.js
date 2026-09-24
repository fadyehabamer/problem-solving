function cumulativeAddition (array){
    var sum = 0;
    // for (let a of array){
    //     // sum += array[a];
    //     // console.log(a);
    //     sum += a
    // }
    // return [sum,array.length];
    
        // the value must start on the same line as `return`, otherwise
        // automatic semicolon insertion makes the function return undefined
        return [array.reduce(function(accumulator,currentValue){
            return accumulator + currentValue;}, 0),array.length]
   
}
cumulativeAddition([1,2,4])