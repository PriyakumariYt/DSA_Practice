var numbers = [1,2,3,4,5,6,7,8,9,10]

// ?Compare call back function

// let sortingAcending = numbers.sort((a,b)=>{
// if(a>b) return 1
// if(b>a) return -1
// })

let sortingDecending = numbers.sort((a,b)=>{
    if(a>b) return -1
    if(b>a) return 1
    })
console.log(numbers)