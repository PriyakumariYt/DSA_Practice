
var arr = [
    [1,2],
    [3,4],
    [5,6]
];

var sums = [];

for (var i = 0; i < arr.length; i++) {
    var subArray = arr[i];
    var sum = subArray[0] + subArray[1];
    sums.push(sum);
}

console.log(sums); // Output: [3, 7, 11]

var arr = [
    [1,2],
    [3,4],
    [5,6]
];

var arr1 = []

for(let i = 0; i<arr.length;i++){
    let res = []
    for(let j = 0;j<arr[i].length;j++){
        res.push(arr[i][j] =  i + j )
}
arr1.push(res)

}
console.log(arr1)
