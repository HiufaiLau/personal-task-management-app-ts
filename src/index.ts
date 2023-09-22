

let number: number = 100;

number = 28.7;
console.log(number);

number = -300;
console.log(number);

number = Infinity * 0.01;
console.log(number);

number = parseInt("12");
console.log(number);

number = Number("121");
console.log(number);


//Bigint
let bigInt1 = BigInt(945845);

let biInt2 = 123564564n;
console.log(bigInt1);
let a: bigint = BigInt(1234548);

let b: bigint = 23456465n;
console.log(b);

let c: bigint = a - b;
console.log(c);

// let e:bigint = 24551.2n;
// let f = Math.log(a);


const safeInt = Number.MAX_SAFE_INTEGER;

console.log(safeInt);

const safeIntPlusOne = safeInt + 1;
const safeIntPlusTwo = safeInt + 2;

console.log(safeIntPlusOne);
console.log(safeIntPlusTwo);

console.log(safeIntPlusOne === safeIntPlusTwo);