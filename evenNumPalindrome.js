var str = "abcdcfa"
let res = ""
for(let i= 0;i<str.length; i++){
    if(i%2==0){
        res+= str[i]

    }
}
let rev = ""
let ans = "no"
for(let i = res.length-1; i>=0 ;i--){
rev = rev + res[i]
}
if(res==rev){
    ans = "yes"
}
console.log(ans)