const numbersToWords = {
	0: "zero",
	1: "one",
	2: "two",
	3: "three",
	4: "four",
	5: "five",
	6: "six",
	7: "seven",
	8: "eight",
	9: "nine",
	10: "ten",
	11: "eleven",
	12: "twelve",
	13: "thirteen",
	14: "fourteen",
	15: "fifteen",
	16: "sixteen",
	17: "seventeen",
	18: "eighteen",
	19: "nineteen",
	20: "twenty",
	30: "thirty",
	40: "forty",
	50: "fifty",
	60: "sixty",
	70: "seventy",
	80: "eighty",
	90: "ninety",
};

function getMinutesName(minutes) {
	const minutesInWords = minutes < 2 ? "minute" : "minutes";
	let complement = minutes <= 30 ? "past" : "to";
	let name = "";
	minutes = (minutes < 30 ? minutes : 60 - minutes) + "";

	if (minutes == "0") {
		name = "o' clock";
	} else if (minutes < 20 && minutes != 15) {
		name = `${numbersToWords[minutes]} ${minutesInWords} ${complement}`;
	} else if (minutes == 45 || minutes == 15) {
		name = `quarter ${complement}`;
	} else if (minutes == 30) {
		name = `half ${complement}`;
	} else {
		name = `${numbersToWords[minutes[0] + 0]} ${
			numbersToWords[minutes[1]]
		} ${minutesInWords} ${complement}`;
	}

	return name;
}

function getHoursName(h, m) {
	let name = "";

	if (m <= 30) {
		name = numbersToWords[h];
	} else {
		name = numbersToWords[h + 1];
	}

	return name;
}

function timeInWords(h, m) {
	const minutesInWords = getMinutesName(m);
	const hoursInWords = getHoursName(h, m);
	let timeInWords = "";

	if (m == 0) {
		timeInWords = `${hoursInWords} ${minutesInWords}`;
	} else {
		timeInWords = `${minutesInWords} ${hoursInWords}`;
	}

	return timeInWords;
}

console.log(timeInWords(3, 30));
