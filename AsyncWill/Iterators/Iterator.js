//Looping array using function returning function
//When we return a function from a function we give it some extra bonus facilities
//Closure concept is used, backpack/C.O.V.E/P.L.S.R.D
function createArray(array) {
  let i = 0;
  function loopArray() {
    const res = array[i];
    i++;
    return res;
  }
  return loopArray;
}

let myArray = [1, 2, 3];
const iterator = createArray(myArray);

const firstElement = iterator();
console.log("First element", firstElement);

const secondElement = iterator();
console.log("Second element", secondElement);

// for (let element in myArray) {
//   const result = newFunction();
//   console.log(result);
// }
