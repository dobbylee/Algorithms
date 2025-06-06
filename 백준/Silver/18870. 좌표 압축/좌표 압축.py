import sys, bisect

input = sys.stdin.readline
input()
x_list = list(map(int, input().split()))
x_set = sorted(set(x_list))

count = [bisect.bisect_left(x_set, num) for num in x_list]
print(*count)