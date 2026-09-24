function inputType(value) {
  
    // if value is a integer (optional minus sign, digits only)
    if (/^-?\d+$/.test(value)) {
        return 'integer';
    }
    // if value is a double (digits around a single dot, e.g. 3.14, -0.5, .5)
    else if (/^-?\d*\.\d+$/.test(value)) {
        return 'double';
    }
    // if value is a string
    else {
        return 'string';
    }
  }

  console.log(inputType('gaf'));
  console.log(parseInt('madad'))