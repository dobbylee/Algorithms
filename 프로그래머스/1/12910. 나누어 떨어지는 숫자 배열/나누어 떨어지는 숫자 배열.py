def solution(arr, divisor):
    result = sorted(num for num in arr if num % divisor == 0)
    if not result:
        result.append(-1)
    return result