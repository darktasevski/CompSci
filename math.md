# Math notes

-   The **absolute value** is just the number's distance from the zero.
    |5| = 5 `abs` of 5 is 5.  
    |-10| = 10 `abs` of -10 is 10
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
