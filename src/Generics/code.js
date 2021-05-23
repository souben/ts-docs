// Generics alloes for improved reysibility by parametrinzing a type
// with another one.
const component1 = {
    name: "MyComponent",
    id: 1,
    props: { color: "red" }
};
const component2 = {
    name: "compoent2",
    id: 2,
    props: { size: 3 }
};
console.log(component1);
console.log(component2);
//--------------------------
// Generics and list
let list1 = [1, 2, 3]; // same as 
let list3 = [1, 2, 3];
let list4 = [1, 2, "string"];
console.log(list1, list3, list4);
//-------------------------
//Generic vs any :
//specific type
const arr = new Array("abvv", "fjfjfjf");
const str = arr[0];
console.log(arr[0].substr(0, 3));
//any :
const arr2 = ["jgjhg", 4234];
const str2 = arr2[1];
console.log(str2.substr(0, 3));
//# sourceMappingURL=code.js.map