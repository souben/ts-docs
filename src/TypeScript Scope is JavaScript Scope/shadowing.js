// shadowing: This occurs when one variable is declared twice, in an outer scope, and an inner scope
function f1(i) {
    console.log("Parameter value", i);
}
f2(10);
function f2(i2) {
    console.log("Parameter value:", i2);
    var i = 10; // ##
    console.log("Variable value:", i);
    for (var i_1 = 100; i_1 < 101; i_1++) { // ##
        console.log("For statement value:", i_1);
        for (var i_2 = 101; i_2 < 102; i_2++) { // ##
            console.log("For statement value 2:", i_2);
        }
    }
    console.log("Variable value:", i);
}
function f3() {
    var i = 10;
    if (true) {
        console.log("Variable in If after value", i_3);
        var i_3 = 100;
        console.log("Variable in If after value", i_3);
    }
    console.log("Variable value", i);
}
f3();
