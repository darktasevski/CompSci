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

---

## Objects aka Dictionaries

Dictionaries are a fundamental data structure for organizing and describing data into key-value pairs

```python
obj = {
    "name": "Object",
    "is_dict": True,
    "favorite_language": "Python",
    44: "my favorite number!",
    "num_of_items": 5
}
```

A data structure that consists of key value pairs.

We use the keys to describe our data and the values to represent the data

We can create dictionaries with built in `dict()` method:

```python
another_dictionary = dict(key = 'value')
another_dictionary # {'key': 'value'}
```

To access all values in dict use `.values()`:

```python
for value in obj.values():
    print(value)
```

To access all keys and values in dict use `.items()`:

```python
for key,value in obj.items():
    print(key,value)
```

Check if dictionary have a key:

```python
"name" in obj # True
"awesome" in obj # False
```

Check if dictionary have a value:

```python
"Darko" in obj.values() # True
"Nope!" in obj.values() # False
```

### Dictionary Methods

`clear`

Clears all the keys and values in a dictionary:

```python
d = dict(a=1,b=2,c=3)
d.clear()
d # {}
```

`copy`

Makes a copy of a dictionary

```python
copy

d = dict(a=1,b=2,c=3)
c = d.copy()
c # {'a': 1, 'b': 2, 'c': 3}
c is d # False
```

`fromkeys`

Creates key-value pairs from comma separated values:

```python
{}.fromkeys("a","b") # {'a': 'b'}
{}.fromkeys(["email"], 'unknown') # {'email': 'unknown'}
{}.fromkeys("a",[1,2,3,4,5]) # {'a': [1, 2, 3, 4, 5]}
```

`get`

Retrieves a key in an object and return None instead of a KeyError if the key does not exist:

```python
d = dict(a=1,b=2,c=3)
d['a'] # 1
d.get('a') # 1
d['b'] # 2
d.get('b') # 2
d['no_key'] # KeyError
d.get('no_key') # None
```

`pop`

Takes a single argument corresponding to a key and removes that key-value pair from the dictionary. Returns the value corresponding to the key that was removed.

```python
d = dict(a=1,b=2,c=3)
d.pop() # TypeError: pop expected at least 1 arguments, got 0
d.pop('a') # 1
d # {'c': 3, 'b': 2}
d.pop('e') # KeyError
```

`popitem`

Removes a random key in a dictionary:

```python
d = dict(a=1,b=2,c=3,d=4,e=5)
d.popitem() # ('d', 4)
d.popitem('a') # TypeError: popitem() takes no arguments (1 given)
```

`update`

Update keys and values in a dictionary with another set of key value pairs.

```python
first = dict(a=1,b=2,c=3,d=4,e=5)
second = {}

second.update(first)
second # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# let's overwrite an existng key
second['a'] = "AMAZING"

# if we update again
second.update(first) # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# the update overrides our values
second # {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
```

### Dictionary Comprehension

-   iterates over keys by default

-   to iterate over keys and values using .items()

Syntax: `{ __ : __ for __ in __ }`

```python
numbers = dict(first=1, second=2, third=3)
squared_numbers = {key: value ** 2 for key,value in numbers.items()}
print(squared_numbers) # {'first': 1, 'second': 4, 'third': 9}

{num: num**2 for num in [1,2,3,4,5]}

more examples

str1 = "ABC"
str2 = "123"
combo = {str1[i]: str2[i] for i in range(0,len(str1))}
print(combo) # # {'A': '1', 'B': '2', 'C': '3'}
```

Conditional logic with dictionaries:

```python
num_list = [1,2,3,4]

{ num:("even" if num % 2 == 0 else "odd") for num in num_list }

# {1: 'odd', 2: 'even', 3: 'odd', 4: 'even'}
```

---

## Tuples and Sets

### Tuples

It's an ordered collection or grouping of items!

```python
numbers = (1, 2, 3, 4)
```

But it is immutable - Can NEVER be changed!

```python
x = (1,2,3)
3 in x # True
x[0] = "change me!" # TypeError: 'tuple' object does not support item assignment
```

-   Tuples are faster than lists
-   It makes your code safer
-   Valid keys in a dictionary
-   Some methods return them to you - like .items() when working with dictionaries!

#### Creating / Accessing

Create using () or the `tuple()` function

Accessing is just like a list!

```python
first_tuple = (1, 2, 3, 3, 3)

first_tuple[1] // 2
first_tuple[2] // 3
first_tuple[-1] // 3

second_tuple = tuple(5, 1, 2)

second_tuple[0] # 5
second_tuple[-1] # 2
```

We can use a for loop to iterate over a tuple just like a list!

```python
names = ('Red', 'Blue', 'Rusty', 'Lassie')

for name in names:
    print(name)

# Red
# Blue
# Rusty
# Lassie
```

There are only two tuple methods:

-   `count`: Returns the number of times a value appears in a tuple:
    ```python
        x = (1,2,3,3,3)
        x.count(1) # 1
        x.count(3) # 3
    ```
-   `index`: Returns the index at which a value is found in a tuple.
    ```python
        t = (1,2,3,3,3)
        t.index(1) # 0
        t.index(5) # ValueError: tuple.index(x): x not in tuple
        t.index(3) # 2 - only the first matching index is returned
    ```

### Sets

-   Sets are like formal mathematical sets.
-   Sets do not have duplicate values
-   Elements in sets aren't ordered.
-   You cannot access items in a set by index.
-   Sets can be useful if you need to keep track of a collection of elements, but don't care about ordering, keys or values and duplicates

```python
# Sets cannot have duplictes
s = set({1, 2, 3, 4, 5, 5, 5}) # {1, 2, 3, 4, 5}

# Creating a new set
s = set({1, 4, 5})

# Creates a set with the same values as above
s = {1, 4, 5}

4 in s
# True

8 in s
# False

numbers = {1,2,3,4}

for number in numbers:
    print(number)
# 1
# 2
# 3
# 4
```

#### Set Methods

`add`

Adds an element to a set. If the element is already in the set, the set doesn't change:

```python
s = set([1, 2, 3])

s.add(4)

s # {1, 2, 3, 4}

s.add(4)

s # {1, 2, 3, 4}
```

`remove`

removes a value from the set - returns a KeyError if the value is not found

```python
set1 = {1,2,3,4,5,6}

set1.remove(3)

print(set1) # {1, 2, 4, 5, 6}
```

> if you need to avoid KeyErrors use `.discard()`

`copy`

Creates a copy of the set

```python
s = set([1,2,3])
another_s = s.copy()
another_s # {1, 2, 3}
another_s is s # False
```

`clear`

Removes all the contents of the set

```python
s = set([1, 2, 3])

s.clear()

s # set()
```

#### Set Comprehension

set comprehension is useful when converting other data types to a set

```python
{x**2 for x in range(10)}

# {0, 1, 64, 4, 36, 9, 16, 49, 81, 25}
```

```python
def are_all_vowels_in_string(string):
    return len({char for char in string if char in 'aeiou'}) == 5
```

---

## Functions

-   A process for executing a task
-   It can accept input and return an output
-   Useful for executing similar procedures over and over

Syntax:

```python
def name_of_function ():
    # block of runnable code
```

```python
def say_hi():
    print('Hi!')

say_hi()
# Hi
```

```python
def say_hi():
    return 'Hi!'

greeting = say_hi()

print(greeting) # 'Hi!'

def add(a,b):
    return a+b

def multiply(first, second):
    return first * second

multiply(5,5) # 25
multiply(2,2) # 4

def is_odd_number(num):
    if num % 2 != 0:
        return True
    return False
```

`return`:

-   Exits the function
-   Outputs whatever value is placed after the return keyword
-   Pops the function off of the call stack

Parameters vs Arguments:

-   A parameter is a variable in a method definition.
-   When a method is called, the arguments are the data you pass into the method's parameters.
-   Parameter is variable in the declaration of function.
-   Argument is the actual value of this variable that gets passed to function.

### Default Parameters

```python
def add(a,b):
    return a+b

add() # does not work!

# set default params
def add(a=10, b=20):
    return a+b

add() # 30
add(1,10) # 11

```

### Scope

Variables created in functions are scoped in that function!

```python
name = 'Darko'

def say_hello():
    return f'Hello {name}'

say_hello() # 'Hello Darko'

# ---------------------
def say_hello():
    name = 'Darko'
    return f'Hello {name}'

say_hello() # 'Hello Darko'
print(name) # NameError
```

### `global`

Lets us reference variables that were originally assigned on the global scope:

```python
total = 0

def increment():
    global total
    total += 1
    return total

increment() # 1
```

### `nonlocal`

Lets us modify a parent's variables in a child (aka nested) function:

```python
def outer():
    count = 0
    def inner():
        nonlocal count
        count += 1
        return count
    return inner()
```

### Keyword Arguments

```python
def full_name(first, last):
    return "Your name is {first} {last}"

full_name(first='Colt', last='Steele') # Your name is Colt Steele

full_name(last='Steele', first='Colt') # Your name is Colt Steele
```

They're useful when passing a dictionary to a function and unpacking it's values.

**Different from Default Params**

-   When you define a function and use an = you are setting a default parameter
-   When you invoke a function and use an = you are making a keyword argument

### Documenting functions

Use `""" """`

Essential when writing complex functions

```python
def say_hello():
    """A simple function that returns the string hello"""
    return "Hello!"

say_hello.__doc__ # 'A simple function that returns the string hello'
```

### `*args`

A special operator we can pass to functions

Gathers remaining arguments as a tuple

```python
def sum_all_values(*args):
    total = 0
    for val in args:
        total += val

    return total

sum_all_values(1, 2, 3) # 6

sum_all_values(1, 2, 3, 4, 5) # 15

# Another example

def ensure_correct_info(*args):
    if "Colt" in args and "Steele" in args:
        return "Welcome back Colt!"

    return "Not sure who you are..."

ensure_correct_info() # Not sure who you are...

ensure_correct_info(1, True, "Steele", "Colt")
```

### `**kwargs`

A special operator we can pass to functions

Gathers remaining keyword arguments as a dictionary

```python
def favorite_colors(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}'s favorite color is {value}")

favorite_colors(rusty='green', colt='blue')

# rusty's favorite color is green
# colt's favorite color is blue

def special_greeting(**kwargs):
    if "Colt" in kwargs and kwargs["Colt"] == "special":
        return "You get a special greeting Colt!"
    elif "Colt" in kwargs:
        return f"{kwargs["Colt"]} Colt!"

    return "Not sure who this is..."

special_greeting(Colt='Hello') # Hello Colt!
special_greeting(Bob='hello') # Not sure who this is...
special_greeting(Colt='special') # You get a special greeting Colt!
```

### Parameter Ordering

1. parameters
2. `*args`
3. default parameters
4. `**kwargs`

```python
def display_info(a, b, *args, instructor="Colt", **kwargs):
  return [a, b, args, instructor, kwargs]

display_info(1, 2, 3, last_name="Steele", job="Instructor")

[1, 2, (3,), 'Colt', {'job': 'Instructor', 'last_name': 'Steele'}]
```

> (3,) - When you have a tuple with one item - Python needs to distinguish between parenthesis and a tuple!

### Argument Unpacking

We can use \* as an argument to a function to "unpack" values

```python
def sum_all_values(*args):
    # there's a built in sum function - we'll see more later!
    return sum(args)

sum_all_values([1, 2, 3, 4]) # nope...
sum_all_values((1, 2, 3, 4)) # this does not work either...

sum_all_values(*[1, 2, 3, 4]) # 10
sum_all_values(*(1, 2, 3, 4)) # 10
```

### Dictionary Unpacking

We can use \*\* as an argument to a function to "unpack" dictionary values into keyword arguments

```python
def display_names(first, second):
    return f"{first} says hello to {second}"

names = {"first": "Colt", "second": "Rusty"}

display_names(names) # nope..

display_names(**names) "Colt says hello to Rusty"
```

```python
def display_names(first, second):
    return f"{first} says hello to {second}"

names = {"first": "Colt", "second": "Rusty"}

display_names(names) # nope..

display_names(**names) "Colt says hello to Rusty"
```

## Lambdas

Syntax:
`lambda parameters : body of function`

Lambdas are anonymous functions:

```python
first_lambda = lambda x: x + 5

first_lambda(10) # 15

first_lambda.__name__ # '<lambda>'

add_values = lambda x, y: x + y

multiply_values = lambda x, y: x * y

add_values(10, 20) # 30

multiply_values(10, 20) # 200
```

`map`

A standard function that accepts at least two arguments, a function and an "iterable":

-   iterable - something that can be iterated over (lists, strings, dictionaries, sets, tuples)
-   runs the lambda for each value in the iterable and returns a map object which can be converted into another data structure

```python
l = [1, 2, 3, 4]
doubles = list(map(lambda x: x * 2, l))
doubles # [2, 4, 6, 8]

names = [
    {'first':'Rusty', 'last': 'Steele'},
    {'first':'Colt', 'last': 'Steele', },
    {'first':'Blue', 'last': 'Steele', }
]
first_names = list(map(lambda x: x['first'], names))
first_names # ['Rusty', 'Colt', 'Blue']
```

`filter`

-   There is a lambda for each value in the iterable.
-   Returns filter object which can be converted into other iterables
-   The object contains only the values that return true to the lambda

```python
l = [1,2,3,4]
evens = list(filter(lambda x: x % 2 == 0, l))
evens # [2,4]
```

Combining filter and map

Given this list of names, return a new list with the string "Your instructor is " + each value in the array, but only if the value is less than 5 characters:

```python
names = ['Lassie', 'Colt', 'Rusty']

list(map(lambda name: f"Your instructor is {name}",
     filter(lambda value: len(value) < 5, names)))

# ['Your instructor is Colt']

# or by using list comprehension:
[f"Your instructor is {name}" for name in names if len(name) < 5]
```

`reduce`

runs a function of two arguments cumulatively to the items of iterable, from left to right, which reduces the iterable to a single value

```python
from functools import reduce

l = [1,2,3,4]

product = reduce(lambda x, y: x * y, l)

l = [1,2,3,4]

total = reduce(lambda x, y: x + y, l, 10)
```

> You will not be using reduce frequently so it's good to know it exists, but you will not find yourself using it since we have a better option in most cases. For almost all problems especially at this stage, use list comprehension - you will see it far more in the wild

### Closures

Accessing variables defined in outer functions after they have returned.

-   private variables
-   not using global variables

Closures using `nonlocal`:

```python
def counter():
    count = 0
    def inner():
        nonlocal count
        count += 1
        return count
    return inner
```

Here we're making a variable count inside the counter function, which can only be accessed by counter and inner.
Once we return inner, we can still remember count through closure!

Closures using Objects:

```python
def counter():
    counter.count = 0
    def inner():
        counter.count += 1
        return counter.count
    return inner
```

Here we're making a property on the counter function which can only be accessed by counter and inner.
Once we return inner, we can still remember the count property through closure!

Partial Application with Closures:

```python
def outer(a):
    def inner(b):
        return a+b
    return inner

result = outer(10)

result(20) # 30
```

When you are just using (not modifying) a variable through closure, you don't need to use nonlocal or objects!

### Built-in Functions

`all`

Return True if all elements of the iterable are truthy (or if the iterable is empty)

```python
all([0,1,2,3]) # False
all([char for char in 'eio' if char in 'aeiou'])
all([num for num in [4,2,10,6,8] if num % 2 == 0]) # True
```

`any`

Return True if any element of the iterable is truthy. If the iterable is empty, return False.

```python
any([0, 1, 2, 3]) # True
any([val for val in [1,2,3] if val > 2]) # True
any([val for val in [1,2,3] if val > 5]) # False
```

`sorted`

Returns a new sorted list from the items in iterable

```python
# sorted (works on anything that is iterable)
more_numbers = [6,1,8,2]
sorted(more_numbers) # [1, 2, 6, 8]
print(more_numbers) # [6, 1, 8, 2]
```

`reversed`

Return a reverse iterator.

```python
more_numbers = [6, 1, 8, 2]
reversed(more_numbers) # <list_reverseiterator at 0x1049f7da0>
print(list(reversed(more_numbers))) # [2, 8, 1, 6]
```

`max`

Return the largest item in an iterable or the largest of two or more arguments.

```python
# max (strings, dicts with same keys)

max([3,4,1,2]) # 4
max((1,2,3,4)) # 4
max('awesome') # 'w'
max({1:'a', 3:'c', 2:'b'}) # 3
```

`min`

Return the smallest item in an iterable or the smallest of two or more arguments.

```python
# min (strings, dicts with same keys)

min([3,4,1,2]) # 1
min((1,2,3,4)) # 1
min('awesome') # 'a'
min({1:'a', 3:'c', 2:'b'}) # 1
```

`len`

Return the length (the number of items) of an object. The argument may be a sequence (such as a string, tuple, list, or range) or a collection (such as a dictionary, set)

```python
len('awesome') # 7
len((1,2,3,4)) # 4
len([1,2,3,4]) # 4
len(range(0,10) # 10

len({1,2,3,4}) # 4
len({'a':1, 'b':2, 'c':2} # 3
```

`abs`

Return the absolute value of a number. The argument may be an integer or a floating point number.

```python
abs(-5) # 5
abs(5)  # 5
```

`sum`

-   Takes an iterable and an optional start.
-   Returns the sum of start and the items of an iterable from left to right and returns the total.
-   start defaults to 0

```python
sum([1,2,3,4]) # 10
sum([1,2,3,4], -10) # 0
```

`round`

Return number rounded to ndigits precision after the decimal point. If ndigits is omitted or is None, it returns the nearest integer to its input.

```python
round(10.2) # 10
round(1.212121, 2) # 1.21
```

`zip`

-   Make an iterator that aggregates elements from each of the iterables.
-   Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables.
-   The iterator stops when the shortest input iterable is exhausted.

```python
first_zip = zip([1,2,3], [4,5,6])
list(first_zip) # [(1, 4), (2, 5), (3, 6)]
dict(first_zip) # {1: 4, 2: 5, 3: 6}
```

Very common when working with more complex data structures!

```python
five_by_two = [(0, 1), (1, 2), (2, 3), (3, 4), (4, 5)]
list(zip(*five_by_two))
[(0, 1, 2, 3, 4), (1, 2, 3, 4, 5)]
```

## Error Handling

In Python, it is strongly encouraged to use try/except blocks, to catch exceptions when we can do something about them.

```python
try:
    foobar
except NameError as err:
    print(err)
```

When you use try/except, make sure that a specific type of exception is being handled.

​If you want to except a handful of exceptions, you can pass a tuple of errors into the except block as well:

```python
try:
    colt.hello
except (TypeError, AttributeError):
    print("That doesn't work with this thing.")
```

### Debugging with pdb

To set breakpoints in our code we can use pdb by inserting this line:

```python
import pdb; pdb.set_trace()

def add_then_multiply(num1, num2):
    sum = num1 + num2
    import pdb; pdb.set_trace()

    product = sum * num1 * num2

    return product
```

Inside of the debugger we can press c to continue and q to quit.

## Modules

```python
import random

random.choice(["apple", "banana", "cherry", "durian"])
random.shuffle(["apple", "banana", "cherry", "durian"])
```

```python
import random as omg_so_random

omg_so_random.choice(["apple", "banana", "cherry", "durian"])
omg_so_random.shuffle(["apple", "banana", "cherry", "durian"])
```

-   The from keyword lets you import parts of a module
-   andy rule of thumb: only import what you need!
-   If you still want to import everything, you can also use the from MODULE import \* pattern

Different Ways to Import:

-   `import random`
-   `import random as omg_so_random`
-   `from random import *`
-   `from random import choice, shuffle`
-   `from random import choice as gimme_one, shuffle as mix_up_fruits`

### Custom Modules

-   You can import from your own code too
-   The syntax is the same as before
-   import from the name of the Python file

```python
# file1.py

def fn():
    return "do some stuff"

def other_fn():
    return "do some other stuff"
```

```python
#file2.py

import file1

file1.fn() # 'do some stuff'

file1.other_fn() # 'do some other stuff'
```

### External Modules

-   Built-in modules come with Python
-   External modules are downloaded from the internet
-   You can download external modules using pip

### `__name__` variable

-   When run, every Python file has a **name** variable
-   If the file is the main file being run, its value is "**main**"
-   Otherwise, its value is the file name

```python
if __name__ == "__main__":
    # this code will only run
    # if the file is the main file!
```

## HTTP requests with Python

### `requests` Module

-   Lets us make HTTP requests from our Python code!
-   Installed using pip
-   Useful for web scraping/crawling, grabbing data from other APIs, etc

```python
import requests

response = requests.get("http://www.example.com")
```

We can alse set request headers:

```python
import requests

response = requests.get(
    "http://www.example.com",
    headers={
        "header1": "value1",
        "header2": "value2"
    },
    params={
        "key1": "value1",
        "key2": "value2"
    }
)
```

POST request example:

```python
import requests
import json

response = requests.post(
    "http://www.example.com",
    data=json.dumps({
        "key1": "value1",
        "key2": "value2"
    })
)
```

## OOP in Python

Classes in Python can have a special **init** method, which gets called every time you create an instance of the class (instantiate).

```python
class Vehicle:

    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
```

### Instantiating a Class

Creating an object that is an instance of a class is called instantiating a class.

```python
v = Vehicle("Honda", "Civic", 2017)
```

### `self`

**The `self` keyword refers to the current class instance.**

**`self` must always be the first parameter to `__init__` and any methods and properties on class instances.**
You never have to pass it directly when calling instance methods, including **init**

```python
class Person():

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name

    def full_name(self):
        return f"My name is {self.first_name} {self.last_name}"

    def likes(self, thing):
        return f"{self.first_name} likes {thing}!"

p = Person("Darko", "T")
p.full_name() # Darko T
p.likes("Python") # Darko likes Python!
```

### Class Attributes

We can also define attributes directly on a class that are shared by all instances of a class and the class itself.

```python
class Pet():

    allowed = ("cat", "dog", "bird", "lizard", "rodent")

    def __init__(self, kind, name):

        if kind not in self.allowed:
            raise ValueError(f"You can't have a {kind} as a pet here!")

        self.kind = kind
        self.name = name

fluffy = Pet("cat", "Fluffy")
fluffy.allowed
("cat", "dog", "bird", "lizard", "rodent")
Bro = Pet("bear", "Bro")
# ValueError: You can't have a bear as a pet here!
```

### Class Methods

Class methods are methods (with the `@classmethod` decorator) that are not concerned with instances, but the class itself.

```python
class Person():
    # ...

    @classmethod
    def from_csv(cls, filename):
        return cls(*params) # this is the same as calling Person(*params)

Person.from_csv(my_csv)
```

The first argument is cls (for class) instead of self. Like self, it does not need to be passed in explicitly.

Class methods are available on the class itself and any instances of the class, and are mostly used for building new instances of classes.

### Inheritance

In Python, inheritance works by passing the parent class as an argument to the definition of a child class:

```python
class Animal:
    def make_sound(self, sound):
        print(sound)

    cool = True

class Cat(Animal):
    pass

gandalf = Cat()
gandalf.make_sound("meow")  # meow
gandalf.cool  # True
```

### `super`

The `super()` keyword allows us to call the **init** function of a parent class

In the example below, we initialize the child with both its own **init** method and its parent's **init** method:

```python
class Animal:
    def __init__(self, species):
        self.species = species

class Dog(Animal):
    def __init__(self, name):
        super().__init__("canine")
        self.name = name

bro = Dog("Bro")
bro.name  # Bro
bro.species  # canine
```

### Multiple Inheritance

Python also allows classes to inherit from more than one parent class.

```python
class Aquatic:
  def __init__(self,name):
    self.name = name

  def swim(self):
    return f"{self.name} is swimming"

  def greet(self):
    return f"I am {self.name} of the sea!"

class Ambulatory:
  def __init__(self,name):
    self.name = name

  def walk(self):
    return f"{self.name} is walking"

  def greet(self):
    return f"I am {self.name} of the land!"

class Penguin(Aquatic, Ambulatory):
  def __init__(self,name):
    super().__init__(name=name)

jaws = Aquatic("Jaws")
lassie = Ambulatory("Lassie")
captain_cook = Penguin("Captain Cook")

jaws.swim() # 'Jaws is swimming'
jaws.walk() # AttributeError: 'Aquatic' object has no attribute 'walk'
jaws.greet() # 'I am Jaws of the sea!'

lassie.swim() # AttributeError: 'Ambulatory' object has no attribute 'swim'
lassie.walk() # 'Lassie is walking'
lassie.greet() # 'I am Lassie of the land!'

captain_cook.swim() # 'Captain Cook is swimming'
captain_cook.walk() # 'Captain Cook is walking'
captain_cook.greet() # 'I am Captain Cook of the sea!'
```

Penguin inherits from both Aquatic and Ambulatory, therefore instances of Penguin can call both the walk and swim methods.

### Method Resolution Order (MRO)

Whenever you create a class, Python sets a Method Resolution Order, or MRO, for that class, which is the order in which Python will look for methods on instances of that class.

You can programmatically reference the MRO three ways:

-   **mro** attribute on the class
-   use the mro() method on the class
-   use the builtin help(cls) method

```python
Penguin.__mro__

# (<class 'multiple.Penguin'>, <class 'multiple.Aquatic'>,
#  <class 'multiple.Ambulatory'>, <class 'object'>)

Penguin.mro()

# [__main__.Penguin, __main__.Aquatic, __main__.Ambulatory, object]

help(Penguin) # best for HUMAN readability -> gives us a detailed chain
```

### Polymorphism & Inheritance

The same class method works in a similar way for different classes

A common implementation of this is to have a method in a base (or parent) class that is overridden by a subclass. This is called **method overriding**:

-   Each subclass will have a different implementation of the method.
-   If the method is not implemented in the subclass, the version in the parent class is called instead.

```python
class Animal():
    def speak(self):
        raise NotImplementedError("Subclass needs to implement this method")

class Dog(Animal):
    def speak(self):
        return "woof"

class Cat(Animal):
    def speak(self):
        return "meow"
```

### Special Methods

you can declare special methods on your own classes to mimic the behavior of builtin objects, like so using **len**:

```python
class Human:
    def __init__(self, height):
        self.height = height  # in inches

    def __len__(self):
        return self.height

Colt = Human(60)
len(Colt)  # 60
```

The most common use-case for special methods is to make classes "look pretty" in strings.

By default, our classes look ugly:

```python
class Human:
    pass

colt = Human()
print(colt)  # <__main__.Human at 0x1062b8400>
```

We can use special methods to make it look way better!
The **repr** method is one of several ways to provide a nicer string representation:

```python
class Human:

    def __init__(self, name="somebody"):
        self.name = name

    def __repr__(self):
        return self.name

dude = Human()
print(dude)  # "somebody"

COPY
colt = Human(name="Colt Steele")
print(f"{colt} is totally rad (probably)")
# "Colt Steele is totally rad (probably)"
```

> There are also several other dunders to return classes in string formats (notably **str** and **format**)

---

## Generators and Decorators

### Iterator & Iterable

**Iterator** - an object that can be iterated upon. An object which returns data, one element at a time when next() is called on it

**Iterable** - An object which will return an Iterator when iter() is called on it.

"HELLO" is an iterable, but it is not an iterator.
`iter("HELLO")` returns an iterator

When `next()` is called on an iterator, the iterator returns the next item. It keeps doing so until it raises a StopIteration error.

```python
# Custom for loop
def for_loop(iterable, func):
    iterator = iter(iterable)
    while True:
        try:
            thing = next(iterator)
        except StopIteration:
            break
        else:
            func(thing)
```

### Generators

-   Generators are iterators
-   Generators can be created with generator functions
-   Generator functions use the yield keyword
-   Generators can be created with generator expressions

Functions vs Generator Functions:

| Functions                              | Generator Functions               |
| -------------------------------------- | --------------------------------- |
| uses `return`                          | uses `yield`                      |
| returns once                           | can `yield` multiple times        |
| When invoked, returns the return value | When invoked, returns a generator |

Why Generators?

-   Lazy Evaluation
    -   Also called calculation on demand
    -   Only compute values as needed
    -   Can help improve performance of your code

```python
# Generator example
def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1
```

-   Calling next on a generator with nothing left to yield will throw a StopIteration error
-   When we loop over a generator, the loop will stop before the StopIteration error gets thrown

#### Generator Expressions

-   You can also create generators from generator expressions
-   Generator expressions look a lot like list comprehensions
-   Generator expressions use () instead of []

```python
def sum_of_nums():
    total = 0
    num = 1
    while True: # WON'T STOP
        total += num
        yield total
        num += 1

s = sum_of_nums() # another generator!
```

> A number is called abundant if the sum of all of its proper divisors exceeds the number.

`12 (1 + 2 + 3 + 4 + 6 > 12)` - abundant

`4 (1 + 2 < 4)` - not abundant

```python
def is_abundant(n):
    total = 0
    for d in range(1,n):
        if n % d == 0:
            total += d
    return total > n

is_abundant(12) # True
is_abundant(4) # False
```

### Decorators

-   Decorators wrap other functions and enhance their behavior
-   Decorators are examples of higher order functions
-   Decorators have their own syntax, using "@" (syntactic sugar)
-   Decorators are functions that enhance other functions
-   Decorators use "@" as syntactic sugar
-   In general, the functions that decorators return accept an unlimited number of positional and keyword arguments
-   To preserve information about the decorated function, use wraps
-   To write a decorator that accepts an argument, use another level of function nesting
-   Decorators are useful for minimizing code duplication, analyzing functions, returning early from a function, and more!

Decorator Pattern

```python
def my_decorator(fn):
    def wrapper(*args, **kwargs):
        # do some stuff with fn(*args, **kwargs)
        pass
    return wrapper
```

or:

```python
from functools import wraps
# wraps preserves a function's metadata
# when it is decorated

def my_decorator(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        # do some stuff with fn(*args, **kwargs)
        pass
    return wrapper
```

Decorators as Functions:

```python
def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")
    return wrapper

def greet():
    print("My name is Colt.")

greet = be_polite(greet)
# we are decorating our function
# with politeness!
```

Decorator Syntax:

```python
def be_polite(fn):
    def wrapper():
        print("What a pleasure to meet you!")
        fn()
        print("Have a great day!")
    return wrapper

@be_polite
def greet():
    print("My name is Matt.")

# we don't need to set
# greet = be_polite(greet)
```

Functions with Different Signatures

```python
def shout(fn):
    def wrapper(name):
        return fn(name).upper()
    return wrapper

@shout
def greet(name):
    return f"Hi, I'm {name}."

@shout
def order(main, side):
    return f"Hi, I'd like the {main}, with a side of {side}, please."
```

Preserving Metadata example:

```python
def log_function_data(fn):
    def wrapper(*args, **kwargs):
        print(f"you are about to call {fn.__name__}")
        print(f"Here's the documentation: {fn.__doc__}")
        return fn(*args, **kwargs)
    return wrapper

@log_function_data
def add(x,y):
    '''Adds two numbers together.'''
    return x + y;
```

Why Use Decorators?

-   Removing code duplication across functions
-   More easily perform function analytics/logging
-   Exit out of a function early if certain conditions aren't met

Some examples:

```python
from functools import wraps
from time import time

def speed_test(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        t1 = time()
        result = fn(*args, **kwargs)
        t2 = time()
        print(f"Time Elapsed: {t2 - t1} seconds.")
        return result
    return wrapper
```

```python
from functools import wraps

def ensure_no_kwargs(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        if kwargs:
            return "No keyword arguments allowed!"
        return fn(*args)
    return wrapper
```

```python
def ensure_first_arg_is(val):
    def inner(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            if args and args[0] != val:
                return f"Invalid! First argument must be {val}"
            return fn(*args, **kwargs)
        return wrapper
    return inner
```

---

## Testing Python code

Assertions

-   We can make simple assertions with the assert keyword
-   assert accepts an expression
-   Returns None if the expression is truthy
-   Raises an AssertionError if the expression is falsy
-   Accepts an optional error message as a second argument

```python
def add_positive_numbers(x, y):
    assert x > 0 and y > 0, "Both numbers must be positive!"
    return x + y

add_positive_numbers(1, 1) # 2
add_positive_numbers(1, -1) # AssertionError: Both numbers must be positive!
```

> If a Python file is run with the -O flag, assertions will not be evaluated!

`doctests`

-   We can write tests for functions inside of the docstring
-   Write code that looks like it's inside of a REPL

```python
def add(x, y):
    """add together x and y

    >>> add(1, 2)
    3

    >>> add(8, "hi")
    Traceback (most recent call last):
        ...
    TypeError: unsupported operand type(s) for +: 'int' and 'str'
    """
```

un these tests with: `python3 -m doctest -v YOUR_FILE_NAME.py`

### Unit testing

-   Test smallest parts of an application in isolation (e.g. units)
-   Good candidates for unit testing: individual classes, modules, or functions
-   Bad candidates for unit testing: an entire application, dependencies across several classes or modules
-   Python comes with a built-in module called unittest
-   You can write unit tests encapsulated as classes that inherit from unittest.TestCase
-   This inheritance gives you access to many assertion helpers that let you test the behavior of your functions
-   You can run tests by calling unittest.main()

```python
# unittest Example

# activities.py
def eat(food, is_healthy):
    pass

def nap(num_hours):
    pass

# tests.py
import unittest
from activities import eat, nap

class ActivityTests(unittest.TestCase):
    pass

if __name__ == "__main__":
    unittest.main()
```

Commenting Tests:

```python
class SomeTests(unittest.TestCase):
    def first_test(self):
        """testing a thing"""
        self.assertEqual(thing(), "something")

    def second_test(self):
        """testing another thing"""
        self.assertEqual(another_thing(), "something else")
```

To see comments, run `python NAME_OF_TEST_FILE.py -v`

Types of Assertions:

-   `self.assertEqual(x, y)`
-   `self.assertNotEqual(x, y)`
-   `self.assertTrue(x)`
-   `self.assertFalse(x)`
-   `self.assertIsNone(x)`
-   `self.assertIsNotNone(x)`
-   `self.assertIn(x, y)`
-   `self.assertNotIn(x, y)`
-   ...and more!

```python
# Testing for Errors
class SomeTests(unittest.TestCase):
    def testing_for_error(self):
        """testing for an error"""
        with self.assertRaises(IndexError):
            l = [1,2,3]
            l[100]
```

#### Before and After Hooks

`setUp` and `tearDown`

-   For larger applications, you may want similar application state before running tests
-   setUp runs before each test method
-   tearDown runs after each test method
-   Common use cases: adding/removing data from a test database, creating instances of a class

```python
# Example
class SomeTests(unittest.TestCase):

    def setUp(self):
        # do setup here
        pass

    def test_first(self):
        # setUp runs before
        # tearDown runs after
        pass

    def test_second(self):
        # setUp runs before
        # tearDown runs after
        pass

    def tearDown(self):
        # do teardown here
        pass
```

## File I/O

Reading Files:

-   You can read a file with the `open` function
-   `open` returns a file object to you
-   You can read a file object with the `read` method

```text
story.txt

This short story is really short.
```

```python
file = open("story.txt")
file.read()
```

### Cursor Movement

-   Python reads files by using a cursor
-   This is like the cursor you see when you're typing
-   After a file is read, the cursor is at the end
-   To move the cursor, use the `seek` method
-   To read only part of a file, pass a number of characters into `read`, or use `readline`
-   To get a list of all lines, use `readlines`
-   You can close a file with the `close` method
-   You can check if a file is closed with the `closed` attribute
-   Once closed, a file can't be read again
-   Always close files - it frees up system resources!
-   You can also use `open` to write to a file
-   Need to specify the "w" flag as the second argument

```python
file = open("story.txt")
file.read()
file.close()

file.closed # True

# Or:

with open("story.txt") as file:
    file.read()

file.closed # True
```

```python
with open("haiku.txt", "w") as file:
    file.write("Writing files is great\n")
    file.write("Here's another line of text\n")
    file.write("Closing now, goodbye!")
```

Modes for Opening Files:

-   r - Read a file (no writing) - this is the default
-   w - Write to a file (previous contents removed)
-   a - Append to a file (previous contents not removed)
-   r+ - Read and write to a file (writing based on cursor)

Truncating Files

`file.truncate` - removes all text starting from the current cursor position

### Reading CSV Files

-   CSV files are a common file format for tabular data
-   We can read CSV files just like other text files
-   Python has a built-in CSV module to read/write CSVs more easily
    -   `reader` - lets you iterate over rows of the CSV as lists
    -   `DictReader` - lets you iterate over rows of the CSV as OrderedDicts
    -   Keys are determined by the header row
    -   An OrderedDict is like a dictionary, but it remembers the order in which keys were inserted
    -   `writer` - creates a writer object for writing to CSV
    -   `writerow` - method on a writer to write a row to the CSV
    -   `DictWriter` - creates a writer object for writing using dictionaries
    -   `fieldnames` - kwarg for the DictWriter specifying headers
    -   `writeheader` - method on a writer to write header row
    -   `writerow` - method on a writer to write a row based on a dictionary

Using Dictionaries

from csv import DictWriter
with open("example.csv", "w") as file:
headers = ["Character", "Move"]
csv_writer = DictWriter(file, fieldnames=headers)
csv_writer.writeheader()
csv_writer.writerow({
"Character": "Ryu",
"Move": "Hadouken"
})
Dictionaries or Lists?

```python
from csv import reader
with open("fighters.csv") as file:
    csv_reader = reader(file)
    for row in csv_reader:
        # each row is a list!
        print(row)
```

```python
from csv import DictReader
with open("fighters.csv") as file:
    csv_reader = DictReader(file)
    for row in csv_reader:
        # each row is an OrderedDict!
        print(row)
```

Readers accept a delimiter kwarg in case your data isn't separated by commas.

```python
from csv import reader
with open("example.csv") as file:
    csv_reader = reader(file, delimiter="|")
    for row in csv_reader:
        # each row is a list!
        print(row)
```

```python
from csv import writer
with open("fighters.csv", "w") as file:
    csv_writer = writer(file)
    csv_writer.writerow(["Character", "Move"])
    csv_writer.writerow(["Ryu", "Hadouken"])
```

```python
# Writing by using Dictionaries
from csv import DictWriter
with open("example.csv", "w") as file:
    headers = ["Character", "Move"]
    csv_writer = DictWriter(file, fieldnames=headers)
    csv_writer.writeheader()
    csv_writer.writerow({
        "Character": "Ryu",
        "Move": "Hadouken"
    })
```

## Web Scraping

Web scraping is the process of downloading, extracting, and storing data from a web page

Why Scrape?

-   There's data on a site that you want to store or analyze
-   You can't get by other means (e.g. an API)
-   You want to programmatically grab the data (instead of lots of manual copying/pasting)

Best practices:

-   Keep in mind that s- ome websites don't want people scraping them
-   consult the robots.txt file
-   If making many requests, time them out
-   If you're too aggressive, your IP can be blocked

### Beautiful Soup

-   To extract data from HTML, we'll use Beautiful Soup
-   Install it with pip
-   Beautiful Soup lets us navigate through HTML with Python
-   Beautiful Soup does NOT download HTML - for this, we need the requests module
    -   `BeautifulSoup(html_string, "html.parser")` - parse HTML
    -   Once parsed, There are several ways to navigate:
        -   By Tag Name
        -   Using find - returns one matching tag
        -   Using find_all - returns a list of matching tags

#### Navigating with CSS Selectors

`select` - returns a list of elements matching a CSS selector

Selector Cheatsheet:

-   Select by id of foo: #foo
-   Select by class of bar: .bar
-   Select children: div > p
-   Select descendents: div p

Selecting Elements by Attribute:

```python
# find an element with an id of foo
soup.find(id="foo")
soup.select("#foo")[0]

# find all elements with a class of bar
# careful! "class" is a reserved word in Python
soup.find_all(class_="bar")
soup.select(".bar")

# find all elements with a data
# attribute of "baz"
# using the general attrs kwarg
soup.find_all(attrs={"data-baz": True})
soup.select("[data-baz]")
```

Accessing Data in Elements:

-   `get_text` - access the inner text in an element
-   `name` - tag name
-   `attrs` - dictionary of attributes
-   You can also access attribute values using brackets!

#### Navigating with Beautiful Soup

Via Tags:

-   `parent` / `parents`
-   `contents`
-   `next_sibling` / `next_siblings`
-   `previous_sibling` / `previous_siblings`

Via Searching:

-   `find_parent` / `find_parents`
-   `find_next_sibling` / `find_next_siblings`
-   `find_previous_sibling` / `find_previous_siblings`

Common Issues with Web Scraping:

-   Gnarly HTML
-   Code tightly coupled to UI
-   Sanitizing data after grabbing it
-   Data that isn't part of HTML, but is loaded later!

#### Other Tools

-   Scrapy: https://scrapy.org/
    -   A more streamlined way to build web crawlers, which can programmatically navigate across multiple pages
    -   Can export to many different file formats from the command line
-   Selenium: http://www.seleniumhq.org/
    -   Allows you to open up a browser window from your code!
    -   Often used with testing
    -   Requires a driver for your browser of choice
    -   Doesn't navigate through the page until all contents have loaded

## REGEX

A way of describing patterns within search strings.

SOME REGEX SYNTAX:

```regexp
\d	    # digit 0-9
\w	    # letter, digit, or underscore
\s	    # whitespace character
\D	    # not a digit
\W	    # not a word character
\S	    # not a whitespace character
.	    # any character except line break
+	    # One or more
{3}	    # Exactly x times.  {3} - 3 times
{3,5}	# Three to five times
{4,}	# Four or more times
*	    # Zero or more times
?	    # Once or none (optional)
^	    # Start of string or line
$	    # End of string or line
\b	    # Word boundary
|       # LOGICAL OR "Mr|Mrs|Ms"
```

```python
#import regex module
import re

#define our phone number regex
pattern = re.compile(r'\d{3} \d{3}-\d{4}')

#search a string with our regex
res = pattern.search('Call me at 415 555-4242!')
```
