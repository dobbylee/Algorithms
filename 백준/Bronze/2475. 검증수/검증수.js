const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let sum = 0;
for (const num of input) {
  sum += num**2;
}
console.log(sum % 10);