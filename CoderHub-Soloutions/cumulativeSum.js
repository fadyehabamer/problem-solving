function cumulativeSum(arr) {
	for(let i  = 0 ; i<arr.length ; i++){
        if(i === 0){
            arr[i] = arr[i]
        }else{
            arr[i] = arr[i] + arr[i-1]
        }
    
    }
    return arr


    //arr [0] = 1            arr = [1]
    //arr [1] = 2 + 1 = 3    arr = [1,3]
    //arr [2] = 3 + 3 = 6    arr = [1,3,6]
}
console.log(cumulativeSum([1,2,3]));