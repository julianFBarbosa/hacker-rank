function stringSimilarity(s) {
	let suffix = s;
	let total = 0;

	function getMaxPrefix(str, substr) {
		let aux = "";

		for (let idx = 0; idx < str.length; idx++) {
			if (!str.startsWith(substr[0])) {
				break;
			}

			if (substr[idx] != str[idx]) {
				break;
			}

			aux += substr[idx];
		}

		return aux.length;
	}

	function compareStrings(str, total) {
		if (!str.length) {
			return total;
		}

		let substrLength = getMaxPrefix(s, str);

		return total + compareStrings(str.slice(1), substrLength);
	}

	let result = compareStrings(suffix, total);

	return result;
}

console.log(stringSimilarity("abcabccba"));
