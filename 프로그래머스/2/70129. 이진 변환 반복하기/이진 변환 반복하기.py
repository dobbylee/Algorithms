def solution(x):
    count = 0
    zero_count = 0

    while x != '1':
        zero_count += x.count('0')
        x = format(len(x) - x.count('0'), 'b')
        count += 1

    return [count, zero_count]