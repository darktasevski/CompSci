---
title: Shellscripting - Functions
date: 2018-08-27
description: Functions in shell programming
author: Darkø Tasevski
tags:
    - linux
    - shell
    - bash
    - devops
---

# Shellscripting - Functions

> For functions we can say that they're shellscripts within shellscript.

One of the main reasons why we are using functions is to follow the DRY principle, which means that we should write a function once, and then we can use it many times. This can sometimes drastically reduce the script length, and also it's much easier to maintain as we have a single function to edit and troubleshoot.

Function:

-   Hides implementation details from the main script, simplifying the shell script’s main body of code
-   Can be replaced if the underlying detail it works with is changed
-   Can be tested over and over again as a small piece of a larger script, with changing input values to prove that the code is correct
-   Allows consistent reuse of code from within the script, or even between several shell scripts.

---

![xkcd](https://thepracticaldev.s3.amazonaws.com/i/4l1bsjjtpua17f1w4v1o.png)

<figcaption> <a href="https://xkcd.com/1168/">Slightly relevant xkcd 😄</a></figcaption>

### Exit statuses

Before we dive into functions it's essential to know that every command executed in shell returns an exit status in the range of 0 to 255. De facto status for success is `0`, all others are codes for an error condition. This codes can be used in scripts for throwing and checking errors. Usually, we can find what various exit statuses mean by checking the documentation for that error code or look into the source code.

We can use `$?` to check the exit status of the previously executed command.

```shell
ls dir/
echo $?
```

If `dir` exists `echo $?` will return `0` status code, otherwise, it should return `2`, the error code for directory not found.

We can explicitly define the return codes with `exit` command:

```shell
#! bin/bash
HOST="google.com"

ping -c 1 $HOST

if ["$?" -ne "0"]
then
    echo "$HOST unreachable"
    exit 1
fi
exit 0
```

Simply use the `exit` command in your script and follow it with the integer in the range of 0 to 255. If we do not specify the return code with the `exit` command, then the exit status of the previously executed command in the shellscript will be used as the exit status. This is also true if we do not include `exit` command at all.

> Whenever the `exit` command is reached the shellscript will stop running.

All functions have an exit status. We can explicitly return status within the function with `return` keyword:

```shell
function myFunc() {
    return 1 # returning exit status code 1
}
```

Also, status can be returned implicitly with the exit status of the last command executed in the function.

---

### Positional parameters

Positional parameters are the variables which we can use to specify arguments passed to the function via command line. For example, if we execute the script like this:

`script.sh param1 param2 param3`

Inside that script we can access all command line arguments like this:

```shell
$0: "script.sh" # $0 is always the name of the script
$1: "param1" # $1 is the first parameter,
$2: "param2" # $2 is the second
$3: "param3" # $3 is the third, and so on...
```

> NOTE: You cannot change the values of these variables

A practical example:

```shell
# args.sh
#!/bin/bash
echo "I was called as $0"
echo "My first argument is: $1"
echo "My second argument is: $2"
echo "I was called with $# parameters."
```

```sh
$ ./args.sh one two
I was called as ./args.sh
My first argument is: one
My second argument is: two
I was called with 2 parameters.
```

We can use `$#` to check with how much parameters script was called, which is a good way to check if the user has executed the script with enough number of args, for example:

```shell
$ cat argCheck.sh
#!/bin/bash
if [ "$#" -eq "2" ]; then
    echo "The script was called with exactly two parameters. Let’s continue."
else
    echo "You provided $# parameters, but 2 are required."
```

We can use `$@` variable when we want to loop through script parameters:

```shell
# This will loop through all parameter passed to the script when executed
for USER in "$@"; do
    passwd -l $USER # lock the account
done
```

---

#### Creating a function

Let's get back to the functions. It's important to note that function must be defined before it's called, it is conventional to define functions at the start of the file, although this is not strictly necessary. The block of code defined as a function can be declared in one of three different ways, depending on the exact shell in use. The standard Bourne shell syntax uses the function name followed immediately by a pair of parentheses `()` and curly brackets `{}` around the code itself:

```shell
# The most common way
myFunc() {
    # Code
    echo "Hello"
}
# function keyword is optional
# so this is also correct
function mySecondFunc () {
    # More code
    echo "World"
}
```

There is a third syntax, which is not accepted by the Bourne shell, although bash and ksh both accept it. Instead of following the function name by a pair of parentheses, the function name is preceded by the keyword function: `function myFunc`

As far as I've learned so far, the first one (without keyword `function`) is the most commonly used as it's accepted by all shells. The second syntax is also used frequently and by using the `function` keyword, it provides a more clear declaration that it is a function. Regarding the 3rd one, I couldn't find any information about it, except that it exists :|

#### Calling a function

We can call and execute the function by simply typing its name in the script (after it's been defined first):

```shell
function hello() {
    echo "Hello World!"
}

hello
```

```shell
function hello() {
    echo "Hello ${1}!"
}

hello World # Output: Hello World
```

Functions can also call other functions. Here we can see there that the `hello` function calls `now` function before it's declared, but that's okay as the `now` function gets read into the script before the `hello` function is called, so in the order of the execution it's defined before it's used.

```shell
function hello() {
    now
}
function now() {
    echo "$(date +%r)"
}

hello # Output: 02:15:36 PM
```

But, for example, something like this won't work:

```shell
function hello() {
    now
}
hello # hello is called before now is defined
function now() {
    echo "$(date +%r)"
}
```

Besides calling other functions, shell functions can also call themselves recursively. A simple example to demonstrate this is the mathematical factorial function.

```shell
$ cat factorial.sh
#!/bin/bash

function factorial() {
    if [ "$1" -gt "1" ]; then
        previous=`expr $1 - 1`
        parent=`factorial $previous`
        result=`expr $1 \* $parent`
        echo $result
    else
        echo 1
    fi
}
factorial $1
$ ./factorial.sh 6 720
```

You should be very careful when working with recursive functions tho, especially if you are creating files in them, you could end up with more open files than allowed by the system.

Functions also have `positional parameters`, and `$@` can also be used to retrieve the list of all passed arguments.

```shell
# $0 is the script itself, not the function name
function helloFunc(){
    echo "Hello ${1} ${2}!"
}
helloFunc Shell World
# Output: Hello Shell World!
```

> Functions also have access to all global variables. But, as a reminder, it's the best practice to use only `local` variables inside the functions to avoid side effects, which can eventually cause bugs.

---

There is much more to be said about the functions in shellscript, so consider this post just as a small introduction to their usage in scripting. In the next post, I'll write a bit about Wildcards, Character Classes and about logging and debugging shellscript. Thanks for reading!
