function bmi (){

    var jhon = {
    fname:"john micheal",

    mass:40,
    height:170,
    calcBmi:function(){

    return this.mass / Math.pow(this.height,2)

    }
    }
    var mike = {
    fname:"mike micheal",
    mass:40,
    height:170,
    calcBmi:function(){
    return this.mass / Math.pow(this.height,2)

    }
    }

    if (jhon.calcBmi() > mike.calcBmi()) {
        return `jhon is bigger`;
    }
    if (jhon.calcBmi() < mike.calcBmi()) {
        return `mike is bigger`;
    }
    return `they are equal`;
    }
    console.log(bmi())
