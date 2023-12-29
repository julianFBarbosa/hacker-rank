function dnaComplement(s) {
	const dnaTable = {
		A: "T",
		T: "A",
		C: "G",
		G: "C",
	};
	let reverse = s.split("").reverse().join("");
	let complement = "";

	reverse.split("").forEach((letter) => {
		complement += dnaTable[letter];
	});

	return complement;
}

console.log(dnaComplement("ACCGGGTTTT"));
