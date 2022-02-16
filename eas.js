let defaultSides = 16;

const container = document.querySelector('#container');
const grid = container.children;
const gridInfo = document.querySelector('.grid-info');

function generateGrid(sides) {
    for (let i = 0; i < (sides * sides); i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        let squarePadding = (500 / sides) / 2;
        square.style.cssText = `padding : ${squarePadding}px`;
        
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('active');
        });

        gridInfo.textContent = `Grid size: ${sides}x${sides} square blocks`;
    
        container.appendChild(square);
    }
}

generateGrid(defaultSides);

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    
    // Source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let newSides = prompt("Enter number of squares per side for the new grid (maximum 100, default is 16)", "16");
    
    if (newSides == null || isNaN(parseInt(newSides))) {
        newSides = 16;
    } else if (parseInt(newSides) > 100) {
        newSides = 100;
    } else {
        newSides = parseInt(newSides);
    }

    console.log(newSides);

    generateGrid(newSides);
});