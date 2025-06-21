function solution(quiz) {
    const result = [];
    quiz.forEach((item) => {
        const [x, operator, y, , z] = item.split(" ");
        let calcNum;
        if (operator === "-") {
            calcNum = Number(x) - Number(y);
        } else {
            calcNum = Number(x) + Number(y);
        }
        result.push(calcNum === Number(z) ? "O" : "X");
    });
    return result;
}