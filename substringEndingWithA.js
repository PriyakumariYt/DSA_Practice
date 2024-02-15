let str = "aman"

let count= 0
for(let i=0;i<str.length;i++){
    let bag = ""
    for(let j=i;j<str.length;j++){
        bag+= str[j]
        // console.log(bag)

        if(bag[bag.length-1]=="a"){
            count++
        }
    }
}
console.log(count)