t = int(input())
result = []

for _ in range(t):
    ps = input()
    p_count = 0
    for char in ps:
        p_count += 1 if char == '(' else -1
        if p_count < 0:
            break
    result.append("YES" if p_count == 0 else "NO")
print('\n'.join(result))