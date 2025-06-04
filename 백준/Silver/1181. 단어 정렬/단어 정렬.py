words = set(input() for _ in range(int(input())))
sorted_words = sorted(words, key=lambda x: (len(x), x))
for word in sorted_words:
    print(word)