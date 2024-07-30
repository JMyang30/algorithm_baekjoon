const input = require("fs").readFileSync("text.txt").toString().trim();

let STICK = 64;
let STICKS = [];

const cutting = (req) => {
  if (STICK === parseInt(req)) {
    return 1;
  }

  while (STICKS.reduce((acc, cur) => acc + cur, 0) !== parseInt(req)) {
    STICK = STICK / 2;

    if (STICK + STICKS.reduce((acc, cur) => acc + cur, 0) <= req) {
      STICKS.push(STICK);
    }
  }

  return STICKS.length;
};

console.log(cutting(input));
