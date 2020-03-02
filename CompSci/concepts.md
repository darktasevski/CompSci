# Interesting concepts

-   [Interesting concepts](#Interesting-concepts)

    -   [Principle of least privilege](#Principle-of-least-privilege)
    -   [Object Oriented Programming](#Object-Oriented-Programming)
        -   [Encapsulation](#Encapsulation)
        -   [Abstraction](#Abstraction)
        -   [Inheritance](#Inheritance)
        -   [Polymorphism](#Polymorphism)

-   [Principle of least privilege](bear://x-callback-url/open-note?id=ACE8680D-7057-49D5-A6C1-585DA341BD33-521-00003F500D1F4800&header=Principle%20of%20least%20privilege)

## Principle of least privilege

The principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, a user account for the sole purpose of creating backups does not need to install software: hence, it has rights only to run backup and backup-related applications. Any other privileges, such as installing new software, are blocked. The principle applies also to a personal computer user who usually does work in a normal user account, and opens a privileged, password protected account (that is, a superuser) only when the situation absolutely demands it.

When applied to users, the terms least user access or least-privileged user account (LUA) are also used, referring to the concept that all user accounts at all times should run with as few privileges as possible, and also launch applications with as few privileges as possible.

The principle of least privilege is widely recognized as an important design consideration in enhancing the protection of data and functionality from faults (fault tolerance) and malicious behavior (computer security).

Benefits of the principle include:

    * Better system stability. When code is limited in the scope of changes it can make to a system, it is easier to test its possible actions and interactions with other applications. In practice for example, applications running with restricted rights will not have access to perform operations that could crash a machine, or adversely affect other applications running on the same system.
    * Better system security. When code is limited in the system-wide actions it may perform, vulnerabilities in one application cannot be used to exploit the rest of the machine. For example, Microsoft states “Running in standard user mode gives customers increased protection against inadvertent system-level damage caused by "shatter attacks" and malware, such as root kits, spyware, and undetectable viruses”.
    * Ease of deployment. In general, the fewer privileges an application requires the easier it is to deploy within a larger environment. This usually results from the first two benefits, applications that install device drivers or require elevated security privileges typically have additional steps involved in their deployment. For example, on Windows a solution with no device drivers can be run directly with no installation, while device drivers must be installed separately using the Windows installer service in order to grant the driver elevated privileges.

## Object Oriented Programming

Object oriented programming is a method of programming that attempts to model some process or thing in the world as a class or object.

`class` - a blueprint for objects. Classes can contain methods (functions) and attributes (similar to keys in a dict).

`instance` - objects that are constructed from a class blueprint that contain their class's methods and properties.

With object oriented programming, the goal is to encapsulate your code into logical, hierarchical groupings using classes so that you can reason about your code at a higher level.

### Encapsulation

**Encapsulation** - the grouping of public and private attributes and methods into a programmatic class, making **abstraction** possible

### Abstraction

**Abstraction** - exposing only "relevant" data in a class interface, hiding private attributes and methods (aka the "inner workings") from users

### Inheritance

A key feature of OOP is the ability to define a class which inherits from another class (a "base" or "parent" class).

### Polymorphism

A key principle in OOP is the idea of polymorphism - an object can take on many (poly) forms (morph). While a formal definition of polymorphism is more difficult, here are two important practical applications:

1.  The same class method works in a similar way for different classes

    ```py
    Cat.speak()  # meow
    Dog.speak()  # woof
    Human.speak()  # yo
    ```

2.  The same operation works for different kinds of objects

    ```py
    sample_list = [1,2,3]
    sample_tuple = (1,2,3)
    sample_string = "awesome"

    len(sample_list)
    len(sample_tuple)
    len(sample_string)
    ```

Recap:

-   OOP is a way of programming by grouping things into hierarchical classes (objects)
-   OOP uses encapsulation and abstraction to provide a class interface to call methods and read/modify attributes
-   Classes can inherit from other classes and use the same methods to do different things (polymorphism)
-   We can enhance our custom classes with special/magic/dunder methods
