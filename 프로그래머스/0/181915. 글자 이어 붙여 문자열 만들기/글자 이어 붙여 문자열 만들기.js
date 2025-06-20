function solution(my_string, index_list) {
    const result = [];
    index_list.forEach((idx) => {
        result.push(my_string[idx]);
    });
    return result.join('');
}