# Square roots

-   [Square roots](#square-roots)
    -   [Perfect Squares](#perfect-squares)
    -   [Calculating Square Roots](#calculating-square-roots)
    -   [Principal square root](#principal-square-root)
    -   [Simplifying square roots](#simplifying-square-roots)

---

A square root of a number is a value that can be multiplied by itself to give the original number. A square root of 9 is 3 because when 3 is multiplied by itself we get 9.

It is like asking: **What can we multiply by itself to get this?**

`√` - This is the special symbol that means "square root", it is sort of like a tick, and actually started hundreds of years ago as a dot with a flick upwards. It is called the **radical**.

## Perfect Squares

The Perfect Squares (also called "Square Numbers") are the squares of the integers:

| int | perfect square |
| --- | -------------- |
| 0   | 0              |
| 1   | 1              |
| 2   | 4              |
| 3   | 9              |
| 4   | 16             |
| 5   | 25             |
| 6   | 36             |
| 7   | 49             |
| 8   | 64             |
| 9   | 81             |
| 10  | 100            |
| 11  | 121            |
| 12  | 144            |
| 13  | 169            |
| 14  | 196            |
| 15  | 225            |

## Calculating Square Roots

It's kinda easy to work out the square root of a perfect square, but it is really hard to work out other square roots.

Example: what is √10?

Well, 3 × 3 = 9 and 4 × 4 = 16, so we can guess the answer is between 3 and 4. At this point, I get out my calculator and it says: `3.1622776601683793319988935444327`

But the digits just go on and on, without any pattern. So even the calculator's answer **is only an approximation** ! Numbers like this are called Irrational Numbers

## Principal square root

For example, $\sqrt{9}=3$ but $(-3)^2=9$ too!

Because of this, we can differentiate between the positive and negative square root values. When someone asks to find a Principal (positive) square root $\sqrt{3}$ that means that he/she wants a positive number. If someone wants a negative square root that would be written as this: $(-\sqrt{3})$.

---

$$
5 \sqrt{117} = 5 \times \sqrt{(3 \times 3 \times 13)} = 5\sqrt{3 \times 3} \sqrt{13} = 5\sqrt{9} \sqrt{13} = 15\sqrt{13}
$$

because $13 \times 9 = 117$, we then simplify 9 to 3 x 3 = 9, and $\sqrt{9}=3, 5\times3=15\times\sqrt{13}$. We cannot factor it out as it's prime number.

---

26 don't have any perfect squares in it too, so we can leave it like this:

$$
3 \sqrt{26} = 3 \sqrt{26}
$$

## Simplifying square roots

Roots are nice, but we prefer dealing with regular numbers as much as possible. So, for example, instead of √4 we prefer dealing with 2. What about roots that aren't equal to an integer, like √20? Still, we can write 20 as 4⋅5 and then use known properties to write √(4⋅5) as √4⋅√5, which is 2√5. We _simplified_ √20.

Example, simplify $\sqrt{72}$:

Firstly, let's factor 72:

```none
       72
      /  \
     2   36
        / \
       2   18
          /  \
         2    9
		/  \
		3    3
```

Which gives us: $72 = 2 \times 2 \times 3 \times 3 \times 2 = 2^2 \times 3^2 \times 2$ So:

$$
\begin{aligned}
\sqrt{72} &= \sqrt{2^2 \times 3^2 \times 2} \\ &= \sqrt{2^2} \times \sqrt{3^2} \times \sqrt{2} \\ &= 2 \times 3 \times \sqrt{2} \\ &= 6\sqrt{2}
\end{aligned}
$$

In radical expression, all factors that cab be removed from the radical should be removed. WE can do this by writing the prime factorization like above or the number under the radical (**radicand**). Thus to find $\sqrt{96}$ we can write:

$$
\sqrt{96}=\sqrt{5^5 \times 3}
$$

If the expression isn't already in exponential notation (rather than using the radical sign) we can write it as such:

$$
\sqrt{2^5 \times 3} = (2^5 \times 3)^{\frac{1}{2}}
$$

Then we can apply the root ($\frac{1}{2}$ in above example) to each factor separately:

$$
(2^5 \times 3)^{\frac{1}{2}} = (2^5)^{\frac{1}{2}} \times 3^{\frac{1}{2}} = 2^{\frac{5}{2}} \times 3^{\frac{1}{2}}
$$

We then evaluate any of the resulting expressions which have integral components. If any of the powers of the remaining factors are greater than one, we split the expression into a product of the factor with an integer exponent and the factor with a fractional coefficient less than one. thus $2^{\frac{5}{2}}$ becomes $(2^2)(2^{\frac{1}{2}})$. We evaluate all parts with integer exponents, then combine everything with fractional exponents into a single expression.

$$
2^{\frac{5}{2}} \times 3^{\frac{1}{2}}=(2^2)(2^{\frac{1}{2}})(3^{\frac{1}{2}})=4 \times 2^{\frac{1}{2}} \times 3^{\frac{1}{2}}=4(2 \times 3)^{\frac{1}{2}} = 4\sqrt{6}
$$

---

_Some examples:_

1. **Simplify:** $\sqrt{8}=(8)^{\frac{1}{2}}=(4 \times 2)^{\frac{1}{2}}=4^{\frac{1}{2}} \times 2^{\frac{1}{2}}=\sqrt[2]{4}\sqrt[2]{2}=2\sqrt{2}$
    - we can also simplify like above
2. **Simplify:** $\sqrt{1440}$ - By doing [prime factorization](../static/math/simplify_1440.png) we can find out that factors of 1440 are $2^5,3^2$ and 5. So: $\sqrt{1440}=\sqrt{2^5}\sqrt{3^2}\sqrt{5}=\sqrt{32}\sqrt{9}\sqrt{5}=\sqrt{16 \times 2}\times3\times\sqrt{5}=4\times\sqrt{2}\times3\times\sqrt{5}=12\sqrt{10}$
    - Can also be simplified like this: $\sqrt{1440}=(2^5 \times 3^2\times5)^\frac{1}{2}=(2^5)^\frac{1}{2}(3^2)^\frac{1}{2}(5)^\frac{1}{2}=(2^\frac{5}{2})(3^\frac{2}{2})(5^\frac{1}{2})=3[(2^2)(2^\frac{1}{2})(5^\frac{1}{2})]=3(4)2^\frac{1}{2}5^\frac{1}{2}=12\sqrt{10}$
    - **Another way to simplify faster** - By inspection, since 144 is a perfect square which divides 1440, we can obtain the result much quicker: $\sqrt{1440}=\sqrt{144}\sqrt{10}=12\sqrt{10}$
3. **Simplify:** $\sqrt{96}=\sqrt{16(6)}=\sqrt{16}\sqrt{6}=4\sqrt{6}$
4. **Simplify:** $\sqrt[3]{\frac{144}{125}}=\frac{\sqrt[3]{144}}{\sqrt[3]{125}}=\frac{(2^4 \times 3^2)^\frac{1}{3}}{(5^3)^{\frac{1}{3}}}=\frac{(2^{\frac{4}{3}}\times3^\frac{2}{3})}{5^\frac{3}{3}}=\frac{2^1\times2^\frac{1}{3}\times3^\frac{2}{3}}{5^1}=(\frac{2}{5})((2^\frac{1}{3})(3^\frac{2}{3}))=(\frac{2}{5})\sqrt[3]{(2)(3^2)}=\frac{2}{5}\sqrt[3]{18}$
    - When dealing with a fraction, we should first simplify the fraction, then work on the numerator and denominator separately.
5. **Simplify:** $\sqrt[6]{6912}=(2^8 \times 3^3)^\frac{1}{6}=2^\frac{4}{3}\times 3^\frac{1}{2}=2(2^\frac{1}{3}\times3^\frac{1}{2})=2(2^\frac{2}{6}\times3^\frac{3}{6})=2\sqrt[6]{4(27)}=2\sqrt[6]{108}$
    - Note that I've reduced the fractional exponents ($\frac{8}{6}=\frac{4}{3}$) before removing the integer parts; this keeps us from missing simplifications of expressions like $\sqrt[4]{9}=(3^2)^\frac{1}{4}=3^\frac{1}{2}=\sqrt{3}$. If we don't simplify the $\frac{2}{4}$ we might come to (incorrect) conclusion that $\sqrt[4]{9}$ is irreducible.

---

What's the difference between $x^2 = 9$ and $\sqrt{9}$?

In the first we're asked what numbers squared are 9, so x can be 3 or -3. We can write this as $x=\pm 3$. In the second x=3, because _x_ is the square root of 9, which implies the positive value.

> Rule of a thumb is that if the radical sign or frictional power is already there, only give the positive solution, if not, give all solutions.

We can run into difficulty of multiple roots for even powers. For odd powers there is no confusion because negative numbers raised to an odd number are negative and positive numbers raised to an odd number are positive. For example, the only real number which cubed equals 8 is 2, because -2 cubed is -8.

What is the difference between $(-1)^{\frac{1}{2}}$ and $-1^{\frac{1}{2}}$?

**The first denotes the square root of -1, while the second asks for the negative of the square root of 1.** This is very clear if we write the two in radical notation: the first is $\sqrt{-1}$ while the second is $-\sqrt{1}$. There is a big difference between the two. There is no real number which equals the first while the second is equal to -1.

---

_Some examples:_

1. $x=(-2)^5=-32$
    - Because $2^5$ is 32
2. $x=\sqrt[3]{-\frac{1}{8}}=-\frac{1}{8}^{\frac{1}{3}}=-\frac{1^{\frac{1}{3}}}{8^{\frac{1}{3}}}=-\frac{1}{\sqrt[3]{8}}=-\frac{1}{2}$
3. $x^6=64=\pm2$
    - even power, so we have to take into account both positive and negative roots
4. $x^3=64=4$
    - odd power, so we're not concerned about multiple roots
5. $x=(-27)^{-\frac{2}{3}}=(-27^{\frac{1}{3}})^{-2}=(\sqrt[3]{-27})^{-2}=(-3)^{-2}=\frac{1}{(-3)^2}= \frac{1}{9}$
6. $x^{\frac{5}{3}}=243 =(x^{\frac{5}{3}})^{\frac{3}{5}}=x^1=243^{\frac{3}{5}}=(243^{\frac{1}{5}})^3=3^3=27$
