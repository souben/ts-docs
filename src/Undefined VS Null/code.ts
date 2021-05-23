/*
The union of any other type and undefined makes the type optional.
Using the question mark syntax or union with undefined produces
a similar result with only minor differences.
*/

function functionWithUndefinedParameter(a:number|undefined, b:number){ }
functionWithUndefinedParameter(1 , 2);
functionWithUndefinedParameter(undefined, 2);
//functionWithUndefinedParameter(, 2); // Does not compile

/*
The difference is that with | undefined,
the parameter must be passed with the value or undefined.
However, with ?, you can pass undefined or nothing at all.
*/

function functionWithQuestionMarkParameter1(a:number, b?:number){}
functionWithQuestionMarkParameter1(1, 2);
functionWithQuestionMarkParameter1(1, undefined);
functionWithQuestionMarkParameter1(1);


/*
A good use case for null is to differentiate between:

An uninitialized variable: should be undefined
A variable clearly representing the absence of something: should be null
A variable representing a value: should neither be undefined, nor null

For example, consider the situation where you fetch data.
The function can return an actual value,
null if the data is actually present but has no value,
or undefined if the data has not yet been computed
*/



