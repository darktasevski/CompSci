# Math notes

> Using KaTeX for some math notations and examples

-   The **absolute value** is just the number's distance from the zero.
    $$
    |5| = 5\enspace abs\enspace of\enspace 5\enspace is\enspace 5.
    $$
    $$
    |-10| = 10\enspace abs\enspace of\enspace -10\enspace is\enspace 10.
    $$
-   **Addition** of the odd and even number will always result in the odd number.
-   **Addition** of odd and odd number will always return even number (except for zero)
-   **Zero** is even number.
-   Simple **subtraction**:
    ```
        340,567
        -86,415
        --------
        254,152
    ```
-   **Subtracting** negative numbers:
    $8 - (-7) = 15$
    Negative and negative always result in positive value:
    $-2 - (-3) = 1$
-   **Geometry**: **Perimetar** je distanca potrebna da se obidje oko nekog objekta, ili matematički rečeno zbir svih strana geometrijske figure. Može se izračunati uz pomoć sledeće formule:
    $$P = (d * c) * 2$$
    ```
              d
        |-----------|
      c |           |
        |-----------|
    ```
-   **Geometry**: **Oblast(Area)** predstavlja celo područje unutrašnjeg dela geometrijske figure, mereno u jedinicama. Oblast pravougaone figure je definisan proizvod dve strane, i moze se izračunati uz pomoć sledeće formule:
    $$O = d * c$$

---

## Multiplication

-   When **multiplying** two negative numbers the result is always positive.

Simple hack:

```js
56 x 8 = (50 + 6) x 8 =
         (50 x 8) + (6 x 8) =
         400 + 48 = 448
```

**Distributive property grid**
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

**Multiplying with area model**
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
    | x | 400 | 80 | 1 | |
    |-----|---------|--------|-----|---------|
    | 2 | 800 | 160 | 2 | 962 |
    | 50 | 20,000 | 4,000 | 50 | 24,050 |
    | 300 | 120,000 | 24,000 | 300 | 144,300 |
    | | | | | 169,312 |
    This is area grid. We destructure numbers to thousands, hundreds, tens and ones and then multiply and add them together.
-   or by using **standard algorithm**:

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

    **Multiplication with 1 digit**:
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

**Multiplication with 2 digits**:

```js

  36   // 7 x 6 = 42, write 2, carry 4
x 27   // 7 x 3 = 21 + 4 we carried = 25, write 25 as this is last number
-----  // Throw one 0 at the end of the next one as we're now multiplying with tens place
  252  // 2 x 6 = 12, write 2, carry 1
+ 720  // 2 x 3 = 6 + 1 we carried = 7, write 7
-----
  972
```

## Division

**Division using place value**:

$$
5600 / 8 = (56 \times 100) / 8 = 56 / 8 = 7 \times 100 = 700
$$

$$
7200 / 6 = (72 \times 100) / 6 = 72 / 6 = 12 \times 100 = 1200
$$

$$
15000 / 15 = (15 \times 1000) / 15 = 15 / 15 = 1 \times 1000 = 1000
$$

**Division using distributive property**:

$$
846 / 2 = (800 / 2) + (40 / 2) + (6 / 2) = 400 + 20 + 3 = 423
$$

Here we skip division by (3 / 9) because 9 goes 0 times into 3:

$$
963 / 9 = (900 / 9) + (63 / 9) = 100 + 7 = 100
$$

**Division using long division**:

$$
280 / 5 = 5\sqrt{280} = 56
$$

```js
5√‾‾280 = 056 // 5 goes into 2 zero times, we subtract 0 from 2
  - 0         // when we have number which is smaller than (5), we can skip it and go straight to the (28 - next greater or equal) like in this case
    ----      // move to the next number (8), write 0
    28        // shift down 8, 5 goes into 28 five times, write 5
  - 25        // 5 x 5 = 25, we have 3 left
    ----      // shift down next number (0)
     30       // 5 goes into 30 six times, write 6
   - 30       // 5 x 6 = 30
     ----
      0       // We're done, we have remainder of zero
```

```js
4√‾‾424 = 106  // 4 goes into 4 one time, write 1
  - 4        // 4 x 1 = 4
    ----     // we can shift down 2, but 4 goes into 2 zero times, so we shift down 24, and write 0
    024      // 4 goes into 24 six times, write 6
   - 24      // 4 x 6 = 24
     -----
      0      // We're done, we have remainder of zero
```

**Dividing by two digit numbers**

$$
186 / 31 = 31\sqrt{186} = 6
$$

because:

$$
31 \times 6 = 186
$$

### Remainders

> Leftover value after we divide somethin that can't be divided evenly

$$ 7/3 = 2r1 $$

3 goes in the 7 two times, and once we divide that amount $(2 \times 3 = 6)$ we have 1 (remainder) left.

> More examples in Remainder section in the notebook (it's really hard to write that in KaTeX).

```js
4√‾‾75 = 18r3
  - 4     // 4 goes in 7 once; write 1; 4 x 1 = 4, 7 - 4 = 3
  ----    // shift down 5
    35    // 4 goes into 35 8 times; write 8; 4 x 8 = 32;
    32
    ---- // No numbers to shift down, we're left with the 3
     3   // 4 goes into 3 zero times, so this will be a remainder
```

```js
8√‾‾3771 = 0471r3
  - 32    // 8 goes into 32 4 times; write 4
    ----
     57   // 8 goes into 57 7 times; write 7
     56
     ----
      11  // 8 goes into 17 once; write 1
       8
      ----
       3  // We're left with 3; 8 goes into 3 zero times, so this would be a remainder.
```

## Negative Numbers

Opossite of an number is the number that is same distance from the zero, but on the other side of it.

For example:
opossite of 3 is -3, of the 5 is -5, 72 is -72 and so on...

One way to think about it is that the number will have the same absolute value but the different sign.

Example:

Find |x| when $x = 5$, $x = -10$ and $x = -12$.

> |x| (pipes) are the notation for the absolute values.

$$
|5| = 5, |-10| = 10, |-12| = 12
$$

> This is just a distance from the zero.

### Calculating value as distance between the numbers

<----a------b---->

<----b------a---->

$$ |a-b| = |b-a| $$
or:

$$
|-2-3| = |-5| = 5
$$

$$
|3-(-2)| = | 5 | = 5
$$

### Negative numbers addition

$$
15 + (-46) + 29 = -2
$$

$$
-15-46-29 = -90
$$

### Multiplying negative numbers

> Myltiplying negative with negative always yields a positive value
> Myltiplying negative with positive always yields a negative number

TODO: Some examples

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

The small number written above and to the right of thr number is called an **exponent**. The number underneath the exponent is called **the base**

$$
(-2)^3 = (-2) \times (-2) \times (-2) = 4 \times -2 = -8
$$

$$ 2^0  = 1 $$
$$ 2^1 = 2 $$

$$
  (\frac{2}{5})^2 = \frac{2}{5} \times \frac{2}{5} = \frac{2 \times 2}{5 \times 5} = \frac{4}{25}
$$

$$
(\frac{1}{2})^4 = \frac{1}{2 \times 2 \times 2 \times 2} = \frac{1}{16}
$$

**Some edge cases**:

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
