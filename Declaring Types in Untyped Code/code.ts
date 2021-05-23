declare let variableDefinedsomewhereElse: number;
let newVariable = variableDefinedsomewhereElse;


// can be used with functions
declare function ambitiousFunction(i: number): void
function myFunc(i: number) {
    ambitiousFunction    
} 

//the common use case of JS:
/*
a library that already exists in JavaScript (but has not migrated to 
TypeScript), which can be used in TypeScript with a good definition by
having a .d.ts. It is common to migrate the definition file along with
the JavaScript file. If this is not the case, it is possible to download
the definition type after you install the JavaScript library.a library
that already exists in JavaScript (but has not migrated to TypeScript),
which can be used in TypeScript with a good definition by having a .d.ts.
It is common to migrate the definition file along with the JavaScript file.
If this is not the case, it is possible to download the definition type
after you install the JavaScript library.
*/