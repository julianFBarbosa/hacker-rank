function beautifulBinaryString(b) {
	if (b.indexOf("010") < 0) {
		return 0;
	}
	const changes = b.match(/010/g).length;

	return changes;
}

console.log(beautifulBinaryString("0100101010"));
