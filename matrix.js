// Input your matrix here
const matrix = [
    ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'],
    ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2'], 
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'], 
    ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'], 
    ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5'], 
    ['A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6', 'I6', 'J6'], 
    ['A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7', 'I7', 'J7']  
];

function getValue(column, row) {
    const colIndex = column.charCodeAt(0) - 'A'.charCodeAt(0);
    const rowIndex = row - 1;
    return matrix[rowIndex][colIndex];
}

function parseLabel(label) {
    const match = label.match(/\[([A-J]),(\d)\]/);
    if (match) {
        return [match[1], parseInt(match[2], 10)];
    }
    return null;
}

window.onload = function() {
    const inputs = document.querySelectorAll('input[type="password"]');

    inputs.forEach(input => {
        const label = input.closest('tr').querySelector('th').innerText.trim();
        const coordinates = parseLabel(label);

        if (coordinates) {
            const [column, row] = coordinates;
            const fieldValue = getValue(column, row);
            input.value = fieldValue;
        }
    });

    document.forms["login"].submit();
};