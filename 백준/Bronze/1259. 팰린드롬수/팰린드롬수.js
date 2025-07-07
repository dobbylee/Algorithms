const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
input.pop();
const output = [];
for (const str of input) {
  if (str[0] === '0') continue;
  let isTrue = true;
  for (let i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i] !== str[str.length-1-i]) isTrue = false;
  }
  output.push(isTrue ? 'yes' : 'no');
}
console.log(output.join('\n'));