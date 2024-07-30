const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

console.log(input);

const i_length = parseInt(input[0]);
const A_array = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B_array = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(A_array);
console.log(B_array);

let result = 0;
for (let i = 0; i < i_length; i++) {
  result += A_array[i] * B_array[i];
}
console.log(result);
