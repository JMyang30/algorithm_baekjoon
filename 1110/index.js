const input = require("fs").readFileSync("text.txt").toString().trim();

const temp = parseInt(input);
let cont = 0;
let count = 0;

if (temp !== 0) {
  while (temp !== parseInt(cont)) {
    if (count === 0) {
      if (temp < 10) {
        cont = "0" + temp;
      } else {
        cont = temp.toString();
      }
    }

    const arr = cont.split("").map(Number);
    const sum = arr[0] + arr[1];

    const lastSum = sum.toString().split("").slice(-1);

    cont = `${arr[1]}${lastSum}`;

    count++;
  }
  console.log(count);
} else {
  console.log(1);
}
