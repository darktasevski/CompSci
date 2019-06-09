# Multiplication

- [Multiplication](#multiplication)
	- [Distributive property grid](#distributive-property-grid)
	- [Multiplying with area model](#multiplying-with-area-model)
	- [Standard algorithm](#standard-algorithm)
	- [Multiplication with 1 digit](#multiplication-with-1-digit)
	- [Multiplication with 2 digits](#multiplication-with-2-digits)
	- [Strategies for multiplying multiples of 10, 100 and 1000](#strategies-for-multiplying-multiples-of-10-100-and-1000)
	- [Exponents](#exponents)
		- [Some edge cases](#some-edge-cases)
		- [Some examples](#some-examples)

---

-   When **multiplying** two negative numbers the result is always positive.

Simple hack:

```js
56 x 8 = (50 + 6) x 8 =
         (50 x 8) + (6 x 8) =
         400 + 48 = 448
```

## Distributive property grid

Example:

```js
87 x 63 =
    ___|__80__+_7___|
     60| 4800 | 420 |
       |______|_____|
      3| 240  | 21  |
       |______|_____|
       | 5040 + 442 | = 5481
```

## Multiplying with area model

6 x 7981 =
| x | 7000 | 900 | 80 | 1 |
|---|--------|------|-----|---|
| 6 | 42,000 | 5400 | 480 | 6 |

```js
= 42000
   5400
    480
  +   6
  -----
  47886
```

We can do something like this too:
_5 x everything and 60 x everything_
78 x 65 = (5 x 8 + 5 x 70) + (60 x 8 + 60 x 70) = (40 + 350) + (480 + 4200) = 5070

```js
4200
 480
 350
+ 40
----
5070
```

We can multiply numbers by hand:

-   by using **area grid multiplication**:
    352 x 481 =

    | x   | 400     | 80     | 1   | =       |
    | --- | ------- | ------ | --- | ------- |
    | 2   | 800     | 160    | 2   | 962     |
    | 50  | 20,000  | 4,000  | 50  | 24,050  |
    | 300 | 120,000 | 24,000 | 300 | 144,300 |
    |     |         |        |     | 169,312 |

    This is area grid. We destructure numbers to thousands, hundreds, tens and ones and then multiply and add them together.

## Standard algorithm

or by using **standard algorithm**:

$$
\begin{alignedat}{2}
   481 \\
   \times 352 \\ \hline
   962 \\
   24050 \\
  +\medspace 144300 \\ \hline
   169312
\end{alignedat}
$$

```js
      481
    x 352
    ------
         962  = (2 x 1) + (2 x 80) + (2 x 400) = 2 + 160 + 800
       24050  = (50 x 1) + (50 x 80) + (50 x 400) = 50 + 4000 + 20000
    + 144300 = (300 x 1) + (300 x 80) + (300 x 400) = 300 + 24000 + 120000
    ---------  We just add to the result of the multiplication like this:
      169312   3 x 1 = 3 00 (add two zeros), 3 x 8 = 24 000 (add three zeros)

    Also, from above: multiplying with 50, some nuances:
    50 x 481 = automatically add zero to the end of the result: | 0
      (5 x 1) = 5 | 0
      (5 x 8) = 40, we put 0 and carry 4 results in: 0 5 | 0
      (5 x 4) = 20 + 4 (we carried) = 24 0 5 | 0 results in: 24,050
```

## Multiplication with 1 digit

This is simple, we just multiply number by number and carry values:

```js
  253 // 7 x 3 = 21                      write 1, carry 2
x   7 // 7 x 5 = 35 + 2 we carried = 37, write 7, carry 3
----- // 7 x 2 = 14 + 3 we carried = 17, write 17 as this is last number
 1771
```

```js
8085   // 9 x 5 = 45, write 5, carry 4
x  9   // 9 x 8 = 72 + 4 we carried = 76, write 6, carry 7
-----  // 9 x 0 = 0 + 7 we carried, write 7
72765  // 9 x 8 = 72, write 72, as this is last number
```

## Multiplication with 2 digits

```js

  36   // 7 x 6 = 42, write 2, carry 4
x 27   // 7 x 3 = 21 + 4 we carried = 25, write 25 as this is last number
-----  // Throw one 0 at the end of the next one as we're now multiplying with tens place
  252  // 2 x 6 = 12, write 2, carry 1
+ 720  // 2 x 3 = 6 + 1 we carried = 7, write 7
-----
  972
```

## Strategies for multiplying multiples of 10, 100 and 1000

$800 \times 400 = (8 \times 100) \times (4 \times 100) = (8 \times 4) \times (100 \times 100) = 32 \times 10000 = 320000$

Or simply, just multiply $8 \times 4$ and add number of zeroes to the result $32 \cancel{8} 00  \cancel{4} 00 = 32 0000$

## Exponents

$$
2^3 = 2 \times 2 \times 2 = 8
$$

$$
3^2 = 3 \times 3 = 9
$$

$$
5^3 = 5 \times 5 \times 5 = 125
$$

The small number written above and to the right of thr number is called an **exponent**. The number underneath the exponent is called **the base**.

Here's an example where the base is 7, and the exponent is 5:

$$
7^5
$$

An exponent tells us to multiply the base by itself that number of times. In this example, it tells us to multiply the base of 7 by itself five times.

$$
7^5 = 1 \times 7 \times 7 \times 7 \times 7 \times 7
$$

---

$$
(-2)^3 = 1\times (-2) \times (-2) \times (-2) = 4 \times -2 = -8
$$

$$ 2^0  = 1 $$
$$ 2^1 = 2 $$

$$
  (\frac{2}{5})^2 = \frac{2}{5} \times \frac{2}{5} = \frac{2 \times 2}{5 \times 5} = \frac{4}{25}
$$

$$
(\frac{1}{2})^4 = \frac{1}{2 \times 2 \times 2 \times 2} = \frac{1}{16}
$$

### Some edge cases

Any number raised to the power zero is equal to 1 and not zero - [Transitive property of Equality](https://www.mathwords.com/t/transitive_property.htm):

$$
2^0 = 1
$$

> _This might be easier to understand if we explain it this way_: This asks - how many times we're going to multiply one times this (2) number? And answer is like: I'm going to take 1 and multiply it by 2 zero times, which means we're left with just 1.

Any number to the first power is going to be equal that number:

$$
2^1 = 1 \times 2 = 2
$$

Zero to any non zero power will be equal to zero:

$$
0^1 = 1 \times 0 = 0
$$

$$
0^2 = 1 \times 0 \times 0 = 0
$$

$$
0^0 = undefined
$$

One to any power is going to be equal to one:

$$
(-1)^0 = 1
$$

$$
(-1)^1 = -1
$$

### Some examples

Evaluate the expression
$$ 5^x - 3^x $$
for `x=2`

---
