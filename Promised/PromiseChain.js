const promise = doSome();
// const promise2 = promise.then(successCallback, failureCallback).then(() => {
//   console.log("Why");
//   return 2;
// });
// promise2.then((res) => {
//   console.log("Mamata", res);
// });

function successCallback(res) {
  console.log("success", res);

  return new Promise((res, rej) => {
    if (true) {
      res("Inside");
    }
  });
}

function doSome() {
  return new Promise((res, rej) => {
    if (true) {
      res("WHoa");
    } else {
      rej("No");
    }
  });
}

function failureCallback(res) {
  console.log("fail");
  return res;
}

// promise.then(
//   (result) => {
//     // Handle the successful result here
//     console.log("I su");
//   },
//   (error) => {
//     // Handle the error here
//     console.log("I ee");
//   }
// );

// promise
//   .then(function (result) {
//     return result;
//   }, failureCallback)
//   .then(function (newResult) {
//     return newResult;
//     // return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

// promise
//   .then(function (result) {
//     console.log("OPqqOP", result);

//     return result;
//   })
//   .then(function (newResult) {
//     console.log("OPOP", newResult);
//     return newResult;
//     // return doThirdThing(newResult);
//   })
//   .catch(failureCallback)

//   .then(function (finalResult) {
//     return doS();
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

promise
  .then((url) => {
    // I forgot to return this
    fetch(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
    );
  })
  .then((result) => {
    // result is undefined, because nothing is returned from
    // the previous handler.
    // There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
    console.log("Red", result);
  })
  .catch(failureCallback);

const listOfIngredients = [];

doSomething()
  .then((url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      })
  )
  .then(() => {
    console.log(listOfIngredients);
  });

// OR

doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });
