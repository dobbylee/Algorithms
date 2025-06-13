def solution(s):
    result = ''
    word_idx = 0
    for char in s:
        if char == ' ':
            result += ' '
            word_idx = 0
        else:
            result += char.upper() if word_idx % 2 == 0 else char.lower()
            word_idx += 1
    return result