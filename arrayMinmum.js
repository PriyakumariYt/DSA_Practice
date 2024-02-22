var arr = [1,2,3,4,5]
var min = Infinity
for(let i = 0; i<arr.length;i++){
    if(arr[i]<min){
        min = arr[i]
    }
}
console.log(min)