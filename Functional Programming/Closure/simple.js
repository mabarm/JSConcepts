const multiply = (inputNum) => inputNum * 2;

const output1 = multiply(7);
const output2 = multiply(5);

console.log(output1, output2);

/* Functions have no memory of previous execution 
 Hence after multiply(7) was done executing it doesn't remember what parameter inputNum was having argumnet value.
*/

/* So imagine we can give permanent memories to our functions :
which begins with returning function from function
*/
