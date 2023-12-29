function maxXor(lo, hi, k) {
	let max = 0;

	for (let i = lo; i < k; i++) {
		for (let j = hi; j > i; j--) {
			let tempMax = i ^ j;

			if (tempMax < k) {
				max = Math.max(max, tempMax);
			}
		}

		if (max == k) {
			break;
		}
	}

	return max;
}

maxXor(10, 80, 19);
