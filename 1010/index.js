const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

input.shift();

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

const combination = (a, b) => {
  return factorial(b) / (factorial(a) * factorial(b - a));
};

for (let i = 0; i < input.length; i++) {
  const bridge = input.map((item) => item.split(" ").map(Number));

  const N = bridge[i][0];
  const M = bridge[i][1];

  if (M - N === 0) {
    console.log(1);
  } else {
    console.log(Math.round(combination(N, M)));
  }
}
