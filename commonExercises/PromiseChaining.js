Promise.resolve(1)
  .then((x) => console.log(x))
  .catch(() => new Error("Hello"))
  .then((x) => console.log(x))
  .then((x) => x + 1)
  .then((x) => console.log(x))
  .catch((err) => console.log(err));

//Scope example

// function outer() {
//   var a = 10;
//   console.log(a);
//   var a = 20;
//   console.log(a);
//   function inner() {
//     // a++;
//     console.log("red", a);
//     var a = 9;
//     console.log("blue", a);
//   }
//   inner();
// }

// outer();
