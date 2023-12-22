function staircase(num) {
    let str = "";
    const character = "#";

    for (let i = 1; i <= num; i++) {
        str += `${" ".repeat(num - i)}${character.repeat(i)}\n`;
    }

    console.log(str);
}

staircase(6);
