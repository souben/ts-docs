// The second case of scoping is called capturing. This occurs when you have a variable that you define in an inner scope and then use inside a function that you assign to another scope. During the assignment of the function, the variable defined in the inner scope will be captured, like a snapshot, and when leaving the scope, the function declared before the inner scope will still have the value of the variable.
function mainFunc() {
    let innerFunc;
    if (true) {
        //Env for capturing scope start here
        let variableCapturedByTheInnerFunction = "Available To The inner func";
        innerFunc = function () {
            return variableCapturedByTheInnerFunction;
        }; // Env for capturing stop here;
    }
    return innerFunc();
}
//console.log(mainFunc())
function mainFunc2() {
    let innerFunc;
    if (true) {
        //Env for capturing scope start here
        let variableCapturedByTheInnerFunction = "Available To The inner func";
        innerFunc = function () {
            return variableCapturedByTheInnerFunction;
        }; // Env for capturing stop here;
        variableCapturedByTheInnerFunction = "Changed";
    }
    return innerFunc();
}
//console.log(mainFunc2());
// doesnt leverage capturing
function mainFunc3() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = function (param1) {
            return param1;
        };
        listFunctions.push(innerFunction(i));
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
//mainFunc3();
function mainFunc4() {
    let innerFunction;
    let listFunctions = [];
    for (let i = 10; i < 15; i++) {
        innerFunction = (function (param1) {
            var f = function () {
                return param1;
            };
            return f;
        })(i * 100);
        listFunctions.push(innerFunction(i));
    }
    for (let k = 0; k < 5; k++) {
        console.log(listFunctions[k]);
    }
}
//mainFunc4();
let y = 1;
console.log("Outside: " + y);
function myFunction() {
    //console.log("Inside before re-declaring: " + y)
    let y = 2;
    console.log("Inside after re-declaring: " + y);
    if (y == 2) {
        let y = 3;
        console.log("Inside IF : " + y);
        function mySecondFunction() {
            // console.log("Inside-Inside before: " + y)
            let y = 4;
            console.log("Inside-Inside after: " + y);
        }
        mySecondFunction();
    }
}
myFunction();
//# sourceMappingURL=capturing.js.map