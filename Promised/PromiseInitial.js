// let a = new Promise(() => {});
// console.log(typeof a);

function successCallback(hello) {
  console.log("Success call is triggered", hello);
}

function failureCallback() {
  console.log("Failure call is triggered");
}

function createAudioFile(create, successCallback, failureCallback) {
  console.log("Hey create is called", create);
  if (false) {
    successCallback;
  } else failureCallback();
}

createAudioFile("create", successCallback, failureCallback);

function createAudioFileDiff(create) {
  return new Promise((resolve, reject) => {
    console.log("Hey create is called11", create);
    if (!false) {
      resolve("YYY");
    } else reject();
  });
}

createAudioFileDiff("create").then(successCallback).catch(failureCallback);

// createAudioFileDiff();
