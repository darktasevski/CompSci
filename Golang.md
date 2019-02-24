# Golang 

> Notes and examples

Every Go program is made up of packages.

Programs start running in package main.

```go
package main

import (
"fmt"
"math"
"math/rand"
)

func main() {
fmt.Println("My favorite number is", rand.Intn(10))
}
```
>Note: The environment in which these programs are executed is deterministic, so each time you run the example program `rand.Intn` will return the same number. (To see a different number, seed the number generator; see [`rand.Seed`](https://golang.org/pkg/math/rand/#Seed).

This code groups the imports into a parenthesized, "factored" import statement.

You can also write multiple import statements, like:
```go
import "fmt"
import "math"
```

### Exported names

In Go, a name is exported if it begins with a capital letter. For example, `Pizza` is an exported name, as is `Pi`, which is exported from the math package.

`pizza` and `pi` do not start with a capital letter, so they are not exported.

When importing a package, you can refer only to its exported names. Any "unexported" names are not accessible from outside the package.

```go
package main

import (
"fmt"
"math"
)

func main() {
fmt.Println(math.Pi)
}
```

### Functions

A function can take zero or more arguments.

In this example, add takes two parameters of type int.

```go
package main

import "fmt"

func add(x int, y int) int {
return x + y
}

func main() {
fmt.Println(add(42, 13))
}
```
>Notice that the type comes after the variable name.
>(For more about why types look the way they do, see the [article on Go's declaration syntax](https://blog.golang.org/gos-declaration-syntax).)


When two or more consecutive named function parameters share a type, you can omit the type from all but the last.

In this example, we shortened
```go
x int, y int

#to

x, y int

# resulting in:

func add(x, y int) int {
return x + y
}
```
A function can return any number of results.

The swap function returns two strings.

```go
func swap(x, y string) (string, string) {
return y, x
}

func main() {
a, b := swap("hello", "world")
fmt.Println(a, b)
}
```
### "Naked" return - Named return values

Go's return values may be named. If so, they are treated as variables defined at the top of the function.

These names should be used to document the meaning of the return values.

A return statement without arguments returns the named return values. This is known as a "naked" return.

```go
func split(sum int) (x, y int) {
x = sum * 4 / 9
y = sum - x
return
}

func main() {
fmt.Println(split(17))
}
```

Naked return statements should be used only in short functions, as with the example shown here. They can harm readability in longer functions.
