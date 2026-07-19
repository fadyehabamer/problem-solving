function subArrays(arr1, arr2) {
    let result = [];
    if (arr1.length == arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            result.push(arr2[i] - arr1[i]);
        }

        console.log(result)
    }

}
subArrays([4 , 2 , 88],[2 , 4 , 88]	)