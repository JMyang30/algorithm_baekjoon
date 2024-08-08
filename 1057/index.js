const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let KIM = input[1],
  LIM = input[2];

let count = 0;
while (LIM !== KIM) {
  LIM = Math.floor(LIM / 2 + (LIM % 2));
  KIM = Math.floor(KIM / 2 + (KIM % 2));
  count++;
}

console.log(count);
