# Ruby
> Notes and examples

### Ruby Data Types

Ruby have six data types: booleans, symbols, numbers, strings, arrays, and hashes


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
