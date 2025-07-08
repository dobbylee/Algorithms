const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const numStr = `${input[0] * input[1] * input[2]}`;
for (let i = 0; i < numStr.length; i++) {
  numbers[+numStr[i]]++;
}
console.log(numbers.join('\n'));