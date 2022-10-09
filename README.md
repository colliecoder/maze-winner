# maze-winner

Maze winner is a maze generation and solving visualization of popular search algorithms such as depth first search and aldous broder.

# Overview

Maze generation is a classic application of basic search algorithms just as much as solving mazes is.

This project uses...

# Process

## Technologies Used

### HTML Canvas

### HTML 5

### CSS

### Javascript

## Approach Taken

Object-oriented.

# core concepts/algorithms

## canvas html

## search algorithms

## Depth First Search

## Breadth First Search

## Kruskal

## Prim

## AldousBroder

[//]# (add visuals and code snippets)

# The People Behind the Project

## Maintainers

[Kiersten](https://github.com/colliecoder)

## Contributors

## Open-Source

Accepting contributions to hacktoberfest 2022 :jack_o_lantern: :ghost: :jack_o_lantern: !

## Depth Search First

Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking.

So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path.

DFS doesn’t visit nodes on a level-by-level basis. Instead, it keeps going deep as much as possible. Once the algorithm reaches an end, it tries to go deeper from other adjacent of the last visited node

## Output of DFS

The result of a depth-first search of a graph can be conveniently described in terms of a spanning tree of the vertices reached during the search. Based on this spanning tree, the edges of the original graph can be divided into three classes: forward edges, which point from a node of the tree to one of its descendants, back edges, which point from a node to one of its ancestors, and cross edges, which do neither. Sometimes tree edges, edges which belong to the spanning tree itself, are classified separately from forward edges. If the original graph is undirected then all of its edges are tree edges or back edges.

## Pseudocode

Input: Output: A recursive implementation of DFS:[5]

procedure DFS(G, v) is
label v as discovered
for all directed edges from v to w that are in G.adjacentEdges(v) do
if vertex w is not labeled as discovered then
recursively call DFS(G, w)
A non-recursive implementation of DFS with worst-case space complexity {\displaystyle O(|E|)}O(|E|), with the possibility of duplicate vertices on the stack:[6]

procedure DFS_iterative(G, v) is
let S be a stack
S.push(v)
while S is not empty do
v = S.pop()
if v is not labeled as discovered then
label v as discovered
for all edges from v to w in G.adjacentEdges(v) do
S.push(w)
