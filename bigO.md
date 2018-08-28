# Big O & Algorithms

## Running time of an algorithm

If we have a list of 100 numbers, and want to find a number, with simple search this can take up up to 100 guesses.
If it’s a list of 4 billion numbers, it takes up to 4 billion guesses. So the maximum number of guesses is the same as the size of the list. This is called **linear time**. `O(n)`

Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Powerful, eh? Binary search runs in **logarithmic time** (or log time, as the natives call it). `O(log n)`

-   Algorithm speed isn’t measured in seconds, but in growth of the number of operations.
-   Run time of algorithms is expressed in Big O notation.
-   `O(log n)` is faster than `O(n)`, but it gets a lot faster as the list of items you’re searching grows.

When you write Big O notation like O(n), it really means this. `c * n` where `c` is some fixed amount of time, and it's called `constant`. We usually ignore that constant, because if two algorithms have different Big O times, the constant doesn’t matter.
But sometimes the constant can make a difference. Quicksort versus merge sort is one example. Quicksort has a smaller constant than merge sort. So if they’re both `O(n log n)` time, quicksort is faster. And quicksort is faster in practice because it hits the average case way more often than the worst case.

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

### Selection sort

Selection sort takes `O(n × n)` time or `O(n2)` time, so while it is a neat algorithm, it’s not very fast.

-   D&C works by breaking a problem down into smaller and smaller pieces. If you’re using D&C on a list, the base case is probably an empty array or an array with one element.
-   If you’re implementing quicksort, choose a random element as the pivot. The average runtime of quicksort is O(n log n)!
-   The constant in Big O notation can matter sometimes. That’s why quicksort is faster than merge sort.
-   The constant almost never matters for simple search versus binary search, because O(log n) is so much faster than O(n) when your list gets big.

## Hash tables

A hash function is a function where you put in any kind of data and you get back a number.

In technical terminology, we’d say that a hash function “maps strings to numbers.” You might think there’s no discernable pattern to what number you get out when you put a string in. But there are some requirements for a hash function:

-   It needs to be consistent. For example, suppose you put in “apple” and get back “4”. Every time you put in “apple”, you should get “4” back. Without this, your hash table won’t work.
-   It should map different words to different numbers. For example, a hash function is no good if it always returns “1” for any word you put in. In the best case, every different word should map to a different number.

The hash function tells you exactly where the price is stored, so you
don’t have to search at all! This works because

-   The hash function consistently maps a name to the same index. Every time you put in “avocado”, you’ll get the same number back. So you can use it the first time to find where to store the price of an avocado, and then you can use it to find where you stored that price.
-   The hash function maps different strings to different indexes. “Avocado” maps to index 4. “Milk” maps to index 0. Everything maps to a different slot in the array where you can store its price.
-   The hash function knows how big your array is and only returns valid indexes. So if your array is 5 items, the hash function doesn’t return 100 ... that wouldn’t be a valid index in the array.

Put a hash function and an array together, and you get a data structure called a hash table. A hash table is the first data structure we'll learn that has some extra logic behind it. Arrays and lists map straight to memory, but hash tables are smarter. They use a hash function to intelligently figure out where to store elements.
Hash tables are probably the most useful complex data structure
you’ll learn. They’re also known as hash maps, maps, dictionaries, and associative arrays. And hash tables are fast! You can get an item from an array instantly. And hash tables use an array to store the data, so they’re equally fast.

Any good language will have an implementation for hash tables. Python has hash tables; they’re called dictionaries. You can make a new hash table using the `dict` function:

```python
book = dict()

book[“apple”] = 0.67 An apple costs 67 cents.
book[“milk”] = 1.49 Milk costs $1.49.
book[“avocado”] = 1.49
print book # {‘avocado’: 1.49, ‘apple’: 0.67, ‘milk’: 1.49}
print book[“avocado”] # 1.49
```

> A hash table maps keys to values.

> In the average case, hash tables take O(1) for everything. O(1) is called constant time. In the worst case, a hash table takes O(n)—linear time—for everything,
> which is really slow.

To recap, hashes are good for

-   Modeling relationships from one thing to another thing
-   Filtering out duplicates
-   Caching/memorizing data instead of making your server do work

### Collisions

To understand the performance of hash tables, you first need to understand what collisions are.
Collision is when two keys are assigned the same slot. If you store the second one at that slot, you’ll overwrite the first one. Collisions are bad, and you need to work around them. There are many different ways to deal with collisions. The simplest one is this: if multiple keys map to the same slot, start a linked list at that slot.

To avoid collisions, you need

-   A low load factor
-   A good hash function

The load factor of a hash table is easy to calculate:

```
number of items
in hash table
 _____________
total number of slots
so:
_____________
| |2| |4| | // this 5 slots arr will have load factor of 2/5
_______
| |2| | // this 3 slots arr will have load factor of 1/3
```

Load factor measures how many empty slots remain in your hash table
Having a load factor greater than 1 means you have more items than slots in your array. Once the load factor starts to grow, you need to add more slots to your hash table. This is called resizing. A good rule of thumb is, resize when your load factor is greater than `0.7`. Resizing is expensive, and you don’t want to resize too often. But averaged out, hash tables take O(1) even with resizing.

A good hash function distributes values in the array evenly. A bad hash function groups values together and produces a lot of collisions.

---

Hash tables are a powerful data structure because they’re so fast and they let you model data in a different way. You might soon find that you’re using them all the time:

-   You can make a hash table by combining a hash function
    with an array.
-   Collisions are bad. You need a hash function that minimizes collisions.
-   Hash tables have really fast search, insert, and delete.
-   Hash tables are good for modeling relationships from one item to another item.
-   Once your load factor is greater than .07, it’s time to resize your hash table.
-   Hash tables are used for caching data (for example, with a web server).
-   Hash tables are great for catching duplicates.
