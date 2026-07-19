function reverseCase(str) {
    // write your code here
    var result = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            result.push(str.charAt(i).toLowerCase());
        } else {
            result.push(str.charAt(i).toUpperCase());
        }
    }
    return result.join('');
  }