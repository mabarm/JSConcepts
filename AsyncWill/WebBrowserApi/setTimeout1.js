//setTimeout is a facade function that spins up Timer functionality in web browser
//that gets the function reference and timer timing
//and on completion of that timer invokes the function
console.log("first");

function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 3000);

console.log("Me");
