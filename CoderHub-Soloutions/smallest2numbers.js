function sumTwoSmallestNums(arr) {
	// sort a copy: sort() works in place and would reorder the caller's array
	let newarr = [...arr].sort((a,b)=> {return a-b;})
	return newarr[0]+newarr[1]
}