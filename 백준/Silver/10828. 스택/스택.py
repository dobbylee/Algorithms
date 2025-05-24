import sys

N = int(sys.stdin.readline())
stack = []

for _ in range(N):
    command = sys.stdin.readline().strip()
    
    if command.startswith("push"):
        stack.append(command.split()[1])
    elif command == "pop":
        print(stack.pop() if stack else -1)
    elif command == "size":
        print(len(stack))
    elif command == "empty":
        print(1 if not stack else 0)
    elif command == "top":
        print(stack[-1] if stack else -1)