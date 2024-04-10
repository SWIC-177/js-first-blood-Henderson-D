const objectLiteral = {
  greeting: "Hey",
  name: "you",
  rest: "!",
};

const otherObject = objectLiteral;
console.log(otherObject);
otherObject.rest = "?";

console.log(otherObject);
