function alternatingCharacters(s) {
	const characters = s.split("");
	let deletions = 0;

	characters.forEach((letter, index) => {
		if (letter === characters[index + 1]) {
			deletions++;
		}
	});

	return deletions;
}

const arr = ["AAAA", "BBBBB", "ABABABAB", "BABABA", "AAABBB"];

arr.forEach((element) => {
	console.log(alternatingCharacters(element));
});
