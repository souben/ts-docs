function switchFunction(a: number): void {
    switch(a){
        case 1:
            let variable1 = "test";
            console.log(variable1);
            break;
        case 2:
            let variable2 = "test2";
            console.log(variable2);
            break;
        default:
            console.log("Default");
        }
}

switchFunction(1);
switchFunction(2);
switchFunction(3);

function switchFunction2(a: number): void {
    switch(a){
        case 1: {
            let variable = "test";
            console.log(variable);
            break;
        }
        case 2: {
            let variable = "test2";
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
