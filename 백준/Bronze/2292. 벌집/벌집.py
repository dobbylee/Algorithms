N = int(input())
room = 1
last_num = 1
while last_num < N:
    last_num += 6 * room
    room += 1
print(room)