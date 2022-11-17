const obj = {
  name: "Ryan",
};

console.log(obj.name);
console.log(obj.hasOwnProperty("num"));

console.log(Object.prototype); //As soon as JS engine runtime runs automatically created
//function object combo  labelled as Object

console.log(Function.prototype);
console.log("B", Function.prototype.__proto__);
console.log("A", Function.__proto__);

console.log(Array.prototype);
