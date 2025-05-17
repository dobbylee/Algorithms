from itertools import combinations

n, m = map(int, input().split())
cards = list(map(int, input().split()))

result = 0
for combination in combinations(cards, 3):
    add = sum(combination)
    if result < add <= m:
        result = add
print(result)