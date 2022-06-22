//retorna um array quebrando a string por um delimitador
const splittedtext = `Texto`.split(`x`);
console.log(`\narray com as posições separadas pelo delimitador: `, splittedtext);

// busca por um valor e substitiu por outro
const replacedText = `Texto`.replace(`Text`, `txeT`);
console.log(`\nsubstituição de valor: `, replacedText);

// retorna a fatia de um valor
const lastChar = `Texto`.slice(-1);
console.log(`/núltima letra é: `, lastChar);

const allWithoutLastChar = `Texto`.slice(0, -1);
console.log(`\nvalor da string da primeira letra menos a última: `, allWithoutLastChar);

const secondToEnd = `Texto`.slice(1);
console.log(`\nvalor da string da segunda letra até a última: `, secondToEnd);

// retorna N caracteres à partir de uma posição
const twoCharsBeforeFirstPos = `Texto`.substr(0, 2);
console.log(`\nas duas letras primeiras letras são: `, twoCharsBeforeFirstPos);