# C++

C++ is an object oriented language.C++ apps are made mostly from functions, classes and objects.

## Streams, Locals, and Flow of Control

C++ uses functions and classes for almost everything. Both of them can be distributed in a library.

A library called Standard library (STL) comes with compiler. Implementation of the STL can be a little different from compiler to compiler, but he interfaces and the way they work are identical.

### Streams

C++ supports Stream I/O with operators: - `<<` sometimes called extraction operator - reads something from the stream - `>>` sometimes called insertion operator - sends something to the stream

```cpp
#include <iostream> // includes stream i/o standard library

int main(){
	// We say here that we want to send something to c-out (and thats string Hello)
	std::cout << "Hello!";
	std::cout << "Hello!" << std::endl;
	return 0;
}
```

### Local Variables

Variables in C++ must have a type. Some types are built in into the language, but user can define it's own types as well.

You must declare a variable before you can use it.

```cpp
#include <iostream>

int main() {
	string name = "Tom";
	int age = 35;

	std::cout << "There was a man named " << name << std::endl;
	std::cout << "And he was " << age << " years old" << std::endl;

    std::cout << "Hello!"<< std::endl;
    std::cout << "Hello!";

    return 0;
}
```

### Flow control

We can use `if`, `while`, `else` and `for` loops for control flows. These keywords work with logical expressions (Booleans).

### Functions

Must be declared before they can be used. All functions in C++ must have return type.
