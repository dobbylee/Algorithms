def is_group_word(word):
    char_set = set()
    prev_char = None
    for char in word:
        if char != prev_char:
            if char in char_set:
                return False
            char_set.add(char)
        prev_char = char
    return True

n = int(input())
words = [input() for _ in range(n)]
count = sum(is_group_word(word) for word in words)
print(count)