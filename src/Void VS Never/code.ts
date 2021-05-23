/*
Void allows to return undefined 
which never not
*/


function Throw(): never {
    throw new Error("This function return never");
}

enum EnumWithChoices {
    Choice1,
    Choice2,
}

function func(c: EnumWithChoices): string {
    switch(c){
        case EnumWithChoices.Choice1:
            return "choice 1";
        case EnumWithChoices.Choice2:
            return "choice 2";
        default:
            return unhandledChoice(c);
    }
}

function unhandledChoice(x: never): never {
    throw new Error("choice not defined")
}

/*
In the end, never indicates a state that is not meant to be. An exception is not expected behavior. An infinite loop in a function is not meant to be sustainable in a system, a condition that is never visited should not exist.

*/