function calling() {
  console.log("Normal function");
  setTimeout(function callback() {
    console.log("I am the callback function executed");
  }, 1000);
}

calling();
