N, M = map(int, input().split())
A = [list(map(int, input().split())) for _ in range(N)]
B = [list(map(int, input().split())) for _ in range(N)]
result = [list(map(lambda a, b : a + b, row_A, row_B)) for row_A, row_B in zip(A, B)]
for row in result:
    print(*row)