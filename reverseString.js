

// 2nd question

var num = 971;
var str = num.toString();
var reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log("reverse",reverse);
// 3rd example

let str1 = " Priya Kumari"

const isReverse = (str)=>{
    let rev = ""
for(let i = str.length-1; i>=0; i--){
  rev += str[i]
}
return rev
 }
console.log(isReverse(str1))