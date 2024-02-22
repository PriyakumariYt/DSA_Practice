var arr = [1,2,3,4,5]
var max = -Infinity
for(let i = 0; i<=arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
    }
}
console.log(max)