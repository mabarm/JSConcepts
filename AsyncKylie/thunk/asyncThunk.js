function addSync(x, y, callback) {
  setTimeout(function () {
    callback(x + y);
  }, 1000);
}

var thunk = function (callback) {
  addSync(10, 20, callback);
  console.log("call", callback);
};

thunk(function (sum) {
  console.log(sum);
});
