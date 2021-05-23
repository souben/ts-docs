function switchFunction(a) {
    switch (a) {
        case 1:
            var variable1 = "test";
            console.log(variable1);
            break;
        case 2:
            var variable2 = "test2";
            console.log(variable2);
            break;
        default:
            console.log("Default");
    }
}
switchFunction(1);
switchFunction(2);
switchFunction(3);
function switchFunction2(a) {
    switch (a) {
        case 1: {
            var variable = "test";
            console.log(variable);
            break;
        }
        case 2: {
            var variable = "test2";
            console.log(variable);
            break;
        }
        default:
            console.log("Default");
    }
}
switchFunction2(1);
switchFunction2(2);
switchFunction2(3);
function getPrice() {
    return 100;
}
var description = "The book is about " + (2 + 5) + " chapters and cost " + getPrice() + "$.";
console.log(description);
