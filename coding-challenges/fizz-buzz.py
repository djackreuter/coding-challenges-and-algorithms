for x in range(50):
    output = ""
    if x % 3 == 0:
        output += "fizz"
    if x % 5 == 0:
        output += "buzz"
    if not output:
        output = x
    print(output)
