function sortByLength(txt) {
    let arr = txt.split(' ').sort((a, b) => a.localeCompare(b)).sort((a, b) => { return a.length - b.length })

    console.log (arr.join(' '));

}
sortByLength('Have a nice day');