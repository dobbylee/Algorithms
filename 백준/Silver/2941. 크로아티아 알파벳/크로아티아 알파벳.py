alphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
text = input()
for i in alphabets:
    while i in text:
        text = text.replace(i, '*', 1)
print(len(text))