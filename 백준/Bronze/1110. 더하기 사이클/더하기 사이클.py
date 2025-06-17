n = int(input())
count = 0

new_num = n
while True:
    count += 1

    left_digit = new_num // 10
    right_digit = new_num % 10

    digit_sum = left_digit + right_digit

    new_num = (right_digit * 10) + (digit_sum % 10)

    if new_num == n:
        break
print(count)