const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const gameCount = parseInt(input.shift());

const includeCircle = (x, y, cx, cy, cr) => {
  return cr ** 2 > (cx - x) ** 2 + (cy - y) ** 2;
};

const results = [];

for (let i = 0; i < input.length; ) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  i++;
  const n = parseInt(input[i]);
  i++;
  let result = 0;

  for (let j = 0; j < n; j++) {
    const [cx, cy, cr] = input[i].split(" ").map(Number);
    i++;

    const startInside = includeCircle(x1, y1, cx, cy, cr);
    const endInside = includeCircle(x2, y2, cx, cy, cr);

    if (startInside !== endInside) {
      result++;
    }
  }
  results.push(result);
}

console.log(results.join("\n"));
