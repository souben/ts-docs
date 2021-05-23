/*
The keyword const (short for constant) is similar to let in terms
of the scope of its lifespan. However,
it can only be initialized once: in its declaration.
The restriction is powerful because it not only syntactically
indicates that the purpose is not to change its value,
but TypeScript will also ensure that no value can be set.
It’s important to understand that if you have a constant object,
the value of that object cannot change.
*/
// ===> TypeError: Assignment to constant variable.
const x = "lll";
//x = "this won't compile";
// BUT : The assignation to members of the constant variable is authorized
// see : memebersAssignement.ts
//# sourceMappingURL=assignmentError.js.map