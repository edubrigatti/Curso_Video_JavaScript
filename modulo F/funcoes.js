var prompt = require('prompt-sync')();

function parimpar(n) {
    if (n%2 == 0) {
        return "par!"
    } else {
        return "ímpar!"
    }
}
console.log(parimpar(5));


var prompt = require('prompt-sync')();
function soma (n1, n2, n3) {
    return (n1 + n2) - n3
}
console.log(soma(5, 5, 7));


            /* FUNÇÃO DENTRO DA VARIÁVEL*/
var prompt = require('prompt-sync')();
var v = function(x) {
    return x*=3
}
console.log(v(5));



var prompt = require('prompt-sync')();
function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c --) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5));


            /* RECURSIVIDADE*/

var prompt = require('prompt-sync')();
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5));


