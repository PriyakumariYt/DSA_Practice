var str = "naman";
var rev = "";
let ans = "no";
for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
if (rev === str) {
  ans = "yes";
}
console.log(ans);