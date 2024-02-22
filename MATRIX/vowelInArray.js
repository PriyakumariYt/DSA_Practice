var arr = [
        ['a' , 'b'],
        ['c' , 'd'],
        ['e' , 'f']
    ];
    
    for(i = 0; i<arr.length;i++){
        let vowel = "no";
        for(let j = 0; j<arr[i].length;j++){
            if(arr[i][j]=="a"||arr[i][j]=="e"||arr[i][j]=="i"||arr[i][j]=="o"||arr[i][j]=="u"){
                vowel = "yes"
            }
        }
        console.log(vowel)
    }
    