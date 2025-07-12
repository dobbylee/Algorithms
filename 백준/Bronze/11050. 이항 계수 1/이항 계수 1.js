const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let n = input[0], k = input[1];

if (k > n - k) k = n - k;
let numerator = 1, denominator = 1;
for (let i = 0; i < k; i++) {
  numerator *= (n - i);
  denominator *= (i + 1);
}
console.log(numerator / denominator);