const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const output = [];

for (let i = 1; i <= input[0]; i++) {
  const readline = input[i].split(' ');
  const H = readline[0], W = readline[1], N = readline[2];

  let Y = N % H;
  if (Y === 0) Y = H;

  let X = `${Math.floor((N - 1) / H) + 1}`;
  if (X.length === 1) X = `0${X}`;
  output.push(Y + X);
}
console.log(output.join('\n'));