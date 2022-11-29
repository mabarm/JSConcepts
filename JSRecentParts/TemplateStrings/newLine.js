const student = "John";
let teacher = "Ryan";

const output2 = "The name of teacher is " + teacher + "of student " + student;
console.log("output2", output2);

const output4 =
  "The name of teacher is " + teacher + "\n" + "of student " + student;
console.log("output4", output4);

const output3 = `The name of teacher is ${teacher}
 of student ${student}`;
console.log("output3", output3);
