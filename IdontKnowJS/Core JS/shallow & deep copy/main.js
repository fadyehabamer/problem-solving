// * deep copy
// * all values are copied and disconnected from original variable

// * Shallow copy
// * all values are copied and still connected from original variable

// * Correction: `const b = a` below does not copy at all - both names point at the
// * SAME object (a reference copy). The spread operator and Object.assign() make a
// * SHALLOW copy: top-level properties are copied, but nested objects are still
// * shared. For a real deep copy use structuredClone(a) (built into browsers and
// * Node 17+) or JSON.parse(JSON.stringify(a)), which drops functions, undefined
// * and turns Dates into strings.
// * See https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

// * =====================================================

// * Shallow Copy
const a = {id : 1 ,name:'fady'}
const b = a

b.id=2

console.log(a)
console.log(b)

// * =====================================================

// * Deep Copy
// var x = 10 
// var y = x
// y= 100

// console.log(x)
// console.log(y)

// * ==================================================

// * Shallow Copy (spread operator) - nested objects are still shared 

// const a = {id : 1 ,name:'fady'}
// const b = {...a}

// b.id=2

// console.log(a)
// console.log(b)

// * ==================================================

// * Shallow Copy (Object.assign()) - nested objects are still shared 

// const a = {id : 1 ,name:'fady'}
// const b = Object.assign({},a)

// b.id=2

// console.log(a)
// console.log(b)

// * ==================================================

// * Deep Copy (JSON.parse JSON.stringify)
// * to solve nested levels 

// const a = {id : 1 ,name:'fady', address : { country:'egypt' }}

// const b = JSON.parse(JSON.stringify(a))

// b.id=2
// b.address.country='usa'

// console.log(a)
// console.log(b)