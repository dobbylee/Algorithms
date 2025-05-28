def solution(x, n):
    if x == 0: return [x] * n
    return list(i for i in range(x, x * n - 1, x)) if x < 0 else list(i for i in range(x, x * n + 1, x))