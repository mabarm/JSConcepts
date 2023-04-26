let counter = 0;
function inputPressed() {
  counter++;
  console.log("Pressed", counter);
}

//wrong

function decorator(callback, delay) {
  let flag = true;
  return function () {
    if (flag) {
      callback();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const hello = decorator(inputPressed, 2000);
