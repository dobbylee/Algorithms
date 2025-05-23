import sys

numbers = list(map(int, sys.stdin.read().split()[1:]))
numbers.sort()
print("\n".join(map(str, numbers)))