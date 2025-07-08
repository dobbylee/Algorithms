const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

if (input.join('') === numbers.join('')) console.log('ascending');
else if (input.join('') === [...numbers].reverse().join('')) console.log('descending');
else console.log('mixed');