# Dynamic Programming

We know what a _divide-and-conquer_ algorithm is. We break the problem
into subproblems and solve those. Then we combine the answers from the
subproblems.

The subproblems sometimes _overlap_. In that case, if you solve a
subproblem, you may wish to save its solution so that you can reuse it
if you encounter this subproblem again. This is called _memoization_.

Divide-and-conquer is not the only way to formulate subproblems. The
Floyd-Warshall algorithm is a good example. Here we start with a table
of shortest paths between pairs of vertices, with the restriction that
we pass through no intermediate vertex. We then step-by-step relax
this constraint, allowing ourself to pass through more vertices.

This is not a divide-and-conquer approach. We didn't try to solve the
problem with half the vertices or half the edges. Breaking up a
problem like that would be _top-down_.

Instead, we started from the _bottom_: problems with no intermediate
vertices. We then moved _up_, putting together these solutions to
solve more relaxed problems. This is called a _bottom-up approach_.

An advantage to this bottom-up approach is that memoization can be
wasteful in storing unnecessary solutions. In Floyd-Warshall we use
exactly `O(n**2)` memory, which is optimal.

The _dynamic_ part of the name might be thought to come from starting
with solutions to subproblems, and then, over _time_, producing new
solutions to new problems, growing toward your answer. It's a tortured
name (Bellman admits this), but there is some logic to it.
