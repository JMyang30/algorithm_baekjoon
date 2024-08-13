const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [X, Y] = input;

const targetRate = Math.floor((Y * 100) / X) + 1;

const calculate = () => {
  if (X === Y) {
    return -1;
  }

  if (targetRate === 100) {
    return -1;
  }

  return Math.ceil((targetRate * X - 100 * Y) / (100 - targetRate));
};

console.log(calculate());
