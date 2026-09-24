function isSpecialArray(arr) {
    let check=0
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            if(arr[i]%2==0){
                check+=1
            }
        }
        if(i%2==1){
            // -3 % 2 is -1 in JS, so compare the absolute remainder
            if(Math.abs(arr[i]%2)==1){
                check+=1
            }
        }
    }if(check == arr.length){
        return(true) 
    }else{
        return(false) 
    }
}
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])