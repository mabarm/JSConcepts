doSomething(successCallback, failureCallback);

function doSomething(callback1, callback2) {
  console.log("aabb");

  callback1(20);
  callback2(10000);
}

function failureCallback(result) {
  console.log("hhh", result);
}

function successCallback(result) {
  console.log("aa", result);
  //   failureCallback(111);
}

const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
