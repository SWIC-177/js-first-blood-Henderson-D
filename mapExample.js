const people = [
  { name: "Derrick", age: 22 },
  { name: "Taboo", age: 5 },
];

function createGreeting(greeting, increment) {
  return (person) =>
    `${greeting} ${person.name}. You are ${person.age + increment} years old.`;
}

const greetings = people.map(createGreeting("Hello", 75));

console.log(greetings);
