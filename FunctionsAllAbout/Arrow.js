const a = () => {
  return "red";
};

const b = (n1, n2) => n1;

const user = {
  name: "Ram",
  in() {
    console.log("regular", this.name);
  },
  arrow: () => {
    console.log(this, "rrr", this.name);
    return this.name;
  },
};

user.in();
user.arrow();
