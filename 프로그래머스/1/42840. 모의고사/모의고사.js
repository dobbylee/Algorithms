function solution(answers) {
    const n1 = [1, 2, 3, 4, 5];
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    if (n1.length < answers.length) {
        for (let i = 0; i < answers.length; i++) {
            n1.push(n1[i]);
            n2.push(n2[i]);
            n3.push(n3[i]);
        }
    }
    
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === n1[i]) count1++;
        if (answers[i] === n2[i]) count2++;
        if (answers[i] === n3[i]) count3++;
    }
    
    const result = [];
    if (count1 > count2 && count1 > count3) {
        result.push(1);
    } else if (count1 === count2 && count2 > count3) {
        result.push(1, 2);
    } else if (count1 === count3 && count1 > count2) {
        result.push(1, 3);
    } else if (count2 > count1 && count2 > count3) {
        result.push(2);
    } else if (count2 === count3 && count2 > count1) {
        result.push(2, 3);
    } else if (count3 > count1 && count3 > count2) {
        result.push(3);
    } else {
        result.push(1, 2, 3);
    }
    return result;
}