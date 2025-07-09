const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const output = [];

for (let i = 0; i < input.length - 1; i++) {
  const numbers = input[i].split(' ').sort((a, b) => a - b);
  numbers[0]**2 + numbers[1]**2 === numbers[2]**2 ? output.push('right') : output.push('wrong');
}
console.log(output.join('\n'));