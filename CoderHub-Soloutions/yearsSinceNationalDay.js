function yearsSinceNationalDay(year){
    if(year < 1930){
        return "Not Valid Year Entry";
    }else{
        var date = new Date();
        var currentYear = date.getFullYear();
        var yearsSince =  year - 1930;
        return yearsSince;

    }
}
console.log(yearsSinceNationalDay(2022));