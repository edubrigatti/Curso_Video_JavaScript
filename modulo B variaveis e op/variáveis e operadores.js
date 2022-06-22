
********************************************************
    
var prompt = require('prompt-sync')();
    var nome = prompt("qual seu nome: ");
    var idade = prompt("qual sua idade: ");
    var nota = prompt("qual sua nota: ");
        console.log(`o aluno ${nome} com ${idade} anos, tirou a nota ${nota}`);

**********************************************************


var prompt = require('prompt-sync')();
    var nome = prompt("qual se nome? ");
        console.log(`seu nome tem ${nome.length} letras`);
        console.log(`seu nome tem ${nome.toUpperCase()}`);
        console.log(`seu nome tem ${nome.toLocaleLowerCase()}`);


***********************************************************


var prompt = require('prompt-sync')();
    var numero = prompt("qual o número? "); 
        console.log("o numero arredondado é: " + Math.random(numero));


************************************************************


var prompt = require('prompt-sync')();
    var numero = Number(prompt("qual o número? ")); 
        console.log(numero%=3);


*************************************************************


var prompt = require('prompt-sync')();
    var numero = 5
        console.log("5" == numero);
        console.log("5" === numero);


*************************************************************


var prompt = require('prompt-sync')();
    var media = prompt("qual sua média: ")
        console.log(media >= 7 ?"APROVADO" :"REPROVADO");
           
    
*************************************************************


var prompt = require('prompt-sync')();
    var x = prompt("qual o valor de x: ")
    const resto = x % 2
        console.log(resto == 0 ?5 :9);


**************************************************************

    