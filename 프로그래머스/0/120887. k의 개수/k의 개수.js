function solution(i, j, k) {
  const arr = [];
  for (let num = i; num <= j; num++) {
    arr.push(String(num));
  }
  const numbers = arr.join("");

  return [...numbers].reduce(
    (count, char) => (char === String(k) ? count + 1 : count),
    0
  );
}