/*
Definition:
    Hoisting: It is a quirk of JavaScript that brings all declarations made with var to the top of the function (or into the global scope if declared outside a function).
    One of the benefits of hoisting is that it enables us to call functions before they appear in the code.
    */

z = "not declared before assignement";
var z = "decalred after assignement and all fine";
console.log(x)