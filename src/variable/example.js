function varletFunc() {
    var myStringValuevar = "varStringValue";
    let myStringValueLet = "letStringValue";
    if (true) {
        // var myStringValuevar = 123; causes an error , comment to see
        let myStringValueLet = "llll";
    }
    console.log(myStringValueLet);
    console.log(myStringValuevar);
}
//# sourceMappingURL=example.js.map