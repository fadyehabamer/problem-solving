function indexMultiplier(arr) {
    let final =0;
    for(let i=0;i<arr.length;i++){
        // add to the running total (= kept only the last product)
        final += ( arr[i] * i  )
    }
    return final
}console.log(indexMultiplier([1, 2, 3, 4, 5]))