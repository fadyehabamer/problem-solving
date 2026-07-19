function leftDigit(str){
    // str.map(item=>{
    //     console.log(item);
    // // })
    let arr = str.split('').map(item=>{
        return parseInt(item)
    }).filter(item=>{
        return Boolean (item)
    })
    console.log(arr[0])
}
leftDigit("fad13")
