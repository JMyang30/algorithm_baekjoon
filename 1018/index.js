const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const [y, x] = input.shift().split(" ");

const BOARD = [];
const SIZE = { x: 8, y: 8 };

for (let i = 0; i < input.length; i++) {
  BOARD.push(input[i].split(""));
}

const paintCount = (startColor, startRow, startCol) => {
  let count = 0;
  let nextColor = startColor;

  for (let i = 0; i < startRow + SIZE.x; i++) {
    for (let j = 0; j < startCol + SIZE.y; j++) {
      if (BOARD[i][j] !== startColor) {
        count++;
      }
      nextColor = nextColor === "B" ? "W" : "B";
    }
    nextColor = nextColor === "B" ? "W" : "B";
  }

  return count;
};

let result = SIZE.x * SIZE.y;

for (let i = 0; i < y - SIZE.y; i++) {
  for (let j = 0; j < x - SIZE.x; j++) {}
}
