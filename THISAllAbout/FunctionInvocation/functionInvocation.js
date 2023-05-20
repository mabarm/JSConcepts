//function invocation not this

function hello() {
  console.log("hel", this);
}

hello();

(function red() {
  console.log("dance", this);

  (function () {
    "use strict";

    console.log("inner", this);
  })();
})();

this.session = "Yellow";
console.log("number", this === window, this);

console.log(undefined + undefined);
