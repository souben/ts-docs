// one type:
let arrayofnumbrs: number[] = [1, 2, 3];


//usign generics:
let usingArraySyntax: Array<number> = [1, 2, 3]; 


let myarray = new Array<number>();
printArray(myarray);

let myArray: Array<number> = [];
printArray(myArray);

let myArray3: number[] = [];
printArray(myArray3);

function printArray(arr: number[]): void{
    console.log(`Before: ${arr}`)
    arr.push(1);
    console.log(`After: ${arr}`)
}