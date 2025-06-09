def solution(n):
    numbers = [0, 1]
    for _ in range(1, n):
        numbers.append(numbers[-1] + numbers[-2])
    return numbers.pop() % 1234567