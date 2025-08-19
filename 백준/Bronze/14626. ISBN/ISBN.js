const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('');
const m = +input.pop();

let sum = 0;
let starIndex = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === '*') {
    starIndex = i;
    continue;
  }
  sum += i % 2 === 0 ? +input[i] : input[i] * 3;
}

const weight = starIndex % 2 === 0 ? 1 : 3;
for (let star = 0; star <= 9; star++) {
  const total = sum + star * weight;
  if ((total + m) % 10 === 0) {
    console.log(star);
    break;
  }
}