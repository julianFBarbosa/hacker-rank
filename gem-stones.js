function gemstones(arr) {
	let gemstoneQuantity = 0;
	const uniqueMinerals = arr.reduce((acc, str) => {
		const chars = str.split("");

		chars.forEach((element) => {
			if (!acc.includes(element)) {
				acc.push(element);
			}
		});

		return acc;
	}, []);

	uniqueMinerals.forEach((mineral) => {
		if (arr.every((str) => str.includes(mineral))) {
			gemstoneQuantity++;
		}
	});

	return gemstoneQuantity;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
