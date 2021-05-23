/*
Cas't can be done in two ways
usig <> OR as
*/

const unknownType: unknown = "123"
const cast1: number = <number>unknownType;
const cast2: number = unknownType as number;

// Casting restrictions:

interface ICast1 { m1: string}
interface ICast2 { m1: string, m2: string}

let icast1: ICast1 = { m1: "m1"};
let icast2: ICast2 = { m1: "m1", m2: "m2"}

let icast3: ICast2 = icast2;
console.log(icast1);
console.log(icast2);
console.log(icast3);

let icast4: ICast2 = icast1 as ICast2;
console.log(icast4);