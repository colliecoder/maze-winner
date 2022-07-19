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
        this.arrayTBD = [];

    }
    generateMaze() {
        for (let x = 0; x < this.size; ++x) {
            for (let y = 0; y < this.size; ++y) {
                let coordinate = new Cell(x, y);
                coordinate.drawCell(x, y);
                //this.arrayTBD.push(coordinate);
            }
        }
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
        ctx.lineWidth = 10;
        ctx.strokeStyle = "yellow";
        ctx.strokeRect((x * 50), (y * 50), 50, 50);
    }
}

//maze
//cells
//cellwalls?



//common functions




//function pickStart() {}

//function removeWall(currCell, chosenCell) {}





//algorithms

function depthFirstSearch(){
    /*
    Choose the initial cell, mark it as visited and push it to the stack
    
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