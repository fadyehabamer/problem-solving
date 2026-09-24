// 

function checkInput (value){
    // check type of input value if it is string or integer or double
    if (typeof value === 'string'){
        return 'string';
    }
    else if (typeof value === 'number'){
        if (value % 1 === 0){
            return 'integer';
        }
        else{
            return 'double';
        }
    }

}
console.log(checkInput(5));