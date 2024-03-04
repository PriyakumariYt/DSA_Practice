// !Example 2: Filtering Products by Price
const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
  ];
 // Filter products with a price less than or equal to 500
  
  const filterProducts = products.filter((curElem) => {
    //   console.log(curElem.price <= 500);
    return curElem.price <= 500;
  });
//   console.log(filterProducts);


 
  var party = ["ramu", "shyam", "rubi", "suraj", "ramu", "rubi", "shyam"];
var house = {};
for (let i = 0; i < party.length; i++) {
  var person = party[i];
  house[person] = 1;
}
// console.log(house);

// var str  = "amarjeet"
// var diary = {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]
//   diary[char] = 1
// }
// console.log(diary)


// var str = "amarjeet"
// var diary = {}
// for(let i = 0; i<str.length; i++){
//   var char = str[i]

//   if(diary[char]==undefined){
//     diary[char]= 1
//   }else{
//     diary[char]= diary[char]+ 1
//   }
// }
// for(var key in diary){
// //   console.log(key, " :", diary[key])
// }


// var arr = [1,2,2,7,8,8,7,9,8,3,4]
// var num = {}
// for(let i = 0; i<arr.length; i++){
//   var noStore = arr[i]
//   if(num[noStore]===undefined){
//     num[noStore] = 1
//   }
//   else{
//     num[noStore] = num[noStore]+ 1
//   }
// }
// for(let l in num){
//   console.log(l," ", num[l])
// }

// var n = 25
// var lower = "abcdegfhijklmnoprstuvwxyz"
// var obj = {}
// for(let i = 0; i<n; i++){
//   var char = lower[i]

// obj[char] = i+1 // i
// }
// // console.log(obj)
// for(let key in obj){
//   console.log(key+"-"+obj[key])
// }


var obj = {
  1: 1,
  2: 1,
  3: 1,
  4: 1,
  5: 1,
  6: 1,
  7: 1,
  8: 1,
  9: 1,
  10: 1,
};
for (let key in obj) {
  obj[key] = +key * key;
}
// console.log(obj);


var str = "abc";
for(let i = 0; i<str.length; i++){
    let res = "";
        for(let j = i; j<str.length;j++){
      res+= str[j] + " ";
// console.log(res);
   }
}

// ..................................????.................
var str = "amarjeet"
var diary = {}
for(let i = 0; i<str.length; i++){
  var char = str[i]

  if(diary[char]==undefined){
    diary[char]= 1
  }else{
    diary[char]= diary[char]+ 1
  }
}
for(var key in diary){
  console.log(key, " :", diary[key])
}

// .............................
var str  = "amarjeet"
var diary = {}
for(let i = 0; i<str.length; i++){
  var char = str[i]
  diary[char] = 1
}
console.log(diary)

//! 1: What will be the output?

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const mergedObject = Object.assign({}, target, source);
console.log(mergedObject);