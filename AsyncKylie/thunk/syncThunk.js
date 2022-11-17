function add(x, y) {
  return x + y;
}

var thunk = function () {
  return add(10, 20);
};

console.log(thunk());
//Sync thunk
//wrapper around a value
