function solution(k, score) {
    const result = [];
    const hall = [];
    for (let i = 0; i < score.length; i ++) {
        hall.push(score[i]);
        hall.sort((a, b) => b - a);
        if (hall.length > k) hall.pop();
        result.push(hall[hall.length-1]);
    }
    return result;
}