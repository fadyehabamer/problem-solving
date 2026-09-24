function leftDigit(str){
    // str.map(item=>{
    //     console.log(item);
    // // })
    // filter(Boolean) also dropped the digit 0, so keep every parsed digit instead
    let arr = str.split('').map(item=>{
        return parseInt(item)
    }).filter(item=>{
        return !isNaN(item)
    })
    return arr[0]
}
console.log(leftDigit("fad13"))
