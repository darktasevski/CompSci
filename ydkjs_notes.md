# You Don't Know JS: Notes

-   [Scope and Closures](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Scope%20and%20Closures)
    _ [Cheating Lexical Scope: eval and with](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Cheating%20Lexical%20Scope:)
    _ [Block scope/Garbage collector snippet](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Block%20scope)
    _ [Hoisting](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Hoisting)
    _ [Closure](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Closure) \* [Dynamic Scope](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=Dynamic%20Scope)
-   [this & Object Prototypes](bear://x-callback-url/open-note?id=FB9951EE-695D-41F4-807F-DDC6017193E9-521-0000102458B87ED3&header=this%20&%20Object%20Prototypes)

---

## Scope and Closures

### Cheating Lexical Scope:

#### `eval`

The `eval(..)` function in JavaScript takes a string as an argument, and treats the contents of the string as if it had actually been authored code at that point in the program. In other words, you can programmatically generate code inside of your authored code, and run the generated code as if it had been there at author time.

```js
function foo(str, a) {
	eval(str); // cheating!
	console.log(a, b);
}

var b = 2;
foo('var b = 3;', 1); // 1 3
```

> **Note**: `eval(..)` when used in a strict-mode program operates in its own lexical scope, which means declarations made inside of the `eval()` do not actually modify the enclosing scope.

```js
function foo(str) {
	'use strict';
	eval(str);
	console.log(a); // ReferenceError: a is not defined
}

foo('var a = 2');
```

#### `with()`

> This is frowned upon and deprecated!  
> `with` is typically explained as a short-hand for making multiple property references against an object without repeating the object reference itself each time.

```js
var obj = {
	a: 1,
	b: 2,
	c: 3,
};
// more "tedious" to repeat "obj"
obj.a = 2;
obj.b = 3;
obj.c = 4;
// "easier" short-hand
with (obj) {
	a = 3;
	b = 4;
	c = 5;
}
```

One of reasons for this being deprecated:

```js
function foo(obj) {
	with (obj) {
		a = 2;
	}
}
var o1 = {
	a: 3,
};
var o2 = {
	b: 3,
};
foo(o1);
console.log(o1.a); // 2

foo(o2);
console.log(o2.a); // undefined
console.log(a); // 2 -- Oops, leaked global!
```

### Block scope

#### Garbage collectors

Probably useful snippet of using block scope to garbage collect unneeded stuff

```js
function process(data) {
	// do something interesting
}
// anything declared inside this block can go away after!
{
	let someReallyBigData = { .. };

	process( someReallyBigData );
}
var btn = document.getElementById( "my_button" );
btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );
```

### Hoisting

All declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can visualize this as declarations (variables and functions) being "moved" to the top of their respective scopes, which we call "hoisting".

Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted.

> Note: Only the declarations themselves are hoisted, while any assignments or other executable logic are left in place. I

> It's also important to note that hoisting is per-scope.

> Function declarations are hoisted, function expressions are not.

> Both function declarations and variable declarations are hoisted. But a subtle detail (that can show up in code with multiple "duplicate" declarations) is that functions are hoisted first, and then variables.

### Closure

**Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.**

```js
function foo() {
	var a = 2;
	function bar() {
		console.log(a); // 2
	}
	bar();
}
foo();
```

From a purely academic perspective, what is said of the above snippet is that the function bar() has a closure over the scope of foo() (and indeed, even over the rest of the scopes it has access to, such as the global scope in our case). Put slightly differently, it's said that bar() closes over the scope of foo(). Why? Because bar() appears nested inside of foo(). Plain and simple.

And that weird way of binding functions in React is solved:

```js
function foo() {
	var a = 2;
	function bar() {
		console.log(a);
	}
	return bar;
}
var baz = foo();
baz(); // 2 -- Whoa, closure was just observed, man.
```

`var baz = foo();` this executes outer functions which returns inner functions that isn’t executed. Then we call `baz()` which finally executes inner `bar` function, which in this case have a closure over the foo scope and global scope.

After foo() executed, normally we would expect that the entirety of the inner scope of foo() would go away, because we know that the Engine employs a Garbage Collector that comes along and frees up memory once it's no longer in use. Since it would appear that the contents of foo() are no longer in use, it would seem natural that they should be considered gone.

But the "magic" of closures does not let this happen. That inner scope is in fact still "in use", and thus does not go away. Who's using it? The function bar() itself.

By virtue of where it was declared, bar() has a lexical scope closure over that inner scope of foo(), which keeps that scope alive for bar() to reference at any later time.

**bar() still has a reference to that scope, and that reference is called closure.**

### Dynamic Scope

Dynamic scope, doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from. In other words, the scope chain is based on the call-stack, not the nesting of scopes in code.

```js
function foo() {
	console.log(a); // 3  (not 2!)
}
function bar() {
	var a = 3;
	foo();
}
var a = 2;
bar();
```

Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3.

**The key contrast: lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.**

## this & Object Prototypes
