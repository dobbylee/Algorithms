const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = +input[0];
for (let t = 0; t < T; t++) {
  const k = input[1 + t * 2];
  const n = input[1 + t * 2 + 1];

  let floor = Array.from({length: n}, (_, i) => i + 1);
  for (let i = 0; i < k; i++) {
    for (let j = 1; j < n; j++) {
      floor[j] += floor[j - 1];
    }
  }
  console.log(floor[n - 1]);
}