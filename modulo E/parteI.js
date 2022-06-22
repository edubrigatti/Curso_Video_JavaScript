                 /*PARTE 1*/

var prompt = require('prompt-sync')();
var c = 1
while (c <=7) {
    console.log("passo " + c)
    c++
    }

var prompt = require('prompt-sync')();
var c = 1
    do {
        console.log("passo " + c);
        c++
    } while (c <=7);

var prompt = require('prompt-sync')();
var c = 10
    do {
        console.log("passo " + c);
        c--
    } while (c >=3);


            /* PARTE II */

/* FOR: INICIO -> TESTE (condição) -> INCREMENTO */

var prompt = require('prompt-sync')();
console.log("vai começar....");

for(var c = 1; c <=8; c++){
    console.log(c)
}
console.log("fim!!");




var i = 40;
var fim = 5;
var passo = 5;
if (i < fim){
    // contagem crescente
    for(var c = i; c <= fim; c += passo) {
        console.log(c);
    } 
        } else {
            for(var c = i; c >= fim; c -= passo) {
                console.log(c);
    }
} 
      