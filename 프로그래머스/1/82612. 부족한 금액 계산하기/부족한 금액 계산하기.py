def solution(price, money, count):
    sum = 0
    for i in range(1, count + 1):
        sum += price * i

    result = sum - money
    if result > 0:
        return result
    else: return 0