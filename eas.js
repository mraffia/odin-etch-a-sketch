let sides = 16;

const container = document.querySelector('#container');

for (let i = 0; i < (sides * sides); i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.cssText = 'background: white; border: 1px solid red';
    
    square.addEventListener('mouseover', (e) => {
        e.target.style.background = 'green';
    });

    container.appendChild(square);
}

