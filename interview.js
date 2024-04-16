const increments = [1, 2, 3];

function createScoreIncrementor(increment) {
  return (score) => score + increment;
}

const scoreUpdaters = increments.map(createScoreIncrementor(1));

console.log(scoreUpdaters);
