const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const output = [0];

const N = +input[0];
const sizes = input[1].split(' ');
const TP = input[2].split(' ');
const T = +TP[0], P = +TP[1];
for (const char of sizes) {
  output[0] += Math.ceil(+char / T);
}
output.push(Math.floor(N / P) + ' ' + (N % P));
console.log(output.join('\n'));