[//]: <> (add visuals and code snippets)
#  Maze Generator for Visualizing Search Algorithms

Maze Generator is a maze generation visualization of popular search algorithms such as depth first search and aldous broder. 

Maze Generator is live using github pages at:    <br>
[Click Me!](https://colliecoder.github.io/maze-winner/)

# Overview

Maze generation is a classic application of search algorithms just as much as solving mazes is. Maze generation works by manipulating a grid that uses cells and walls. Many maze generating techniques work by drawing a path through a grid and then removing the walls the line passes through. Many maze solving techniques also work by drawing a path through a grid, but now with the restraints of solid walls that cannot be passed through. 

The goal of the Maze Generator project is to visualize the paths different search algorithms traverse to create the maze. By visualizing the way that node-traversing search algorithms generate mazes it's possible to understand them better. The purpose of this project is thus educational.

In order to work this project uses...
# Process

## Technologies Used

### HTML Canvas

HTML Canvas is an element in HTML to enable drawing within a set area. Maze Generator uses HTML canvas to draw the maze walls. Canvas allows the programmer to designate a square or rectangular space within an HTML document that can be "drawn on". In Maze Generator you can find this line of code in the index.html creating the canvas element: 

```
<canvas id = "canvas" height = "500" width = "500" ></canvas>
```

Once the element has been created the style can be changed using CSS and the canvas can be "drawn on" using javascript. 

In maze_generator.js the canvas the blank canvas is initially drawn on using the code below:

```
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function blankCanvas() {
	ctx.fillStyle = 'skyblue';
	ctx.fillRect(0, 0, 500, 500);
}
```

The top two lines connect with the canvas element created in index.html and designate the type of canvas being used as '2d'. The function blankCanvas() creates the initial drawing on the blank canvas. 

### HTML 5

HTML 5 is the standard markup language for creating webpages. It stands for Hypertext Markup Language and is version 5. At the moment of writing this documentation there is no HTML 6. 

You can learn more about HTML 5 here:

[HTML 5 W3 Schools](https://www.w3schools.com/html/)

### CSS

CSS stands for Cascading Style Sheets and is a styling language for webpages that works with HTML. 

CSS allows for neatly changing layouts, colors, fonts, text-sizes and more to make webpages look good. 

You can learn more about CSS here: 

[CSS W3 Schools](https://www.w3schools.com/css/)

### JavaScript

JavaScript is a programming language often used for web development. It uses high-level just-in-time compiling, which generally means that it loads when the user needs it. JavaScript is an excellent programming language for creating websites and is the main language used in this project. 

You can learn more about JavaScript here: 

[JavScript W3 Schools](https://www.w3schools.com/js/default.asp)

The reason maze-winner is written in JavaScript is because our goal is to create a simple visualization tool that can be hosted on the World Wide Web. JavaScript is also in line with maze-winners open-source ideology as it is widely known and commonly used.

And as maze-winner is a hacktoberfest 2022 project, JavaScript was an obvious choice because it is a highly desirable skill for new programmers to practice!

## Approach Taken

The maze-winner project takes an object-oriented and collaborative open source approach. By having an object-orientated design, the maze-winner project is easily adaptable to different generation algorithms. Abstraction, as part of an object-oriented design ensures that the program is organized by concept. By having an open sourch approach to development maze-winner is collaboratively built. As such maze-winner is distributed under an open-source MIT license and freely available to the public. The project is designed collaboratively and the contributors are listed below. 

For anyone interested in becoming a maintainer we are currently accepting applicants. 

# Understanding the Maze
## Core Concepts
### Graph Theory

In order to generate a maze it must be represented as a data structure. The most common way of doing this, and the way that Maze Winner represents the maze, involves graph theory. Graph theory is the representation of a maze as a grid with an arrangement that is predetermined. In the representation of the maze as a grid each cell is a member of the maze data set. In a maze each cell must also have walls represented and whether or not these walls are open or closed. The maze data structure must be available to both the algorithms generating the maze.

Representing the maze in graph structure allows the programmer to use a variety of algorithms for generating a maze that invoke node traversal in order to find paths from the start node to the end node. Depth First Search, Breadth First Search, Prim’s algorithm, Kruskal’s algorithm, and AldousBroder all essentially work by drawing a path through a maze by traversing the nodes representing cells. These algorithms then remove the walls of the maze along the path that has been created by their search. Even though these algorithms have different methodologies they are united in the way that they interact with the structure of the maze. This is because algorithms used to generate mazes using graph theory, typically resemble connected tree structures or connected, undirected graphs.

#### Minimum Spanning Tree

A minimum spanning tree is a subset of a graph with the same number of vertices as the graph and edges equal to the number of vertices -1. 
It also has a minimal cost for the sum of all edge weights in a spanning tree.

Given a connected and undirected graph, a spanning tree of that graph is a subgraph that is a tree and connects all the vertices together. A single graph can have many different spanning trees. A minimum spanning tree (MST) or minimum weight spanning tree for a weighted, connected, undirected graph is a spanning tree with a weight less than or equal to the weight of every other spanning tree. The weight of a spanning tree is the sum of weights given to each edge of the spanning tree.

## Algorithms

### Depth First Search

Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path. DFS doesn’t visit nodes on a level-by-level basis. Instead, it keeps going deep as much as possible. Once the algorithm reaches an end, it tries to go deeper from other adjacent of the last visited node

#### Output of DFS

The result of a depth-first search of a graph can be conveniently described in terms of a spanning tree of the vertices reached during the search. Based on this spanning tree, the edges of the original graph can be divided into three classes: forward edges, which point from a node of the tree to one of its descendants, back edges, which point from a node to one of its ancestors, and cross edges, which do neither. Sometimes tree edges, edges which belong to the spanning tree itself, are classified separately from forward edges. If the original graph is undirected then all of its edges are tree edges or back edges.

#### Pseudocode

Input: Output: A recursive implementation of DFS:

```
procedure DFS(G, v) is
label v as discovered
for all directed edges from v to w that are in G.adjacentEdges(v) do
if vertex w is not labeled as discovered then
recursively call DFS(G, w)
```

A non-recursive implementation of DFS with worst-case space complexity {\displaystyle O(|E|)}O(|E|), with the possibility of duplicate vertices on the stack:

```
procedure DFS_iterative(G, v) is
let S be a stack
S.push(v)
while S is not empty do
v = S.pop()
if v is not labeled as discovered then
label v as discovered
for all edges from v to w in G.adjacentEdges(v) do
S.push(w)
```

### Breadth First Search

### Kruskal 

Kruskal’s algorithm is the concept that is introduced in the graph theory of discrete mathematics. It is used to
discover the shortest path between two points in a connected weighted graph. This algorithm converts a given
graph into the forest, considering each node as a separate tree. The Kruskal algorithm is used to generate a minimum spanning tree for a given graph.


In Kruskal's algorithm, we start from edges with the lowest weight and keep adding the edges until the goal is reached. The steps to implement Kruskal's algorithm are listed as follows :

- First, sort all the edges from low weight to high.

- Now, take the edge with the lowest weight and add it to the spanning tree. If the edge to be added creates a cycle, then reject the edge.

- Continue to add the edges until we reach all vertices, and a minimum spanning tree is created.

Kruskal's algorithm has many application but most noticeably it can be used to layour electrical wiring among cities and can be usd to lay down LAN connections. Kruskals algorithm can also be used to generate a minimum spanning tree. The process for doing so is as follows:

- Step 1: Sort all edges in increasing order of their edge weights.
- Step 2: Pick the smallest edge.
- Step 3: Check if the new edge creates a cycle or loop in a spanning tree.
- Step 4: If it doesn’t form the cycle, then include that edge in MST. Otherwise, discard it.
- Step 5: Repeat from step 2 until it includes |V| - 1 edges in MST.


#### Kruskal Algorithm Pseudocode
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

### AldousBroder

The AldousBroder algorithm is one of the simplest algorithms to generate a maze with. Essentially AldousBroder works by choosing a neighbour and carving a path between the current cell to the neighbouring cell. Once this is done AldousBroder adds the neighbouring cell to the visited stack and sets the neighbouring cell as the current cell.

The only caveat is that if the neighbour cell has been already visited AldousBroder won't carve a path between the two cells. Instead the AldousBroder algorithm just sets the neighbouring cell as the current cell and continues onwards.

# The People Behind the Project

## Maintainers

[Kiersten](https://github.com/colliecoder)

## Open-Source

Maze Winner is open source and distributed under an MIT license. Significant contributions were made to this repository for Hacktoberfest 2022! For more information see the LICENSE file. 
