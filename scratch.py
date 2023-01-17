my_string = 'My age is '
my_age = 666

added_string = my_string + str(my_age)
print(added_string)


print(5 == 5)
print(5 == 5.0)
print(5 == '5')


list_a = [1, 2, 3, 4, 5]
list_b = [1, 2, 3, 4, 5]
list_c = list_a

print('List Check:')
print("IDs:", id(list_a), id(list_b), id(list_c))
print(list_a == list_b)
print(list_a is list_b) # is is comparing by reference
print(list_a == list_c)
print(list_a is list_c)


if 10 < 5:
    print('This was true')
    print('Hello')
print('Out of the if condition')

# num = int(input('Enter a random integer: '))

# if num % 3 == 0 and num % 5 == 0:
#     print('FizzBuzz')
# elif num % 3 == 0:
#     print('Fizz')
# elif num % 5 == 0:
#     print('Buzz')
# else:
#     print(num)


colors = ['red', 'orange', 'green', 'pink', 'yellow']

for i in range(len(colors)):
    print(i, colors[i])