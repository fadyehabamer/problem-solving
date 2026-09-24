function squareDigits(n) {
    let snumber=n.toString();
    let out=[]
    for(let i=0;i<snumber.length;i++){
        out.push(Math.pow(snumber[i],2))
    }
    // the kata expects a number (811181), not the string "811181"
    return(Number(out.join("")))

}squareDigits(9119)