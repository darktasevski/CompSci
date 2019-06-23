# Shellscripting: Conditional Execution

> Conditionals in shell programming

![Alt text of image](https://thepracticaldev.s3.amazonaws.com/i/mzfpomwt6xfadtk9lpei.png)

_This is the second part of the series on Shellscripting. In case you've missed it, you can find the first part [here](https://dev.to/puritanic/shellscripting-27bl)._

_Also, note that the most of the code is tested only with the `bash` and `zsh` shells, it may not work with other shells._

**Conditional execution** means that you can choose to execute code only if certain conditions are met. Without this capability, all you would be able to do is execute one command after another after another. The ability to test a variety of things about the state of the system, and of the environment variables of the process, means that a shell script can do far more powerful things that would otherwise be possible. In this post, we are going to explore `test operators`, `if/then/else`conditionals, and `case` statements.

### `test` aka `[`

With tests we can check for example: if the file exists, if a number is greater than another, compare if strings are equal...

Syntax:

```shell
[ condition-to-test-for ]
```

Example:

```shell
[ -e /etc/passwd ]
```

As heading above says, another name for `test` is `[`. It is also a shell builtin (which means that the shell itself will interpret `[` as `test`, even if your Unix environment is set up differently). When `[` is called, it requires a `]` around its arguments, but otherwise, it does the same work.

```shell
test  -e /etc/passwd
# as above so below
[ -e /etc/passwd ]
```

This tests if `etc/passwd` exists, and if it does this returns `true` - command exit status of `0`. If it doesn't exist the command exits with the exit status of `1` (more on exit statuses in next post).

**Gotcha**: The spaces around the `[` and `]` symbols are required! For example:
`[-e /etc/passwd ]` will not work; it is interpreted as `test-e /etc/passwd ]` which errors because `]` doesn't have a beginning `[`. `[` is actually a program, and just like `ls` and other programs, it must be surrounded by spaces.
**Moral of the story: Put spaces around all your operators.**

_Note_: You can reverse the results of the test with `!`:

```shell
if [ ! -r “$1” ]; then echo "File $1 is not readable – skipping."; fi
```

As you can see `test` is a simple but powerful comparison utility. For full details, run `man test` on your system, but here are some usages and typical examples:

File test operators:

```shell
-d FILE #True if the file is a directory
-e FILE #True if the file exists
-f FILE #True if the file exists and it's regular file
-r FILE #True if the file is readable by you
-s FILE #True if the file exists and it's not empty
-w FILE #True if the file is writable by you
-x FILE #True if the file is executable by you
```

String test operators:

```shell
-z STRING #True if the string is empty
-n STRING #True if the string is not empty
STRING1 = STRING2 #True if the strings are equal
STRING1 != STRING2 #True if the strings are not equal
```

Arithmetic tests:

```shell
arg1 -eq arg2 #True if the arguments are equal
arg1 -ne arg2 #True if the arguments are not equal
arg1 -lt arg2 #True if the arg1 is less than arg2
arg1 -le arg2 #True if arg1 is less than or equal to arg2
arg1 -gt arg2 #True if arg1 is greater than arg2
arg1 -ge arg2 #True if arg1 is greater than or equal to arg2
```

### `&&` and `||`

It is possible to combine tests, and/or chain multiple commands by using the `&&` and `||` operators. These perform a Logical AND and Logical OR, respectively.

-   `&& = AND`
    `mkdir /tmp/bak && cp test.txt /tmp/bak`

    The command that follows `&&` will be executed if and only the previous command succeeds (aka exits with `0` exit status).

-   `|| = OR`
    `cp test.txt /tmp/bak || cp test.txt /tmp`

    The `||` operator performs a Logical OR, so when it only matters that one of the conditions is met, but not which one, this is the feature to use.

```shell
#! /bin/bash
HOST="google.com"
ping -c 1 $HOST && echo "$HOST reachable."
```

---

### IF/THEN

Almost every programming language has an if/then/else construct, and the shell is no exception. The syntax uses square brackets to perform a test, and the `then` and `fi` statements are required, acting just like the { and } curly brackets in C and some other languages.

Syntax:

```shell
if [ condition ]
then
    statements for when the condition is true
fi
```

Other than the line break after the `then`, all these line breaks are required or can be replaced with semicolons. To remind: the spaces around the `[` and `]` symbols are also required, so this can be reduced (pls don't) at best to:
`if [ condition ];then statements;fi`

> It is quite common to use the semicolon to put the then on the same line as the if.

Example:

```shell
MY_SHELL="zsh"

if [ "$MY_SHELL" = "zsh" ]
    then
        echo "You are the zsh shell user!"
fi
```

#### ELSE

It may be that you want to run the command if possible, but if it can’t be done, then continue execution of the script. One (simpler and the most common) way to do this would be to use ELSE statement:

```shell
if [ condition ]; then
    statements for when the condition is true
else
    statements for when the condition is false
fi
```

```shell
#!/bin/bash

# Check for likely causes of failure
if [ -r "$1" ]; then
    cat "$1"
else
    echo "Error: $1 is not a readable file."
fi
```

This snippet tries to `cat` the file passed to it as its first parameter (`"$1"` putting double quotes around it to allow for filenames including spaces) and spits out an error message if it failed to do so.

#### ELIF

`elif` is a construct that allows you to add conditions to the `else` part of an `if` statement. It is short for "else if" so that a long string of possible actions can be written more concisely. This makes it easier to write, easier to read, and most importantly, easier to debug.

```shell
#!/bin/bash
OS=`uname -s`
if [ "$OS" = "FreeBSD" ]; then
    echo "This Is FreeBSD"
elif [ "$OS" = "CYGWIN_NT-5.1" ]; then
    echo "This is Cygwin"
elif [ "$OS" = "SunOS" ]; then
    echo "This is Solaris"
elif [ "$OS" = "Darwin" ]; then
    echo "This is Mac OSX"
elif [ "$OS" = "Linux" ]; then
    echo "This is Linux"
else
    echo "Failed to identify this OS"
fi
```

This is _much_, _much_ more readable than the nested `else` code hell this could turn into.

---

### `case` statement

`case` provides a much cleaner, easier-to-write, and far more readable alternative to the `if/then/else` construct, particularly when there are a lot of possible values to test for. With case, you list the values you want to identify and act upon, and then provide a block of code for each one.
One common place for case statements use are system startup scripts.
Syntax:

```shell
case "$VAR" in
    pattern_1)
        # Some commands here.
        ;; # Execution will stop when the double semicolon is reached
    pattern_n)
        # Some commands here.
        ;;
esac
```

Example:

```shell
#!/bin/bash
OS=`uname -s`

case "$OS" in
    FreeBSD) echo "This is FreeBSD" ;;
    CYGWIN_NT-5.1) echo "This is Cygwin" ;;
    SunOS) echo "This is Solaris" ;;
    Darwin) echo "This is Mac OSX" ;;
    Linux) echo "This is Linux" ;;
    *) echo "Failed to identify this OS" ;;
esac
```

Although it looks like a special directive, the `*` is simply the most generic wildcard possible, as it will match absolutely any string. This also suggests that we are able to do more advanced pattern matching like `RegEx`, for example.

> Note that the patterns are case sensitive.

A less well-known feature of the bash implementation of `case` is that you can end the statement with `;;&` or `;&` instead of only `;;`. While `;;` means that none of the other statements will be executed, if you end a statement with `;;&` all subsequent cases will still be evaluated. If you end a statement with `;&`, the case will be treated as having matched.

```shell
#!/bin/bash

read -p "Give me a word: " input
echo -en "That's "
case $input in
  *[[:digit:]]*) echo -en "numerical " ;;&
  *[[:lower:]]*) echo -en "lowercase " ;;&
  *[[:upper:]]*) echo -en "uppercase " ;;&
  *) echo "input." ;;
esac

$ ./case1.sh
Give me a word: Hello 123
That's numerical lowercase uppercase input.
```

> This feature is specific to the bash shell; it is not a standard feature of the Bourne shell, so if you need to write a portable script, do not expect this to work. It will cause a syntax error message on other shells.

---

This post has covered the various ways of controlling conditional execution — from the simple `if/then/else construct`, through the different things that can be done with `test`, through to the more flexible `case` statement for matching against different sets of input.

I must admit that writing about shell programming seemed like two or three posts tops in the beginning, but there is a _lot_ to be covered, and even this and previous posts are not even the half of everything that can be learned about topics I've written about. I really recommend [Advanced Bash-Scripting Guide](http://tldp.org/LDP/abs/html/index.html) and [Classic Shell Scripting](http://shop.oreilly.com/product/9780596005955.do) if you want to learn shell programming in more depth. I'll write a bit about Positional parameters, exit codes and (hopefully) functions in the next one. Thanks for reading!
