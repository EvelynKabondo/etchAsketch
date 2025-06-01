const container = document.getElementById('container');

// Initially create a 16x16 = 256 squares
for (let i = 0; i < 16 * 16; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newdiv');
    container.appendChild(newDiv);
}

const button = document.getElementById('numosquares');

button.addEventListener('click', () => {
    const dimensions = prompt('Enter the number of squares horizontally and vertically (e.g., "4x5" for 4 horizontal and 5 vertical)');

    if (!dimensions || !dimensions.includes('x')) {
        alert('Please enter valid input in the format "HxV", e.g., "4x5".');
        return;
    }

    const [numHorizontalSquares, numVerticalSquares] = dimensions.split('x').map(Number);

    if (
        isNaN(numHorizontalSquares) || numHorizontalSquares <= 0 ||
        isNaN(numVerticalSquares) || numVerticalSquares <= 0
    ) {
        alert('Please enter valid positive numbers in the format "HxV", e.g., "4x5".');
        return;
    }

    // Clear existing squares
    container.innerHTML = '';

    // Set container size to fit new layout
    const squareSize = 16; // size in px, matching .newdiv
    container.style.width = `${numHorizontalSquares * squareSize}px`;
    container.style.height = `${numVerticalSquares * squareSize}px`;

    // Create new squares
    const totalSquares = numHorizontalSquares * numVerticalSquares;
    for (let i = 0; i < totalSquares; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newdiv');
        container.appendChild(newDiv);
    }
});
