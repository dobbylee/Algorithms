import sys
input = sys.stdin.readline

n = int(input())
count = {}

for _ in range(n):
    num = int(input())
    count[num] = count.get(num, 0) + 1

for num in sorted(count.keys()):
    for _ in range(count[num]):
        print(num)