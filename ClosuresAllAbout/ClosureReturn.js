function makeFunctions() {
  const name = "Rea";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunction = makeFunctions();
//Side note if var used initially undefined, if no keyword then will nothing initailly
//Later in both cases will have the returned value of makeFunctions which here
//is the function definition of displayname
myFunction();

function closeOverNumbers() {
  let number = 10;
  function add() {
    number = number + 10;
    console.log("num", number);
  }

  return add;
}

var mySecondFunction = closeOverNumbers();
// closeOverNumbers();

console.log("second");
for (let i = 0; i < 3; i++) {
  mySecondFunction(); //20 30 40
}

console.log("Third");
var myThirdFunction = closeOverNumbers();

myThirdFunction();

// // console.log("ooo", number);

//Thus through above we are able to give memory to a function and also keep the variable private
//Also we can keep two different instance of a private variable

// The following code illustrates how to use closures to define public functions that can access private functions and variables
function dance() {
  function sum(num) {
    console.log("hey sum", num);
  }
  return sum;
}
dance()(10);
