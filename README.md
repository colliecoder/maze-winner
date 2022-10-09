[//]: <> (add visuals and code snippets)
# maze-winner

Maze winner is a maze generation and maze solver visualization of popular search algorithms such as depth first search and aldous broder. 

# Overview

Maze generation is a classic application of search algorithms just as much as solving mazes is. Maze generation works by manipulating a grid that uses cells and walls. Many maze generating techniques work by drawing a path through a grid and then removing the walls the line passes through. Many maze solving techniques also work by drawing a path through a grid, but now with the restraints of solid walls that cannot be passed through. 

The goal of the maze-winner project is to visualize the paths search algorithms traverse to create the maze or to solve the maze. By visualizing the way that node-traversing search algorithms generate mazes and solve mazes it's possible to understand them better. The purpose of this project is thus educational.

In order to work this project uses...

In order to work this project uses...

# Process

## Technologies Used

### HTML Canvas

HTML Canvas is an element in HTML to enable drawing within a set area. Maze winner uses HTML canvas to draw the maze walls. Canvas allows the programmer to designate a square or rectangular space within an HTML document that can be "drawn on". In maze-winner you can find this line of code in the index.html creating the canvas element: 

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

The reason maze-winner is written in JavaScript is because our goal is to create a simple visualization tool that can be hosted on the World Wide Web. JavaScript is also in line with maze-winners open-source ideology as it is widely known and commonly used.

And as maze-winner is a hacktoberfest 2022 project, JavaScript was an obvious choice because it is a highly desirable skill for new programmers to practice!

## Approach Taken

The maze-winner project takes an object-oriented and collaborative open source approach. By having an object-orientated design, the maze-winner project is easily adaptable to different generation and solving algorithms. Abstraction, as part of an object-oriented design ensures that the program is organized by concept. By having an open sourch approach to development maze-winner is collaboratively built. As such maze-winner is distributed under an open-source MIT license and freely available to the public. The project is designed collaboratively and the contributors are listed below. 

For anyone interested in becoming a maintainer we are currently accepting applicants. 

# Understanding the Maze
## Core Concepts
### search algorithms
## Algorithms

### Depth First Search

Depth-first search is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root node (selecting some arbitrary node as the root node in the case of a graph) and explores as far as possible along each branch before backtracking. So the basic idea is to start from the root or any arbitrary node and mark the node and move to the adjacent unmarked node and continue this loop until there is no unmarked adjacent node. Then backtrack and check for other unmarked nodes and traverse them. Finally, print the nodes in the path. DFS doesn’t visit nodes on a level-by-level basis. Instead, it keeps going deep as much as possible. Once the algorithm reaches an end, it tries to go deeper from other adjacent of the last visited node

#### Output of DFS

The result of a depth-first search of a graph can be conveniently described in terms of a spanning tree of the vertices reached during the search. Based on this spanning tree, the edges of the original graph can be divided into three classes: forward edges, which point from a node of the tree to one of its descendants, back edges, which point from a node to one of its ancestors, and cross edges, which do neither. Sometimes tree edges, edges which belong to the spanning tree itself, are classified separately from forward edges. If the original graph is undirected then all of its edges are tree edges or back edges.

#### Pseudocode

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

### Breadth First Search
### Kruskal 
### Prim
### AldousBroder

# The People Behind the Project

## Maintainers

[Kiersten](https://github.com/colliecoder)

## Contributors

## Open-Source



Accepting contributions to hacktoberfest 2022 :jack_o_lantern: :ghost: :jack_o_lantern: !
