const grid = [
	"...O...",
	"...O...",
	"....O..",
	".......",
	"OO.....",
	"OO.....",
];

function bomberMan(n, grid) {
	let aux = grid.map((elem) => {
		return "O".repeat(elem.length);
	});

	function detonate(x, y, xLength, yLength) {
		console.log("xLength", xLength);
		console.log("0 <= x", 0 <= x);
		console.log("x < xLength", x < xLength);
		if (0 <= x && x < xLength && 0 <= y && y < yLength) {
			aux[x][y] = ".";
		}
	}

	if (n == 1) {
		return grid;
	}

	if (n % 2 === 0) {
		return aux;
	}
 
	aux = grid.map((elem) => elem.split(""));

	const xIndexes = [0, 0, 0, 1, -1];
	const yIndexes = [0, -1, 1, 0, 0];

	for (let t = 0; t < ((n + 1) % 2) + 1; t++) {
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[i].length; j++) {
				if (grid[i][j] == "O") {
					xIndexes.forEach((xIndex) => {
						yIndexes.forEach((yIndex) => {
							detonate(
								i + xIndex,
								j + yIndex,
								aux.length,
								aux[i].length
							);
						});
					});
				}
			}
		}
	}

	aux = aux.map((elem) => elem.join(""));
	return aux;
}

console.log(bomberMan(11, grid));
