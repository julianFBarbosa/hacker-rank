function theLoveLetterMystery(s) {
	const reversedS = s.split("").reverse().join();
	let tries = 0;

	if (s == reversedS) {
		return tries;
	}

	const alphabet = "abcdefghijklmnopqrstuvwxyz";
	let index = 1;
	const alphabetList = {};
	const stringIndexes = [];

	for (let char of alphabet) {
		alphabetList[char] = index++;
	}

	for (let char of s) {
		stringIndexes.push(alphabetList[char]);
	}
}

console.log(
	["abc", "abcba", "abcd", "cba"].map(theLoveLetterMystery)
);
