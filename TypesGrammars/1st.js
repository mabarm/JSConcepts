var x = 40;

x++; //returns value and then  updating --> so post updating
console.log(x);
x;
console.log(x);
++x; //updates  and then returns value --> so pre updating
console.log(x);
x;
console.log(x);

function plusplus(oldValue) {
  var oldValueCoerced = Number(oldValue);
  x = oldValueCoerced + 1;
  return oldValueCoerced;
}

var x = "5";
var y = plusplus(x);
console.log(x);
console.log(y);
