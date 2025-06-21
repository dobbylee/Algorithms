function solution(array) {
  const arrMap = new Map();
  array.forEach((num) => {
    arrMap.set(num, (arrMap.get(num) || 0) + 1);
  });
  const count = Math.max(...arrMap.values());

  const result = [];
  arrMap.forEach((v, k) => {
    if (v === count) result.push(k);
  });
  return result.length > 1 ? -1 : result[0];
}