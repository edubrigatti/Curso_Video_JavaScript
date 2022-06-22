const users = [`guilherme`, `pedro`, `jenifer`];

const gender = {
    MAN: Symbol(`M`),
    WOMAN: Symbol(`W`)
}

const persons = [
    {
    name: `guilherme`,
    age: 26,
    gender: gender.MAN
},
{
    name: `pedro`,
    age: 43,
    gender: gender.MAN
},
{
    name: `jenifer`,
    age: 18,
    gender: gender.WOMAN
}
];

// retornar a qtde de itens de um array
console.log(`itens: `, persons.length);

// verificar se é array
console.log(`a variavel persons é um array: `, Array.isArray(persons));

// iterar os itens do array
persons.forEach(person => {
    console.log(`nome: ${person.name}`);
});

// filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(`\n nova lista com homens: `, mens);
const womans = persons.filter(person => person.gender === gender.WOMAN);
console.log(`\n nova lista com mulheres: `, womans);

// retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = `introdução ao javascript`;
    return person;
});
console.log(`\npessoas com a adição do curso: `, personsWithCourse);

// transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`\nsoma de idade das pessoas:`,  totalAge);

//juntando operações
const totalEvenAges = persons
    .filter(person => person.age %2 === 0)
    .reduce((age, person) => {
        age += person.age;
        return age;
    },0);

console.log(`\n soma das idades par é: `, totalEvenAges);

//push - insere no elemento
const usersLenght = users.push(`eduardo`);
    console.log(usersLenght);
    console.log(users);

//pop remove o último elemento do array e retorna o elemento removido
const removedItem = users.pop();
    console.log(removedItem);
    console.log(users);

// unshift adiciona um ou mais elementos no início do array e retorna o tamanho do novo array
const usersLength= users.unshift(`roberta`, `leo`);
    console.log(usersLength);
    console.log(users);

//shift remove o primeiro elemento do array e retorna o elmento removido
/*const removedItem = users.shift();
    console.log(removedItem);
    console.log(users); */

// concat cocatena um mais arrays retornando um novo
const salgados = [`coxinha`, `kibe`, `joelho`]
const alimentos = users.concat(salgados);
    console.log(alimentos);

//slice - retorna um novo array "fatiando" o array de acordo com ínicio e fim
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(0, 2));
console.log(arr.slice(2));
console.log(arr.slice(-1));/*o último num.*/
console.log(arr.slice(-3)); /*do último num. até o que quer*/

//splice - altera um array adicionando novos elementos enquanto remove os antigos
const arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2));
console.log(arr);
console.log(arr.splice(0, 0, `first`));
console.log(arr);
console.log(arr.splice(1, 0, `10`));
console.log(arr);



// map - itera elementos
const arr = [1, 2, 3, 4, 5, 6];
const novoarr = arr.map(value => value * 2);
console.log(novoarr);
 

// flat - concatena arrays que estão dentro de do array
const arr = [1, 2, [3, 4, [5, 6, 7]]];
 const newarr = arr.flat(1); //[1, 2, 3, 4, [5, 6, 7]]
 console.log(newarr);
 const novoarr = arr.flat(2); // [1,2,3,4,5,6,7]
 console.log(novoarr);

 // flatMap 
 const arr = [1, 2, 3, 4, 5, 6];
 const novoarr = arr.flatMap(value => [value * 2]);
 console.log(novoarr);
 const newarr = arr.flatMap(value => [[value * 2]]);
 console.log(newarr);

 //find - retorna o primeiro item deum array que satisfaz a condição
 const arr = [1, 2, 3, 4, 5, 6];
 const primeiroitem = arr.find(value => value > 2);
 console.log(primeiroitem);

 // findIndex - retorna o índice do primeiro item do array que satisfaz a condição
 const arr = [1, 2, 3, 4, 5, 6];
 const primeiroitem = arr.findIndex (value => value >= 2);
 console.log(primeiroitem);


 // indexOf - retorna o primeiro índice que um elemento pode ser encontrado no array
 const arr = [1, 2, 3, 4, 5, 6];
 const primeiroitem = arr.indexOf (2); // o n. 2 representa o valor e não o índice.
 console.log(primeiroitem); // aparece o index = [1].

 //lasIndexOf - retorna o último índice que um elemento pode ser encontrado no array
 const arr = [1, 2, 3, 4, 5, 6];
 const ultimoitem = arr.lastIndexOf(4);
 console.log(ultimoitem); // aparece o index = [2].

 //includes - retorna um booleano verificando se determinado item esta dentro do array
 const arr = [1, 2, 3, 4, 5, 6];
 const incluso = arr.includes(4);
 console.log(incluso);
 const incluso1 = arr.includes(7);
 console.log(incluso1);

 //some - retorna um booleano verificando se pelo menos um item do array satisfaz a condição
 const arr = [1, 2, 3, 4, 5, 6];
 const verifica = arr.some(value => value % 2 === 0);
 console.log(verifica);

 //every - retorna um booleano verificando se todos os itens do array satisfazem a condição
 const arr = [1, 2, 3, 4, 5, 6];
 const verifica = arr.every(value => value % 2 === 0);
 console.log(verifica);

 // sort - ordena os elementos de aum array de acordo com determinada condição
 // ORDEM CRESCENTE
 const arr = [{age: 1}, {age:2}, {age: 10}, {age: 3}, {age: 7}];
 const ordena = arr.sort((current, next) => current.age - next.age);
 console.log(ordena);

 const estudantes = [{name: `edu`, grade: 7}, {name: `beta`, grade: 5}, {grade: `luiz`, grade: 4}];
 const ordena = estudantes.sort((current, next) => current.grade - next.grade);
 console.log(ordena);

 // ORDEM DESCRESCENTE
 const estudantes = [{name: `edu`, grade: 7}, {name: `beta`, grade: 5}, {grade: `luiz`, grade: 4}];
 const ordena = estudantes.sort((current, next) => next.grade - current.grade);
 console.log(ordena);

 const arr = [{age: 1}, {age:2}, {age: 10}, {age: 3}, {age: 7}];
 const ordena = arr.sort((current, next) => next.age - current.age);
 console.log(ordena);

 // reverse - inverte os elementos de um array
 const arr = [{age: 1}, {age:2}, {age: 10}, {age: 3}, {age: 7}];
 console.log(arr.reverse());

 // join - junta todos os elementos de um array, separados por um delimitador e retorna um string
 const arr = [1, 2, 3, 4, 5, 6];
 console.log(arr.join(`-`));
 console.log(arr.join(`:`)); 