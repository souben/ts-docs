// one type:
let arrayofnumbrs = [1, 2, 3];
//usign generics:
let usingArraySyntax = [1, 2, 3];
let myarray = new Array();
printArray(myarray);
let myArray = [];
printArray(myArray);
let myArray3 = [];
printArray(myArray3);
function printArray(arr) {
    console.log(`Before: ${arr}`);
    arr.push(1);
    console.log(`After: ${arr}`);
}
//# sourceMappingURL=mutablearrays.js.map