# Data, Probability and statistics

[[toc]]

[TOC]

## Data

> Data is a collection of facts, such as numbers, words, measurements, observations or even just descriptions of things.

Data can be qualitative or quantitative.

![Data types](../static/math/data-types.svg)

-   **Qualitative** data is descriptive information (it describes something)
-   **Quantitative** data is numerical information (numbers)

Quantitative data can be Discrete or Continuous:

-   **Discrete data** can only take certain values (like whole numbers)
-   **Continuous data** can take any value (within a range)

> Put simply: Discrete data is counted, Continuous data is measured

### How to Show Data

-   Bar Graphs
-   Pie Charts
-   Dot Plots
-   Line Graphs
-   Scatter (x,y) Plots
-   Pictographs
-   Histograms
-   Frequency Distribution and Grouped Frequency Distribution
-   Stem and Leaf Plots
-   Cumulative Tables and Graphs

## Statistics

> The Statistics is study of data: how to collect, analyze, summarize and present it.

### Central values

There are other ways of measuring central values, but Mean, Median and Mode are the most common.

#### Mean (Average)

To calculate the mean we just need to follow these steps:

1. Add up all of the data points (numbers)
2. Divide the total by the number of data points in the data set (number of numbers)

$$
(3+7+8) / 3 = 18/3 = 6
$$

#### Median

> List all numbers in order and choose the middle one

Example:

$1, 1, 1, 1, 1, \underline{13}, 13, 13, 13, 13, 13$

Sometimes there are two middle numbers. Just average those two:

$3, 4, \underline{7, 9}, 12, 15$

$(7+9) / 2 = 16/2 = 8$, thus the median is $8$.

#### Mode

> The Mode is the value that occurs most often:

$$
1, 1, 1, 1, 1, \textcolor{blue}{13},\textcolor{blue}{13},\textcolor{blue}{13},\textcolor{blue}{13},\textcolor{blue}{13},\textcolor{blue}{13}
$$

13 occurs 6 times, 1 occurs only 5 times, so the mode is 13.

There can sometimes be more than one Mode:

$$
3, \textcolor{blue}{4},\textcolor{blue}{4}, 5, \textcolor{green}{6},\textcolor{green}{6}, 7
$$

4 occurs twice but 6 also occurs twice. So both 4 and 6 are modes.

When there are two modes it is called _bimodal_, when there are three or more modes we call it _multimodal_.

#### Outliers

Outliers are values that "lie outside" the other values.

They can change the mean a lot, so we can either not use them (and say so) or use the median or mode instead.

For Example:

The mean of $3, 4, 4, 5, 104$ is 24, which isn't really a representation of these numbers. Without the $104$ the mean is: $(3+4+4+5) / 4 = 4$ which is much more representative. The median of the same numbers is $4$ as well as the mode.

#### Harmonic Mean

The Harmonic Mean is good at handling large outliers:

Example: $2, 4, 6$ and $100$:

The arithmetic mean is $\frac{2+4+6+100}{4}=28$

The harmonic mean is $4/(\frac{1}{2}+\frac{1}{4}+\frac{1}{6}+\frac{1}{100})=4.32$

But for small outliers this will make things only less accurate!

#### Central Values problems

Find the missing value if we know:

$$
\begin{aligned}
	4 &= \frac{5+2+x+2+4+8}{6} \\
	4 &= \frac{21+x}{6} \\
	4 \cdot 6 &= \frac{21+x}{\cancel{6}} \cdot \cancel{6} \\
	24 &= 21 +x \\
	24 - 21 &= x = 3
\end{aligned}
$$

This is a vastly simplified example, but oh well...
