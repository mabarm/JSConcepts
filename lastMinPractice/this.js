function sum(a, b) {
    console.log(this === window); // => true
    this.myNumber = 20; // add 'myNumber' property to global object
    return a + b;
  }
  // sum() is invoked as a function
  // this in sum() is a global object (window)
  sum(15, 16);     // => 31
  window.myNumber; // => 20