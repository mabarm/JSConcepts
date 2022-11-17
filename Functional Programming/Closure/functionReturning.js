const functionCreator = () => {
  let counter = 0;
  const add = (num) => num + 10;
  return add;
};

const generatedFunc = functionCreator(); // functionCreator called and at end equiv to add
//generatedFunc is a label which will store the output of functionCreator,
//() says work to be done
//Here inintially generatedFunc is unintialized not undefined as const and it can't have two different data types

const result = generatedFunc(20); //equivalent to add()
//Thus generatedFunc is the new label for add(the return of functionCreator executed earlier)

console.log(result);
