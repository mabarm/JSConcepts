function greeting(num) {
  console.log("greet", num);
}

function show(callback) {
  let num = 10;
  callback(num);
}

show(greeting); // callback function

// document.addEventListener("onClick", function () {
//   console.log("hey cli");
// });
