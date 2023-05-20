function hello() {
  const name = "ram";
  function say() {
    console.log(name);
  }
  say(); //closure created, holding name with value ram
  const a = "sss";

  say(); ////closure created, holding name with value ram
}

hello();

function increaseNumber() {
  let number = 1;
  function increasing() {
    number++;
  }
  increasing();
  increasing();
  console.log("number", number);
}

increaseNumber();
