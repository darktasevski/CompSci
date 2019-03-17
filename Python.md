# Python

> Notes and exercises

Python is a dynamically-typed language with more than half a dozen types

## Math usage

Operators we use for math in Python:

| Symbol | Name             |
| ------ | ---------------- |
| +      | Addition         |
| \_     | Subtraction      |
| \*     | Multiplication   |
| /      | Division         |
| %      | Modulo           |
| \*\*   | Exponentiation   |
| //     | Integer Division |

## Variables

A variable in Python is like a variable in mathematics: it is a named symbol that holds a value.

```python
x = 100
khaleesi_mother_of_dragons = 1
# 101
```

Variables are always assigned with the variable name on the left and the value on the right of the equals sign.

Variables must be assigned before they can be used.

```python
python_is_awesome = 100
just_another_var = python_is_awesome
python_is_awesome = 1337
all, at, once = 5, 10, 15
```

Variables can be:

-   assigned to other variables
-   reassigned at any time
-   assigned at the same time as other variables

In Python, you can name your variables whatever you want, with some restrictions:

-   Variables must start with a letter or underscore
-   The rest of the name must consist of letters, numbers, or underscores
-   Names are case-sensitive

### Naming Conventions

Most Python programmers prefer to use standard style conventions when naming things:

-   Most variables should be snake_case (underscores between words)
-   Most variables should be also be lowercase, with some exceptions:
    -   CAPITAL_SNAKE_CASE usually refers to constants (e.g. PI = 3.14)
    -   UpperCamelCase usually refers to a class (more on that later)
-   Variables that start and end with two underscores (called "dunder" for double underscore) are supposed to be private or left alone

## DATA TYPES

In any assignment, the assigned value must always be a valid data type.
Python data types include:

| data type | description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| bool      | True or False values                                                                 |
| int       | an integer (1, 2, 3)                                                                 |
| str       | (string) a sequence of Unicode characters, e.g. "Colt" or "程序设计"                 |
| list      | an ordered sequence of values of other data types, e.g. [1, 2, 3] or ["a", "b", "c"] |
| dict      | a collection of key: values, e.g. { "first_name": "Colt", "last_name": "Steele" }    |

### Dynamic Typing

Python is highly flexible about reassigning variables to different types:

```python
awesomeness = True
print(awesomeness) # True

awesomeness = "a dog"
print(awesomeness) # a dog

awesomeness = None
print(awesomeness) # None

awesomeness = 22 / 7
print(awesomeness) # 3.142857142857143
```

## Strings

String literals in Python can be declared with either single or double quotes.

```python
my_other_str = 'a hat'
my_str = "a cat"
```

> Either one is perfectly fine; but make sure you stick to the same convention throughout the same file.

In Python there are also "escape characters", which are "metacharacters" - they get interpreted by Python to do something special:

```python
new_line = "hello \n world"

print(new_line)
# hello
# world
```

All escape characters start with a backslash "\".

You can do advanced things like include hexadecimal characters with "\x"

```python
hexadecimal = "\x41\x42\x43"  # "abc"
```

### String Concatenation

Concatenation is combining multiple strings together. In Python you can do this simply with the "+" operator.

```python
str_one = "your"
str_two = "face"
str_three = str_one + " " + str_two  # your face
```

You can also use the "+=" operator!

```python
str_one = "ice"
str_one += " cream"
str_one  # ice cream
```

### Formatting Strings

There are also several ways to format strings in Python to interpolate variables.

The new way (new in Python 3.6+) => F-Strings

```python
x = 10
formatted = f"I've told you {x} times already!"
```

The tried-and-true way (Python 2 -> 3.5) => .format method

```python
x = 10
formatted = "I've told you {} times already!".format(x)
```

The old way => % operator (deprecated)

```python
x = 10
formatted = "I've told you %d times already!" % (x)
```

### Converting Data Types (Coercion)

In string interpolation, data types are implicitly converted into string form (more on this later in OOP).

You can also explicitly convert variables by using the name of the builtin type as a function (more on functions later):

```python
decimal = 12.56345634534
integer = int(decimal)  # 12

my_list = [1, 2, 3]
my_list_as_a_string = str(my_list)  # "[1, 2, 3]"
```

## Booleans and conditional logic

### Conditional Statements

Conditional logic using if statements represents different paths a program can take based on some type of comparison of input.

```python
if some condition is True:
    do something
elif some other condition is True:
    do something
else:
    do something
```

Conditional logic using if statements represents different paths a program can take based on some type of comparison of input.

```python
if name == "Arya Stark":
    print("Valar Morghulis")
elif name == "Jon Snow":
    print("You know nothing")
else:
    print("Carry on")
```

### Truthiness

In Python, all conditional checks resolve to True or False.

```python
x = 1
x is 1  # True
x is 0  # False
```

We can call values that will resolve to True "truthy", or values that will resolve to False "falsy".

Besides False conditional checks, other things that are naturally falsy include: empty objects, empty strings, None, and zero.

### Logical Operators

In Python, the following operators can be used to make Boolean Logic comparisons or statements:

| Op  | What it does                                                                  | Example                                                          |
| --- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| and | Truthy if both a AND b are true (logical conjunction)                         | <code>if a and b:<br/>print(c)</code>                            |
| or  | Truthy if either a OR b are true (logical disjunction)                        | <code>if am_tired or is_bedtime:<br/>print("go to sleep")</code> |
| not | Truthy if the opposite of a is true (logical negation)                        | <code>if not is_weekend:<br/>print("go to work")</code>          |
| is  | is operator checks whether both the operands refer to the same object or not. |                                                                  |

#### is vs. "=="

In python, "==" and "is" are very similar comparators, however they are not the same.

```python
a = 1
a == 1  # True
a is 1  # True

a = [1, 2, 3]  # a list of numbers
b = [1, 2, 3]
a == b  # True
a is b  # False

c = b
b is c  # True
```

**"is" is only truthy if the variables reference the same item in memory**

> It tests if two variables point the same object, not if two variables have the same value.

```python
# The following program, bouncer.py, determines whether the user can enter the club or not.

# Ask for age
age = input("How old are you: ")

if age:
    age = int(age)
    if 18 <= age < 21: # if age >= 18 and age < 21:
        print("You can enter, but need a wristband!")
    elif age >= 21:
        print("You are good to enter and can drink!")
    else:
        print("You can't come in, little one! :(")
else:
    print("Please enter an age!")
```

```python
from random import randint
# print("Rock...")
# print("Paper...")
# print("Scissors...")

player = input("Player, make your move: ").lower()
rand_num = randint(0,2)
if rand_num == 0:
	computer = "rock"
elif rand_num == 1:
	computer = "paper"
else:
	computer = "scissors"

print(f"Computer plays {computer}" )

if player == computer:
	print("It's a tie!")
elif player == "rock":
	if computer == "scissors":
		print("player wins!")
	else:
		print("computer wins!")
elif player == "paper":
	if computer == "rock":
		print("player wins!")
	else:
		print("computer wins!")
elif player == "scissors":
	if computer == "paper":
		print("player wins!")
	else:
		print("computer wins!")
else:
	print("Please enter a valid move!")

```

## LOOPS

### `for` loops

In Python, for loops are written like this:

```python
for item in iterable_object:
    # do something with item
```

-   An iterable object is some kind of collection of items, for instance: a list of numbers, a string of characters, a range, etc.
-   item is a new variable that can be called whatever you want
-   item references the current position of our iterator within the iterable. It will iterate over (run through) every item of the collection and then go away when it has visited all items

`for` loop with ranges:

```python
for number in range(1, 8):
    print(number)
```

#### ranges

If we just want to print numbers, we can simply iterate over a range.

-   `range(7)` gives you integers from 0 thru 6 ( shown) - Count starts at 0 and is exclusive
-   `range(1, 8)` will give you integers from 1 to 7 - Two parameters are (start, end)
-   `range(1, 10, 2)` will give you odds from 1 to 10 - Third param is called the "step", meaning how many to skip. Also, which way to count, up + or down -
-   `range(7, 0, -1)` will give you integers from 7 to 1

### `while` loops

We can also iterate using a while loop, which has a different format:

```python
while im_tired:
    # seek caffeine
```

while loops continue to execute while a certain condition is truthy, and will end when they become falsy.

```python
user_response = None
while user_response != "please":
    user_response = input("Ah ah ah, you didn't say the magic word: ")
```

> while loops require more careful setup than for loops, since you have to specify the termination conditions manually.

### Controlled Exit

The keyword `break` gives us the ability to exit out of while loops whenever we want:

```python
while True:
    command = input("Type 'exit' to exit: ")
    if command == "exit":
        break

```

We can also use it to end for loops early:

```python
for x in range(1, 101):
    print(x)
    if x == 3:
        break
```

## Arrays aka Lists

> A fundamental data structure for organizing data

```python
tasks = ["Install Python", "Learn Python", "Take a break"]
```

Checking the length of the list:

```python
tasks = ["Install Python", "Learn Python", "Take a break"]

len(tasks) # 3
```

We can make lists by using built in method: `list()`:

```python
tasks = list(range(1, 4))
tasks # [1, 2, 3]
```

Like ranges, lists ALWAYS start counting at zero. So the first element lives at index 0.

```python
friends = ["Ashley", "Matt", "Michael"]

print(friends[0]) # 'Ashley'
print(friends[2]) # 'Michael'
print(friends[3]) # IndexError

# You can use a negative number to index backwards
print(friends[-1]) # 'Michael'
print(friends[-3]) # 'Ashley'
print(friends[-4]) # IndexError

# Check if a Value is in a List
"Ashley" in friends # True
"Darko" in friends # False

# We can iterate over each item in the list too

for friend in friends:
    print(friend)
# or with while loop
i = 0
while i < len(friends):
    print(friends[i])
    i += 1

```

### List methods

`append`

Add an item to the end of the list.

```python
first_list = [1, 2, 3, 4]

first_list.append(5)

print(first_list) # [1, 2, 3, 4, 5]
```

`extend`

Add to the end of a list all values passed to extend

```python
first_list = [1, 2, 3, 4]

first_list.append(5, 6, 7, 8) # does not work!

first_list.append([5, 6, 7, 8])

print(first_list) # [1, 2, 3, 4,  [5, 6, 7, 8]]

correct_list = [1, 2, 3, 4]

correct_list.extend([5, 6, 7, 8])

print(correct_list) # [1, 2, 3, 4, 5, 6, 7, 8]
```

`insert`

Insert an item at a given position.

```python
first_list = [1, 2, 3, 4]

first_list.insert(2, 'Hi!')

print(first_list) # [1, 2, 'Hi!', 3, 4]

first_list.insert(-1, 'The end!')

print(first_list) # [1, 2, 'Hi!', 3, 'The end!', 4]
```

`clear`

Remove all items from the list.

```python
clear
first_list = [1, 2, 3, 4]

first_list.clear()

print(first_list) # []
```

`pop`

Remove the item at the given position in the list, and return it.

If no index is specified, removes & returns last item in the list.

```python
first_list = [1, 2, 3, 4]

first_list.pop() # 4

first_list.pop(1) # 2
```

`remove`

Remove the first item from the list whose value is x.

Throws a ValueError if the item is not found.

```python
first_list = [1, 2, 3, 4, 4, 4]

first_list.remove(2)

print(first_list) # [1, 3, 4, 4, 4]

first_list.remove(4)

print(first_list) # [1, 3, 4, 4]
```

`del`

Deletes a value from a list.

```python
first_list = [1, 2, 3, 4]

del first_list[3]

print(first_list) # [1, 2, 3]

del first_list[1]

print(first_list) # [1, 3]
```

`index`

returns the index of the specified item in the list

```python
numbers = [5, 6, 7, 8, 9, 10]

numbers.index(6) # 1
numbers.index(9) # 4
```

You can specify start and end:

```python
numbers = [5, 5, 6, 7, 5, 8, 8, 9, 10]

numbers.index(5) # 0
numbers.index(5, 1) # 1
numbers.index(5, 2) # 4

numbers.index(8, 6, 8) # 6
```

`count`

return the number of times x appears in the list

```python
numbers = [1, 2, 3, 4, 3, 2, 1, 4, 10, 2]

numbers.count(2) # 3
numbers.count(21) # 0
numbers.count(3) # 2
```

`reverse`

reverse the elements of the list (in-place)

```python
first_list = [1, 2, 3, 4]

first_list.reverse()

print(first_list) # [4, 3, 2, 1]
```

`sort`

sort the items of the list (in-place)

```python
another_list = [6, 4, 1, 2, 5]

another_list.sort()

print(another_list) # [1, 2, 4, 5, 6]
```

`join`

-   technically a String method that takes an iterable argument
-   concatenates (combines) a copy of the base string between each item of the iterable
-   returns a new string
-   can be used to make sentences out of a list of words by joining on a space, for instance:

```python
words = ['Coding', 'Is', 'Fun!']
' '.join(words) # 'Coding is Fun!'

name = ['Mr', "Steele"]
'. '.join(name) # 'Mr. Steele'
```

### Slicing

Make new lists using slices of the old list!

`some_list[start:end:step]`

First Parameter for Slice: start

what index to start slicing from:

```python
first_list = [1, 2, 3, 4]

first_list[1:] # [2, 3, 4]

first_list[3:] # [4]
```

If you enter a negative number, it will start the slice that many back from the end:

```python
first_list[-1:] # [4]

first_list[-3:] # [2, 3, 4]
```

Second Parameter for Slice: end

The index to copy up to (exclusive counting):

```python
first_list = [1, 2, 3, 4]

first_list[:2] # [1, 2]

first_list[:4] # [1, 2, 3, 4]

first_list[1:3] # [2, 3]
```

With negative numbers, how many items to exclude from the end (i.e. indexing by counting backwards):

```python
first_list[:-1] # [1, 2, 3]

first_list[1:-1] # [2, 3]
```

Third Parameter for Slice: step

-   "step" in Python is basically the number to count at a time
-   same as step with range!
-   for example, a step of 2 counts every other number (1, 3, 5)

```python
first_list = [1, 2, 3, 4, 5, 6]

first_list[1::2] # [2, 4, 6]

first_list[::2] # [1, 3, 5]
```

With negative numbers, reverse the order:

```python
first_list[1::-1] # [2, 1]

first_list[:1:-1] # [6, 5, 4, 3]

first_list[2::-1] # [3, 2, 1]
```

#### Tricks with Slices

Reversing lists / strings:

```python
string = "This is fun!"

string[::-1]
```

Modifying portions of lists:

```python
numbers = [1, 2, 3, 4, 5]
numbers[1:3] = ['a','b','c']

print(a) # [1, 'a', 'b', 'c', 4, 5]
```

### List Comprehension

`[ __ for __ in __ ]`

```python
numbers = [1, 2, 3, 4, 5]

doubled_numbers = [num * 2 for num in numbers]

print(doubled_numbers) # [2, 4, 6, 8, 10]
```

```python
friends = ['ashley', 'matt', 'michael']
[friend[0].upper() for friend in friends] # ['Ashley', 'Matt', 'Michael']

[num*10 for num in range(1,6)] # [10, 20, 30, 40, 50]

[bool(val) for val in [0, [], '']] # [False, False, False]

numbers = [1, 2, 3, 4, 5]
string_list = [str(num) for num in numbers]
print(string_list) # ['1', '2', '3', '4', '5']
```

#### LC with Conditional Logic:

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = [num for num in numbers if num % 2 == 0]
odds = [num for num in numbers if num % 2 != 0]

[num*2 if num % 2 == 0 else num/2 for num in numbers]
# [0.5, 4, 1.5, 8, 2.5, 12]

with_vowels = "This is so much fun!"
''.join(char for char in with_vowels if char not in "aeiou")
# "Ths s s mch fn!"
```

### Nested Lists

Lists can contain any kind of element, even other lists!

```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

nested_list[0][1] # 2
nested_list[1][-1] # 6

for l in nested_list:
    for val in l:
        print(val)
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

# Or with comprehension:
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

[[print(val) for val in l] for l in nested_list]
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

```

```python
board = [[num for num in range(1,4)] for val in range(1,4)]

print(board) # [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

[["X" if num % 2 != 0 else "O" for num in range(1,4)] for val in range(1,4)]

# [['X', 'O', 'X'], ['X', 'O', 'X'], ['X', 'O', 'X']]
```

### Swapping Values

```python
names = ["James", "Michelle"]

names[0], names[1] = names[1], names[0]

print(names) # ['Michelle', 'James']
```
