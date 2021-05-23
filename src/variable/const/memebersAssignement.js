// assignment to memebers's constant variables is possible
const user1 = { name: "Soufiane", id: 1 };
const user2 = { name: "Alae", id: 2 };
user1.id = user2.id;
//console.log(user1, user2)
function constFunc() {
    const myList = [1, 2, 3];
    myList.push(4);
    console.log(myList);
}
constFunc();
//# sourceMappingURL=memebersAssignement.js.map