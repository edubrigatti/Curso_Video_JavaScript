const fruta = `mamão`;

switch (fruta) {
    case `banana`:
        console.log (`${fruta} R$ 3,00 / kg`);
    break;
    case `mamão`:
    case `laranja`:
    case `melancia`:
        console.log(`${fruta}, R$ 2,00 / kg`);
    default:
        console.log(`produto não encontrado`);
        break;
}