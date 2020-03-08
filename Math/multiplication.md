# Multiplication

[[toc]]

---

$$
factor \times factor=product
$$

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

6 x 7981 = | x | 7000 | 900 | 80 | 1 | |---|--------|------|-----|---| | 6 | 42,000 | 5400 | 480 | 6 |

```js
= 42000
   5400
    480
  +   6
  -----
  47886
```

We can do something like this too: _5 x everything and 60 x everything_ 78 x 65 = (5 x 8 + 5 x 70) + (60 x 8 + 60 x 70) = (40 + 350) + (480 + 4200) = 5070

```js
4200;
480;
350 + 40;
----5070;
```

We can multiply numbers by hand:

-   by using **area grid multiplication**: 352 x 481 =

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

The small number written above and to the right of the number is called an **exponent** or **power**. The number underneath the exponent is called **the base**. This can sometimes be read as "Five to the third power" or "Five raised to the third power".

> There is a pattern when working with a powers of ten, for example: $10 \times 10 = 20^2$, $10 \times10\times10=10^3$, notice the exponent and the number of zeroes. Based on this we can easily find out that power of, for example, $10000000000$ is $10^{10}$. Likewise, for $10^5$ we can easily predict that the result is $100000$

### Integer exponents

$$
2^3 = 2 \times 2 \times 2 = 8
$$

$$
3^2 = 3 \times 3 = 9
$$

$$
5^3 = 5 \times 5 \times 5 = 125
$$

> A number which is raised to the second power is said to be **squared**, and to the third power is said to be **cubed**.

Here's an example where the base is 7, and the exponent is 5:

$$
7^5
$$

An exponent tells us to multiply the base by itself that number of times. In this example, it tells us to multiply the base of 7 by itself five times.

$$
7^5 = 1 \times 7 \times 7 \times 7 \times 7 \times 7
$$

What is $2^6 \times 2^5$?

$$
\text{ \textbar the first term in the product is the product of 5 2's and the second is the product of the 6 2's, so all together we have 11 2's, Thus:}  \\
2^6 \times 2^5 = 2^{11} = 2048
$$

What is $\frac{3^{15}}{3^{12}}$?

> Evaluating the numerator and denominator and then performing the division is long and tedious and leaves much room for error. We can instead note that the twelwe 3's on the bottom cancel with twelve of the fifteen 3's on the top (because $\frac{3}{3} = 1$) leaving three 3's on top:

$$
\frac{3 \times 3 \times3 \times3 \times3 \times3 \times3 \times3 \times3 \times 3 \times3 \times3 \times3 \times3 \times3}{3 \times3 \times3 \times3 \times3 \times3 \times3 \times3 \times3 \times3 \times3 \times3} = \frac{3 \times3 \times3}{1} = 27
$$

What about $3^6 \div 3^8$?

$$
\text{\textbar This is an expression with a negative exponent!} \\
3^{6-8} = 3^{-2}
$$

What has happened here is that the six 3's on top cancle with six on the bottom, leaving two on the bottom. Thus, a negative exponent means the extra numbers are in the denominator. This means:

$$
\frac{3^6}{3^8} = 3^{6-8} = 3^{-2} = \frac{1}{3^2} = \frac{1}{9}
$$

> When dealing with the problems involving multiplication and division of expressions with negative exponents, we can treat them just as the expressions with positive exponents, for example $x^3x^{-2}=x^1$ and $x^3 \div x^{-2} = x^{3-(-2)} =x^5$.

How about $(2^3)^5$?

$$
(2^3)^5 = 2^{3 \times 5} = 2^{15} = 32768
$$

> Hence, when an exponential expression is raised to a power, we multiply the exponent of the expression by the power to which the expression is raised.

$$
(3^5)^2 = 3^{5 \times 2} = 3^{10} \\
(4^{-3})^{-2} = 4^{(-3)(-2)} = 4^6
$$

Whats the difference between $2^{3^4}$ and $(2^3)^4$?

In $2^{3^4}$ the exponent itself is raised to the fourth power, while in $(2^3)^4$ the entire expression is raised to the fourth power. Thus,

$$
2^{3^4} = 2^{81}
$$

but

$$
(2^3)^4 = 2^{3 \times 4} = 2^{12}
$$

---

$$
(-2)^3 = 1\times (-2) \times (-2) \times (-2) = 4 \times -2 = -8
$$

$2^0  = 1 \\ 2^1 = 2$

$$
  (\frac{2}{5})^2 = \frac{2}{5} \times \frac{2}{5} = \frac{2 \times 2}{5 \times 5} = \frac{4}{25}
$$

$$
(\frac{1}{2})^4 = \frac{1}{2 \times 2 \times 2 \times 2} = \frac{1}{16}
$$

#### Some edge cases

Any number raised to the power zero is equal to 1 and not zero - [Transitive property of Equality](https://www.mathwords.com/t/transitive_property.htm):

$$
2^0 = 1
$$

$$
3^3 \div 3^3 = 3^{3-3} = 3^0 = 1
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

#### Some examples

Evaluate the expression $5^x - 3^x$ for `x=2`

$$
5^x - 3^x = 5^2 - 3^2 = 25 - 9 = 16
$$

### Fractional exponents

What is $25^{\frac{1}{2}}$?

We know that $5^2=25$ so the expression above can be rewritten as $(5^2)^{\frac{1}{2}}$, and we can the continue simplifying:

$$
(5^2)^{\frac{1}{2}}=5^{2 \times \frac{1}{2}}=5^1=5
$$

> The exponent $\frac{1}{2}$ has a special name: **the square root** (can be read more about it [here](../Math/square_roots.md)) and it also has a special symbol associated with it, $\sqrt{}$. (This symbol is called a **radical**). Thus we write:

$$
25^{\frac{1}{2}}=\sqrt{25}=5
$$

When asked for a square root of a number, let's say 81, we find a number which, when squared, equals 81. Since we get 81 when we square 9, $\sqrt{81}=9$

Example:

_Which two integers is $\sqrt{55}$ between?_

Since $\sqrt{49}=7$ and $\sqrt{64}=8$, the answer is 7 and 8.

---

When dealing with other powers which are reciprocals of integers, like $\frac{1}{3},\frac{1}{4},\frac{1}{5}$ and so on, we proceed just as with square roots. When asked for a fifth root of 100000, we want the number, which raised to the fifth power equals 100000. Since $10^5=100000$ we have $100000^{\frac{1}{5}} = 10$

We can adapt the radical sign to use with other roots by writing $\sqrt[n]{}$ for the *n*th root. For example $8^{\frac{1}{7}}$ is $\sqrt[7]{8}$. **When no number is written where the 7 is, the symbol is assumed to be a square root.**

> As with square roots, numbers raised to the $\frac{1}{3}$ power, have a special name, **cube roots**.

When working with frictional powers in which the numerator is not 1, we use our rule for raising exponential expressions to power backwards. This is a little tricky, and looks like this:

$$
8^{\frac{2}{3}} = 8^{(\frac{1}{3})(2)} = (8^{\frac{1}{3}})^2=2^2=4
$$

> $8^{\frac{1}{3}}$ above can be rewritten as $\sqrt[3]{8}$, which can be translated into words as: find a number that raised to the third power gives eight, which is two ($2 \times 2 \times 2$).

We find the fractional root first, then we raise the result to the power of the numerator, even if the numerator is negative.

_Consider the following examples:_

1. $8^{\frac{5}{3}}=8^{(\frac{1}{3})(5)}=(8^{\frac{1}{3}})^5=2^5=32$
2. $(\sqrt{8})^{\frac{2}{3}} =(8^{\frac{1}{2}})^{\frac{2}{3}}=8^{(\frac{1}{2})(\frac{2}{3})}=8^{\frac{1}{3}}=\sqrt[3]{8}=2$
3. $\sqrt[4]{81^{-3}}=81^{-\frac{3}{4}}=(81^{}\frac{1}{4})^{-3}=(\sqrt[4]{81})^{-3}=3^{-3}=\frac{1}{3^3}=\frac{1}{27}$
4. $(\frac{1}{8})^{\frac{2}{3}}=\frac{1^{\frac{2}{3}}}{8^{\frac{2}{3}}}=\frac{(\sqrt[3]{1})^{2}}{(\sqrt[3]{8})^2}=\frac{1^2}{2^2}=\frac{1}{4}$

    - > Remainder that 1 raised to any power is always 1

5. $\frac{(4^{\frac{2}{3}})(2^{\frac{1}{6}})(3^{\frac{3}{2}})}{(2^{-\frac{1}{2}})(3^{\frac{1}{2}})}=\frac{(2^{\frac{4}{3}})(2^{\frac{1}{6}})(3^{\frac{3}{2}})}{(2^{-\frac{1}{2}})(3^{\frac{1}{2}})}=2^{\frac{4}{3} + \frac{1}{6}-(-\frac{1}{2})}3^{\frac{3}{2}-\frac{1}{2}}=2^{\frac{8}{6}+\frac{1}{6}-(-\frac{3}{6})}3^{\frac{2}{2}}=2^{\frac{12}{6}}(3)=2^2 \times 3 =12$
    - For such complex problems, we should first convert all the expressions to the simplest base possible (by writting $4^{\frac{2}{3}}=(2^2)^{\frac{2}{3}} =2^{\frac{4}{3}}$), then simplify the expression by using rules for multiplication and division of expressions with a common base.
6. $(\sqrt[3]{81})^{\frac{3}{2}}=(81^{\frac{1}{3}})=81^{(\frac{1}{3})(\frac{3}{2})}=81^{\frac{1}{2}}=9$

    - Because $81^{\frac{1}{2}}$ is a square root, ergo $\sqrt{81}=9$.

7. $\sqrt[5]{100000^3}=100000^{\frac{3}{5}}=(100000^{\frac{1}{5}})^3=10^3=1000$
8. $\sqrt[4]{\frac{1}{16}^{-3}}=\frac{1}{16}^{-\frac{3}{4}}=\frac{1^{-\frac{3}{4}}}{16^{-\frac{3}{4}}}=\frac{1}{(\sqrt[4]{16})^{-3}}=\frac{1}{2^{-3}}=\frac{\cancel{1}}{\frac{\cancel{1}}{8}}=8$
9. $(\frac{4}{9})^{(-\frac{3}{2})}=\frac{4^{(-\frac{3}{2})}}{9^{(-\frac{3}{2})}}=\frac{(\sqrt[2]{4})^{-3}}{(\sqrt[2]{9})^{-3}}=\frac{2^{-3}}{3^{-3}}=\frac{\frac{1}{2^3}}{\frac{1}{3^3}}=\frac{\frac{1}{8}}{\frac{1}{27}}=\frac{1 \times 27}{1 \times 8}=\frac{27}{8}$
    - We are multiplying the numerator by the reciprocal of the denominator, $\frac{\frac{1}{8}}{\frac{1}{27}}=\frac{1}{8} \times \frac{27}{1}$ (see fraction division).
