/* bad time code
function find(index) {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
}
*/

function find() {
  let a = [];
  for (let i = 0; i < 100000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

const toFind = find();
console.time("6");

toFind(1);
console.timeEnd("6");

console.time("61");
toFind(2);
console.timeEnd("61");

// console.time("6");
// find(4);
// console.timeEnd("6");

// console.time("61");
// find(7);
// console.timeEnd("61");
