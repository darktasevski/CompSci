# You Don't Know JS: Notes

- [You Don't Know JS: Notes](#You-Dont-Know-JS-Notes)
	- [Scope and Closures](#Scope-and-Closures)
		- [Cheating Lexical Scope:](#Cheating-Lexical-Scope)
			- [`eval`](#eval)
			- [`with()`](#with)
		- [Block scope](#Block-scope)
			- [Garbage collectors](#Garbage-collectors)
		- [Hoisting](#Hoisting)
		- [Closure](#Closure)
		- [Dynamic Scope](#Dynamic-Scope)
	- [this & Object Prototypes](#this--Object-Prototypes)
		- [What's this?](#Whats-this)
			- [`this` binding rules](#this-binding-rules)
				- [Default Binding](#Default-Binding)
				- [Implicit Binding](#Implicit-Binding)
					- [Implicitly Lost](#Implicitly-Lost)
				- [Explicit Binding](#Explicit-Binding)
				- [`new` Binding](#new-Binding)
				- [Determining `this`](#Determining-this)
				- [Ignored `this`](#Ignored-this)
			- [Lexical `this`](#Lexical-this)
		- [Objects](#Objects)

---

## Scope and Closures

### Cheating Lexical Scope:

#### `eval`

The `eval(..)` function in JavaScript takes a string as an argument, and treats the contents of the string as if it had actually been authored code at that point in the program. In other words, you can programmatically generate code inside of your authored code, and run the generated code as if it had been there at author time.

```
function foo(str, a) {
	eval( str ); // cheating!
	console.log( a, b );
}

var b = 2;
foo( "var b = 3;", 1 ); // 1 3
```

> _Note_: `eval(..)` when used in a strict-mode program operates in its own lexical scope, which means declarations made inside of the `eval()` do not actually modify the enclosing scope.

```
function foo(str) {
   "use strict";
   eval( str );
   console.log( a ); // ReferenceError: a is not defined
}

foo( "var a = 2" );
```

#### `with()`

> This is frowned upon and deprecated!
> `with` is typically explained as a short-hand for making multiple property references against an object without repeating the object reference itself each time.

```
var obj = {
	a: 1,
	b: 2,
	c: 3
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

```
function foo(obj) {
	with (obj) {
		a = 2;
	}
}
var o1 = {
	a: 3
};
var o2 = {
	b: 3
};
foo( o1 );
console.log( o1.a ); // 2

foo( o2 );
console.log( o2.a ); // undefined
console.log( a ); // 2 -- Oops, leaked global!
```

### Block scope

#### Garbage collectors

Probably useful snippet of using block scope to garbage collect unneeded stuff

```
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

_Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope._

```
function foo() {
	var a = 2;
	function bar() {
		console.log( a ); // 2
	}
	bar();
}
foo();
```

From a purely academic perspective, what is said of the above snippet is that the function bar() has a closure over the scope of foo() (and indeed, even over the rest of the scopes it has access to, such as the global scope in our case). Put slightly differently, it's said that bar() closes over the scope of foo(). Why? Because bar() appears nested inside of foo(). Plain and simple.

And that weird way of binding functions in React is solved:

```
function foo() {
	var a = 2;
	function bar() {
		console.log( a );
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

_bar() still has a reference to that scope, and that reference is called closure._

### Dynamic Scope

Dynamic scope, doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from. In other words, the scope chain is based on the call-stack, not the nesting of scopes in code.

```
function foo() {
	console.log( a ); // 3  (not 2!)
}
function bar() {
	var a = 3;
	foo();
}
var a = 2;
bar();
```

Because when foo() cannot resolve the variable reference for a, instead of stepping up the nested (lexical) scope chain, it walks up the call-stack, to find where foo() was called from. Since foo() was called from bar(), it checks the variables in scope for bar(), and finds an a there with value 3.

_The key contrast: lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from._

## this & Object Prototypes

The name "this" creates confusion when developers try to think about it too literally. There are two meanings often assumed, but both are incorrect.

**Itself**

> The first common temptation is to assume this refers to the function itself. That's a reasonable grammatical inference, at least.

**Its Scope**

> The next most common misconception about the meaning of this is that it somehow refers to the function's scope. It's a tricky question, because in one sense there is some truth, but in the other sense, it's quite misguided.
>
> To be clear, this does not, in any way, refer to a function's lexical scope. It is true that internally, scope is kind of like an object with properties for each of the available identifiers. But the scope "object" is not accessible to JavaScript code. It's an inner part of the Engine's implementation.

Doesn't work:

```js
function foo(num) {
	console.log('foo: ' + num);

	// keep track of how many times `foo` is called
	this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
	if (i > 5) {
		foo(i);
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count); // 0 -- WTF?
```

Hack:

```js
function foo(num) {
	console.log('foo: ' + num);

	// keep track of how many times `foo` is called
	data.count++;
}

var data = {
	count: 0,
};

var i;

for (i = 0; i < 10; i++) {
	if (i > 5) {
		foo(i);
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(data.count); // 4
```

Works:

```js
function foo(num) {
	console.log('foo: ' + num);

	// keep track of how many times `foo` is called
	// Note: `this` IS actually `foo` now, based on
	// how `foo` is called (see below)
	this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
	if (i > 5) {
		// using `call(..)`, we ensure the `this`
		// points at the function object (`foo`) itself
		foo.call(foo, i);
	}
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count); // 4
```

### What's this?

`this` is not an author-time binding but a runtime binding. It is contextual based on the conditions of the function's invocation. `this` binding has nothing to do with where a function is declared, but has instead everything to do with the manner in which the function is called.

To understand `this` binding, we have to understand the call-site: the location in code where a function is called (**not where it's declared**). We must inspect the call-site to answer the question: what's this `this` a reference to?

#### `this` binding rules

##### Default Binding

Variables declared in the global scope, as var a = 2 is, are synonymous with global-object properties of the same name. They're not copies of each other, they are each other.

```js
function foo() {
	console.log(this.a);
}

var a = 2;

foo(); // 2
``;
```

Secondly, we see that when foo() is called, this.a resolves to our global variable a. Why? Because in this case, the default binding for this applies to the function call, and so points this at the global object.

How do we know that the default binding rule applies here? We examine the call-site to see how foo() is called. In our snippet, foo() is called with a plain, un-decorated function reference. None of the other rules we will demonstrate will apply here, so the default binding applies instead.

##### Implicit Binding

Another rule to consider is: does the call-site have a context object, also referred to as an owning or containing object, though these alternate terms could be slightly misleading.

```js
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo,
};

obj.foo(); // 2
```

```js
function foo() {
	console.log(this.a);
}

var obj2 = {
	a: 42,
	foo: foo,
};

var obj1 = {
	a: 2,
	obj2: obj2,
};

obj1.obj2.foo(); // 42
```

###### Implicitly Lost

One of the most common frustrations that `this` binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or `undefined`, depending on `strict mode`.

Consider:

```js
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo,
};

var bar = obj.foo; // function reference/alias!

var a = 'oops, global'; // `a` also property on global object

bar(); // "oops, global"
```

Even though `bar` appears to be a reference to `obj.foo`, in fact, it's really just another reference to `foo` itself. Moreover, the call-site is what matters, and the call-site is `bar()`, which is a plain, un-decorated call and thus the default binding applies.

The more subtle, more common, and more unexpected way this occurs is when we consider passing a callback function:

```js
function foo() {
	console.log(this.a);
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn(); // <-- call-site!
}

var obj = {
	a: 2,
	foo: foo,
};

var a = 'oops, global'; // `a` also property on global object

doFoo(obj.foo); // "oops, global"
```

What if the function you're passing your callback to is not your own, but built-in to the language? No difference, same outcome:

```js
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo,
};

var a = 'oops, global'; // `a` also property on global object

setTimeout(obj.foo, 100); // "oops, global"
```

##### Explicit Binding

"All" functions in the language have some utilities available to them which can be useful to force a function call to use a particular object for the this binding. Specifically, functions have `call(..)`, `apply(..)` and `bind(...)` methods.

How do these utilities work? They both take, as their first parameter, an object to use for the `this`, and then invoke the function with that `this` specified. Since you are directly stating what you want the `this` to be, we call it _explicit binding_.

```js
function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
};

foo.call(obj); // 2
```

Invoking foo with explicit binding by `foo.call(..)` allows us to force its `this` to be `obj`.

##### `new` Binding

The fourth and final rule for `this` binding requires us to re-think a very common misconception about functions and objects in JavaScript.

In traditional class-oriented languages, "constructors" are special methods attached to classes, that when the class is instantiated with a new operator, the constructor of that class is called. This usually looks something like:

```js
something = new MyClass(..);
```

JavaScript has a `new` operator, and the code pattern to use it looks basically identical to what we see in those class-oriented languages; most developers assume that JavaScript's mechanism is doing something similar. However, there really is no connection to class-oriented functionality implied by `new` usage in JS.

First, let's re-define what a "constructor" in JavaScript is. In JS, constructors are just functions that happen to be called with the `new` operator in front of them. They are not attached to classes, nor are they instantiating a class. They are not even special types of functions. They're just regular functions that are, in essence, hijacked by the use of `new` in their invocation.

When a function is invoked with new in front of it, otherwise known as a constructor call, the following things are done automatically:

1. a brand new object is created (aka, constructed) out of thin air
2. the newly constructed object is `[[Prototype]]`-linked
3. the newly constructed object is set as the `this` binding for that function call
4. unless the function returns its own alternate **object**, the `new`-invoked function call will automatically return the newly constructed object.

Consider this code:

```js
function foo(a) {
	this.a = a;
}

var bar = new foo(2);
console.log(bar.a); // 2
```

By calling `foo(..)` with `new` in front of it, we've constructed a new object and set that new object as the `this` for the call of `foo(..)`. **So new is the final way that a function call's this can be bound. We'll call this new binding.**

##### Determining `this`

Now, we can summarize the rules for determining `this` from a function call's call-site, in their order of precedence. Ask these questions in this order, and stop when the first rule applies.

1. Is the function called with `new` (**new binding**)? If so, `this` is the newly constructed object.

    `var bar = new foo()`

2. Is the function called with `call` or `apply` (**explicit binding**), even hidden inside a `bind` _hard binding_? If so, `this` is the explicitly specified object.

    `var bar = foo.call( obj2 )`

3. Is the function called with a context (**implicit binding**), otherwise known as an owning or containing object? If so, `this` is _that_ context object.

    `var bar = obj1.foo()`

4. Otherwise, default the `this` (**default binding**). If in `strict mode`, pick `undefined`, otherwise pick the `global` object.

    `var bar = foo()`

That's it. That's _all it takes_ to understand the rules of `this` binding for normal function calls. Well... almost, because, as usual, there are some exceptions to the "rules".

##### Ignored `this`

If you pass `null` or `undefined` as a this binding parameter to `call`, `apply`, or `bind`, those values are effectively ignored, and instead the default binding rule applies to the invocation.

```js
function foo() {
	console.log(this.a);
}

var a = 2;

foo.call(null); // 2
```

Why would you intentionally pass something like `null` for a `this` binding?

It's quite common to use `apply(..)` for spreading out arrays of values as parameters to a function call. Similarly, `bind(..)` can curry parameters (pre-set values), which can be very helpful.

```js
function foo(a, b) {
	console.log('a:' + a + ', b:' + b);
}

// spreading out array as parameters
foo.apply(null, [2, 3]); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind(null, 2);
bar(3); // a:2, b:3
```

Both these utilities require a `this` binding for the first parameter. If the functions in question don't care about `this`, you need a placeholder value, and `null` might seem like a reasonable choice as shown in this snippet.

#### Lexical `this`

Normal functions abide by the 4 rules we just covered. But ES6 introduces a special kind of function that does not use these rules: arrow-function.

Arrow-functions are signified not by the `function` keyword, but by the `=>` so called "fat arrow" operator. Instead of using the four standard this rules, arrow-functions adopt the `this` binding from the enclosing (function or global) scope.

```js
function foo() {
	// return an arrow function
	return a => {
		// `this` here is lexically adopted from `foo()`
		console.log(this.a);
	};
}

var obj1 = {
	a: 2,
};

var obj2 = {
	a: 3,
};

var bar = foo.call(obj1);
bar.call(obj2); // 2, not 3!
```

The arrow-function created in `foo()` lexically captures whatever `foo()`s this is at its call-time. Since`foo()` was this-bound to `obj1`, bar (a reference to the returned arrow-function) will also be this-bound to `obj1`. The lexical binding of an arrow-function cannot be overridden (even with new!).

### Objects

Objects are the general building block upon which much of JS is built. They are one of the 6 primary types (called "language types" in the specification) in JS:

-   string
-   number
-   boolean
-   null
-   undefined
-   object

Note that the simple primitives (`string`, `number`, `boolean`, `null`, and `undefined`) are not themselves objects. `null` is sometimes referred to as an object type, but this misconception stems from a bug in the language which causes `typeof null` to return the string "object" incorrectly (and confusingly). In fact, `null` is its own primitive type.

`function` is a sub-type of object (technically, a "callable object"). Functions in JS are said to be "first class" in that they are basically just normal objects (with callable behavior semantics bolted on), and so they can be handled like any other plain object.

`Arrays` are also a form of objects, with extra behavior. The organization of contents in arrays is slightly more structured than for general objects.

The contents of an object consist of values (any type) stored at specifically named locations, which we call properties. It's important to note that while we say "contents" which implies that these values are actually stored inside the object, that's merely an appearance. The engine stores values in implementation-dependent ways, and may very well not store them in some object container. What is stored in the container are these property names, which act as pointers (technically, references) to where the values are stored.

Consider:

```js
var myObject = {
	a: 2,
};

myObject.a; // 2

myObject['a']; // 2
```

To access the value at the location a in myObject, we need to use either the . operator or the [ ] operator. The .a syntax is usually referred to as "property" access, whereas the ["a"] syntax is usually referred to as "key" access. In reality, they both access the same location, and will pull out the same value, 2, so the terms can be used interchangeably.

The main difference between the two syntaxes is that the . operator requires an Identifier compatible property name after it, whereas the [".."] syntax can take basically any UTF-8/unicode compatible string as the name for the property. To reference a property of the name "Super-Fun!", for instance, you would have to use the ["Super-Fun!"] access syntax, as Super-Fun! is not a valid Identifier property name.

In objects, property names are always strings. If you use any other value besides a string (primitive) as the property, it will first be converted to a string. This even includes numbers, which are commonly used as array indexes, so be careful not to confuse the use of numbers between objects and arrays.

Objects are collections of key/value pairs. The values can be accessed as properties, via `.propName` or `["propName"]` syntax. Whenever a property is accessed, the engine actually invokes the internal default `[[Get]]` operation (and `[[Put]]` for setting values), which not only looks for the property directly on the object, but which will traverse the `[[Prototype]]` chain if not found.

Properties have certain characteristics that can be controlled through property descriptors, such as `writable` and `configurable`. In addition, objects can have their mutability (and that of their properties) controlled to various levels of immutability using `Object.preventExtensions(..)`, `Object.seal(..)`, and `Object.freeze(..)`.

You can also iterate over the values in data structures (arrays, objects, etc) using the ES6 `for..of` syntax, which looks for either a built-in or custom `@@iterator` object consisting of a `next()` method to advance through the data values one at a time.
