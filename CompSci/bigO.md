# Big O & Algorithms

[[toc]]

[TOC]

---

## Running time of an algorithm

If we have a list of 100 numbers, and want to find a number, with simple search this can take up up to 100 guesses. If it’s a list of 4 billion numbers, it takes up to 4 billion guesses. So the maximum number of guesses is the same as the size of the list. This is called **linear time**. `O(n)`

Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Powerful, eh? Binary search runs in **logarithmic time** (or log time, as the natives call it). `O(log n)`

-   Algorithm speed isn’t measured in seconds, but in growth of the number of operations.
-   Run time of algorithms is expressed in Big O notation.
-   `O(log n)` is faster than `O(n)`, but it gets a lot faster as the list of items you’re searching grows.

When you write Big O notation like O(n), it really means this. `c * n` where `c` is some fixed amount of time, and it's called `constant`. We usually ignore that constant, because if two algorithms have different Big O times, the constant doesn’t matter. But sometimes the constant can make a difference. Quicksort versus merge sort is one example. Quicksort has a smaller constant than merge sort. So if they’re both `O(n log n)` time, quicksort is faster. And quicksort is faster in practice because it hits the average case way more often than the worst case.

## Big O notation

**Big O establishes a worst-case run time**

**Big O notation is special notation that tells you how fast an algorithm is.**

**Algorithm running times grow at different rates**

The run times for binary search and simple search don’t grow at the same rate. That is, as the number of items increases, binary search takes a little more time to run. But simple search takes a lot more time to run. So as the list of numbers gets bigger, binary search suddenly becomes a lot faster than simple search. That’s why it’s not enough to know how long an algorithm takes to run—you need to know how the running time increases as the list size increases. That’s where Big O notation comes in.

When we talk about running time in Big O notation, `log` always means `log2`. When you search for an element using simple search, in the worst case you might have to look at every single element. So for a list of 8 numbers, you’d have to check 8 numbers at most. For binary search, you have to check `log n` elements in the worst case. For a list of 8 elements, log 8 == 3 (2 x 2 x 2), because 23 == 8. So for a list of 8 numbers, you would have to check 3 numbers at most. For a list of 1,024 elements, log 1,024 = 10, because 210 == 1,024. So for a list of 1,024 numbers, you’d have to check 10 numbers at most.

> `log10 100` is like asking, “How many 10s do we multiply together to get 100?” The answer is 2: 10 × 10. So log10 100 = 2. Logs are the flip of exponentials.

Here are five Big O run times that you’ll encounter a lot, sorted from fastest to slowest:

-   O(log n), also known as log time. Example: Binary search.
-   O(n), also known as linear time. Example: Simple search.
-   O(n \* log n). Example: A fast sorting algorithm, like quicksort.
-   O(n2). Example: A slow sorting algorithm, like selection sort.
-   O(n!). Example: A really slow algorithm, like the traveling salesperson.

### Binary search

Binary search is an algorithm; its input is a sorted list of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns null. In general, for any list of `n`, binary search will take `log2 n` steps to run in the worst case, whereas simple search (stupid search) will take `n` steps. Binary search only works when your list is in sorted order. For example, the names in a phone book are sorted in alphabetical order, so you can use binary search to look for a name.

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

The hash function tells you exactly where the price is stored, so you don’t have to search at all! This works because

-   The hash function consistently maps a name to the same index. Every time you put in “avocado”, you’ll get the same number back. So you can use it the first time to find where to store the price of an avocado, and then you can use it to find where you stored that price.
-   The hash function maps different strings to different indexes. “Avocado” maps to index 4. “Milk” maps to index 0. Everything maps to a different slot in the array where you can store its price.
-   The hash function knows how big your array is and only returns valid indexes. So if your array is 5 items, the hash function doesn’t return 100 ... that wouldn’t be a valid index in the array.

Put a hash function and an array together, and you get a data structure called a hash table. A hash table is the first data structure we'll learn that has some extra logic behind it. Arrays and lists map straight to memory, but hash tables are smarter. They use a hash function to intelligently figure out where to store elements. Hash tables are probably the most useful complex data structure you’ll learn. They’re also known as hash maps, maps, dictionaries, and associative arrays. And hash tables are fast! You can get an item from an array instantly. And hash tables use an array to store the data, so they’re equally fast.

Any good language will have an implementation for hash tables. Python has hash tables; they’re called dictionaries. You can make a new hash table using the `dict` function:

```python
book = dict()

book[“apple”] = 0.67 # An apple costs 67 cents.
book[“milk”] = 1.49 # Milk costs $1.49.
book[“avocado”] = 1.49
print book # {‘avocado’: 1.49, ‘apple’: 0.67, ‘milk’: 1.49}
print book[“avocado”] # 1.49
```

> A hash table maps keys to values. In the average case, hash tables take O(1) for everything. O(1) is called constant time. In the worst case, a hash table takes O(n)—linear time—for everything, which is really slow.

To recap, hashes are good for

-   Modeling relationships from one thing to another thing
-   Filtering out duplicates
-   Caching/memorizing data instead of making your server do work

### Collisions

To understand the performance of hash tables, you first need to understand what collisions are. Collision is when two keys are assigned the same slot. If you store the second one at that slot, you’ll overwrite the first one. Collisions are bad, and you need to work around them. There are many different ways to deal with collisions. The simplest one is this: if multiple keys map to the same slot, start a linked list at that slot.

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

> Load factor measures how many empty slots remain in your hash table.

Having a load factor greater than 1 means you have more items than slots in your array. Once the load factor starts to grow, you need to add more slots to your hash table. This is called resizing. A good rule of thumb is, resize when your load factor is greater than `0.7`. Resizing is expensive, and you don’t want to resize too often. But averaged out, hash tables take O(1) even with resizing.

A good hash function distributes values in the array evenly. A bad hash function groups values together and produces a lot of collisions.

---

Hash tables are a powerful data structure because they’re so fast and they let you model data in a different way. You might soon find that you’re using them all the time:

-   You can make a hash table by combining a hash function with an array.
-   Collisions are bad. You need a hash function that minimizes collisions.
-   Hash tables have really fast search, insert, and delete.
-   Hash tables are good for modeling relationships from one item to another item.
-   Once your load factor is greater than .07, it’s time to resize your hash table.
-   Hash tables are used for caching data (for example, with a web server).
-   Hash tables are great for catching duplicates.

## Graphs

Graph algorithms are some of the most useful algorithms.

-   A graph models a set of connections.
-   Each graph is made up of nodes and edges.
-   A node can be directly connected to many other nodes. Those nodes are called its neighbors.
-   Graphs are a way to model how different things are connected to one another.

### Breadth-first search

The algorithm to solve a shortest-path problem is called breadth-first search. Breadth- first search is a kind of search algorithm that runs on graphs. It can help answer two types of questions:

-   Question type 1: Is there a path from node A to node B?
-   Question type 2: What is the shortest path from node A to node B?

Breadth-first search allows you to find the shortest distance between two things. But shortest distance can mean a lot of things! You can use breadth-first search to:

-   Write a checkers AI that calculates the fewest moves to victory
-   Write a spell checker (fewest edits from your misspelling to a real word—for example, READED -> READER is one edit)
-   Find the doctor closest to you in your network

#### “Is there a path?”

> Question type 1: Is there a path from node A to node B? (Is there a mango seller in your network?)

Suppose you’re the proud owner of a mango farm. You’re looking for a mango seller who can sell your mangoes. Are you connected to a mango seller on Facebook? Well, you can search through your friends. This search is pretty straightforward.

-   First, make a list of friends to search.
-   Now, go to each person in the list and check whether that person sells mangoes.
-   Suppose none of your friends are mango sellers. Now you have to search through your friends’ friends.
-   Each time you search for someone from the list, add all of their friends to the list.

This way, you not only search your friends, but you search their friends, too. Remember, the goal is to find one mango seller in your network. So if Alice isn’t a mango seller, you add her friends to the list, too. That means you’ll eventually search her friends—and then their friends, and so on. With this algorithm, you’ll search your entire network until you come across a mango seller. This algorithm is breadth-first search.

#### Finding the shortest path

> Question type 2: What is the shortest path from node A to node B? (Who is the closest mango seller?)

Can you find the closest mango seller? For example, your friends are first-degree connections, and their friends are second-degree connections.

You’d prefer a first-degree connection to a second-degree connection, and a second-degree connection to a third-degree connection, and so on. So you shouldn’t search any second-degree connections before you make sure you don’t have a first-degree connection who is a mango seller. Well, breadth-first search already does this! The way breadth-first search works, the search radiates out from the starting point. So you’ll check first-degree connections before second-degree connections.

Another way to see this is, first-degree connections are added to the search list before second-degree connections.You just go down the list and check people to see whether each one is a mango seller. The first-degree connections will be searched before the second- degree connections, so you’ll find the mango seller closest to you. Breadth-first search not only finds a path from A to B, it also finds the shortest path.

### Queues

A queue works exactly like it does in real life. Suppose you and your friend are queueing up at the bus stop. If you’re before him in the queue, you get on the bus first. A queue works the same way. Queues are similar to stacks. You can’t access random elements in the queue. Instead, there are two only operations, enqueue and dequeue.

The queue is called a FIFO data structure: First In, First Out. In contrast, a stack is a LIFO data structure: Last In, First Out.

### Implementing the graph

A graph consists of several nodes. And each node is connected to neighboring nodes. How do you express a relationship like “you -> bob”? Luckily, you know a data structure that lets you express relationships: a hash table! Remember, a hash table allows you to map a key to a value. In this case, you want to map a node to all of its neighbors.

Here’s how you’d write it in Python:

```python
graph = {}
graph[“you”] = [“alice”, “bob”, “claire”]
```

> Notice that “you” is mapped to an array. So graph[“you”] will give you an array of all the neighbors of “you”

What about a bigger graph?

```python
graph = {}
graph[“you”] = [“alice”, “bob”, “claire”]
graph[“bob”] = [“anuj”, “peggy”]
graph[“alice”] = [“peggy”]
graph[“claire”] = [“thom”, “jonny”]
graph[“anuj”] = []
graph[“peggy”] = []
graph[“thom”] = []
graph[“jonny”] = []
```

> Hash tables have no ordering, so it doesn’t matter what order you add key/value pairs in

Anuj, Peggy, Thom, and Jonny don’t have any neighbors. They have arrows pointing to them, but no arrows from them to someone else. This is called a directed graph—the relationship is only one way. So Anuj is Bob’s neighbor, but Bob isn’t Anuj’s neighbor. An undirected graph doesn’t have any arrows, and both nodes are each other’s neighbors.

Here’s how the implementation will work in pseudocode:

1. Keep a queue containing the people to check.
2. Pop a person of the queue.
3. Check if this person is mango seller.
    - (3a) Yes? You're done!
    - (3b) No? Add all their friends to the queue.
4. Repeat.
5. If the queue is empty there are no mango sellers in your network.

```py
from collections import deque
def search(name):
    search_queue = deque()      # Creates a new queue
    search_queue += graph[name] # Adds all of your neighbors to the search queue
    searched = [] # This array is how you keep track of which people you’ve searched before.

    while search_queue: # While the queue isn’t empty ...
        person = search_queue.popleft() # ... grabs the first person off the queue
        if not person in searched: # Only search this person if you haven’t already searched them.
            if person_is_seller(person):    # Checks whether the person is a mango seller
                print person + " is a mango seller!"  # Yes, they’re a mango seller.
                return True
            else
                search_queue += graph[person] # No, they aren’t. Add all of this person’s friends to the search queue.
                searched.append(person) # Marks this person as searched
        return False #If you reached here, no one in the queue was a mango seller.

search("you")
```

> Remember, graph[“you”] will give you a list of all your neighbors, like [“alice”, “bob”, “claire”]. Those all get added to the search queue. Once you search a person, you should mark that person as searched and not search them again. So, before checking a person, it’s important to make sure they haven’t been checked already. To do that, you’ll keep a list of people you’ve already checked. If you don’t do this, you could also end up in an infinite loop.

The algorithm will keep going until either

-   A mango seller is found, or
-   The queue becomes empty, in which case there is no mango seller.

#### Running time

If you search your entire network for a mango seller, that means you’ll follow each edge (remember, an edge is the arrow or connection from one person to another). So the running time is at least `O(number of edges)`. You also keep a queue of every person to search. Adding one person to the queue takes constant time: `O(1)`. Doing this for every person will take `O(number of people)` total. Breadth-first search takes `O(number of people + number of edges)`, and it’s more commonly written as `O(V+E)` (V for number of vertices, E for number of edges).

### Highlights

-   Breadth-first search tells you if there’s a path from A to B.
-   If there’s a path, breadth-first search will find the shortest path.
-   If you have a problem like “find the shortest X,” try modeling your problem as a graph, and use breadth-first search to solve.
-   A directed graph has arrows, and the relationship follows the direction of the arrow (rama -> adit means “rama owes adit money”).
-   Undirected graphs don’t have arrows, and the relationship goes both ways (ross - rachel means “ross dated rachel and rachel dated ross”).
-   Queues are FIFO (First In, First Out).
-   Stacks are LIFO (Last In, First Out).
-   You need to check people in the order they were added to the search list, so the search list needs to be a queue. Otherwise, you won’t get the shortest path.
-   Once you check someone, make sure you don’t check them again. Otherwise, you might end up in an infinite loop.

### Dijkstra’s algorithm

While breadth-first algorithms gives you answer when you want to find shortest path, that's not necessarily the fastest path. You can search for the fastest one with a different algorithm called `Dijkstra’s algorithm`.

There are four steps to Dijkstra’s algorithm:

1. Find the “cheapest” node. This is the node you can get to in the least amount of time.
2. Check whether there’s a cheaper path to the neighbors of this node. If so, update their costs.
3. Repeat until you’ve done this for every node in the graph.
4. Calculate the final path.

When you work with Dijkstra’s algorithm, each edge in the graph has a number associated with it. These are called weights. A graph with weights is called a **weighted graph**. A graph without weights is called an **unweighted graph**.

To calculate the shortest path in an unweighted graph, use breadth-first search. To calculate the shortest path in a weighted graph, use Dijkstra’s algorithm. Graphs can also have cycles. As an undirected graph means that both nodes point to each other. That’s a cycle!

With an undirected graph, each edge adds another cycle. Dijkstra’s algorithm only works with directed acyclic graphs, called DAGs for short.

**You can’t use Dijkstra’s algorithm if you have negative-weight edges. Negative-weight edges break the algorithm.**

```py
node = find_lowest_cost_node(costs)    # Find the lowest-cost node that you haven’t processed yet.
while node is not None:                # If you’ve processed all the nodes, this while loop is done.
    cost = costs[node]
    neighbors = graph[node]
    for n in neighbors.keys():         # Go through all the neighbors of this node.
        new_cost = cost + neighbors[n] # If it’s cheaper to get to this neighbor
        if costs[n] > new_cost:        # by going through this node ...
            costs[n] = new_cost        # ... update the cost for this node.
            parents[n] = node          # This node becomes the new parent for this neighbor.
    processed.append(node)             # Mark the node as processed.
    node = find_lowest_cost_node(costs) # Find the next node to process, and loop.
```

```py
def find_lowest_cost_node(costs):
    lowest_cost = float(“inf”)
    lowest_cost_node = None

    for node in costs: # Go through each node.
        cost = costs[node]
        if cost < lowest_cost and node not in processed: # If it's the lowest cost node so far and hasn't been processed yet
            lowest_cost = cost # ... set it as the new lowest-cost node.
            lowest_cost_node = node
    return lowest_cost_node
```

#### Recap

-   Breadth-first search is used to calculate the shortest path for an unweighted graph.
-   Dijkstra’s algorithm is used to calculate the shortest path for a weighted graph.
-   Dijkstra’s algorithm works when all the weights are positive.
-   If you have negative weights, use the Bellman-Ford algorithm.

## Greedy algorithms

A greedy algorithm is simple: at each step, pick the optimal move. In technical terms: at each step you pick the locally optimal solution, and in the end you’re left with the globally optimal solution.

-   Greedy algorithms optimize locally, hoping to end up with a global optimum.
-   NP-complete problems have no known fast solution.
-   If you have an NP-complete problem, your best bet is to use an approximation algorithm.
-   Greedy algorithms are easy to write and fast to run, so they make good approximation algorithms.

## Dynamic programming

Dynamic programming is a technique where you solve a hard problem by breaking it up into subproblems and solving those subproblems first.

Dynamic programming is useful when you’re trying to optimize something given a constraint. In the knapsack problem, you had to maximize the value of the goods you stole, constrained by the size of the knapsack.

You can use dynamic programming when the problem can be broken into discrete subproblems, and they don’t depend on each other.

Some general tips follow:

-   Every dynamic-programming solution involves a grid.
-   The values in the cells are usually what you’re trying to optimize. For the knapsack problem, the values were the value of the goods.
-   Each cell is a subproblem, so think about how you can divide your problem into subproblems. That will help you figure out what the axes are.

```md
Computer scientists sometimes joke about using the Feynman algorithm. The Feynman algorithm is named after the famous physicist Richard Feynman, and it works like this:

1. Write down the problem.
2. Think real hard.
3. Write down the solution.
```

Dynamic programming is commonly used in:

-   Biologists use the longest common subsequence to find similarities in DNA strands. They can use this to tell how similar two animals or two diseases are. The longest common subsequence is being used to find a cure for multiple sclerosis.
-   Have you ever used diff (like git diff)? Diff tells you the differences between two files, and it uses dynamic programming to do so.
-   Levenshtein distance measures how similar two strings are, and it uses dynamic programming. Levenshtein distance is used for everything from spell-check to figuring out whether a user is uploading copyrighted data.
-   Have you ever used an app that does word wrap, like Microsoft Word? How does it figure out where to wrap so that the line length stays consistent? Dynamic programming!

### Recap

-   Dynamic programming is useful when you’re trying to optimize something given a constraint.
-   You can use dynamic programming when the problem can be broken into discrete subproblems.
-   Every dynamic-programming solution involves a grid.
-   The values in the cells are usually what you’re trying to optimize.
-   Each cell is a subproblem, so think about how you can divide your problem into subproblems.
-   There’s no single formula for calculating a dynamic-programming solution.

## k-nearest neighbors

There are the two basic things you’ll do with KNN—classification and regression:

-   Classification = categorization into a group
-   Regression = predicting a response (like a number)

### Introduction to machine learning

KNN is a really useful algorithm, and it’s your introduction to the magical world of machine learning! Machine learning is all about making your computer more intelligent. You already saw one example of machine learning: building a recommendations system. Let’s look at some other examples.

#### OCR

OCR stands for optical character recognition. It means you can take a photo of a page of text, and your computer will automatically read the text for you. Google uses OCR to digitize books.

### Notes

-   KNN is used for classification and regression and involves looking at the k-nearest neighbors.
-   Classification = categorization into a group.
-   Regression = predicting a response (like a number).
-   Feature extraction means converting an item (like a fruit or a user) into a list of numbers that can be compared.
-   Picking good features is an important part of a successful KNN algorithm.

## Binary tree

Searching for an element in a binary search tree takes O(log n) time on average and O(n) time in the worst case. Searching a sorted array takes O(log n) time in the worst case, so you might think a sorted array is better. But a binary search tree is a lot faster for insertions and deletions on average.

Binary search trees have some downsides too: for one thing, you don’t get random access. You can’t say, “Give me the fifth element of this tree.” Those performance times are also on average and rely on the tree being balanced.

There are special binary search trees that balance themselves. One example is the red-black tree. So when are binary search trees used? B-trees, a special type of binary tree, are commonly used to store data in databases. If you’re interested in databases or more-advanced data structures, check these out:

-   B-trees
-   Red-black trees
-   Heaps
-   Splay trees

## The Fourier transform

The Fourier transform is one of those rare algorithms: brilliant, elegant, and with a million use cases. The best analogy for the Fourier transform comes from Better Explained (a great website that explains math simply): given a smoothie, the Fourier transform will tell you the ingredients in the smoothie. Or, to put it another way, given a song, the transform can separate it into individual frequencies.

It turns out that this simple idea has a lot of use cases. For example, if you can separate a song into frequencies, you can boost the ones you care about. You could boost the bass and hide the treble. The Fourier transform is great for processing signals. You can also use it to compress music. First you break an audio file down into its ingredient notes. The Fourier transform tells you exactly how much each note contributes to the overall song. So you can just get rid of the notes that aren’t important. That’s how the MP3 format works!

Music isn’t the only type of digital signal. The JPG format is another compressed format, and it works the same way. People use the Fourier transform to try to predict upcoming earthquakes and analyze DNA.

You can use it to build an app like Shazam, which guesses what song is playing. The Fourier transform has a lot of uses. Chances are high that you’ll run into it!

## Parallel algorithms

To make your algorithms faster, you need to change them to run in parallel across all the cores at once!

Here’s a simple example. The best you can do with a sorting algorithm is roughly O(n log n). It’s well known that you can’t sort an array in O(n) time—unless you use a parallel algorithm! There’s a parallel version of quicksort that will sort an array in O(n) time.

Parallel algorithms are hard to design. And it’s also hard to make sure they work correctly and to figure out what type of speed boost you’ll see. One thing is for sure—the time gains aren’t linear. So if you have two cores in your laptop instead of one, that almost never means your algorithm will magically run twice as fast. There are a couple of reasons for this:

-   Overhead of managing the parallelism — Suppose you have to sort an array of 1,000 items. How do you divide this task among the two cores? Do you give each core 500 items to sort and then merge the two sorted arrays into one big sorted array? Merging the two arrays takes time.
-   Load balancing — Suppose you have 10 tasks to do, so you give each core 5 tasks. But core A gets all the easy tasks, so it’s done in 10 seconds, whereas core B gets all the hard tasks, so it takes a minute. That means core A was sitting idle for 50 seconds while core B was doing all the work! How do you distribute the work evenly so both cores are working equally hard?

### MapReduce

There’s a special type of parallel algorithm that is becoming increasingly popular: the distributed algorithm. It’s fine to run a parallel algorithm on your laptop if you need two to four cores, but what if you need hundreds of cores? Then you can write your algorithm to run across multiple machines. The MapReduce algorithm is a popular distributed algorithm. You can use it through the popular open source tool Apache Hadoop.

#### Why are distributed algorithms useful

Suppose you have a table with billions or trillions of rows, and you want to run a complicated SQL query on it. You can’t run it on MySQL, because it struggles after a few billion rows. Use MapReduce through Hadoop! Or suppose you have to process a long list of jobs. Each job takes 10 seconds to process, and you need to process 1 million jobs like this. If you do this on one machine, it will take you months! If you could run it across 100 machines, you might be done in a few days. Distributed algorithms are great when you have a lot of work to do and want to speed up the time required to do it. MapReduce in particular is built up from two simple ideas: the map function and the reduce function.

## Bloom filters and HyperLogLog

Suppose you’re running Reddit. When someone posts a link, you want to see if it’s been posted before. Stories that haven’t been posted before are considered more valuable. So you need to figure out whether this link has been posted before.

Or suppose you’re Google, and you’re crawling web pages. You only want to crawl a web page if you haven’t crawled it already. So you need to figure out whether this page has been crawled before.

Or suppose you’re running bit.ly, which is a URL shortener. You don’t want to redirect users to malicious websites. You have a set of URLs that are considered malicious. Now you need to figure out whether you’re redirecting the user to a URL in that set.

All of these examples have the same problem. You have a very large set.

Now you have a new item, and you want to see whether it belongs in that set. You could do this quickly with a hash. For example, suppose Google has a big hash in which the keys are all the pages it has crawled. You want to see whether you’ve already crawled adit.io for example. Look it up in the hash. adit.io is a key in the hash, so you’ve already crawled it. The average lookup time for hash tables is O(1). adit.io is in the hash, so you’ve already crawled it. You found that out in constant time. Pretty good! Except that this hash needs to be huge. Google indexes trillions of web pages. If this hash has all the URLs that Google has indexed, it will take up a lot of space. Reddit and bit.ly have the same space problem. When you have so much data, you need to get creative!

### Bloom filters

Bloom filters offer a solution. Bloom filters are probabilistic data structures. They give you an answer that could be wrong but is probably correct. Instead of a hash, you can ask your bloom filter if you’ve crawled this URL before. A hash table would give you an accurate answer. A bloom filter will give you an answer that’s probably correct:

-   False positives are possible. Google might say, “You’ve already crawled this site,” even though you haven’t.
-   False negatives aren’t possible. If the bloom filter says, “You haven’t crawled this site,” then you definitely haven’t crawled this site.

    Bloom filters are great because they take up very little space. A hash table would have to store every URL crawled by Google, but a bloom filter doesn’t have to do that. They’re great when you don’t need an exact answer, as in all of these examples. It’s okay for bit.ly to say“We think this site might be malicious, so be extra careful.”

### HyperLogLog

Along the same lines is another algorithm called HyperLogLog. Suppose Google wants to count the number of unique searches performed by its users. Or suppose Amazon wants to count the number of unique items that users looked at today. Answering these questions takes a lot of space! With Google, you’d have to keep a log of all the unique searches. When a user searches for something, you have to see whether it’s already in the log. If not, you have to add it to the log. Even for a single day, this log would be massive! HyperLogLog approximates the number of unique elements in a set. Just like bloom filters, it won’t give you an exact answer, but it comes very close and uses only a fraction of the memory a task like this would otherwise take. If you have a lot of data and are satisfied with approximate answers, check out probabilistic algorithms!

## Linear programming

Linear programming is used to maximize something given some constraints. For example, suppose your company makes two products, shirts and totes. Shirts need 1 meter of fabric and 5 buttons. Totes need 2 meters of fabric and 2 buttons. You have 11 meters of fabric and 20 buttons. You make $2 per shirt and $3 per tote. How many shirts and totes should you make to maximize your profit? Here you’re trying to maximize profit, and you’re constrained by the amount of materials you have.

All the graph algorithms can be done through linear programming instead. Linear programming is a much more general framework, and graph problems are a subset of that. Linear programming uses the Simplex algorithm.
