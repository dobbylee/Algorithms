def solution(n):
    ternary = []
    while n > 0:
        ternary.append(n % 3)
        n //= 3

    result = 0
    power = 0
    for digit in ternary[::-1]:
        result += digit * (3 ** power)
        power += 1

    return result