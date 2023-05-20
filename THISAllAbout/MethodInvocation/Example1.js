const words = ["Hello", "World"];
words.join(", "); // method invocation

const obj = {
  a: this == window,
  myMethod() {
    console.log("red", this == window, this == obj);
    return new Date().toString();
  },
};
obj.myMethod(); // method invocation
// console.log("aaa", obj.a);

//Example 2

/*
3.2. Pitfall: separating method from its object
⚠️ A method can be extracted from an object into a separated variable const alone = myObj.myMethod. When the method is called alone alone(), detached from the original object, you might think that this is the object myObject on which the method was defined.

👍 Correctly if the method is called without an object, then a function invocation happens, where this is the global object window or undefined in strict mode (see 2.1 and 2.2).
*/

const func = obj.myMethod;
func(); // function invocation
// parseFloat("16.6"); // function invocation
// isNaN(0); // function invocation

//1 solution if you want to invoke the function later
const obj1 = {
  a: this == window,
  b: 10,
  myMethod() {
    console.log("red sea", this == window, this == obj1, this.b);
    return new Date().toString();
  },
};

const func2 = obj1.myMethod.bind(obj1);

func2();

//2 solution is arrow function

//will do more, to do examples blog
