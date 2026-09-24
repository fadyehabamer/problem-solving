function deleteElementInArray(arr, index) {
    // filter() returns a copy; splice() would also delete from the caller's array
    return arr.filter((item, i) => i !== index)
}

deleteElementInArray([2 , 4 , 88],2    )