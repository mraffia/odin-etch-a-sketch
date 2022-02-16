let sides = 16;

const container = document.querySelector('#container');
const grid = container.children;

for (let i = 0; i < (sides * sides); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', (e) => {
        e.target.classList.add('active');
    });

    container.appendChild(square);
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    for (let i = 0; i < grid.length; i++) {
        grid[i].classList.remove('active');
    }
});