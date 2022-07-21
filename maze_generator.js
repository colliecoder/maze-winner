//the maze is stored in a 2D array
//0 represents walls, 1 represents a possible path, 2 represents end point

//blank maze initialization

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'skyblue';
ctx.fillRect(0, 0, 500, 500);

class Maze{
    constructor(size){
        this.size = size;
        this.mazeCells = [];

    }
    generateMaze() {
        for (let x = 0; x < this.size; ++x) {
            for (let y = 0; y < this.size; ++y) {
                let coordinate = new Cell(x, y);
                coordinate.drawCell(x, y);
                this.mazeCells.push(coordinate);
            }
        }
    }
    pickStart() {
        return this.mazeCells[0];
    }

}

class Cell {
    constructor(x, y){
        this.x;
        this.y;
        
        this.left;
        this.right;
        this.top;
        this.bottom;
        this.walls = {
            topWall: true,
            bottomWall: true,
            leftWall: true,
            rightWall: true
        }
    }

    drawCell(x, y) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";
        ctx.strokeRect((x * 50), (y * 50), 50, 50);
    } 
}

//common functions

function checkNeighbors(mazeSize, x, y) {
    const neighbors = [];

    let leftNeighbor = false;
    let topNeighbor = false;
    let rightNeighbor = false;
    let bottomNeighbor = false;

    if ((y - 1) < 0) {
        leftNeighbor = true;
        neighbors.push(leftNeighbor);
    }
    if((x - 1) < 0) {
        topNeighbor = true;
        neighbors.push(topNeighbor);
    }
    if ((x + 1) < mazeSize) {
        bottomNeighbor = true;
        neighbors.push(bottomNeighbor);
    }
    if ((y + 1) < mazeSize) {
        rightNeighbor = true;
        neighbors.push(rightNeighbor);
    }

    return neighbors;
}


function removeBottomWall(x, y) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "skyblue";
    
    //has to be +-2 depending on location
    ctx.beginPath();
    ctx.moveTo(((x * 50) + 2), ((y * 50) + 50));
    ctx.lineTo(((x * 50) + 48), ((y * 50) + 50));
    ctx.closePath();
    ctx.stroke();

    //change wall value of cells
}

function removeRightWall(x, y) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "skyblue";
    
    //has to be +-2 depending on location
    ctx.beginPath();
    ctx.moveTo(((x * 50) + 50), ((y * 50) + 2));
    ctx.lineTo(((x * 50) + 50), ((y * 50) + 48));
    ctx.closePath();
    ctx.stroke();

    //change wall value of cells
}

function removeLeftWall(x, y) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "skyblue";
    
    //has to be +-2 depending on location
    ctx.beginPath();
    ctx.moveTo((x * 50), ((y * 50) + 2));
    ctx.lineTo((x * 50), ((y * 50) + 48));
    ctx.closePath();
    ctx.stroke();

    //change wall value of cells
}

function removeTopWall(x, y) {
    ctx.lineWidth = 4;
    ctx.strokeStyle = "skyblue";
    
    //has to be +-2 depending on location
    ctx.beginPath();
    ctx.moveTo(((x * 50) + 2), (y * 50));
    ctx.lineTo(((x * 50) + 48), (y * 50));
    ctx.closePath();
    ctx.stroke();

    //change wall value of cells
}



//algorithms

function depthFirstSearch(maze){
    const visited = [];
    const stack = [];

    //Choose the initial cell, mark it as visited and push it to the stack
    start = maze.pickStart();
    visited.push(start);
    stack.push(start);

    //while the stack is not empty
    while (stack.length() != 0) {
        //pops a cell from the stack and makes it the current cell
        let currCell = stack.pop();
        //If the current cell has any neighbors which have not been visited
    }

    /*
    While the stack is not empty
        Pop a cell from the stack and make it a current cell
        If the current cell has any neighbours which have not been visited
            Push the current cell to the stack
            Choose one of the unvisited neighbours
            Remove the wall between the current cell and the chosen cell
            Mark the chosen cell as visited and push it to the stack
    */
}

function kruskal() {
    /*
    Create a list of all walls, and create a set for each cell, each containing just that one cell.
    For each wall, in some random order:
        If the cells divided by this wall belong to distinct sets:
            Remove the current wall.
            Join the sets of the formerly divided cells.
    */
}

function prim() {
    /*
    Start with a grid full of walls.
    Pick a cell, mark it as part of the maze. Add the walls of the cell to the wall list.
    While there are walls in the list:
        Pick a random wall from the list. If only one of the cells that the wall divides is visited, then:
            Make the wall a passage and mark the unvisited cell as part of the maze.
            Add the neighboring walls of the cell to the wall list.
        Remove the wall from the list.
*/
}

function aldousBroder() {
    /*
    Pick a random cell as the current cell and mark it as visited.
    While there are unvisited cells:
        Pick a random neighbour.
        If the chosen neighbour has not been visited:
            Remove the wall between the current cell and the chosen neighbour.
            Mark the chosen neighbour as visited.
        Make the chosen neighbour the current cell.
    */
}


//body
let maze = new Maze(10);
maze.generateMaze();
depthFirstSearch(maze);

console.log("x = " + maze.mazeCells[0].x);