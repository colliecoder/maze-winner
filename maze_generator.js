const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function blankCanvas() {
	ctx.fillStyle = 'skyblue';
	ctx.fillRect(0, 0, 500, 500);
}

function shuffle(array) {
	for(let i = array.length-1; i > 0; --i) {
		let n = Math.floor(Math.random() * i);
		[array[i], array[n]] = [array[n], array[i]];
	}
	return array;
}

blankCanvas();

class DSU {
	constructor(n) {
		this.parent = new Array(n);
		for(let i = 0; i < n; ++i) {
			this.parent[i] = new Array(n);
		}

		for(let i = 0; i < n; ++i) {
			for(let j = 0; j < n; ++j) {
				this.parent[i][j] = [i, j];
			}
		}
	}

	getParent(x, y) {
		if(this.parent[x][y][0] === x && this.parent[x][y][1] === y) {
			return [x, y];
		}
		return this.parent[x][y] = this.getParent(...this.parent[x][y]);
	}

	unite(x1, y1, x2, y2) {
		[x1, y1] = this.getParent(x1, y1);
		[x2, y2] = this.getParent(x2, y2);

		if(x1 !== x2 || y1 !== y2) {
			this.parent[x1][y1] = [x2, y2];
		}
	}
}

class Maze {
    constructor(size) {
    	this.size = size;
        this.cells = [];
		for (let y = 0; y < this.size; ++y) {
			this.cells.push([])
			for (let x = 0; x < this.size; ++x) {
                this.cells[this.cells.length - 1].push(new Cell(x, y));
            }
        }

		for (let y = 0; y < this.size; ++y) {
			for (let x = 0; x < this.size; ++x) {
                this.cells[y][x].neighbours = {
					'north': y==0 ? null : this.cells[y-1][x],
					'south': y==this.cells.length-1 ? null : this.cells[y+1][x],
					'east': x==this.cells.length-1 ? null : this.cells[y][x+1],
					'west': x==0 ? null : this.cells[y][x-1],
				}
            }
        }
    }

	draw() {
		blankCanvas();
		for (let y = 0; y < this.size; ++y) {
			for (let x = 0; x < this.size; ++x) {
				this.cells[y][x].draw();
			}
		}
	}

	at(x, y) {
		return this.cells[x][y];
	}

	generateDepthFirst(cell=this.at(0,0), visited=[]) {
		// mark current cell as visited.
		visited.push(cell);

		// choose from neighbours randomly.
		let directions = shuffle(['north', 'south', 'east', 'west']);
		for(let i = 0; i < 4; ++i) {
			let neighbour = cell.neighbours[directions[i]];

			// neighbour exists and has not been visited?
			if(neighbour != null && !visited.includes(neighbour)) {
				// then tunnel and recursively call ourselves.
				cell.tunnelTo(neighbour);
				this.generateDepthFirst(neighbour, visited);
			}
		}
	}

	generateKrushkal() {
		/*
		Create a list of all walls, and create a set for each cell, each containing just that one cell.
		For each wall, in some random order:
			If the cells divided by this wall belong to distinct sets:
				Remove the current wall.
				Join the sets of the formerly divided cells.
		*/

		// create a list of all walls.
		let walls = [];
		for(let y = 0; y < this.size; ++y) {
			for(let x = 0; x < this.size; ++x) {
				let cell = this.at(x, y);
				if(cell.neighbours.north != null) {
					walls.push([cell, cell.neighbours.north]);
				}

				if(cell.neighbours.east != null) {
					walls.push([cell, cell.neighbours.east]);
				}

				if(cell.neighbours.south != null) {
					walls.push([cell, cell.neighbours.south]);
				}

				if(cell.neighbours.west != null) {
					walls.push([cell, cell.neighbours.west]);
				}
			}
		}

		// create a set for each cell.
		let dsu = new DSU(this.size);
		
		// for each wall, in some random order:
		walls = shuffle(walls);

		for(let i = 0; i < walls.length; ++i) {
			let [cell1, cell2] = walls[i];

			// if the cells divided by this wall belong to distinct sets:
			const [x1, y1] = dsu.getParent(cell1.x, cell1.y);
			const [x2, y2] = dsu.getParent(cell2.x, cell2.y);

			if(x1 !== x2 || y1 !== y2) {
				// remove the current wall.
				cell1.tunnelTo(cell2);

				// join the sets of the formerly divided cells.
				dsu.unite(cell1.x, cell1.y, cell2.x, cell2.y);
			}
		}
	}

	generatePrim() {
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

	generateAldousBroder() {
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
}

class Cell {
    constructor(x, y) {
		this.x = x;
		this.y = y;
		this.neighbours = {};
        this.top = this.bottom = this.right = this.left = true;
    }

	tunnelTo(cell) {
		try {
			if(this.neighbours.north == cell) {
				this.top = false;
				this.neighbours.north.bottom = false;
			}

			if(this.neighbours.south == cell) {
				this.bottom = false;
				this.neighbours.south.top = false;
			}

			if(this.neighbours.west == cell) {
				this.left = false;
				this.neighbours.west.right = false;
			}

			if(this.neighbours.east == cell) {
				this.right = false;
				this.neighbours.east.left = false;
			}
		} catch(e) {
		}
	}

    draw() {
        ctx.lineWidth = 3;
        ctx.strokeStyle = "white";

		if(this.left) {
			ctx.moveTo(this.x*50, this.y*50);
			ctx.lineTo(this.x*50, this.y*50 + 50);
		}

		if(this.bottom) {
			ctx.moveTo(this.x*50, this.y*50 + 50);
			ctx.lineTo(this.x*50 + 50, this.y*50 + 50);
		}

		if(this.right) {
			ctx.moveTo(this.x*50 + 50, this.y*50 + 50);
			ctx.lineTo(this.x*50 + 50, this.y*50);
		}

		if(this.top) {
			ctx.moveTo(this.x*50 + 50, this.y*50);
			ctx.lineTo(this.x*50, this.y*50);
		}
		
		ctx.stroke();
    }
}

let maze = new Maze(10);
maze.generateDepthFirst();
// maze.generateKrushkal();
maze.draw();
