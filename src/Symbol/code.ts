let value1 = "value";
let value2 = "value";

if(value1 === value2){
    console.log("Equal when string");
}

let s1 = Symbol("value1");
let s2 = Symbol("value1");

if(s1 === s2){
    console.log("Equal when Symbol");
}

let aSymbol: Symbol = Symbol("value1");
aSymbol = Symbol("value2");

console.log(aSymbol);

const aSecondSymbol: Symbol = Symbol("value3");
console.log("2", aSecondSymbol);

const aThirdSymbol: unique symbol = Symbol("value4");
console.log("3", aThirdSymbol);
console.log(typeof aThirdSymbol);

/*
An object property can be a symbol. Its assignment uses the symbol
between brackets. Do keep in mind that a property defined with
a symbol won’t appear when you invoke Object.defineProperty
or Object.getOwnPropertyNames.

To get all properties defined by symbols, you must use 
getOwnPropertySymbols. If all properties defined are required,
you must use Reflect.ownKeys(). In the end, the goal is to provide
a unique way to define a specific member of the object and avoid
a potential collision that a string cannot prevent.

*/
// Unique symbos are declared with const 

let s10: Symbol = Symbol("s1"); // Type is: Symbol
const s20: Symbol = Symbol("s2");  // Type is: Symbol
const s3: unique symbol = Symbol("s3");  // Type is: typeof(s3)
const s4: unique symbol = Symbol("s4");  // Type is: typeof(s4)

if (s10 === s20) {
    console.log("S1 and S2 are the same symbol"); // Won't print
}

if (s3 === s2) {
    console.log("S3 and S2 are the same symbol"); // Won't print
}

if (s3 === s4) {
    // Does not compile
}
