n, k = map(int, input().split())
score = sorted(map(int, input().split()))
print(score[-k])