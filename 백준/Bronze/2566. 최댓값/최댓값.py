numbers = [list(map(int, input().split())) for _ in range(9)]

max_num, row, col = 0, 1, 1
for j in range(9):
    for k in range(9):
        if numbers[j][k] > max_num:
            max_num = numbers[j][k]
            row, col = j + 1, k + 1

print(max_num)
print(row, col)
