const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const inputLength = input.shift();

let coordinate = [];

for (let i = 0; i < input.length; i++) {
  coordinate.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < inputLength; i++) {
  const x = Math.abs(coordinate[i][0] - coordinate[i][3]);
  const y = Math.abs(coordinate[i][1] - coordinate[i][4]);

  const distance = Math.sqrt(x ** 2 + y ** 2);

  // 원 위치, 크기 같을 때
  if (
    distance === 0 &&
    coordinate[i][0] === coordinate[i][3] &&
    coordinate[i][1] === coordinate[i][4] &&
    coordinate[i][2] === coordinate[i][5]
  ) {
    console.log(-1);
    continue;
  }

  // 외접 할 때
  if (distance === coordinate[i][2] + coordinate[i][5]) {
    console.log(1);
    continue;
  }

  // 내접 할 때
  if (distance === Math.abs(coordinate[i][2] - coordinate[i][5])) {
    console.log(1);
    continue;
  }

  // 두 점에서 만날 때
  if (
    distance < coordinate[i][2] + coordinate[i][5] &&
    distance > Math.abs(coordinate[i][2] - coordinate[i][5])
  ) {
    console.log(2);
    continue;
  }

  // 안만남
  console.log(0);
}
