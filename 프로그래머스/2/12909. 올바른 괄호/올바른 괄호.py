def solution(s):
    count = 0
    if not s: return False

    for char in s:
        if char == "(":
            count += 1
        else:
            count -= 1

        if count < 0: return False
    return count == 0