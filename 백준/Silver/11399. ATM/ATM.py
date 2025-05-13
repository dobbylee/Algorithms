input()
p = sorted(map(int, input().split()))
waiting = 0
total = 0

for time in p:
    waiting += time
    total += waiting
print(total)