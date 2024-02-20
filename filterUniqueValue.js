var numbers = [1,2,2,3,4,5,5,6,7,8,9]
const filterValue = numbers.filter((curElem,index, arr)=>{
return arr.indexOf(curElem)===index
})
console.log(filterValue)
console.log([new Set(numbers)])
console.log([...new Set(numbers)])