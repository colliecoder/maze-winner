var mazeWidth = 10;
var mazeHeight = 10;

function createBlankMaze() {

    var rowIndex, colIndex;

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {

        var row = document.createElement("tr");

        for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {

            var col = document.createElement("td");
            if (rowIndex == 1 && colIndex == 1 ) {

                col.style.backgroundColor = "rgb(244,0,0)";
                col.setAttribute("type", "start");

            } else if (rowIndex == mazeHeight && colIndex == mazeWidth) {
                
                col.style.backgroundColor = "rgb(0,244,0)";
                col.setAttribute("type", "finish");

            } else {

                col.style.backgroundColor = "rgb(255,255,255)";

            }
            col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

            row.appendChild(col);

        }

        tbody.appendChild(row);

    }
    
    table.appendChild(tbody);

    document.getElementById("maze_container").appendChild(table);

}