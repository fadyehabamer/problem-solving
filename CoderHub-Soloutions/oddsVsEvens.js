function oddsVsEvens(num) {
    let E_arr = [];
    let O_arr = [];
    String(num).split('').map((item) => {
        parseInt(item) % 2 == 0 ? E_arr.push(item) : O_arr.push(item)
    })
    let oddFinal =  (O_arr.reduce((a, b) => { return parseInt(a) + parseInt(b) }, 0));
    let evenFinal = (E_arr.reduce((a, b) => { return parseInt(a) + parseInt(b) }, 0));
    return(

     (oddFinal > evenFinal) ? 'Odd' : (oddFinal < evenFinal) ? 'Even' : 'Equal'

    )
}

oddsVsEvens(123)
// 3 + 1 => 4
// 2 =>     2
// odd