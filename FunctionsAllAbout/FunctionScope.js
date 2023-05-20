//Function scope
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scope
//1st example
function hello() {
  //a  and red is defined in the same scope
  let a = 10;

  function red() {
    function green() {
      console.log(a);
    }
    green();
  }
  red();
}

hello();

// console.log(a);

/////////////Second example

let name1 = "ram";
let name2 = "sam";
let num1 = 10;
let num2 = 90;

function showName() {
  let name1 = "don";
  let num1 = 100; //variable shadowing can say but actually syntax rules
  let num2 = 900;
  console.log("inside showname", name1, name2);

  function add() {
    return num1 + num2;
  }

  return add;
}

// da // Reference error , da is not defined

console.log("outside showname", name1, name2);
let result = showName();
console.log("result", result());
