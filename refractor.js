const cleverName = {
  name: "Derrick",
  age: 22,
};

const functionName = (list) => ({
  ...list,
  job: "Business Software Implementation/Development",
  age: 22.89,
});

console.log(functionName(cleverName));
