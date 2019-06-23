![Semi random image](https://thepracticaldev.s3.amazonaws.com/i/z5a2a7yzn0pmc10w703n.jpg)

# Shellscripting

> Introduction to Shell programming

## **Variables and Shebang**

---

### Small intro to shell programming

The Shell is the standard interface to every Unix and Linux system; users and administrators alike have experience with the shell, and combining commands into scripts is a natural progression. However, this is just a tip of the iceberg.

I've spent some time lately learning about shell and writing scripts, and I've realized that the shell is actually a full programming language with variables and functions, and also more advanced structures such as arrays (including associative arrays) and being so directly linked to the kernel it has native IO primitives built into it's very syntax, as well as process and job control.

I've planned this as a series of a few posts, and I'll try to be concise and on the point.

_So, what is shellscripting?_

Shellscripting is writing a series of commands for the shell to execute. It can combine lengthy and repetitive sequences of commands into a single and simple script, which can be stored and executed anytime, which is great for automating tasks. This reduces the effort required by the end user.

Script's commands are being executed by the interpreter (shell), one by one, and everything you can type in the command line you can also put in the script.

> Before running scripts, we need to set up permissions for execution with: `chmod 755 script.sh`

> We can then run the script with `./script.sh` via command line.

---

### #!

`#!` (shebang) specifies binary of the shell (interpreter) we want to execute the script, for example:
`#! /bin/bash`, `#! /bin/zsh` or for the best portability `#! /bin/sh` (this will run system shell).

_Note that the most of code in this series is tested only with `bash` and `zsh` shell, most sh scripts can be run by Bash without modification, but some stuff wont work._

```shell
#! /bin/sh
sleep 90
```

When we execute the script that contains `#!` what actually happens is that interpreter is executed and the path used to call the script is passed as an argument. To confirm that, let's say we have `sleepy.sh` script, then we can run the script with `./sleepy.sh &`, where `&` is used (it seems) to return the PID of the script execution process, and then we can run `ps -fp [PID]` to see process info:

```shell
UID PID PPID C STIME TTY TIME CMD
505 65418 59985 0 7:09PM ttys000 0:00.01 /bin/zsh ./sleepy.sh
```

We can see here that `./sleepy.sh` is passed to my `/bin/zsh` binary as an argument.

If a script doesn't contain `#!` commands are executed with default shell, but it's the best practice to be explicit as different shells have slightly varying syntax.

Also, we don't have to use only shells as interpreters for scripts. We can also use other binaries like `python`:

```shell
#! /usr/bin/python

print "This is a Python script"
```

```
chmod 755 hi.py
./hi.py
This is a Python script
```

---

### Variables

Variables are storage locations that have a name, and you can think of them as name-value pairs.
Syntax used to create a variable is: `VARIABLE_NAME="Value"`. It's important to note that variable names are case sensitive, and that, by convention, variable names should be all in uppercase. Also make sure to not use spaces after and before `=` sign, when declaring a variable.

**By default all variables are global, also they have to be defined before used.**
Variables can be defined in the functions (we'll talk about them eventually), but we cannot access them before a function is called.

```shell
function var(){
    FUNC_VAR=1
}
# FUNC_VAR is not defined at this point and this will not return anything
echo $FUNC_VAR
var # This is how we call a function in the shell
# FUNC_VAR is now available because the function has been called
echo $FUNC_VAR # Output: 1
```

Valid variable names can consist of letters, numbers, and underscores, except that number cannot be the first char in the name.

```shell
# Valid names
DARK_JEDI="Vader"
GR4Y_J3DI="Ahsoka"
Regular_Jedi="Obi-Wan"

# Invalid names
3DARK_LORDS="Vader Sidius Plagueis"
TWO-REBELS="Solo Leia"
ONE@SHIP="Ebon Hawk"
```

```shell
#! /bin/bash
MY_SHELL="zsh"
echo "I like the $MY_SHELL shell" # Output: I like the zsh shell
```

We can also enclose the variable name in curly braces:

```shell
MY_SHELL="zsh"
echo "I like the ${MY_SHELL} shell" # Output: I like the zsh shell
```

Curly braces syntax is optional unless you need to precede or follow up the variable with additional data, like so:

```shell
MY_SHELL="bash"
echo "I'm ${MY_SHELL}ing on my keyboard!" # Output: I'm bashing on my keyboard.
```

Without curly braces this wouldn't work as the interpreter will take that `ing` following the name variable as a part of the variable name.

Another best practice is to enclose variables in quotes, when working with them, to prevent some unexpected side effects.

We can also assign the output of the command to a variable:

```shell
SERVER_NAME=$(hostname)
echo "You are running this script on ${SERVER_NAME}"
```

#### Local variables

Local vars are created with `local` keyword, and **only functions can have the local variables**, so they can only be accessed within the function where they're declared.

```shell
function myFunc(){
    local LOCAL_VAR=" I'm locally scoped"
}
```

It's the best practice to use only local variables inside functions.

---

That's it for now, I'll write a bit about tests and loops in the next one. Thanks for reading, and if you have any question, just ask away!
