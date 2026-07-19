
function get_king_names(year1, year2) {
    // return the saudi kings names between year1 and year2
    // write your code here
    let kings = [
        { name: 'عبدالعزيز', start: 1932, end: 1953 },
        { name: 'سعود', start: 1953, end: 1964 },
        { name: 'فيصل', start: 1964, end: 1975 },
        { name: 'خالد', start: 1975, end: 1982 },
        { name: 'فهد', start: 1982, end: 2005 },
        { name: 'عبدالله', start: 2005, end: 2015 },
        { name: 'سلمان', start: 2015, end: 2022 }
    ];
    
    // return all the kings whose reigns overlapped with the given years
    let kingsArr = [];
    for (let i = 0; i < kings.length; i++) {
        if (kings[i].start >= year1 && kings[i].start <= year2) {
            kingsArr.push(kings[i].name);
        }
        else if (kings[i].end >= year1 && kings[i].end <= year2) {
            kingsArr.push(kings[i].name);
        }
        else if (kings[i].start <= year1 && kings[i].end >= year2) {
            kingsArr.push(kings[i].name);
        }
    }
    return kingsArr;

    



}
console.log(get_king_names(1980, 2010));