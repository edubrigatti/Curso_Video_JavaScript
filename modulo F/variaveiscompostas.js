var prompt = require('prompt-sync')();
 var num = [5, 6, 4, 9];      
 num.push(2);
 num.sort();
  console.log(num);
  console.log("o vetor tem " + num.length + " posições");
  console.log(num[0]);



var prompt = require('prompt-sync')();
var val = [8, 1, 5, 7, 4, 9]
    for(var pos=0; pos < val.length; pos++) {
        console.log(" a posição " + pos + " tem o valor " + val[pos]);
    
    }


var prompt = require('prompt-sync')();
var val = [8, 1, 5, 7, 4, 9]
val.sort();
val.indexOf(5);
    for(var pos in val) {
        console.log(" a posição " + pos + " tem o valor " + val[pos]);

    }

    var prompt = require('prompt-sync')();
    var val = [8, 1, 5, 7, 4, 9]
    var ordem = val.sort();
    var pos = val.indexOf(9);
    console.log(" a ordem certa é: "+ ordem);

    if(pos == -1){
        console.log("o valor não foi encontrado");
    } else {
        console.log(" o valor  esta na posição " + pos);
    }
   
       
   


    