# Factors, multiples and patterns

-   [Factors, multiples and patterns](#factors-multiples-and-patterns)
    -   [Divisibility Rules](#divisibility-rules)
    -   [Finding factors of a number](#finding-factors-of-a-number)
    -   [Factors and multiplies](#factors-and-multiplies)
        -   [Finding Factors Quickly](#finding-factors-quickly)
    -   [Prime Numbers](#prime-numbers)
        -   [Prime factorization](#prime-factorization)

---

> We know that 3x2x5 = 30. So 2, 3, and 5 are factors of 30. 30 is a multiple of each of 3, 2, and 5. If a number only has itself and 1 as factors, then the number is "prime".

## Divisibility Rules

Some divisibility rules can help you find the factors of a number. If a number is even, it's divisible by 2, i.e. 2 is a factor. If a number's digits total a number that's divisible by 3, the number itself is divisible by 3, i.e. 3 is a factor. If a number ends with a 0 or a 5, it's divisible by 5, i.e. 5 is a factor.

If a number is divisible twice by 2, it's divisible by 4, i.e. 4 is a factor. If a number is divisible by 2 and by 3, it's divisible by 6, i.e. 6 is a factor. If a number is divisible twice by 3 (or if the sum of the digits is divisible by 9), then it's divisible by 9, i.e. 9 is a factor.

To test if something is **divisible by 2** you just need to look at ones place and see if it's even number/divisible by 2.

To test if something is **divisible by 3** you have to add up all the digits inside number and see if the sum is divisible by 3.

To test if something is **divisible by 4** you can look up the last two digits of the numbers and see if those are divisible by 4. If it's an odd number and not divisible by 2 number is also not divisible by 4.

To test if something is **divisible by 5** you can look up if yoru final digit is equal to 5 or 0.

To test if something is **divisible by 6** it must be divisible both by 2 and 3 in order to be divisible by 6.

To test if the number is **divisible by 8** you only must check to see whether the last three digits of the number are divisible by 8. If they are, then the entire number is divisible by 8 too.

To test if the number is **divisible by 7** you can use a weird trick: you must take the last digit of the number you’re testing and double it. Then, subtract this number from the rest of the remaining digits. If this new number is either 0 or if it’s a number that’s divisible by 7, then then original number is divisible by seven. (You may have to repeat this a couple of times if the divisibility of the resulting number is not immediately obvious).

_Example 1_: Is the number 364 divisible by 7? Answer 1: Yes: Double the 4 to get 8. Subtract 8 from 36 to get 28. Since 28 is divisible by 7, we can now say for certain that 364 is also divisible by 7.

_Example 2_: Is the number 8256 divisible by 7? Answer 2: No, Double 6 to get 12. Subtract 12 from 825 to get 813. 813 is slightly too large to tell whether it is divisible by 7 so we must repeat the process. Double 3 to get 6. Subtract 6 from 81 to get 75. Since 75 is not divisible by 7, neither is 813 or 8256. Therefore, 8256 is not divisible by 7.

To test if something is **divisible by 9** you have to add up all the digits inside number and see if the sum is divisible by 9. _(Similar to division test for 3)_

To test if something is **divisible by 10** is really easy, you just have to check if the number last two digits of the number are divisible by 10, or if you have a zero in the ones place.

## Finding factors of a number

The quickest way to find the factors of a number is to divide it by the smallest prime number (bigger than 1) that goes into it evenly with no remainder. Continue this process with each number you get, until you reach 1.

## Factors and multiplies

$$factor ~ \times ~ factor = multiple$$

Given $9 \times 2 = 18$ we can say that:

-   9 and 2 are factors of 18
-   18 is a multiple of 2

> Every number has 1 as a factor. Every number has itself as a factor. A **factor** is a whole number that can divide evenly into another number. The factors of 8 are 1, 2, 3 and 4, because all oof them divide evenly into 8. A factor pair is 2 whole numbers that can be multiplied to get a certain product. The factor pairs of 8 are 1 and 8, because 1 x 8 = 8, and 2 and 4, because 2 x 4 = 8. A **multiple** is a number that results when we multiply one whole number by another whole number. The first four multiples of 3 are 3, 6, 9 and 12. We can never list all of the multiples of a number. Identifying multiples: We can check to see if a number is a multiple of another number by seeing if it can be divided evenly by the number. 15 is a multiple of 3 because 15 / 3 = 5

### Finding Factors Quickly

Establish the number you want to find the factors of, for example 24. Find two more numbers that multiply to make 24. In this case, `1 x 24 = 2 x 12 = 3 x 8 = 4 x 6 = 24`. This means the factors of 24 are 1, 2, 3, 4, 6, 8, 12 and 24.

Factor negative numbers in the same way as positive numbers, but make sure the factors multiply together to produce a negative number. For example, the factors of -30 are -1, 1, -2, 2, -3, 3, -5, 5, -6, 6, -10, 10, -15 and 15.

## Prime Numbers

A number that can only be divided by 1 and itself is called a prime number. Examples of prime numbers are 2, 3, 5, 7, 11 and 13. The number 1 is not considered a prime number because 1 goes into everything.

### Prime factorization

_Example:_ Find the least common multiples of numbers 6 and 8:

Break apart numbers to it's prime numbers:

```js
    6         8
  /   \     /   \
 2     3   2     4
                / \
               2   2
```

To find the least common multiple we need to multiply at least three 2 with one 3. We have 4 twos here, but both 6 and 8 have 2 so those cancel each other. So:

$$ 2 \times 3 \times 2 \times 2 = 24 $$

24 is the least common miltiply of the 6 and 8.

---
