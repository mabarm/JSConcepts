//Functions are called first called functions in JS

function a() {
  console.log("a");
}

function b() {
  console.log("b");
}
b();
b = a;
console.log(typeof b);
b();
////////////////////////

function square(num) {
  return num * num;
}

function getSquare(callback, num) {
  return callback(num);
}

const result = getSquare(square, 10);
console.log(result);
