function inputType(value) {
  
    // if value is a integer
    if (value.indexOf('.') == -1 && value.match(/^\d+$/) ) {
        return 'integer';
    }
    // if value is a double
    else if (value.indexOf('.') != -1) {
        return 'double';
    }
    // if value is a string
    else {
        return 'string';
    }
  }

  console.log(inputType('gaf'));
  console.log(parseInt('madad'))