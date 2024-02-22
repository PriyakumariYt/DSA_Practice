var str = "priyauo";
var ans = false;
var count = 0;
for(let i = 0; i<str.length; i++){
    if(str[i]=='a'|| str[i]=='e'|| str[i]=='i'|| str[i]=='o'|| str[i]=='u'){
        ans = true
        count++;
    }

    }
console.log(count);