import sys

n = int(sys.stdin.readline())
points = [tuple(map(int, sys.stdin.readline().strip().split())) for _ in range(n)]

points.sort(key=lambda p : (p[1], p[0]))
for x, y in points:
    print(f"{x} {y}")