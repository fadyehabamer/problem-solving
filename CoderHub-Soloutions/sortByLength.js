function sortByLength(txt) {
    return txt
        .split(' ')
        .sort((a, b) => a.length - b.length || a.localeCompare(b))
        .join(' ');
}
console.log(sortByLength('Have a nice day'));
