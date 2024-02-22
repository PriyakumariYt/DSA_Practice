
var arr = [1, 2, 3, 4];
var even = 0;
var odd = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    even = even + i;
  } else {
    odd = odd + i;
  }
}
if (even >= odd) {
  console.log("even");
} else {
  console.log("odd");
}