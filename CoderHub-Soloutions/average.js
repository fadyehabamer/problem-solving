function average(array) {
    const reducer = (accumulator, curr) => accumulator + curr;
    return (array.reduce(reducer) / array.length )
  }