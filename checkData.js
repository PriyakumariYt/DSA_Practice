let arr = ["apple", 2, true, false, "priya",5,6,10,"riya"]
const checkData = (arr)=>{
let num = 0
let str = 0
let boolean = 0
for(let i = 0; i<arr.length; i++){
    if (typeof arr[i] === "number"){
        num++
    } else if (typeof arr[i] === "string") {
        str++;
    } else if (typeof arr[i] === "boolean") {
        boolean++;
    }
}

console.log("Number count:", num);
    console.log("String count:", str);
    console.log("Boolean count:", boolean);
}



