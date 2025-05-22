n = int(input())
result = 0
start = max(n - 9 * len(str(n)), 1)

for i in range(start, n):
    if i + sum(map(int, str(i))) == n:
        result = i
        break
print(result)