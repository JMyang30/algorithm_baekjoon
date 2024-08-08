const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const [y, x] = input.shift().split(" ").map(Number);

const BOARD = [];
const SIZE = { x: 8, y: 8 };

for (let i = 0; i < input.length; i++) {
  BOARD.push(input[i].split(""));
}

const paintCount = (startColor, startRow, startCol) => {
  let count = 0;
  let nextColor = startColor;

  for (let i = startRow; i < startRow + SIZE.x; i++) {
    for (let j = startCol; j < startCol + SIZE.y; j++) {
      if (BOARD[i][j] !== nextColor) {
        count++;
      }
      nextColor = nextColor === "B" ? "W" : "B";
    }
    nextColor = nextColor === "B" ? "W" : "B";
  }

  return count;
};

let result = SIZE.x * SIZE.y;

for (let i = 0; i <= y - SIZE.y; i++) {
  for (let j = 0; j <= x - SIZE.x; j++) {
    const black = paintCount("B", i, j);
    const white = SIZE.x * SIZE.y - black;
    const min = black > white ? white : black;

    if (result > min) {
      result = min;
    }
  }
}

console.log("result:", Math.abs(result));
