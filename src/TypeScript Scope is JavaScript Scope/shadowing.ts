// shadowing: This occurs when one variable is declared twice, in an outer scope, and an inner scope

function f1(i: number) {
    console.log("Parameter value", i);
}
f2(10);

function f2(i2: number) {
    console.log("Parameter value:", i2);
    let i:number = 10; // ##
    console.log("Variable value:", i)
    
    for(let i =100; i<101; i++){ // ##
        console.log("For statement value:", i);
        
        for(let i=101;i<102;i++){ // ##
            console.log("For statement value 2:", i);
        }
    }
    console.log("Variable value:", i)
}

function f3() {
    let i:number = 10;
    if(true){
        //console.log("Variable in If before value value", i);
        let i: number = 100;
        console.log("Variable in If after value", i);
    }
    console.log("Variable value", i);
}
f3();