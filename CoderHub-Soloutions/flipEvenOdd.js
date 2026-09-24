function filpEvenOdd(array) {
    // map() returns a new array instead of overwriting the caller's array
	return array.map((item) => item % 2 === 0 ? item + 1 : item - 1);
}
filpEvenOdd([24, 13, 14, 18 ] )