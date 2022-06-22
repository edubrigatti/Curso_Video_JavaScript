const myNumber = 12.4032;

// transformar númer para string
const numberAsString = myNumber.toString();
console.log(`número transformado em string: `, typeof numberAsString);

// retorna número com um número de casas decimais
const myNumber = 12.4032;
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`número com 02 casas decimais: `, fixedTwoDecimals);

// tansforma uma string em float
console.log(`\nstring parseada para float:`,  parseFloat( `13.22`));

// tansforma uma string em int
console.log(`\nstring parseada para float:`, parseInt( `13.22`));