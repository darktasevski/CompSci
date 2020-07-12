---
title: Use cases for Bitwise operators in Js
date: 2019-10-10
author: Darkø Tasevski
---

# Use cases for Bitwise operators in Js

[Bitwise operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators) in Javascript are mostly used for numerical conversions/computations, because sometimes they're much faster than their `Math` or `parseInt` equivalents. You can take a look at some benchmarks [here](https://jsperf.com/math-floor-vs-math-round-vs-parseint/18).

It's important to note, as pointed out [by Mathias Bynens](https://j11y.io/javascript/double-bitwise-not/#comment-29617), that bitwise operations only work reliably on numbers that can be expressed as 32-bit sequences. Any numbers above 2147483647 or below -2147483648 will not work as you expect. This is usually acceptable though.

However, JavaScript numbers are always 64-bit binary floating point values, following the international IEEE 754 standard. Thus the results of bitwise operators, though computed with 32-bit integer math, are stored in floating point form. That works because the range of 32-bit integers fits comfortably and precisely in a 64-bit float.

But the price you have to pay for that increase in speed is code readability. Since I've started coding several years ago, I've maybe used bitwise operators once or twice, because the most work I do don't have much to do with computation. Nevertheless, I've been interested in bitwise operators usage in a real-world code for a long time, and I have a gist with collected snippets from all over the internet, just in case I need it sometimes 😄.

---

So, here are some excerpts from my collection:

##### `| 0` is an easy and fast way to convert anything to integer

```js
(3 | 0) === 3; // it does not change integers
(3.3 | 0) === 3; // it casts off the fractional part in fractionalal numbers
(3.8 | 0) === 3; // it does not round, but exactly casts off the fractional part
(-3.3 | 0) === -3; // including negative fractional numbers
(-3.8 | 0) === -3; // which have Math.floor(-3.3) == Math.floor(-3.8) == -4
('3' | 0) === 3; // strings with numbers are typecast to integers
('3.8' | 0) === 3; // during this the fractional part is cast off too
('-3.8' | 0) === -3; // including negative fractional numbers
(NaN | 0) === 0; // NaN is typecast to 0
(Infinity | 0) === 0; // the typecast to 0 occurs with the Infinity
(-Infinity | 0) === 0; // and with -Infinity
(null | 0) === 0; // and with null,
(void 0 | 0) === 0; // and with undefined
([] | 0) === 0; // and with an empty array
([3] | 0) === 3; // but an array with one number is typecast to number
([-3.8] | 0) === -3; // including the cast off of the fractional part
([' -3.8 '] | 0) === -3; // including the typecast of strings to numbers
(([-3.8, 22] | 0) ===
	0(
		// but an Array with several numbers is typecast to 0
		{} | 0
	)) ===
	0; // an empty object is typecast to 0
(({ '2': '3' } | 0) === 0); // or a not empty object
((function () {} | 0) === 0); // an empty function is typecast to 0 too
((function () {
	return 3;
} |
	0) ===
	0);
```

##### Replacements for `Math.floor()`

```js
~~n;
n | n;
n & n;

// Generate random RGB value:
var r = ~~(Math.random() * 255);

~~null; // 0
~~undefined; // 0
~~0; // 0
~~{}; // 0
~~[]; // 0
~~(1 / 0); // 0
~~false; // 0
~~true; // 1
~~1.2543; // 1
~~4.9; // 4
~~-2.999; // -2

// An example
const n = Math.PI; // 3.141592653589793

Math.floor(n); // 3
parseInt(n, 10); // 3
~~n; // 3
n | n; // 3            // n|n and n&n always yield the same results as ~~n
n & n; // 3
```

It should be noted that of these last three alternatives, `n|n` [appears to be the fastest](https://jsperf.com/rounding-numbers-down).

`~~`'s flooring capabilities make it a better alternative to `Math.floor` if you know you're dealing with positives - it's faster and takes up fewer characters. It's not quite as readable though.

##### Parsing hexadecimal value to get RGB color values

```js
var hex = 'ffaadd';
var rgb = parseInt(hex, 16); // rgb value is 16755421 in decimal = 111111111010101011011101 in binary = total 24 bits

var red = (rgb >> 16) & 0xff; // returns 255
var green = (rgb >> 8) & 0xff; // returns 170
var blue = rgb & 0xff; // returns 221

// How is it working:

// There are two bitwise operations as named SHIFTING and AND operations.
// SHIFTING is an operation the bits are shifted toward given direction by adding 0 (zero) bit for vacated bit fields.
// AND is an operation which is the same with multiplying in Math. For instance, if 9th bit of the given first bit-set is 0
// and 9th bit of the given second bit-set is 1, the new value will be 0 because of 0 x 1 = 0 in math.

// 0xFF (000000000000000011111111 in binary) - used for to evaluate only last 8 bits of a given another bit-set by performing bitwise AND (&) operation.
// The count of bits is 24 and the first 16 bits of 0xFF value consist of zero (0) value. Rest of bit-set consists of one (1) value.
console.log('0xFF \t\t\t\t: ', 0xff);

// 111111111010101011011101 -> bits of rgb variable
// 000000000000000011111111 -> 255 after (rgb >> 16) shifting operation
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000011111111 -> result bits after performing bitwise & operation
console.log('Red - (rgb >> 16) & 0xFF \t: ', (rgb >> 16) & 0xff); // used for to evaluate the first 8 bits

// 111111111010101011011101 -> bits of rgb variable
// 000000001111111110101010 -> 65450 -> 'ffaa'
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000010101010 -> result bits after performing bitwise & operation
// calculation -> 000000001111111110101010 & 000000000000000011111111 = 000000000000000010101010 = 170 in decimal = 'aa' in hex-decimal
console.log('Green - (rgb >> 8) & 0xFF \t: ', (rgb >> 8) & 0xff); // used for to evaluate the middle 8 bits

// 111111111010101011011101 -> 'ffaadd'
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000011011101 -> result bits after performing bitwise & operation
// calculation -> 111111111010101011011101 & 000000000000000011111111 = 221 in decimal = 'dd' in hex-decimal
console.log('Blue - rgb & 0xFF \t\t: ', rgb & 0xff); // // used for to evaluate the last 8 bits.

console.log(
	'It means that `FFAADD` hex-decimal value specifies the same color with rgb(255, 170, 221)'
);
```

##### `^` bitwise XOR as a `I/O` toggler

```js
// https://stackoverflow.com/a/22061240/7453363
function toggle(evt) {
	evt.target.IO ^= 1; // Bitwise XOR as 1/0 toggler
	evt.target.textContent = evt.target.IO ? 'ON' : 'OFF'; // Unleash your ideas
}
```

##### Check if number is odd

```js
function isOdd(number) {
	return !!(number & 1);
}

isOdd(1); // true, 1 is odd
```

#### Check whether indexOf returned -1 or not

```js
var foo = 'abc';
!~foo.indexOf('bar'); // true
```

##### Flip a boolean value

```js
var foo = 1;
var bar = 0;

foo ^= 1; // 0
bar ^= 1; // 1
```

---

Bitwise operators in JavaScript introduce a weird situations where `(12 & 9) === 8` and `(12 & 3) === 0`, which looks totally out of the place if you don't understand at first look what's happening beneath (and the most of the people I know don't, me included).

The performance differences, even though they may seem compelling, are entirely negligible in most cases. You should only sacrifice readability for performance if you really need to squeeze out those precious microseconds, and if you do that please leave a comment explaining what is happening, who knows, maybe you'll need it someday 😄. The only other reason for using these bitwise tricks is to make your code look more complicated than it really is, which is probably a stupid reason. There are also edge cases to watch out for, so you can't just replace all your current `Math.floor()` calls with `~~`. Things will likely fail.
