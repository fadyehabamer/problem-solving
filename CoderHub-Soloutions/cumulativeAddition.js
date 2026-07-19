function cumulativeAddition (array){
    var sum = 0;
    // for (let a of array){
    //     // sum += array[a];
    //     // console.log(a);
    //     sum += a
    // }
    // return [sum,array.length];
    
        return 
            [array.reduce(function(accumulator,currentValue){
            return accumulator + currentValue;}),array.length]
   
}
cumulativeAddition([1,2,4])