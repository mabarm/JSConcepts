let arr = [1,2, 3]

function callback(acc, target){
    console.log('mamata1 ', acc, "target", target)
    return acc * target
}


Array.prototype.myReduce = function(callback, initialValue){
  if(!initialValue && !this.length) throw new TypeError("RRRED")
  let acc = initialValue ? initialValue : this[0];
  for( let index = initialValue ? 0 : 1 ; index<this.length;index++){
     acc = callback(acc, this[index], index, this)
  }
  return acc;
}

let ans = [].myReduce(callback,0)
console.log("ans", ans);




// function newReduce(callback1, arr, initialValue){
//     let acc = initialValue ? initialValue : arr[0]
//     // if (arr.length === 0 && !initialValue) {
//     //     throw new TypeError('Reduce of empty array with no initial value');
//     // }
//     for(let i = initialValue ? 0 : 1; i< arr.length;i++){
//         acc = callback1(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// let newAns = newReduce(callback, [])
// console.log("ans", newAns);
