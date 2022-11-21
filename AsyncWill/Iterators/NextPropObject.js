function createNewFunction(array) {
  let i = 0;
  const loopinObj = {
    next: function looping() {
      const element = array[i];
      i++;
      return element;
    },
  };
  return loopinObj;
}

const newFunction = createNewFunction([4, 5, 6]); //got an object with a next method in it
const element1 = newFunction.next();
console.log("element1", element1);
const element2 = newFunction.next();
console.log("element2", element2);

function* createFlow() {
  yield 4, yield 5;
}

const flowFunction = createFlow();
const ele1 = flowFunction.next();
console.log("ele1", ele1);
const ele2 = flowFunction.next();
console.log("ele2", ele2);
const ele3 = flowFunction.next();
console.log("ele1", ele3);
