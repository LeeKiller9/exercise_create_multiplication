let table = document.getElementById('myTable')
let i;
let j;

function showMultiTable() {
    for (i = 9; i >= 1; i--) {
        let row = table.insertRow(0);
        for (j = 0; j <= 7; j++) {
            let cell = row.insertCell(j);
            let dataCell = i * (j + 2);
            cell.innerHTML = (j + 2) + " x " + i + " = " + dataCell;
        }
    }
    document.getElementById('showTable').disabled = 'disabled';
}