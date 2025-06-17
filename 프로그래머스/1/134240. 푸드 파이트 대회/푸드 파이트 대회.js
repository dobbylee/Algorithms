function solution(food) {
  let seq = [];
  for (let i = 1; i < food.length; i++) {
    seq.push(String(i).repeat(Math.floor(food[i] / 2)));
  }
    
  const left = seq.join("");
  const right = left.split("").reverse().join("");
  return left + "0" + right;
}