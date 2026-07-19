function hashtagIt(array) {
    // write your code here 
    // add hashtag at the beginning of each element in the array
    // return the new array
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push("#" + array[i]);
    }
    //  return array as a string
    return newArray.join(" ");


  } 