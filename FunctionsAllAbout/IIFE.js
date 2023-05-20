(function square(num) {
  console.log(num * num);
})(2);

(function (a) {
  return (function (b) {
    console.log(a, b);
  })(10);
})(1);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
/* By adding the parameter i to the IIFE (function (i) { ... })(i), we create a new scope for each iteration of the loop and correctly capture the value of i for that iteration. This ensures that each iteration has its own copy of i within the function scope, which resolves the issue and logs the correct values of i to the console.
 */

//IIFE solution
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

//Let solution
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

(function () {
  let first = 10000;
  console.log(first);
})();

console.log("ss", first); //first is not defined, reference error
