function cumulativeSum(arr) {
    // build a new array so the caller's array is not overwritten
    let result = []
	for(let i  = 0 ; i<arr.length ; i++){
        if(i === 0){
            result[i] = arr[i]
        }else{
            result[i] = arr[i] + result[i-1]
        }
    
    }
    return result


    //arr [0] = 1            arr = [1]
    //arr [1] = 2 + 1 = 3    arr = [1,3]
    //arr [2] = 3 + 3 = 6    arr = [1,3,6]
}
console.log(cumulativeSum([1,2,3]));