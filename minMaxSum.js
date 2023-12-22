function minMaxSum(arr) {
	const sum = arr.reduce((acc, cur) => acc + cur);

	const minSum = sum - Math.max(...arr);
	const maxSum = sum - Math.min(...arr);

	console.log(`${minSum} ${maxSum}`);
}

minMaxSum([539674108, 549382170, 270968351, 746219035, 140597628]);

