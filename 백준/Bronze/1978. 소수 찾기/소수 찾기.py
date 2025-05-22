input()
numbers = list(map(int, input().split()))
count = 0

for num in numbers:
    if num < 2:
        continue

    prime = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            prime = False
            break

    if prime: count += 1
print(count)