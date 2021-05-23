/*
Void allows to return undefined
which never not
*/
function Throw() {
    throw new Error("This function return never");
}
var EnumWithChoices;
(function (EnumWithChoices) {
    EnumWithChoices[EnumWithChoices["Choice1"] = 0] = "Choice1";
    EnumWithChoices[EnumWithChoices["Choice2"] = 1] = "Choice2";
})(EnumWithChoices || (EnumWithChoices = {}));
function func(c) {
    switch (c) {
        case EnumWithChoices.Choice1:
            return "choice 1";
        case EnumWithChoices.Choice2:
            return "choice 2";
        default:
            return unhandledChoice(c);
    }
}
function unhandledChoice(x) {
    throw new Error("choice not defined");
}
/*
In the end, never indicates a state that is not meant to be. An exception is not expected behavior. An infinite loop in a function is not meant to be sustainable in a system, a condition that is never visited should not exist.

*/ 
//# sourceMappingURL=code.js.map