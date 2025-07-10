const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').sort((a, b) => a - b);
const output = [];
let a = +input[0], b = +input[1];
const product = a * b;

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}
output.push(a);
output.push(product / a);
console.log(output.join('\n'));