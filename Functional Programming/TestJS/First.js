// // a = 30;
// // console.log(a);

// // let a;

// student;
// teacher;
// console.log(student, teacher);

// var student = "mamata";
// var teacher = "kylie";

// var teacher = "Kylie";
// // outerTe();
// // console.log(outerTe());
// var get = function outerTe() {
//   console.log(teacher);
//   //   var teacher = "John";
// };

// //Function expression doesn't hoist as they are executed during run time
// /*Everything declarative decided in compile time.
// var gets undefined value during scope found, hoisting
// but let and const get uninitailized value
// and can be touched only when they are declared during the code execution
// Otherwise give temporal dead zone error reference error
// Function declaration getshoisted which is good
// unlike var

// */

// var c = "dd";
// var c = "dddd";

// let d = "h";
// let d = "i";

// Unlike var, let begins declarations, not statements. That means you cannot use a lone let declaration as the body of a block (which makes sense, since there's no way to access the variable).

// if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context

// // function varTest() {
// var x = 1;
// // {
// var x = 2; // same variable!
// console.log(x); // 2
// // }
// console.log(x); // 2
// // }

// // varTest();

// function varTest() {
//   let x = 1;
//   {
//     var x = 2; // same variable!
//     console.log(x); // 2
//   }
//   console.log(x); // 2
// }

// varTest();

var x = 1;

{
  let x = 2; // SyntaxError for re-declaration
}
var x = 2;

var why = 11;
console.log("why", why);
nana();

function nana() {
  let why = "ll";
  console.log("why", why);
}

//why not 2 let same name in same scope but var ok //syntax error

/*
A var statement declares variables that are scoped to the running execution context's VariableEnvironment. Var variables are created when their containing Environment Record is instantiated and are initialized to undefined when created. Within the scope of any VariableEnvironment a common BindingIdentifier may appear in more than one VariableDeclaration but those declarations collectively define only one variable. A variable defined by a VariableDeclaration with an Initializer is assigned the value of its Initializer's AssignmentExpression when the VariableDeclaration is executed, not when the variable is created.
*/

//Syntax error
// {
//   let yet = 10;
//   var yet = 11;
// }
// {
//   var yet = 11;
//   let yet = 10;
// }
/*
14.2.1 Static Semantics: Early Errors
Block : { StatementList }
It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries.
It is a Syntax Error if any element of the LexicallyDeclaredNames of StatementList also occurs in the VarDeclaredNames of StatementList.
*/
// https://tc39.es/ecma262/#sec-block-static-semantics-early-errors

let notyet = 10;

function check() {
  {
    var notyet;
  }
}

//var notyet = 10;

function hee() {
  "use strict";
  let xxxy;
  //   delete xxxxy;
}
// x = 6;

var foo = { bar: 20, baz: 11 };
var { bar } = foo;
console.log(bar);
