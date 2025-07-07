const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const numbers = [];
for (let i = 1; i <= input; i++) {
  numbers.push(i);
}
console.log(numbers.join('\n'));