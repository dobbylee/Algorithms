import math

def solution(left, right):
    result = 0
    for i in range(left, right + 1):
        sqrt = int(math.sqrt(i))
        if sqrt * sqrt == i:
            result -= i
        else:
            result += i
    return result