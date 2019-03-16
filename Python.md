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
