points = [tuple(map(int, input().split())) for _ in range(int(input()))]
points.sort()

for x, y in points:
    print(f"{x} {y}")