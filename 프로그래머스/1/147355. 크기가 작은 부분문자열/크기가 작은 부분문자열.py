def solution(t, p):
    result = 0
    for i in range(len(t) - len(p) + 1):
        numbers = t[i:len(p) + i]
        if int(numbers) <= int(p):
            result += 1
    return result