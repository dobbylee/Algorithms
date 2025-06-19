function solution(a, b, n) {
    let cnt = 0;
  while (n >= a) {
    const newBottle = Math.floor(n / a) * b;
    cnt += newBottle;
    n = (n % a) + newBottle;
  }
  return cnt;
}