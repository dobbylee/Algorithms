from collections import deque

for _ in range(int(input())):
    n, m = map(int, input().split())
    seq = list(map(int, input().split()))
    queue = deque([(i, s) for i, s in enumerate(seq)])

    count = 0
    while queue:
        current = queue.popleft()
        if any(current[1] < q[1] for q in queue):
            queue.append(current)
        else:
            count += 1
            if current[0] == m:
                print(count)
                break