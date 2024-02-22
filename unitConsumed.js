
 var n = 930;
 var bill = n - 80;
 var unit;
 if(bill>650){
    unit =  150  + (bill - 650)/10
 }
 else if (bill>150){
unit =50 + (bill - 150)/5
 } else {
unit = bill/3
 }
 console.log(unit)