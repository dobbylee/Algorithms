def solution(n):
    count = 0
    for i in range(1, n + 1):
        current_sum = 0
        for j in range(i, n + 1):
            current_sum += j
            if current_sum == n:
                count += 1
                break
            elif current_sum > n:
                break
    return count