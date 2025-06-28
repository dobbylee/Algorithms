function solution(number, limit, power) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j * j <= i; j++) {
            if (i % j === 0) {
                count += j * j === i ? 1 : 2;
            }
        }
        result += limit < count ? power : count;
    }
    return result;
}