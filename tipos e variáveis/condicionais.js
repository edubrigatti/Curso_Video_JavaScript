const array = [0, 1, 2, 3, 4, 5];
array.forEach(item => {
    if (item % 2 === 0){
    console.log(`o número ${item} é par.`);
    } else {
    console.log(`o número ${item} é ímpar.`);
    }

});

var data = [1, 2, 3, 4, 5];
var sum = 0;
data.forEach(algo => {
    sum += algo
});
console.log(sum);

// apenas 01 numero divide o numero
const array = [2, 3, 4, 5, 6, 8, 10, 15];
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`o número ${item} é divisivel por 2.`);
    } else if(item % 3 === 0) {
        console.log(`o número ${item} é divisivel por 3.`);
    } else if (item % 5 === 0) {
        console.log(`o número ${item} é divisivel por 5.`);
    }
});

// 02 numeros dividem o mesmo numero
const array = [2, 3, 4, 5, 6, 8, 10, 15];
array.forEach(item => {
    if(item % 2 === 0){
        console.log(`o número ${item} é divisivel por 2.`);
    }
     if(item % 3 === 0) {
        console.log(`o número ${item} é divisivel por 3.`);
    }
    if (item % 5 === 0) {
        console.log(`o número ${item} é divisivel por 5.`);
    }
});


//