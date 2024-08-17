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
    shouldWait = true;
    callback();
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}


// function inputPressed() {
//   console.log("Input was pressed!");
// }

// const hello = decorator(inputPressed, 1000);

// document.getElementById("inputField").addEventListener("input", hello);


/*


function throttle(callback, delay) {
  let shouldWait = false;
  return function () {
    if (shouldWait) return;    // Step 1: If shouldWait is true, exit early
    shouldWait = true;         // Step 3: Set shouldWait to true to block subsequent calls
    callback();                // Step 2: Execute the callback function
    setTimeout(() => {
      shouldWait = false;      // Step 4: After delay, reset shouldWait to false
    }, delay);
  };
}


*/

/*COOOO

const decorator = debounce(function(count){
  console.log("MM", count)
}, 1000)

function debounce(callback, delay){
  let timer ;
  let count = 0;

  const context = this;
  const args = arguments;
  return function(){
    if(timer){
      clearTimeout(timer)
    }
    count++
    console.log("hey", count)
    timer = setTimeout(() => callback.call(context, count), delay)
  }
}


*/