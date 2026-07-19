function sumTwoSmallestNums(arr) {
	let newarr = arr.sort((a,b)=> {return a-b;})
	return newarr[0]+newarr[1]
}