function find_ascii_number(){
    var obj = {} 
    var start = 97;
    var end = 97+25
    var count = 0
    for(let i = start; i<=end; i++){
            let key = String.fromCharCode(start)
            start++
            count++
            obj[key] = count
    }
    return(obj)
}


var value = find_ascii_number()
//console.log(value)
function find_word_value(obj, str){
    var sum = 0
    for(let i = 0; i<str.length; i++){
            sum = sum+ obj[str[i]]
    }
    return console.log(sum)
}
find_word_value(value, "priya")