console.log("1st line");

const data = fetch(
  "https://frontendmasters.com/courses/javascript-new-hard-parts/introducing-asynchronicity/"
);

console.log(data);

//This follows ordering of slow task but thread is blocked.
