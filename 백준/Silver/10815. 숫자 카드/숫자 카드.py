import sys

input = sys.stdin.readline
input()
cards = set(map(int, input().split()))
input()
verify_cards = list(map(int, input().split()))

result = []
for card in verify_cards:
    result.append(1 if card in cards else 0)
print(*result)