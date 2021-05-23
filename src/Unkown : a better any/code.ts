/*
The unknown type is half a specific explicit type and half the type any which allows everything.
*/

let variable1: any;
variable1 = "It is a string";
console.log()

/*
any, unknown:

    allows to assign any type
any:

    allows to be assigned to any type
    does allow to call any method
unknown:

    doesn't allow to be assigned to any type
    doesn't allow to call any method

const a: any = 'a'; // OK
const b: unknown = 'b' // OK

const v1: string = a; // OK
const v2: string = b; // ERROR
const v3: string = b as string; // OK

a.trim() // OK
b.trim() // ERROR



*/