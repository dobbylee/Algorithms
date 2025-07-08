const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const output = [];

for (let i = 1; i <= +input[0]; i++) {
  let total = 0;
  let sum = 0;
  for (const char of input[i]) {
    if (char === 'O') {
      sum++;
      total += sum;
    } else {
      sum = 0;
    }
  }
  output.push(total);
}
console.log(output.join('\n'));