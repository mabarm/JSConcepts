function name0(name) {
  console.log("Hey");
  return name;
}

name0();

const b = function name1(name) {
  console.log("DD", name);
  //   return name;
};

console.log("Without", b());
console.log("With", b("second"));
// name1("Second"); //error

const c = function () {
  console.log("In c");
  return 10;
};

const hello = () => {
  console.log("In hello");
};

console.log(c());

hello();
