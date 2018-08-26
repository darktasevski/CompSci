# Big O & Algorithms

## Running time of an algorithm

If we have a list of 100 numbers, and want to find a number, with simple search this can take up up to 100 guesses.
If it’s a list of 4 billion numbers, it takes up to 4 billion guesses. So the maximum number of guesses is the same as the size of the list. This is called **linear time**. `O(n)`

Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Powerful, eh? Binary search runs in **logarithmic time** (or log time, as the natives call it). `O(log n)`

-   Algorithm speed isn’t measured in seconds, but in growth of the number of operations.
-   Run time of algorithms is expressed in Big O notation.
-   `O(log n)` is faster than `O(n)`, but it gets a lot faster as the list of items you’re searching grows.

## Big O notation

**Big O establishes a worst-case run time**

**Big O notation is special notation that tells you how fast an algorithm is.**

**Algorithm running times grow at different rates**

The run times for binary search and simple search don’t grow at the same rate. That is, as the number of items increases, binary search takes a little more time to run. But simple search takes a lot more time to run. So as the list of numbers gets bigger, binary search suddenly becomes a lot faster than simple search.
That’s why it’s not enough to know how long an algorithm takes to run—you need to know how the running time increases as the list size increases. That’s where Big O notation comes in.

When we talk about running time in Big O notation, `log` always means `log2`. When you search for an element using simple search, in the worst case you might have to look at every single element. So for a list of 8 numbers, you’d have to check 8 numbers at most. For binary search, you have to check `log n` elements in the worst case. For a list of 8 elements, log 8 == 3 (2 x 2 x 2), because 23 == 8. So for a list of 8 numbers, you would have to check 3 numbers at most. For a list of 1,024 elements, log 1,024 = 10, because 210 == 1,024. So for a list of 1,024 numbers, you’d have to check 10 numbers at most.

> `log10 100` is like asking, “How many 10s do we multiply together to get 100?” The answer is 2: 10 × 10. So log10 100 = 2. Logs are the flip of exponentials.

Here are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:

-   O(log n), also known as log time. Example: Binary search.
-   O(n), also known as linear time. Example: Simple search.
-   O(n \* log n). Example: A fast sorting algorithm, like quicksort.
-   O(n2). Example: A slow sorting algorithm, like selection sort.
-   O(n!). Example: A really slow algorithm, like the traveling salesperson.

### Binary search

Binary search is an algorithm; its input is a sorted list of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns null.
In general, for any list of `n`, binary search will take `log2 n` steps to run in the worst case, whereas simple search (stupid search) will take `n` steps.
Binary search only works when your list is in sorted order. For example, the names in a phone book are sorted in alphabetical order, so you can use binary search to look for a name.

```python
def binary_search(list, item):
    low = 0 # low and high keep track of which part of the list you’ll search in.
    high = len(list)—1
    while low <= high: # While you haven’t narrowed it down to one element ...
        mid = (low + high) # ... check the middle element.
        guess = list[mid]
        if guess == item: # Found the item.
            return mid
        if guess > item: # The guess was too high.
            high = mid - 1
        else: # The guess was too low.
            low = mid + 1
    return None # The item doesn’t exist.

my_list = [1, 3, 5, 7, 9]

print binary_search(my_list, 3) # => 1
print binary_search(my_list, -1) # => None -> “None” means nil in Python. It indicates that the item wasn’t found.
```

### The traveling salesperson

This is a famous problem in computer science, because its growth is appalling `O(n!)` and some very smart people think it can’t be improved. It’s called the traveling salesperson problem.

Salesperson wants to hit five cities while traveling the minimum distance. Here’s one way to do that: look at every possible order in which he could travel to the cities. He adds up the total distance and then picks the path with the lowest distance. There are 120 permutations with 5 cities, so it will take 120 operations to solve the problem for 5 cities. For 6 cities, it will take 720 operations (there are 720 permutations). For 7 cities, it will take 5,040 operations! The number of operations increases drastically. In general, for `n` items, it will take `n!` (n factorial) operations to compute the result. So this is `O(n!)` time, or **factorial time**. It takes a lot of operations for everything except the smallest numbers. Once you’re dealing with 100+ cities, it’s impossible to calculate the answer in time—the Sun will collapse first.

This is a terrible algorithm! This is one of the unsolved problems in computer science. There’s no fast known algorithm for it, and smart people think it’s impossible to have a smart algorithm for this problem. The best we can do is come up with an approximate solution.
