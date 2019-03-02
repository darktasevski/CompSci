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

### String Interpolation

To interpolate, you wrap the variable like `#{this}`.

```ruby
answer = "flamboyance"
puts "A group of flamingos is called a #{answer}."
```

> Another Way to Interpolate Variables into Strings

```ruby
answer = "Flamboyance"
puts "A group of flamingos is called a " + answer + "."
```

Interpolation will only work on Strings wrapped in double quotes "". **Single quotes: '' do not support string interpolation**
