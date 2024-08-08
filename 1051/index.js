const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const [col, row] = input.shift().split(" ").map(Number);

const square = input.map((item) => item.split(""));

let result = 0;
for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    // 최대 정사각형 크기
    const limit = Math.min(col - i, row - j);

    for (let k = 1; k < limit; k++) {
      // 꼭지접 값 비교
      const rec = [
        square[i][j + k],
        square[i + k][j],
        square[i + k][j + k],
      ].every((el) => el === square[i][j]);

      // 최댓값 대입
      if (rec && result < k) {
        result = k;
      }
    }
  }
}

console.log((result + 1) ** 2);
