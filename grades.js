//Loop over an array of student grades (values from 50-100) and output how many of each grades there are.
console.log("hello");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var scoreGrade = {
	A: 0,
	B: 0,
	C: 0,
	D: 0,
	F: 0
};


// Use console.log() to output the following criteria:
// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 91) {
		scoreGrade.A++
	} else if (scores[i] >= 81 && scores[i] < 91) {
		scoreGrade.B++
	} else if (scores[i] >= 71 && scores[i] < 81) {
		scoreGrade.C++
	} else if (scores[i] >= 61 && scores[i] < 71) {
		scoreGrade.D++
	} else if (scores[i] >= 50 && scores[i] < 61) {
		scoreGrade.F++
	} else {
		"You suck at math!"
	}
};

console.log(`There are ${scoreGrade.A} A's, ${scoreGrade.B} B's, ${scoreGrade.C} C's, ${scoreGrade.D} D's, and ${scoreGrade.F} F's.`);

var sortedScores = scores.sort(function(first, second) {
	return first - second;
});
console.log(sortedScores);

var lowestScore = sortedScores[0];
console.log("Lowest Score: ", lowestScore);

var highestScore = sortedScores[sortedScores.length - 1];
console.log("Highest Score", highestScore);

