numbers = set(range(1, 10001))
# 1 ~ 10000 에서 생성자를 가진 값 빼기
for i in range(1, 10001):
    have_gen = i + sum(map(int, str(i)))
    if have_gen in numbers:
        numbers.remove(have_gen)

for num in sorted(numbers):
    print(num)