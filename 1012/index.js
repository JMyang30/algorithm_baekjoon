const input = require("fs")
  .readFileSync("text.txt")
  .toString()
  .trim()
  .split("\r\n");

const testCase = input.shift();

const mx = [0, 0, 1, -1];
const my = [1, -1, 0, 0];

const bfs = (x, y, N, M, farm, visited) => {
  const queue = [[y, x]];

  while (queue.length) {
    let [cy, cx] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = cy + my[i];
      let nx = cx + mx[i];

      if (ny >= 0 && ny < N && nx >= 0 && nx < M && !visited[ny][nx]) {
        visited[ny][nx] = true;
        if (farm[ny][nx] === 1) {
          queue.push([ny, nx]);
        }
      }
    }
  }
};

for (let t = 0; t < testCase; t++) {
  let warm = 0;
  const [M, N, K] = input.shift().split(" ").map(Number);

  const farm = new Array(N).fill(0).map(() => new Array(M).fill(0));
  const visited = new Array(N).fill(0).map(() => new Array(M).fill(false));
  const cabbage = [];

  for (let i = 0; i < K; i++) {
    const [X, Y] = input[i].split(" ").map(Number);
    farm[Y][X] = 1;
    cabbage.push([Y, X]);
  }

  for (let i = 0; i < cabbage.length; i++) {
    const [Y, X] = cabbage[i];

    if (!visited[Y][X] && farm[Y][X] === 1) {
      visited[Y][X] = true;
      bfs(X, Y, N, M, farm, visited);
      warm++;
    }
  }

  console.log(warm);
  input.splice(0, K);
}
