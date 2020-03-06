# The Art of Problem Solving, Vol. 1: The Basics

## Integer exponents

> Notes and examples at [Math/multiplication](../Math/multiplication.md#integer-exponents)

[Exercise 1.1 Solutions](../static/Books/exercises_solution_1.1.jpg)

## Fractional exponents

> Notes and examples at [Math/multiplication](../Math/multiplication.md#fractional-exponents)

### 1.3 Exercise

1. $x=(-2)^5=-32$
    - Because $2^5$ is 32
2. $x=\sqrt[3]{-\frac{1}{8}}=-\frac{1}{8}^{\frac{1}{3}}=-\frac{1^{\frac{1}{3}}}{8^{\frac{1}{3}}}=-\frac{1}{\sqrt[3]{8}}=-\frac{1}{2}$
3. $x^6=64=\pm2$
    - even power, so we have to take into account both positive and negative roots
4. $x^3=64=4$
    - odd power, so we're not concerned about multiple roots
5. $x=(-27)^{-\frac{2}{3}}=(-27^{\frac{1}{3}})^{-2}=(\sqrt[3]{-27})^{-2}=(-3)^{-2}=\frac{1}{(-3)^2}= \frac{1}{9}$
6. $x^{\frac{5}{3}}=243 =(x^{\frac{5}{3}})^{\frac{3}{5}}=x^1=243^{\frac{3}{5}}=(243^{\frac{1}{5}})^3=3^3=27$

## Simplifying Radical Expressions

> Notes and examples at [Math/square roots](../Math/square_roots.md#simplifying-square-roots)

### 1.4 Exercise

-   $\sqrt{27}=3^\frac{3}{2}=3^1\times3^\frac{1}{2}=3\sqrt{3}$
-   $\sqrt[3]{128}=2^\frac{7}{3}=2^2\times2^\frac{1}{3}=4\sqrt[3]{2}$
-   $\sqrt[4]{1600}=2^\frac{6}{4}\times5^\frac{2}{4}=2(2^\frac{1}{2}\times5^\frac{1}{2})=2\sqrt{10}$
-   $$
     \begin{aligned}
     \sqrt{9095625} &=\sqrt{3^3 \times 5^4 \times 7^2 \times 11} \\ & =3^\frac{3}{2}\times5^\frac{4}{2}\times7^\frac{2}{2}\times11^\frac{1}{2} \\& =3^\frac{2}{2}(3^\frac{1}{2})5^2\times7(11^\frac{1}{2}) \\& =3\times25\times7(3^\frac{1}{2}\times11^\frac{1}{2}) \& =525(33^\frac{1}{2})=525\sqrt{33}
     \end{aligned}
    $$

-   $\sqrt[3]{\frac{36000}{243}}$
    1.  Here, we first need to simplify the fraction before finding the cube root: $\\\frac{36000}{243}=\frac{2^5\times3^2\times5^3}{3^5}=\frac{2^5\times\cancel{3^2}\times5^3}{\cancel{3^5}3^3}$ Thus:

$$
\sqrt[3]{\frac{36000}{243}}=\frac{\sqrt[3]{2^5 \times 5^3}}{\sqrt[3]{3^3}}=\frac{2^\frac{5}{3} \times 5^\frac{3}{3}}{3^\frac{3}{3}}=\frac{2^\frac{3}{3}(2^\frac{2}{3}\times5^1)}{3^1}=\frac{2\times5(2^\frac{2}{3})}{3}=\frac{10\sqrt[3]{2^2}}{3}=\frac{10\sqrt[3]{4}}{3}
$$

-   $\sqrt{\frac{56}{126}}$
    1.  As above, we start by reducing the fraction: $\frac{56}{126}=\frac{2^3\times7}{2\times3^2\times7}=\frac{\cancel{2^3}2^2\times\cancel{7}}{\cancel{2}\times3^2\times\cancel{7}}=\frac{2^2}{3^2}$. Thus:

$$
\sqrt{\frac{56}{126}}=\frac{\sqrt{2^2}}{\sqrt{3^2}}=\frac{\sqrt{4}}{\sqrt{9}}=\frac{2}{3}
$$

## Rationalizing Denominators

> Notes and examples at [Math/fractions and decimals](../Math/fractions_and_decimals.md#rationalizing-denominators)

### 1.5 Exercise

-   $3 \div \sqrt{3} = \frac{3}{\sqrt{3}}=\frac{3}{\sqrt{3}}\cdot\frac{\sqrt{3}}{\sqrt{3}}=\frac{3\sqrt{3}}{\sqrt{9}}=\frac{\cancel{3}\sqrt{3}}{\cancel{3}}=\sqrt{3}$
-   $\sqrt{2}\div\sqrt{6}=\frac{\sqrt{2}}{\sqrt{6}}=\frac{\sqrt{2}}{\sqrt{6}}\cdot\frac{\sqrt{6}}{\sqrt{6}}=\frac{\sqrt{12}}{\sqrt{36}}=\frac{\sqrt{12}}{6}=\frac{2\sqrt{3}}{6}=\frac{\sqrt{3}}{3}$

    -   A lot of tricky parts in this one:
        -   $\sqrt{12}$ becomes $2\sqrt{3}$ because (reasons): $\sqrt{12}=\sqrt{2^2 \times 3}=2\sqrt{3}$
        -   $\frac{2\sqrt{3}}{6}$ becomes $\frac{\sqrt{3}}{3}$ because: $\frac{2}{6}=\frac{2}{2 \times 3}=\frac{1}{3}$

-   $2\div\sqrt[3]{24}$ - First, we need to reduce the cube root of 24, to get:

$$
 \frac{2}{\sqrt[3]{24}}=\frac{2}{\sqrt[3]{8 \times 3}}=\frac{2}{\sqrt[3]{8}\sqrt[3]{3}}=\frac{\cancel{2}}{\cancel{2}\sqrt[3]{3}}=\frac{1}{\sqrt[3]{3}}
$$

3a. Now we can rationalize denominator:

$$
    \frac{1}{\sqrt[3]{3}}=\frac{1}{\sqrt[3]{3}} \times \frac{\sqrt[3]{3^2}}{\sqrt[3]{3^2}}=\frac{\sqrt[3]{3^2}}{\sqrt[3]{3^3}}=\frac{\sqrt[3]{9}}{3}
$$

-   $\frac{1}{\sqrt[4]{1800}}=\frac{1}{\sqrt[4]{2^3}\sqrt[4]{3^2}\sqrt[4]{5^2}} \times \frac{\sqrt[4]{2}}{\sqrt[4]{2}}\times\frac{\sqrt[4]{3^2}}{\sqrt[4]{3^2}}\times\frac{\sqrt[4]{5^2}}{\sqrt[4]{5^2}}=\frac{\sqrt[4]{2}\sqrt[4]{3^2}\sqrt[4]{5^2}}{\sqrt[4]{2^4}\sqrt[4]{3^4}\sqrt[4]{5^4}}=\frac{\sqrt[4]{450}}{30}$
-   $5^\frac{1}{3}/5^\frac{5}{3}$ - To rationalize the denominator of this expression, we multiply by a factor which makes the exponent of 5 an integer. To do this, we multiply by $5^\frac{1}{3}$, which will make the denominator $5^2$.

$$
\frac{5^\frac{1}{3}}{5^\frac{5}{3}} \times \frac{5^\frac{1}{3}}{5^\frac{1}{3}}=\frac{5^\frac{2}{3}}{5^2}=\frac{\sqrt[3]{25}}{25}
$$

-   Rationalize denominator $(3^\frac{1}{2}2^\frac{2}{3})/(3^\frac{1}{6}2^\frac{3}{2})$:

$$
\frac{3^\frac{1}{2}2^\frac{2}{3}}{3^\frac{1}{6}2^\frac{3}{2}}= \frac{3^\frac{1}{2}2^\frac{2}{3}}{3^\frac{1}{6}2^\frac{3}{2}} \times \frac{3^\frac{5}{6}}{3^\frac{5}{6}}\times \frac{2^\frac{1}{2}}{2^\frac{1}{2}}=\frac{3^{(\frac{1}{2}+\frac{5}{6})}2^{(\frac{2}{3}+\frac{1}{2})}}{3^12^2}=\frac{3^\frac{4}{3}2^\frac{7}{6}}{12}=\frac{6\times3^\frac{1}{3}2^\frac{1}{6}}{12}=\frac{6\sqrt[6]{9 \times 2}}{12}=\frac{\sqrt[6]{18}}{2}
$$
