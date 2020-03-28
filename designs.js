document.addEventListener('DOMContentLoaded', () => {
    // When the submit button's hit make the grid...
    document.querySelector('#createGrid').addEventListener('click', (evt) => {
        evt.preventDefault();
        makeGrid();
    });
});

function makeGrid() {
    // Get hold of the table
    const pixelCanvas = document.querySelector('#pixelCanvas');

    // Clear it out
    pixelCanvas.innerHTML = '';

    // Get the number of rows and columns
    const rowCount = document.querySelector('#inputHeight').value;
    const colCount = document.querySelector('#inputWidth').value;

    // Iterate over each row that is yet to exist...
    for (let row = 0; row < rowCount; row++) {

        // Each row will be represented with a table row on the table itself...
        const tableRow = document.createElement('tr');
        for (let col = 0; col < colCount; col++) {
            // Each column will be represented with a td...
            const tableCol = document.createElement('td');
        
            // Tell the cell to colour itself when clicked using the currently selected colour
            tableCol.addEventListener('click', (evt) => {
                const colour = document.querySelector('#colorPicker').value;
                evt.target.style.backgroundColor = colour;
            });
        
            // Add each column to the current row
            tableRow.appendChild(tableCol);
        }

        // Add rows and cols to table itself.
        pixelCanvas.appendChild(tableRow);
    }
}
