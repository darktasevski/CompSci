# Javascript

- [Javascript](#Javascript)
	- [Objects](#Objects)
		- [Sealing, Preventing Extension, Freezing](#Sealing-Preventing-Extension-Freezing)
			- [Sealing](#Sealing)
			- [Preventing Extension](#Preventing-Extension)
			- [Freezing](#Freezing)
		- [Property Descriptors](#Property-Descriptors)
			- [Value and Enumerable](#Value-and-Enumerable)
			- [Writable and Configurable](#Writable-and-Configurable)
			- [Getters and Setters](#Getters-and-Setters)
	- [Symbols](#Symbols)
	- [Proxies](#Proxies)
		- [Get Proxy Trap](#Get-Proxy-Trap)
		- [Has Proxy Trap](#Has-Proxy-Trap)
		- [Set Proxy Trap](#Set-Proxy-Trap)
		- [Delete Proxy Trap](#Delete-Proxy-Trap)
		- [Object Keys Proxy Trap](#Object-Keys-Proxy-Trap)
		- [Apply Proxy Trap](#Apply-Proxy-Trap)
		- [Construct Proxy Trap](#Construct-Proxy-Trap)
		- [Get/Set Prototype Proxy Traps](#GetSet-Prototype-Proxy-Traps)
		- [Extensibility Proxy Traps](#Extensibility-Proxy-Traps)
		- [Property Descriptors Proxy Traps](#Property-Descriptors-Proxy-Traps)
		- [Proxies + Property Descriptors](#Proxies--Property-Descriptors)

## Objects

Objects are everywhere in JavaScript. At their core they are complex key/value stores, commonly referred to as a “Hash Table” data structure. While one can add as many dynamically named properties to an Object as they like, for performance and security reasons it’s better to use a Map in those situations. Objects are better suited for handling a static number of properties with known keys (think class instances).

### Sealing, Preventing Extension, Freezing

Sealing, Preventing Extension, and Freezing allow you to lock down an object to varying degrees. Each one of these approaches has the same effect; an object will no longer be extensible, meaning that new properties cannot be added to the object. However there are small nuances which affect each approach as well.

> It is worth noting that objects within one of these locked down objects will not be affected (since they are two different objects). For that reason you may want to consider recursively locking down objects.

#### Sealing

An object can be sealed by calling `Object.seal()` on it. Sealing is useful in the situation where you have an object and you want it to adhere to a certain set of expectations regarding the properties it has, however you don’t necessarily want to prevent changes to those properties. Every property on a sealed object will have its `configurable` property descriptor set to `false`, however their writable PD won’t change. There is a correlating `Object.isSealed()` method to see if an object has been sealed.

```js
const obj = { p: 'first' };
Object.seal(obj);

obj.p = 'second'; // OK
delete obj.p; // fail silently, throw in strict
obj.p2 = 'new val'; // fail silently, throw in strict

console.log(obj); // { p: 'second' }
console.log(Object.isSealed(obj)); // true
console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// { value: 'second', writable: true,
//   enumerable: true, configurable: false }
```

#### Preventing Extension

An object can be prevented from being extended by calling `Object.preventExtensions()` on it. This is useful in situations where you don’t want new properties to be added to an object. Existing properties can be modified and deleted. It is the “weakest” when compared to Sealing and Freezing an object. It has a correlating `Object.isExtensible()` method to see if an object can be extended. Existing property descriptors are not modified.

```js
const obj = { p: 'first' };
Object.preventExtensions(obj);

obj.p = 'second'; // OK
obj.p2 = 'new val'; // fail silently, throw in strict

console.log(obj); // { p: 'second' }
console.log(Object.isExtensible(obj)); // false
console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// { value: 'second', writable: true,
//   enumerable: true, configurable: true }
delete obj.p; // OK
```

#### Freezing

An object can be frozen by calling `Object.freeze()` on it. This is the most extreme tool to lock down an object as no properties can be reassigned, added, or deleted. The property descriptor of each property will have both their writable and configurable values set to false. There is a correlating `Object.isFrozen()` method which will tell you if an object is frozen.

```js
const obj = { p: 'first' };
Object.freeze(obj);

obj.p = 'second'; // fail silently, throw in strict
delete obj.p; // fail silently, throw in strict
obj.p2 = 'new val'; // fail silently, throw in strict

console.log(obj); // { p: 'first' }
console.log(Object.isFrozen(obj)); // true
console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// { value: 'first', writable: false,
//   enumerable: true, configurable: false }
```

### Property Descriptors

> If there’s one thing you should remember about them it is that _property descriptors let you lie_.

> All Object Properties have Property Descriptors

If you think about the intuitive basics of an object, it’s that you can write a property to an object, and then read that property back, and nothing crazy should happen. Well, with property descriptors, one could modify the value when it’s being written, reply with a different value when being retrieved, or even throw an error at any point in time. The basic syntax for defining a property descriptor looks like the following:

```js
Object.defineProperty(obj, propertyName, descriptors);
```

In this example, `obj` is an Object which you want to define a property on. propertyName is a string name of the property. Finally, descriptors is an object describing the property descriptors.

#### Value and Enumerable

The most basic property descriptors are value and enumerable. value contains the value which will be returned when the property is being read. enumerable determines whether or not the property will be visible when listing the properties of the object. Here’s a code sample using these two property descriptors:

```js
const obj = {};
Object.defineProperty(obj, 'foo', {
	value: 'hello', // the property value
	enumerable: false, // property will not be listed
});
console.log(obj); // {}
console.log(obj.foo); // 'hello'
console.log(Object.keys(obj)); // []
console.log(Reflect.ownKeys(obj)); // [ 'foo' ]
console.log('foo' in obj); // true
```

The enumerable property descriptor has been set to `false`. This has a few implications, mostly that it becomes a little harder to discover the foo property if we don’t know to look for it. For example, when we call `console.log(obj)`, we get an empty object in return. When we call `Object.keys(obj)`, we get an empty array in response. If we know the name of the property we can still use the in operator, like we’re doing with `'foo' in obj`, which returns a true. However, keep in mind this doesn’t completely hide the property, as we can still find it using `Reflect.ownKeys(obj)`.

#### Writable and Configurable

While `value` and `enumerable` dealt with reading properties, `writable` and `configurable` deal with writing properties. If a property has `writable` set to `false` then that property’s `value` cannot be reassigned another value. If a property has `configurable` set to `false` then it cannot be deleted and it cannot have its property descriptor changed again. The following code example shows these two property descriptors at work:

```js
const obj = Object.defineProperty({}, 'foo', {
	value: 'hello',
	writable: false, // reassignable?
	configurable: false, // deletable/redefinable?
});
obj.foo = 'bye';
console.log(obj.foo); // 'hello'
delete obj.foo;
console.log(obj.foo); // 'hello'
Object.defineProperty(obj, 'foo', {
	value: 1,
}); // TypeError: Cannot redefine property: foo
```

#### Getters and Setters

Getters and Setters are some pretty interesting property descriptors, specifically because they allow us to call functions which we define when reading or writing to an object. These are powerful tools with security and performance considerations. The following is an example of the get and set property descriptors:

```js
const obj = { realAge: 0 };

Object.defineProperty(obj, 'age', {
	get: function() {
		return this.realAge;
	},
	set: function(value) {
		this.realAge = Number(value);
	},
});

console.log(obj.age); // 0
obj.age = '32';
console.log(obj.age); // 32
```

As of ES2015 there is an even more convenient syntax for defining Getters and Setters on our objects. We can now describe them using the Object Literal syntax. As an example, the following code will result in an object which behaves very similarly to the one above:

```js
const obj = {
	realAge: 0,
	get age() {
		return this.realAge;
	},
	set age(value) {
		this.realAge = Number(value);
	},
};

console.log(obj.age); // 0
obj.age = '32';
console.log(obj.age); // 32
```

## Symbols

> A symbol is a primitive which cannot be recreated - it cannot be mutated

```js
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false
```

Until symbols existed, object keys could only be strings. If we ever attempt to use a non-string value as a key for an object, the value will be coerced to a string. We can see this feature here:

```js
const obj = {};
obj.foo = 'foo';
obj['bar'] = 'bar';
obj[2] = 2;
obj[{}] = 'someobj';
console.log(obj);
// { '2': 2, foo: 'foo', bar: 'bar',
     '[object Object]': 'someobj' }
```

> `Map` data structure was created in part to allow for key/value storage in situations where a key is not a string.

When instantiating a symbol there is an optional first argument where you can choose to provide it with a string. This value is intended to be used for debugging code, it otherwise doesn’t really affect the symbol itself.

```js
const s1 = Symbol('debug');
const str = 'debug';
const s2 = Symbol('xxyy');
console.log(s1 === str); // false
console.log(s1 === s2); // false
console.log(s1); // Symbol(debug)
```

One if more important use cases for `Symbols` is `Symbols` as object keys.
Here is an example of using a `Symbol` as a key within an object:

```js
const obj = {};
const sym = Symbol();
obj[sym] = 'foo';
obj.bar = 'bar';
console.log(obj); // { bar: 'bar' }
console.log(sym in obj); // true
console.log(obj[sym]); // foo
console.log(Object.keys(obj)); // ['bar']
```

Notice how they are not returned in the result of `Object.keys()`. This is, again, for the purpose of backwards compatibility. Old code isn't aware of symbols and so this result shouldn't be returned from the ancient `Object.keys()` method.

Note: `Reflect.ownKeys()` method is able to get a list of all keys on an object, both strings and symbols alike:

```js
function tryToAddPrivate(o) {
	o[Symbol('Pseudo Private')] = 42;
}
const obj = { prop: 'hello' };
tryToAddPrivate(obj);
console.log(Reflect.ownKeys(obj));
// [ 'prop', Symbol(Pseudo Private) ]
console.log(obj[Reflect.ownKeys(obj)[1]]); // 42
```

Symbols are useful in situations where disparate libraries want to add properties to objects without the risk of having name collisions. By simply using the two character string `id` as a key, there is a huge risk that multiple libraries will use the same key.

```js
function lib1tag(obj) {
	obj.id = 42;
}
function lib2tag(obj) {
	obj.id = 369;
}
```

By making use of symbols, each library can generate their required symbols upon instantiation. Then the symbols can be checked on objects, and set to objects, whenever an object is encountered.

```js
const library1property = Symbol('lib1');
function lib1tag(obj) {
	obj[library1property] = 42;
}
const library2property = Symbol('lib2');
function lib2tag(obj) {
	obj[library2property] = 369;
}
```

## Proxies

> A proxy essentially wraps an object and allows us to interpose on various interactions with that object.

A proxy is essentially a new object which can be used as an intermediary for intercepting calls to an existing target object. Much like with property descriptors, proxies can be defined by using an object with key/value pairs where the key is the name of the “proxy Trap”, and the value is a method to be called when interacting with the proxy.

There are about a dozen proxproxy Traps, and if a trap has not been defined then the operation will fall back to performing the default behavior. For example, one of the traps is for getting a value. If you attempt to get a value from a proxy and haven’t specified the get trap, then the proxy will simply retrieve the value from the target object.

Proxy Traps will typically have a correlating `Reflect` method. For example, the has trap has a correlating `Reflect.has()` method.

The basic syntax for defining proxy traps looks like the following:

`const proxy = new Proxy(target, handler)`

Note that if you interact with the original target object, the proxy traps will be bypassed entirely (examples of this are shown below).

> Proxies can be quite useful for writing test code, where you want to assert that very exact operations are being performed on objects.

### Get Proxy Trap

The get proxy trap is pretty similar to the getter property descriptor in that both of these can be used to call a function when retrieving a value from an object. However, the get proxy trap is much more powerful. Whereas the property descriptor getter needs to know the name of a property ahead of time, the get proxy trap will be called regardless of the name of the property being accessed. It will even fire if the property doesn’t exist at all!

```js
const orig = { p: 7 };
const handler = {
	get: (target, prop, receiver) => {
		// target === orig
		// receiver === proxy || receiver === child
		return prop in target ? target[prop] + 1 : Infinity;
	},
};
const proxy = new Proxy(orig, handler);
console.log(orig.p); // 7
console.log(orig.r); // undefined
console.log(proxy.p); // 8
console.log(proxy.r); // Infinity
```

In the above example the `get` proxy trap will check to see if the `prop` property exists in the `target` object. If it does it will return an incremented version of the value. If it does not it will return `Infinity`.

Note that the `receiver` object will either refer to the `proxy` object itself, or to a child object which has the `proxy` somewhere in its prototype chain.

### Has Proxy Trap

The has proxy trap is called when code attempts to see if a property exists within an object.

```js
const orig = { p: 7 };
const handler = {
	has: (target, prop) => {
		return false;
	},
};
const proxy = new Proxy(orig, handler);
console.log('p' in orig); // true
console.log('r' in orig); // false
console.log('p' in proxy); // false
console.log(Reflect.has(proxy, 'p')); // false
console.log(proxy.p); // 7
```

In this example we always reply with a false, which will make it difficult to tell if a property exists within an object.

### Set Proxy Trap

The `set` proxy trap is called when a value is being set on an object. Much like the benefits of the `get` proxy trap over the getter property descriptor, this method is called for every single property being set on an object, even if you don’t know the name ahead of time.

```js
const orig = {};
const handler = {
	set: (target, prop, value, receiver) => {
		target[prop.toUpperCase()] = String(value);
	},
};
const proxy = new Proxy(orig, handler);

orig.p = 1;
console.log(orig); // { p: 1 }
proxy.hello = 1;
console.log(orig); // { p: 1, HELLO: '1' }
```

In this example we will intercept the setting of values. We then uppercase the property name, and stringify the value, before setting it on the underlying object. This can allow us to construct an object similar to the Node.js `process.env` object.

> Note that the `receiver` object will either refer to the `proxy` object itself, or to a child object which has the `proxy` somewhere in its prototype chain.

### Delete Proxy Trap

The delete proxy trap is called when a property is being deleted from an object.

```js
const obj = { p: 1, r: 2 };
const handler = {
	deleteProperty: (target, prop) => {
		if (prop === 'r') delete target[prop];
		return true; // falsey will throw in strict
	},
};
const proxy = new Proxy(obj, handler);
delete proxy.p;
delete proxy.r;
console.log(proxy); // { p: 2 }
```

In this example we only allow the delete to affect the underlying `target` object if the property name is exactly `'r'`. So, when deleting `proxy.p`, the operation has no effect, but when deleting `proxy.r`, the property is removed.

### Object Keys Proxy Trap

The `ownKeys` proxy trap is called when we attempt to list the keys within an object. It’s triggered in a variety of ways, such as running `Object.keys()`, `Reflect.ownKeys()`, `for (prop in obj)`, etc., on an object.

```js
const sym = Symbol();
const orig = { p: 1, r: 2, [sym]: 3 };
const handler = {
	ownKeys: target => ['p', sym],
};
const proxy = new Proxy(orig, handler);
console.log(Object.keys(proxy)); // ['p']
console.log(Reflect.ownKeys(proxy)); // ['p', sym]
console.log(Object.getOwnPropertyNames(proxy)); // ['p']
console.log(Object.getOwnPropertySymbols(proxy)); // [sym]
```

In the above example our object has three properties, namely `'p'`, `'r'`, and a `Symbol`. However our `ownKeys` proxy trap will always respond with `'p'`, and the `Symbol`. Depending on how the keys are accessed, the “correct” results will be returned. For example, `Object.keys()` will only provide string keys.

### Apply Proxy Trap

The `apply` proxy trap is called when a function is called. The second argument is the value of `this` when the function is called. Arguments to the function are provided as the third argument in an array.

```js
function orig(msg) {
	return `Hello, ${msg}!`;
}

const handler = {
	apply: (target, self, args) => {
		return target(String(args[0]).toUpperCase());
	},
};

const proxy = new Proxy(orig, handler);
console.log(proxy('world')); // 'Hello, WORLD!'
// Also, Function.prototype.apply(), .call()
```

In this example we intercept the function call, capitalize the first argument, and pass that to the underlying target function.

### Construct Proxy Trap

The `construct` proxy trap is very similar to the `apply` proxy trap. However, it is specifically called when the `new` keyword is being provided.

```js
class Original {
	constructor(arg) {
		console.log(`Hello, ${arg}!`);
	}
}

const handler = {
	construct(target, args) {
		return new target(String(args[0]).toUpperCase());
	},
};

const OriginalProxy = new Proxy(Original, handler);
new OriginalProxy('Tom'); // 'Hello, TOM!'
```

In this example we also take the first argument, capitalize it, and then provide it to the underlying constructor function. Note that this works with any `function`, not just those defined using the `class` keyword.

### Get/Set Prototype Proxy Traps

The `getPrototypeOf`, and `setPrototypeOf` proxy traps are called when attempting to access the prototype or when trying to override the prototype, respectively.

```js
const orig = {};
const handler = {
	getPrototypeOf: target => null,
	setPrototypeOf: (target, proto) => {
		throw new Error('no way');
	},
};
const proxy = new Proxy(orig, handler);

console.log(orig.__proto__); // {}
console.log(proxy.__proto__); // null
console.log(Object.getPrototypeOf(proxy)); // null
console.log(Reflect.getPrototypeOf(proxy)); // null
Reflect.setPrototypeOf(proxy, {}); // Error: no way
```

In the above example we’re lying whenever the prototype is accessed and saying that the value is null. Whenever one attempts to override the prototype we then throw an error. This can be useful for locking down an object and preventing prototype modifications.

### Extensibility Proxy Traps

The `preventExtensions` and `isExtensible` proxy traps are called when running `Object.preventExtensions()` and `Object.isExtensible()` on a proxy.

```js
const orig = {};
const handler = {
	preventExtensions: target => Object.preventExtensions(target),
	isExtensible: target => Reflect.isExtensible(target),
};
const proxy = new Proxy(orig, handler);
console.log(Object.isExtensible(proxy)); // true
Object.preventExtensions(proxy);
console.log(Object.isExtensible(proxy)); // false
// Note: Can't lie, otherwise will throw Error
```

In this example we’re simply calling out to the correlating `Reflect` methods and returning the values. However we could also throw an error or log the access if we wanted. Note that we can’t actually lie in these situations. For example, if you call `Object.preventExtensions(proxy)`, and don’t actually prevent extensions on the `proxy` object, then JavaScript will throw an error. The same thing happens if you lie with the `isExtensible` result.

### Property Descriptors Proxy Traps

And finally, the defineProperty and getOwnPropertyDescriptor proxy traps are called when either setting or getting a property descriptor of an object.

```js
const proxy = new Proxy(
	{},
	{
		defineProperty: (target, prop, desc) => {
			if (desc.value === 42) Object.defineProperty(target, prop, desc);

			return true;
		},
		getOwnPropertyDescriptor: (tgt, prp) => {
			return Object.getOwnPropertyDescriptor(tgt, prp);
		},
	}
);
Object.defineProperty(proxy, 'p', { value: 42 });
Object.defineProperty(proxy, 'r', { value: 43 });
console.log(proxy.p, proxy.r); // 42, undefined
```

In this example we only allow the `defineProperty` proxy trap to modify a property descriptor if the value being modified is equal to 42. When reading the property descriptors we simply trigger the default behavior. This is useful for only allowing certain property descriptor settings to be set, or enforcing that all new properties have their `configurable` property set to `false`, etc.

### Proxies + Property Descriptors

Let’s take a look at combining a proxy with a property descriptor:

```js
const orig = {};
Object.defineProperty(orig, 'name', {
	get: () => {
		console.log('2. prop desc get');
		return 'Thomas';
	},
});
const proxy = new Proxy(orig, {
	get: (target, prop) => {
		console.log('1. proxy get');
		return target[prop];
	},
});
console.log(`3. ${proxy.name}`); // 1. proxy get
// 2. prop desc get
// 3. Thomas
```

In this example we’re using both the get property descriptor applied to our orig object, as well as the get proxy trap with the orig object being the target. When we attempt to read the name property it first calls the proxy trap, then calls the property descriptor, before returning the actual value the calling location.

> Of course, there will be some performance overhead for calling these functions when getting a value from an object, not to mention cognitive overhead to figure out what’s going on, so use them sparingly in production applications.
