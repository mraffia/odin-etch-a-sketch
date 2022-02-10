let sides = 16;

function generateGrid() {
    const container = document.querySelector('#container');

    for (let i = 0; i < (sides * sides); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.cssText = 'background: yellow; border: 1px solid red';
        container.appendChild(square);
    }
}

generateGrid();