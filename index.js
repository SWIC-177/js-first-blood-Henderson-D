const message = "The score is: ";

while (true) {
    let totalScore = 0;

    for (let i = 0; i < 70; i++) {
        const point = parseInt(prompt('What point was scored? '));
        
        const newScore = (score) => {
            if (score % 6 === 0 || score % 3 === 0 || score % 2 === 0) {
                totalScore += score;
                return totalScore;
            } else {
                return "Not a valid point";
            } 
        };
        
        const messageScore = (scoreIs, addedScore) => {
            return `${scoreIs} ${addedScore}`;
        };

        console.log(messageScore(message, newScore(point)));
    }
}