const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
	let positiveRatio = 0;
	let negativeRatio = 0;
	let zeroRatio = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			positiveRatio++;
			continue;
		}

		if (arr[i] < 0) {
			negativeRatio++;
			continue;
		}

		zeroRatio++;
	}

	console.log((positiveRatio / arr.length).toFixed(6))
	console.log((negativeRatio / arr.length).toFixed(6))
	console.log((zeroRatio / arr.length).toFixed(6))
}

const result = plusMinus(arr);
console.log("result", result);
