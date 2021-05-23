// Generics alloes for improved reysibility by parametrinzing a type
// with another one.

interface MyComponent<TProps>{
    name: string,
    id: number;
    props: TProps
}

interface Props1 {
    color: string;
}

interface Props2 {
    size: number;
}

const component1: MyComponent<Props1> = {
    name: "MyComponent",
    id: 1,
    props: { color: "red" }
}

const component2: MyComponent<Props2> = {
    name: "compoent2",
    id:2,
    props: { size: 3 }
}

console.log(component1);
console.log(component2);


//--------------------------

// Generics and list

let list1: number[] = [1,2,3]; // same as 
let list3: Array<number> = [1, 2, 3];
let list4: any[] = [1, 2, "string"];
console.log( list1, list3, list4);

//-------------------------
//Generic vs any :

    //specific type
const arr: Array<string> = new Array("abvv", "fjfjfjf");
const str: string = arr[0]; 
console.log(arr[0].substr(0, 3));

    //any :
const arr2: Array<any> = ["jgjhg", 4234];
const str2: string = arr2[1];
console.log(str2.substr(0, 3));  // error

