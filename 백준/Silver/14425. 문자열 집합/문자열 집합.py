N, M = map(int, input().split())
S = set(input() for _ in range(N))
str_list = list(input() for _ in range(M))
count = 0

for string in str_list:
    if string in S:
        count += 1
print(count)