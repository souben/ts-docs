/*
The keyword let comes to the rescue by setting the lifespan
of the variable at the block where it was declared.
A scoped variable lifespan is the normal behavior 
of the declaration mentioned earlier in many languages. Curly braces here determine a block.

For example, if you declare a variable with let within an if statement,
the variable will not be accessible as soon as the execution leaves the if.
This rule is true for a function, a loop, and a class. In the case of loops,
if you are defining a for loop and you define the iterative i,
this one should use let which allows modifying its values while being only
available for the loop.
*/

function letFunc(){
    let x = "lll";
    if(true){
        let x = 9999;
    }
    console.log(x);
}
letFunc();