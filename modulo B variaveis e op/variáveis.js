var prompt = require('prompt-sync')();

    var n1 = Number(prompt("número 1: "));
    var n2 = Number(prompt("número 2: "));
    var soma = n1 + n2;
        console.log(`a soma de ${n1} e ${n2} é igual a ${soma}`);

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
        console.log("o numero arredondado é: " + n1.toFiixed(2));


************************************************************


var prompt = require('prompt-sync')();
    var numero = Number(prompt("qual o número? ")); 
        console.log(numero%=3);



*************************************************************


var prompt = require('prompt-sync')();
    var numero = 5
        console.log("5" == numero);
        console.log("5" === numero);



var prompt = require('prompt-sync')();
    var media = prompt("qual sua média: ")
        console.log(media >= 7 ?"APROVADO" :"REPROVADO");
           
     