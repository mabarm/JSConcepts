function one(param) {
  console.log("In one");
  setTimeout(param, 1000);
}

function two(param) {
  console.log("In two");
  setTimeout(param, 1000);
}

function three() {
  console.log("In three");
}

one(function () {
  two(three);
});
// two(three);
