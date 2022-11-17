// var hoisting
// Because var declarations are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called hoisting, as it appears that the variable declaration is moved to the top of the function or global code.

// bla = 2;
// var bla;
// Copy to Clipboard
// This is implicitly understood as:

// var bla;
// bla = 2;
// Copy to Clipboard
// For that reason, it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain.

// It's important to point out that only a variable's declaration is hoisted, not its initialization. The initialization happens only when the assignment statement is reached. Until then the variable remains undefined (but declared):

// function do_something() {
//   console.log(bar); // undefined
//   var bar = 111;
//   console.log(bar); // 111
// }
// Copy to Clipboard
// This is implicitly understood as:

// function do_something() {
//   var bar;
//   console.log(bar); // undefined
//   bar = 111;
//   console.log(bar); // 111
// }
// Copy to Clipboard
// Examples
// Declaring and initializing two variables
// var a = 0, b = 0;
// Copy to Clipboard
// Assigning two variables with single string value
// var a = 'A';
// var b = a;
// Copy to Clipboard
// This is equivalent to:

// var a, b = a = 'A';
// Copy to Clipboard
// Be mindful of the order:

// var x = y, y = 'A';
// console.log(x + y); // undefinedA
// Copy to Clipboard
// Here, x and y are declared before any code is executed, but the assignments occur later. At the time x = y is evaluated, y exists so no ReferenceError is thrown and its value is undefined. So, x is assigned the undefined value. Then, y is assigned the value 'A'. Consequently, after the first line, x === undefined && y === 'A', hence the result.

// Initialization of several variables
// var x = 0;
// function f() {
//   var x = y = 1; // Declares x locally; declares y globally.
// }
// f();

// console.log(x, y); // 0 1

// // In non-strict mode:
// // x is the global one as expected;
// // y is leaked outside of the function, though!
// Copy to Clipboard
// The same example as above but with a strict mode:

// 'use strict';

// var x = 0;
// function f() {
//   var x = y = 1; // Throws a ReferenceError in strict mode.
// }
// f();

// console.log(x, y);
// Copy to Clipboard
// Implicit globals and outer function scope
// Variables that appear to be implicit globals may be references to variables in an outer function scope:

// var x = 0; // Declares x within file scope, then assigns it a value of 0.

// console.log(typeof z); // "undefined", since z doesn't exist yet

// function a() {
//   var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

//   console.log(x, y); // 0 2

//   function b() {
//     x = 3; // Assigns 3 to existing file scoped x.
//     y = 4; // Assigns 4 to existing outer y.
//     z = 5; // Creates a new global variable z, and assigns it a value of 5.
//            // (Throws a ReferenceError in strict mode.)
//   }

//   b(); // Creates z as a global variable.
//   console.log(x, y, z); // 3 4 5
// }

// a(); // Also calls b.
// console.log(x, z);     // 3 5
// console.log(typeof y); // "undefined", as y is local to function a
