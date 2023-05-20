// const arr = [1, [2, 3], [4, [5, 6]]];

// const hello = arr.flat();
// console.log(hello);

const arr = [1, [2, 3], [4, [5, 6]]];

function flattenArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val),
    []
  );
}

const flattenedArr = flattenArray(arr);
console.log("aa", flattenedArr);
