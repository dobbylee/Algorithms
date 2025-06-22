function solution(code) {
    const result = [];
    let mode = false;
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = !mode;
        } else if ((!mode && i % 2 === 0) || (mode && i % 2 === 1)) {
            result.push(code[i])
        }
    }
    return result.length ? result.join('') : "EMPTY";
}