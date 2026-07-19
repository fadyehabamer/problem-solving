function filpEvenOdd(array) {
	array.forEach((item,index)=>{
        array[index] % 2 === 0 ? array[index] = array[index] + 1 : array[index] = array[index] - 1;
    })
    return(array);
}
filpEvenOdd([24, 13, 14, 18 ] )