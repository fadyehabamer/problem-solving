function stringCheck(value) {
    // check if values in array are equal
    var check = true;
    for (var i = 0; i < value.length; i++) {
        if (value[i] !== value[0]) {
            check = false;
        }
    }   
    return check; 
  }