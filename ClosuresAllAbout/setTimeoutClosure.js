// function a() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// console.log("Heyy");

// function b() {
//   for (var i = 0; i < 3; i++) {
//     (function (i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     })(i);
//   }
// }

console.log("simple");

function c() {
  for (var i = 0; i < 3; i++) {
    function add(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }

    add(i);
  }
}

// a();
// b();
c();
