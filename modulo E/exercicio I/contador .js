var prompt = require('prompt-sync')();


var inicio = prompt("qual valor inicial: ");
var fim = prompt("qual valor final: ");


if (inicio == 0 || fim == 0) {
    console.log("[ERRO] Dados inválidos!");
} else if (inicio < fim) {
    for (var c = inicio; c <= fim; c ++ );
    console.log(c);
}


/* REPETIÇÃO WHILE=enquanto (condição) for vewrdade executa*/

var c = 1
while (c < 6) {
    console.log("tudo bem??")
    c ++
}

var c = 1
while (c <= 6) {
    console.log(`passo ${c}`)
    c ++
}


/* REPETIÇÃO DO WHILE= execute a condição e depois testa */

var c = 1
do {
    console.log(`passo ${c}`)
    c ++
} while (c <= 6)