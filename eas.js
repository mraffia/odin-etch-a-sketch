const gridContainer = document.querySelector('#grid-container');
const grid = gridContainer.children;
const gridInfo = document.querySelector('.grid-info');
const trailInfo = document.querySelector('.trail-info');

let defaultSides = 16;

function generateGrid(sides) {
    for (let i = 0; i < (sides * sides); i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        let squarePadding = (400 / sides) / 2;
        square.style.cssText = `padding: ${squarePadding}px`;
        
        square.addEventListener('mouseover', (e) => {
            e.target.style.cssText += `background-color: black;`;
        });

        gridInfo.textContent = `Grid size: ${sides}x${sides} square blocks`;   
        trailInfo.textContent = `Trail color: Black`;

        gridContainer.appendChild(square);
    }
}

generateGrid(defaultSides);

const black = document.querySelector('#black');
black.addEventListener('click', () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseover', (e) => {
            e.target.style.cssText += `background-color: black`;
        });
    }
    trailInfo.textContent = `Trail color: Black`;
});

const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseover', (e) => {
            // Source: https://css-tricks.com/snippets/javascript/random-hex-color/
            // Random color generator in hex form
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

            e.target.style.cssText += `background-color: ${randomColor}`;
        });
    }
    trailInfo.textContent = `Trail color: Rainbow`;
});

const white = document.querySelector('#white');
white.addEventListener('click', () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener('mouseover', (e) => {
            e.target.style.cssText += `background-color: white`;
        });
    }
    trailInfo.textContent = `Trail color: White`;
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    
    // Source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    // Remove all child elements of a DOM node
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
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