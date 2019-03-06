# Ruby

> Notes and examples

### Ruby Data Types

Ruby have six data types: booleans, symbols, numbers, strings, arrays, and hashes

### `puts` and `print`

The `puts` (short for "out*put s*tring") and `print` commands are both used to display in the console the results of evaluating Ruby code. The primary difference between them is that puts adds a new line after executing, and print does not.

```ruby
3.times { print "Hello!" }
# > Hello!Hello!Hello!

3.times { puts "Hello!" }
# > Hello!
# > Hello!
# > Hello!
```

By default, Ruby doesn't display any output. The methods `puts` and `print` are a great way to explicitly tell the program to display specific information. Without these printing methods, Ruby will read the line, but not print anything out.

### Returning Values

A return value is the data returned to the program by the execution of a method, the assignment of a variable, actually...

Every method in Ruby returns a value by default. This returned value will be the value of the last statement.

For example, let's look at this method called `restaurant`:

```ruby
def restaurant
  restaurant_name = "Guy's American Kitchen & Bar"
  cuisine = "american"
  motto = "Welcome to Flavor Town!"
end
```

The return value of the `restaurant` method is `"Welcome to Flavor Town!"` because that was the last statement evaluated.

To make a method that just prints your name and returns nil, you could write:

```ruby
def print_name
  puts "Guy Fieri"
end
```

> the return value of a puts, as seen in the table above, is always nil.

To write a method that returns your name but doesn't print anything, you could write:

```ruby
def return_name
  "Guy Fieri"
end
```

#### The Return Keyword

There is one other way to return a value from a method and that is to use the `return` keyword.

```ruby
def stylish_chef
  best_hairstyle = "Guy Fieri"
  return "Martha Stewart"
  "Guy Fieri"
end
```

the `return` value of the above method is => Martha Stewart!

The `return` keyword will disrupt the execution of your method. If you employ it, your method will return whatever you have explicitly told it to (in this case, "Martha Stewart"), and terminate.

> The explicit use of the `return` keyword is generally avoided by many Rubyists, but there are instances where you might want to use `return` instead of relying on implicit returns.

### Methods

You can define a method in Ruby with the `def` keyword. A method's name can begin with any lowercase letter. Here's a quick example:

```ruby
def greeting # Method Signature
  puts "Hello World" # Method Body
end # Method Closing
```

That first line, `def greeting`, is called the method signature, it defines the basic properties of the method including the name of the method, greeting.

Once you open a method definition with the `def` keyword, all subsequent lines in your program are considered the method's body, the actual procedure or code that your method will run every time it's called.

You must terminate every opening `def` of a method with a corresponding `end` in order to close the method body. If you don't correctly end a method, your program will have unexpected results or break entirely because of a syntax error. A good practice is to define the method and then immediately close it before programming anything into the method.

#### Arguments

To add arguments to a method, you specify them in the method signature––the line that starts with def. Simply add parentheses after the name of the method and create a placeholder name for your argument.

```ruby
def greeting(name)
  puts "Hello, #{name}!"
end
```

> Once you define arguments for a method, they become required when you invoke or call the method. If you define a method that accepts a singular argument, when you call that method, you must supply a value for that argument, otherwise, you get an ArgumentError.

> Additionally, a method defined to accept one argument will raise an error if called with more than one argument.

##### Default Arguments

In order to define a method that optionally takes in an argument, we define our method to take in an argument with a default value. By defining our method with default arguments, we make it possible to call the method with optional arguments, i.e. with or without arguments.

```rb
#             assigning a default value
def greeting(name = "Ruby programmer")
  puts "Hello, #{name}"
end
```

It is possible to define a method that takes in both required and default arguments. To do so, however, we must place the default argument at the end of the argument list in the method definition.

```rb
def greeting(name, language="Ruby")
  puts "Hello, #{name}. We heard you are a great #{language} programmer."
end
```

### String Interpolation

To interpolate, you wrap the variable like `#{this}`.

```rb
answer = "flamboyance"
puts "A group of flamingos is called a #{answer}."
```

> Another Way to Interpolate Variables into Strings

```rb
answer = "Flamboyance"
puts "A group of flamingos is called a " + answer + "."
```

Interpolation will only work on Strings wrapped in double quotes "". **Single quotes: '' do not support string interpolation**

### Truthiness

Many programming languages, including Ruby, have native `boolean` (true or false) data types. In Ruby they're expressed directly as `true` and `false`. These boolean values come in handy in programming when we want to implement control flow. Control flow is the idea that we can tell our program to execute certain lines of code based upon certain conditions.

In Ruby only false and nil are falsey. Everything else is truthy (yes, even 0 is truthy).

|     Value      | Truthy? |
| :------------: | :-----: |
|       0        |   yes   |
|      " "       |   yes   |
|    "hello"     |   yes   |
|      nil       |   no    |
|      6.7       |   yes   |
|      true      |   yes   |
|      TRUE      |   yes   |
|     false      |   no    |
|     FALSE      |   no    |
|     [1,2]      |   yes   |
| {:hi=>"there"} |   yes   |

In Ruby there are three main boolean operators:

-   `!` ("single-bang") which represents "NOT",
-   `&&` ("double-ampersand") which represents "AND", and
-   `||` ("double-pipe") which represents "OR".

To check if two values are equal, we use the comparison operator represented with `==` ("double-equal-sign"). If two values are equal, then the statement will return `true`. If they are not equal, then it will return `false`.

```rb
1 == 1 #=> true

1 == 7 #=> false
```

### Ruby Conditionals

#### Implementing Control Flow

There are a number of ways to tell your program to conditionally execute certain code, the basic forms of which are:

-   if, else, and elsif statements,
-   case statements,
-   loops.

```rb
if 5 > 2
  print "5 is greater than 2"
end
//
if false
   puts "This will never get printed because the above
     statement evaluates to false."
else
   puts "This will get printed!"
end
//
if dog == "hungry"
  puts "Refilling food bowl."
elsif dog == "thirsty"
  puts "Refilling water bowl."
else
  puts "Reading newspaper."
end

```

### Loops

```rb
10.times do
  puts "Hi! I'm printed 10 times"
end
```

#### The `loop` Keyword

This is the simplest looping construct that we have in Ruby. It simply executes a block (the code that is between the `do` and `end` keywords).

```rb
loop do
  puts "I have found the Time Machine!"
end
```

This will output I have found the Time Machine! an infinite number of times, in other words it'll create infinite loop.
We can use the `break` keyword inside the body of the loop to exit or abort the `loop` and continue with the rest of our code.

```rb
loop do
  puts "You'll see this exactly once."
  break # Exit the Loop
end
```

Counter example:

```rb
counter = 0 # Start our counter at 0, we have never run the loop
loop do # Start our loop
  # increment our counter by 1 and set it equal to the sum of its current value, plus 1.
  counter = counter + 1 # or  counter += 1

  # Do Something
  puts "Iteration #{counter} of the loop"

  if counter >= 10 # If our counter is 10 or more
    break # Stop the loop
  end
end
```

#### While and Until Loops

The `while` construct is a little different from the loop construct that we looked at earlier. The while construct will keep executing a block as long as a specific condition is true.

```rb
counter = 0
while counter < 20
  puts "The current number is less than 20."
  counter += 1
end
```

`until` is simply the inverse of a `while` loop. An `until` keyword will keep executing a block until a specific condition is true. In other words, the block of code following until will execute while the condition is false. One helpful way to think about it is to read until as "if not".

```rb
counter = 0
until counter == 20
  puts "The current number is less than 20."
  counter += 1
end
```
