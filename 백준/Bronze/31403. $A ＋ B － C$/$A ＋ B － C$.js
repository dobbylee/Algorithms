const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const output = [];
output.push(+input[0] + +input[1] - input[2]);
output.push(input[0] + input[1] - input[2]);
console.log(output.join('\n'));