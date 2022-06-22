var prompt = require('prompt-sync')();
var passo = 0;
for (passo = 0; passo < 5; passo++){
    console.log("ande um passo para o leste");
}

/*************************************************/

var prompt = require('prompt-sync')();

var i = 0;
var valor = prompt("quer contar até quanto?? ");

    for (i = 0; i <= valor; i++){
    console.log(i);
    }
        console.log("terminei de contar");


/****************************************************/

var prompt = require('prompt-sync')();

var i = 0;
var valor = prompt("quer contar até quanto?? ");
var salto = prompt("quantos saltos vc quer dar? ");

    for (i = 0; i <= valor; i += salto){
    console.log(i);
    }
        console.log("terminei de contar");


/****************************************************/

var prompt = require('prompt-sync')();


var i = 1;
var real = prompt("qual o valor em R$? ");
var dolar = Math.round(real/5.60);
var qtde = prompt("quantas vezes deseja converter? ");

    for (i = 1; i <= qtde; i ++){
    console.log("o valor convertido é U$$: " + dolar);
    }
        
