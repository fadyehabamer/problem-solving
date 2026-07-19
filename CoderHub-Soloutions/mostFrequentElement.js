function mostFrequentElement(arr) {
  let obj = {};
  let max = 0;
  let maxElement = null;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }

    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
      console.log(obj[arr[i]]);
      maxElement = arr[i];
    }

  }
  return (maxElement);
  // console.log(obj);
}

// mostFrequentElement([1 , 2 , 3 , 4 , 1 , 5 , -5 , -5 , -5 , -5 , -5 , 6])


let obj = {}

let arr = [1, 2, 3, 4, 1, 2, 1, 0]

for (let i = 0; i < arr.length; i++) {
  if (  obj[arr[i]]   ) // if the key exists
  {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }

  console.log(obj);
}


let z = {
  "a": 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
}


console.log(z["a"]);
