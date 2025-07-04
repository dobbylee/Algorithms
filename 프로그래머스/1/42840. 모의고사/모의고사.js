function solution(answers) {
    const n1 = [1, 2, 3, 4, 5];
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const count = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === n1[i % n1.length]) count[0]++;
        if (answers[i] === n2[i % n2.length]) count[1]++;
        if (answers[i] === n3[i % n3.length]) count[2]++;
    }
    
    const result  = [];
    const maxNumber = Math.max(count[0], count[1], count[2]);
    if (maxNumber === count[0]) result.push(1);
    if (maxNumber === count[1]) result.push(2);
    if (maxNumber === count[2]) result.push(3);
    return result;
}