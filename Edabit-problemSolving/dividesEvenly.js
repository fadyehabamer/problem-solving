function dividesEvenly(a, b) {
    // a divides evenly by b when there is no remainder
    // (the old check tested whether the quotient was even, and returned nothing)
    return a % b === 0
}
console.log(dividesEvenly(78,6))