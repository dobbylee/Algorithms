def solution(d, budget):
    d.sort()
    count = 0
    for i in d:
        if budget < i:
            break
        budget -= i
        count += 1
    return count