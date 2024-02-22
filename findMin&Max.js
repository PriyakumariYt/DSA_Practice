 var arr = [-2, 0,8, 4]
 var min = Infinity;
 var max = -Infinity
 for(let i = 0; i<arr.length; i++){
     if(arr[i]<min){
         min = arr[i]
     }
     if(arr[i]>max){
         max = arr[i]
     }
 }
console.log(min)
console.log(max)