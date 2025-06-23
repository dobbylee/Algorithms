function solution(my_string, overwrite_string, s) {
    let result = [];
    result.push(my_string.slice(0, s));
    result.push(overwrite_string);
    result.push(my_string.slice(s + overwrite_string.length, my_string.length));
    return result.join('');
}