var arr1 = [4,5,7]
var arr2 = [9,2,5]

for(let i = 0; i<arr1.length; i++){
    for(let j=0; j<arr2.length;j++){
if( arr1[i] == arr2[j]){
console.log(arr2[j]);
}
    }
}