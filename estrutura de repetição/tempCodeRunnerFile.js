var prompt = require('prompt-sync')();

var i = 1;
var valor = prompt("quer contar até quanto?? ");
var salto = prompt("quantos saltos vc quer dar? ");

    for (i = 1; i <= valor; i += salto){
    console.log(i);
    }
        console.log("terminei de contar");
