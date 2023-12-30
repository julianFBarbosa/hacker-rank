function absolutePermutation(n, k) {
	const elements = [...Array(n).keys()].map((elem) => elem + 1);

	if (k === 0) {
		return elements;
	}

	const cache = new Set([...elements]);
	const output = [];

	for (let i = 1; i <= n; i++) {
		const lower = i - k;
		const upper = i + k;

		if (cache.has(lower)) {
			cache.delete(lower);
			output.push(lower);
		} else if (cache.has(upper)) {
			cache.delete(upper);
			output.push(upper);
		} else {
			return [-1];
		}
	}

	return output;
}

console.log(absolutePermutation(2, 1));
