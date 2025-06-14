def solution(s):
    result = [-1]
    for i in range(1, len(s)):
        count = 0
        is_same = False
        for pre_char in s[i - 1::-1]:
            count += 1
            if s[i] == pre_char:
                result.append(count)
                is_same = True
                break

        if not is_same:
            result.append(-1)

    return result