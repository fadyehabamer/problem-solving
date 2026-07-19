function hasSpace(str) {
    let arr = str.split("");
    arr.forEach(function (item, index) {
        if (item === " ") {
            arr[index] = "#";
        }
    })
    return (arr.join(""));
    // console.log(arr.join(""));

}

hasSpace("I love challenges")