/*
One issue with var is that the location of a variable makes it unpredictable. A variable declared using var is function-scoped when declared inside a function, but global-scoped when declared outside of a function. Also, var does not stop you from redefining the same variable, which overrides the initial declaration or initialization.

VAR IS FUNCTION-SCOPED WHEN DECLARED INSIDE A FUNCTION,
BUT GLOBAL-SCOPED WHEN DECLARED OUTSIDE OF A FUNCTION.
*/
function varfunc() {
    var x = "llll";
    if (true) {
        var x = "9999";
        if (true) {
            var y = "hola man , I like this shit ...";
        }
    }
    console.log(x);
    console.log(y);
}
varfunc();
//# sourceMappingURL=varFunc.js.map