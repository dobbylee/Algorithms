def solution(s, n):
    result = ''
    for char in s:
        if char == ' ':
            result += ' '
        elif 'a' <= char <= 'z':
            result += chr((ord(char) - ord('a') + n) % 26 + ord('a'))
        elif 'A' <= char <= 'Z':
            result += chr((ord(char) - ord('A') + n) % 26 + ord('A'))
    return result