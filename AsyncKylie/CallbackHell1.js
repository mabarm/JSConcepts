setTimeout(function a() {
  console.log("In A");
  setTimeout(function b() {
    console.log("In B");
    setTimeout(function c() {
      console.log("In C");
    }, 3000);
  }, 2000);
}, 1000);

//Many Indentations , not much readable to understand
