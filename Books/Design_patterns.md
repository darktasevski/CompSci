# Head First Design Patterns

> Notes on Eric Freeman' and Elisabeth Robson' "Head First Design Patterns".

**DESIGN PRINCIPLE:**

_Identify the aspects of your application that vary and separate them from what stays the same._

Take what varies and _encapsulate_ it so it won't affect the rest of your code. The result? Fewer unintended consequences from code changes and more flexibility in your systems!

Simply told: if you've got some aspect of your code that is changing, say with every new requirement, then you know you've got a behavior that needs to be pulled out and separated from all the stuff that doesn't change.

**DESIGN PRINCIPLE:**

_Program to an interface, not an implementation._

_Program to an interface_ really means _Program to a supertype._
