const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const A = input[0], B = input[1], V = input[2];
console.log(Math.ceil((V - A) / (A - B)) + 1);