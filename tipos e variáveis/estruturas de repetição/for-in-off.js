
/* for-in executa o "index"*/

let arr = [3, 5, 7];
arr.foo = `hello`;
    for (let i in arr) {
        console.log(i);
    }

    for (let i of arr) {
        console.log(i);
    }

/* for-of executa os "valores" reais dentro do array*/

    