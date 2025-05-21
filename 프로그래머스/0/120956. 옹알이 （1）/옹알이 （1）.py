def solution(babbling):
    pronunciation = ["aya", "ye", "woo", "ma"]
    count = len(babbling)

    for bab in babbling:
        for pron in pronunciation:
            bab = bab.replace(pron, '*')
            
        if any(char not in '*' for char in bab):
            count -= 1

    return count