## Your One-Stop Solution to Learn Kruskal Algorithm From Scratch

Kruskal’s algorithm is the concept that is introduced in the graph theory of discrete mathematics. It is used to
discover the shortest path between two points in a connected weighted graph. This algorithm converts a given
graph into the forest, considering each node as a separate tree.

**<h2 align="center" > Introduction to Kruskal Algorithm </h2>**

As mentioned earlier, the Kruskal algorithm is used to generate a minimum spanning tree for a given graph.

## What exactly is a minimum spanning tree?

```
A minimum spanning tree is a subset of a graph with the same number of vertices as the graph and edges equal to the number of vertices -1. It also has a minimal cost for the sum of all edge weights in a spanning tree.
```

## What is a Minimum Spanning Tree?

```
Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, undirected graph is a spanning tree with a weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.
```

## How does Kruskal's algorithm work?

```
In Kruskal's algorithm, we start from edges with the lowest weight and keep adding the edges until the goal is reached. The steps to implement Kruskal's algorithm are listed as follows :

- First, sort all the edges from low weight to high.

- Now, take the edge with the lowest weight and add it to the spanning tree. If the edge to be added creates a cycle, then reject the edge.

- Continue to add the edges until we reach all vertices, and a minimum spanning tree is created.
```

## The applications of Kruskal's algorithm are

```
- Kruskal's algorithm can be used to layout electrical wiring among cities.
- It can be used to lay down LAN connections.
```

## Creating Minimum Spanning Tree Using Kruskal Algorithm

```
You will first look into the steps involved in Kruskal’s Algorithm to generate a minimum spanning tree:

- Step 1: Sort all edges in increasing order of their edge weights.
- Step 2: Pick the smallest edge.
- Step 3: Check if the new edge creates a cycle or loop in a spanning tree.
- Step 4: If it doesn’t form the cycle, then include that edge in MST. Otherwise, discard it.
- Step 5: Repeat from step 2 until it includes |V| - 1 edges in MST.
```

## Kruskal Algorithm Pseudocode
```
KRUSKAL(G):

A = ∅
For each vertex v ∈ G.V:
  MAKE-SET(v)
For each edge (u, v) ∈ G.E ordered by increasing order by weight(u, v):
  if FIND-SET(u) ≠ FIND-SET(v):
  A = A ∪ {(u, v)}
  UNION(u, v)
  return A
```
## Example of Kruskal's algorithm

<!-- <img src="https://www.researchgate.net/profile/Yael-Jacob/publication/221923505/figure/fig5/AS:305090574471176@1449750670012/An-example-of-how-the-Kruskal-algorithm-can-be-used-in-order-to-find-the-minimal-spanning.png"> -->

<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-1.png">
<h3 align="center" > Start with a weighted graph</h3>

<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-2.png">
<h3 align="center" > Choose the edge with the least weight, if there are more than 1, choose anyone</h3>
<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-3.png">
<h3 align="center" > Choose the next shortest edge and add it</h3>

<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-4.png">
<h3 align="center" > Choose the next shortest edge that doesn't create a cycle and add it</h3>
<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-5.png">
<h3 align="center" > Choose the next shortest edge that doesn't create a cycle and add it</h3>
<img src="https://cdn.programiz.com/sites/tutorial2program/files/ka-6.png">
<h3 align="center" > Repeat until you have a spanning tree </h3>
