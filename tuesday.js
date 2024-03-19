const name = `Derrick`;
const age = 22;

function verifyAdulthood(name, age) {
  if (age < 0) {
    return `Please enter a valid age!`;
  }
  if (age < 18) {
    return `You are not old enough to enter, ${name}!`;
  }

  return `Welcome, ${name}!`;
}

console.log(verifyAdulthood(name, age));
