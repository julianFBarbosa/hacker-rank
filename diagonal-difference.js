const arr = [
	[11, 2, 4],
	[4, 5, 6],
	[10, 8, -12],
];

function diagonalDifference(arr) {
	let rightSum = 0;
	let leftSum = 0;

	for (let i = 0; i < arr.length; i++) {
		rightSum += arr[i][i];
		leftSum += arr[i][arr.length - i - 1];
	}
    
	return Math.abs(rightSum - leftSum);
}

const result = diagonalDifference(arr);
