const name = `Derrick`;
const age = 22;

function verifyAdulthood(myName, myAge) {
  if (myAge < 0) {
    return `Please enter a valid age!`;
  }
  if (myAge < 18) {
    return `You are not old enough to enter, ${myName}!`;
  }
  return ` Welcome, ${myName}! `;
}

console.log(verifyAdulthood(name, age));
