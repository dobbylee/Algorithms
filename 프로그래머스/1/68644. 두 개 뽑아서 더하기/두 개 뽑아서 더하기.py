from itertools import combinations

def solution(numbers):
    answer = set(a + b for a, b, in combinations(numbers, 2))
    return sorted(answer)