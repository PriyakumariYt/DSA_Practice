var data = "1111100000"
// var data = "10101"
let countZero = 0;
let countOne = 0;

for(let i=0;i<data.length;i++){
    if(data[i]==0){
        countZero++
    }else{
        countOne++
    }
}

if(countZero>countOne){
    console.log("Jerry")
}else if(countOne>countZero){
    console.log("tom")
}else{
    console.log("Another round")
}