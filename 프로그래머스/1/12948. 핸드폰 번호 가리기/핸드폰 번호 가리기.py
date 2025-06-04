def solution(phone_number):
    stars = '*' * (len(phone_number) - 4)
    num =  phone_number[-4:]
    return f"{stars}{num}"