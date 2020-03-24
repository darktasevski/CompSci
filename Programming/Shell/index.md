---
index: true
---

# ShellScripting

[[toc]]

[TOC]

---

-   Contains series of the commands
-   An interpreter executes commands in the script
-   Anything you can type in command line you can put in the script
-   They're great for automating tasks

Before running scripts, we need to set up permissions for execution with:

```shell
chmod 755 script.sh
```

We can run then script with `./script.sh` in command line.

## Shebang

`#!` (shebang) Specifies binary of the shell(interpreter) we want to execute script, for example: `#! /bin/bash` or `#! /bin/zsh`

When we execute the script that contains `#!` what actually happens is that interpreter is executed and path used to call the script is passed as an argument. With `sleepy.sh` example we can run script with `./sleepy.sh &`, where `&` is used (it seems) to return the PID of the script execution process, and then we can run `ps -fp [PID]` to see process info:

```shell
UID PID PPID C STIME TTY TIME CMD
505 65418 59985 0 7:09PM ttys000 0:00.01 /bin/zsh ./sleepy.sh
```

If a script doesn't contain `#!` commands are executed with default shell, but it's the best practice to be explicit as different shells have slightly varying syntax.

Also, we dont have to use only shells as interpreters for scripts. We can also use other binaries like `python`:

```shell
#! /usr/bin/python

print "This is a Python script"
```

```
chmod 755 hi.py
./hi.py
This is a Python script
```

## Variables

Are storage locations that have name, you can think of them as name-value pairs. Syntax used to create a variable is: `VARIABLE_NAME="Value"`. It's important to note that variable names are case sensitive, and that, by convention, variable names should be all in uppercase. Also make sure to not use spaces after and before `=` sign, when declaring variable.

**By default all variables are global, also they have to be defined before used.** Variables can be defined in the [functions](###Functions), but we cannot access them before function is called.

```shell
function var(){
    GLOBAL_VAR=1
}
# GLOBAL_VAR is not defined at this point and this will not return anything
echo $GlOBAL_VAR
var
# GLOBAL_VAR is now available, because function has been called
echo $GlOBAL_VAR # Output: 1
```

Valid variable names can consist of letters, numbers and underscores, except that number cannot be the first char in the name.

```shell
# Valid names
DARK_JEDI="Vader"
GR4Y_J3DI="Ashoka"
Regular_Jedi="Obi-Wan"

# Invalid names
2DARK_LORDS="Vader & Sidius"
ONE-REBEL="Han Solo"
ONE@SHIP="Ebon Hawk"
```

```shell
#! /bin/bash
MY_SHELL="zsh"
echo "I like the $MY_SHELL shell"
```

We can also enclose variable name in curly braces:

```shell
MY_SHELL="zsh"
echo "I like the ${MY_SHELL} shell"
```

Curly braces syntax is optional unless you need to preeced or follow up the variable wit additional data, like so:

```shell
MY_SHELL="bash"
echo "I'm ${MY_SHELL}ing on my keyboard!"
```

Output: `I'm bashing on my keyboard`. Without curly braces this wouldn't work as the interpreter will take that `ing` following the name variable as a part of the variable name.

We can also assign the output of the command to a variable:

```shell
SERVER_NAME=$(hostname)
echo "You are running this script on ${SERVER_NAME}"
```

We can also use `` SERVER_NAME=`hostname` `` which is a older syntax today mainly replaced with `${}`.

### Local variables

Local vars are created with `local` keyword, and **only functions can have the local variables**, so they can only be accessed within the function where they're declared.

```shell
function myFunc(){
    local LOCAL_VAR="I'm locally scoped"
}
```

It's the best practice to use only local variables inside functions.

## Tests

With tests we can check for example: if file exists, if number is greater than another, compare if strings are equal...

Syntax:

```shell
[contidion-to-test-for]
```

Example:

```shell
[-e /etc/passwd]
```

this tests if `etc/passwd` exists, and if it does this returns `true` - command exit status of `0`, if it doesn't exists the command exits with the exit status of `1`. Some file operators:

```shell
-d FILE #True if the file is a directory
-e FILE #True if file exists
-f FILE #True if the file exists and it's regular file
-r FILE #True if the file is readable by you
-s FILE #True if the file exists and it's not empty
-w FILE #True if the file is writable by you
-x FILE #True if the file is executable by you
```

String operators:

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

## If statements

Syntax:

```shell
if [condition-is-true]
    then
        command 1
        command n
    elif [another-condition-true]
        then
            elifCommand 1
    else
        altCommand 1
        altCommand n
fi
```

Example:

```shell
MY_SHELL="zsh"

if ["$MY_SHELL" = "zsh"]
    then
        echo "You are the zsh shell user!"
    else
        echo "No zsh :("
fi
```

It's best practice to enclose variables in quotes to prevent some unexpected side effects.

## For loop

Syntax:

```shell
for VARIABLE_NAME in ITEM_1 ITEM_N
do
    command 1
    command 2
done
```

Example:

```shell
#! /bin/zsh
for COLOR in red gree blue
do
    echo "Color: $COLOR"
done
```

It's also common for the list of items to be stored in variable like this: `COLORS="red green blue"`

## Positional parameters

Those are variables that contains the content of the command line

`script.sh param1 param2 param3`

```shell
$0: "script.sh"
$1: "param1"
$2: "param2"
$3: "param3"
```

An practical example can be found in [archiveUser.sh](./archiveUser.sh) We can use `$@` sign when we want to loop through script parameters:

```shell
for USER in $@ # This will loop through all parameter passed to the script when executed
    passwd -l $USER # lock the account
    ...
done
```

## Accepting User Input (STDIN)

The `read` command accepts STDIN

Syntax: `read -p "PROMPT" VARIABLE` Example:

```shell
read -p "Enter a user name: " USER
echo "Archiving user: $USER"
...
```

## Exit statuses

Every time the script or command is executed it returns an exit status in range of 0 to 255. De facto status for success is `0`, all others are codes for an error condition. This codes can be used in scripts for error checking. We can find what various exit statuses mean we can check documentation for that error code, or look into source code.

We can use `$?` to check the exit status of the previously executed command.

```shell
ls /dir
...
echo $?
```

If dir exists `echo $?` will return `0` status code, otherwise it should return `2`, error code for directory not found. An practical example can be found in [checkConnection.sh](./checkConnection.sh).

We can explicitly define the return codes with `exit` command:

```shell
exit 0
exit 1
exit 3
etc...
```

Simply use the `exit` command in your script and follow it with the integer in range of 0 to 255. If we do not specify the return code with the `exit` command, then the exit status of the previously executed command in the shellscript will be used as the exit status. This is also true if we do not include `exit` command at all. Whenever the `exit` command is reached the shellscript will stop running.

```shell
HOST="google.com"

ping -c 1 $HOST

if ["$?" -ne "0"]
then
    echo "$HOST unreachable"
    exit 1
fi
exit 0
```

## && AND ||

We can chain together multiple commands with this logical operators.

-   `&& = AND` `mkdir /tmp/bak && cp test.txt /tmp/bak` The command following `&&` will always be executed if the previous command succeeds(aka exits with `0` exit status).
-   `|| = OR` `cp test.txt /tmp/bak || cp test.txt /tmp` On the other hand, the command following the `||` will only execute if the previous command fails(aka exits with non-zero exit status).

```shell
#! /bin/bash
HOST="google.com"
ping -c 1 $HOST && echo "$HOST reachable."
```

## The semicolon

If we want to ensure that all commands will be executed we can separate them with `;`: `cp test.txt /tmp/bak/ ; cp test.txt /tmp/` This is basically same as running this two commands on separate lines.

It's important to note that `semicolon` does not check for exit statuses of the executed commands. The command following `;` will be always executed no matter if the previous command fails or succeeds.

## Functions

For functions we can say that they're shellscripts within shellscript.

One of the main reasons why we are using functions is to follow the DRY principle, which means that we should write function once, and then we can use it many times. This can sometimes drastically reduce the script length, and also it's much easier to maintain as we have single function to edit and troubleshoot.

### Creating a function

It's important to note that function must be defined before it's called. We can pass parameters to the functions, and then access those params inside of the function. There are two ways to create a function in the shellscript:

```shell
function function-name() {
    # Code
}
# function keyword is optional
# so this is also correct
another-function () {
    # Another code
}
```

### Calling a function

To call or execute the function we can simply list it's name in the script (after it's being defined ofc):

```shell
function hello() {
    echo "Hello World!"
}

hello
```

Functions can call other functions, you can see an example in [functions.sh](./functions.sh). You can see there that the `hello` function calls `now` function before it's declared, but that's okay as the `now` function gets read into the script before the `hello` function is called, so in the order of the execution it's defined before it's used. For example something like this wont work:

```shell
function hello() {
    now
}
hello # hello is called before now is defined
function now() {
    echo "$(date +%r)"
}
```

Functions also have `positional parameters`, and `$@` also contains the list of all parameters.

```shell
# $0 is the script itself, not the function name
function hello(){
    echo "Hello $1 $2"
}
hello Shell World
# Output: Hello Shell World
```

Functions also have access to all global variables.

### Function exit statuses aka return codes

All functions have an exit status. We can explicitly return status within function with `return` keyword:

```shell
function myFunc() {
    return 1 # return code
}
```

Or status can be returned implicitly with the exit status of the last command executed in the function

All exit status rules are the same as the status rules we've explored so far.

## Wildcards

A Wildcard is a character or string used for pattern matching. We can use them to create search patterns that when expanded will return the list of matching files and directories. They can be used with the most commands, like `ls`, `rm`, `mv`, `cp` and others.

Wildcards are sometimes referred to as `globbs` or `globb` patterns, `globbing` is the act of expanding wildcard into the list of the matching files and directories.

They are great when we need to work with a specific group of the files or directories.

Here are the two main wildcards:

```shell
# * - matches zero or more characters, we can say that this matches anything
*.txt  # Select all files with txt extension
a*     # Select all files that start with the letter a
a*.txt # Selects all files that starts with letter a nad are txt files

# ? - matches exactly one character
?.txt  # Selects all files that have exactly one character preceding .txt
a?     # Selects all two letter files that starts with char a
a?.txt # Selects all two letter files that starts with a and are txt files
```

## Character Classes

`[]` is a character class. It matches any, but only one, of the characters included between the brackets: `[aeiou]` `ca[nt]*` - matches, for example: can, candy, catch, cat

We can also exclude characters in the match with `[!]`: `[!aeiou]*` - This matches all files that don't start with a vowel, for example: config, data, list etc.

We can also create ranges in character class with `[a-d]*` for example. This matches all files that start with a, b, c or d. `[1-3]*` matches all files that start with 1, 2 or 3.

Instead of creating custom ranges we can also use predefined named character classes. Those represents the most commonly used ranges:

-   [[:alpha:]] - Matches alphabetic letters, both lower and uppercase
-   [[:alnum:]] - Matches alphanumeric characters
-   [[:digit:]] - Matches numbers in decimal from 0 to 9
-   [[:lower:]] - matches any lowercase letters
-   [[:upper:]] - matches whitespace
-   [[:space:]] - matches any uppercase letters

If we want to match a wildcard character we can escape it with `\` escape character. `*\?` - Match all files that end with the question mark

Just for sanity stay away from naming files with \* or ?.

An practical example:

```shell
#! /bin/bash
cd ./src/components
for FILE in *.jsx # this can be also ./src/components/*.jsx
do
    echo "Copying $FILE"
    cp $FILE ./just-jsx
done
```

## Case statements

Case statements are the alternative to if statements, as they are sometimes easier to read. One common place for case statements use are a system startup scripts. Syntax:

```shell
case "$VAR" in
    pattern_1)
        # Some commands here.
        ;; # Execution will stop when double semicolon is reached (somethin' like a break in js)
    pattern_n)
        # Some commands here.
        ;;
esac
```

Example:

```shell
case "$1" in
    start|START) # We can use single | here as an OR
        /usr/sbin/sshd
        ;;
    stop|STOP)
        kill $(cat var/run/sshd.pid)
        ;;
    *) # this will act as a catch all and will match anything else
        echo "Usage: $0 start|stop"; exit 1
        ;;
esac
```

Note that the patterns are case sensitive.

## Logging

You may want to keep record of what's happening during the execution of the shellscript. **Logs should answer who, what, when, where and why.**

Linux OS uses the `syslog` standard for the message logging. This allows programs and applications to generate messages that can be captured, processed and stored by the system logger. This eliminates need for each and every application having to implement a logging mechanism. This means that we can take advantage of this logging system in shellscripts.

The `syslog` standard uses facilities and severities to categorize messages.

-   Facilities: kern, user, mail, daemon, auth, local0 to local7
-   Severities (ordered by severity): emerg, alert, crit, err, warning, notice, info, debug

Each message is labeled with the facility code and severity level.Facilities are used to determine from what type of program or part of the system message originates from.

## While loops

A while loop is a loop that repeats series of commands as long as the condition is true.

Syntax:

```shell
while [condition-is-true]
do
    command 1
    command 2
    command n
done
```

Example:

```shell
INDEX=1
while [$INDEX -lt 6]
do
    echo "Creating file-${INDEX}"
    touch /usr/local/project/file-${INDEX}.txt
    ((INDEX++)) # This is called arithmetic expansion. We can enclose math expressions inside double ()
```

```shell
while ["$CORRECT" != [y|Y]]
do
    read -p "Enter your name: " NAME
    read -p "Is ${NAME} correct? " CORRECT
done
```

```shell
# Check if server is online
while ping -c 1 App >/dev/null
do
    echo "App still upp!"
    sleep 5
done

echo "App is down, continue"
```

```shell
# Read a file line, by line
LINE_NUM=1
while read LINE
do
    echo "${LINE_NUM}: ${LINE}"
    ((LINE_NUM++))
done < /etc/fstab
```

Condition can be any command, and if command exits with the status code of `0` then the while loop will continue. When command fails and return non-zero exit status, the condition is false and while loop stops.

We can make infinite loop on purpose, this can be useful for a service tasks for example, and will be running in the background until it's killed.

```shell
while true
do
    command N
    sleep 1
done
```

We can exit the loop before it's normal ending by using `break` statement. This exits the loop, but doesn't exits the script, so the script will continue executing.

```shell
while true
do
    read -p "1: Show disk usage. 2: Show uptime. " CHOICE
    case "$CHOICE" in
        1)
            df -h
            ;;
        2)
            uptime
            ;;
        3)
            break
            ;;
    esac
done
```

We can also use `continue` statement if we want to skip over commands that are after `continue`. Exectuion continues back at the top of the loop and the while condition is examined again.

## Debugging shellscript

There are options built-in into `bash` that can help with debugging and fixing errors in shellscripts.

We can provide the first line in our script that starts with `#!` one or more modifiers, for example: `#! /bin/bash -x`, this is called `x-trace` or `tracing` and will print commands as they execute. We can run this via command line with `set -x` command, and to stop we can run `set +x`.

We can turn debugging on just for the portion of our script:

```shell
TEST_VAR="TEST123"
set -x
echo $TEST_VAR
set +x
hostname
```

Another useful option that can help with finding errors in shellscripts is the `-e` option. It causes your script to exit immediately if the command exits with a non-zero exit status. It can be combined with other options, like: `#! /bin/bash -x -e` or `#! /bin/bash -ex`, order is not important.

Yet another useful option is `-v` which prints shell input lines as they are read. This one can be combined with other options, too.

For more helpers we can run `help -set | less`.
