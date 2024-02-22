// var arr = [];
// var str = "";
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     str += i;
//     arr.push(str);
//   }
// }
// console.log(arr)
var arr = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    str += i;
    arr.push(str);
  }
}
// console.log(arr)
var arr = [];
var str = "";
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    str += "$";
    arr.push(str);
  } else {
    str += "@";
    arr.push(str);
  }
}
// console.log(arr)
var arr = ["a", "m", "a", "r", "r", "e", "e", "p"];
var result = 'amarjeet'

for(let i = 0; i<arr.length; i++){
if(arr[i]!=result[i]){

 arr[i] = result[i]
}
}
// console.log(arr)

