
let countPrime_no = 0;
for(let i = 0; i<arr.length; i++){
    let res = primeNo_checked(arr[i])
    if(res==true){
            countPrime_no++
    }
}
console.log(countPrime_no)

// CHECK PRIME NUMBER 1 T0 100
function primeNo_checked(num) {
    let count = 0;
  
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 0) {
      return true;
    } else {
      return false;
    }
  }
  var n = 100;
  var arr = [];
  for (var i = 0; i <= n; i++) {
    if (primeNo_checked(i)) {
      arr.push(i);
    }
  }
  console.log(arr);