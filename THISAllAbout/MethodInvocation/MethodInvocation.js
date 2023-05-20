/* The method invocation requires a property accessor form to call the function (obj.myFunc() or obj['myFunc']()),
 while function invocation does not (myFunc()).
*/

const myObject = {
  helloObj: function red() {
    console.log("this", this);
  },
};

//methods are functions which are property on an object
//can only be accessed via property accessor
//here, helloObj is the method, myObject.helloObj(); or myObject["helloObj"](); to access

myObject.helloObj();
myObject["helloObj"]();
