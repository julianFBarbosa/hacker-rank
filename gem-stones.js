function gemstones(arr) {
	let gemstoneQuantity = 0;
	const uniqueMinerals = new Set(...arr.join("").split());

	uniqueMinerals.forEach((mineral) => {
		if (arr.every((str) => str.includes(mineral))) {
			gemstoneQuantity++;
		}
	});

	return gemstoneQuantity;
}

console.log(gemstones(["abcdde", "baccd", "eeabg"]));
