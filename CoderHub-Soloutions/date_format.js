function date_format(date) {
    // write your code here 
    // return date in format yyyy/mm/dd | yyyy-mm-dd | dd-mm-yyyy
    var result = [];
    var dateArr = date.split('/');



    result[0] = `${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`;
    result[1] = `${dateArr[0]}-${dateArr[1]}-${dateArr[2]}`;
    result[2] = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`;

    return result.join(" | ");
}
console.log(date_format('2010/1/21'));