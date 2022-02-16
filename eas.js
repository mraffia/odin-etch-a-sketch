let sides = 16;

const container = document.querySelector('#container');
const grid = container.children;

function generateGrid(sides) {
    for (let i = 0; i < (sides * sides); i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        let squarePadding = (500 / sides) / 2;
        square.style.cssText = `padding : ${squarePadding}px`;
        
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('active');
        });
    
        container.appendChild(square);
    }
}

generateGrid(sides);

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    
    // Source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let newSides = prompt("Enter number of squares per side for the new grid (maximum 100, default is 16)", "16");
    
    if (newSides != null) {
        if (parseInt(newSides) == NaN) {
            newSides = 16;
        } else {
            newSides = parseInt(newSides);
        }
    } else {
        newSides = 16;
    }

    generateGrid(newSides);
});