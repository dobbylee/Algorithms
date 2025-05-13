def solution(n, lost, reserve):
    lost_set = set(lost)
    reserve_set = set(reserve)
    lost_set -= reserve_set
    reserve_set -= set(lost)

    for i in sorted(reserve_set):
        if i - 1 in lost_set:
            lost_set.remove(i - 1)
        elif i + 1 in lost_set:
            lost_set.remove(i + 1)

    answer = n - len(lost_set)
    return answer