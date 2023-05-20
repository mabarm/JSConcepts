let arr = [1, 2, [3, 4, [5, 6, 7]]];
// console.log(arr.flat(Infinity)); //default is 1, removes 1 //doesn't updaate the initial array, instead gives a new one

// console.log(arr);
function flattenArray(arr) {
  const newArray = [];

  function getArray(arg) {
    arg.forEach((element) => {
      if (Array.isArray(element)) {
        getArray(element);
      } else {
        newArray.push(element);
      }
    });
  }
  getArray(arr);
  return newArray;
}

// console.log(flattenArray(arr));

function flattenArrayFor(arr) {
  const newArray = [];
  const getArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
      if (Array.isArray(value)) {
        getArray(value);
      } else {
        newArray.push(value);
      }
    }
  };
  getArray(arr);
  //   console.log("ar", newArray);
  return newArray;
}
// let obj = [10, [[20]]];

// console.log(flattenArrayFor(obj));
let obj = [10, [[20]]];
// let hello = {
//   flattenArrayFor: flattenArrayFor,
// };
// flattenArrayFor.apply(obj, [obj]);

function flattenArrayThird(arr) {
  const newArray = [];
  const getArray = (arr) => {
    for (let value of arr) {
      //   let value = arr[i];
      if (Array.isArray(value)) {
        getArray(value);
      } else {
        newArray.push(value);
      }
    }
  };
  getArray(arr);
  return newArray;
}
// console.log(flattenArrayThird(arr));

function flattenArrayFourth(arr) {
  const newArray = [];
  const getArray = (arr) => {
    arr.forEach((value) => {
      //   let value = arr[i];
      if (Array.isArray(value)) {
        getArray(value);
      } else {
        newArray.push(value);
      }
    });
  };

  getArray(arr);
  //   console.log("ar", newArray);
  return newArray;
}

console.log(flattenArrayFourth(arr));
