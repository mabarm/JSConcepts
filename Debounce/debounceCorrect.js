let counter = 0;
function inputPressed() {
  counter++;
  console.log("Pressed", counter);
}

function decorator(callback, delay) {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => callback(), delay);
  };
}

const hello = decorator(inputPressed, 1000);
hello();

// function handleChange() {
//   console.log("Hi");
// }

// function decorator(callback, delay){
//  let timer;
//  return function (){
//   if(timer){
//     clearTimeout(timer);
//   }
//   timer = setTimeout(() => callback(), delay);
//  }
// }

// const input = document.querySelector("input");
// input.addEventListener('keyup', decorator(handleChange, 3000))

// const bye = decorator(handleChange, 2000);

function throttle(callback, delay) {
  let shouldWait = false;
  return function () {
    if (shouldWait) return;
    callback();
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
