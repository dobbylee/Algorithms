const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const strArr = input[1].split('');
const M = 1234567891;
let hash = 0;
let pow = 1;

for (let i = 0; i < strArr.length; i++) {
  hash = (hash + ((strArr[i].charCodeAt(0) - 96) * pow) % M) % M;
  pow = (pow * 31) % M;
}
console.log(hash);