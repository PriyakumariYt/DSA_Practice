//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const arrayToObj = (arr) => {
    //   console.log(arr[2].id);
    let obj = {};
    for (let key of arr) {
      console.log(key.id, key);
      obj[key.id] = key;
      // console.log(key);
    }
    return obj;
  };
  
  console.log(arrayToObj(inputArray));