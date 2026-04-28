function solution(n, m, section) {
  let paintedPosition = 0;
  let count = 0;
  for (const position of section) {
    if (position > paintedPosition) {
      paintedPosition = position + m - 1;
      count++;
    }
  }
  return count;
}