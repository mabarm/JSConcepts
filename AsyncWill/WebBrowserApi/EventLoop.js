//ALthough setTimeout is 0 , still it has to wait till the call stack is empty and all global code is executed
//printHello will still wait in callback queue or task queue.
//This process of checking and only then allowing things from queue to enter call stack is done/termed as event loop
console.log("First");

function printHello() {
  console.log("Hello");
}

function blocking() {
  //blocks the thread
  for (let i = 0; i < 1000000000; i++);
}

//Facade function setTimeout
setTimeout(printHello, 0);

blocking();

console.log("Me ");
