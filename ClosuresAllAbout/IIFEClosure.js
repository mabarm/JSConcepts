let count = 0;

(function printCount() {
  if (count == 0) {
    let count = 1; //shadowing ,block scope
    console.log("inner", count);
  }
  console.log("outer", count); //outside of the above block scope
})();
