def solution(s):
    words = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
             "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9}
    result = ''
    temp_str = ''

    for char in s:
        if char.isdigit():
            result += char
            continue

        temp_str += char
        if temp_str in words:
            result += str(words[temp_str])
            temp_str = ''

    return int(result)