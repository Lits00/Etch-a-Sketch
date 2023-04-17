// Grid section 
const defaultGrid = 16;
const gridContainer = document.querySelector('.grid-container');
const rangeInput = document.getElementById('rangeInput');
const randomColorBtn = document.querySelector('.randomColorBtn');
const clearBtn = document.querySelector('.clearBtn');

// creates the grid
function createDiv(num){
    reset();
    for(i = 0; i < (num*num); i++){
        const box = document.createElement('div');
        box.classList.add('gridDiv');
        box.addEventListener('mouseover', hoverEffect);
        gridContainer.appendChild(box);
        gridContainer.style.setProperty('--grid-size', num);
        gridContainer.style.setProperty('--grid-columns', `repeat(${num}, 1fr)`);
        gridContainer.style.setProperty('--grid-rows', `repeat(${num}, 1fr)`);
    }
}

// responsible for removing divs
function reset(){
    const boxes = document.querySelectorAll('.gridDiv');
    boxes.forEach( box => box.remove());
}

// creates the number of divs depending on the input range
rangeInput.addEventListener('input', function() {
    const gridSize = `${this.value}x${this.value}`
    document.querySelector('.displayValue').value = `Grid Size: ${gridSize}`;
    createDiv(this.value);
})

// changes the color of the div on hover
function hoverEffect(event) {
    if (randomColorBtn.classList.contains('active')) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
        event.target.style.backgroundColor = "black";
    }
}

// toggles to black or random color hover effect
randomColorBtn.addEventListener('click', function() {
    const isActive = randomColorBtn.classList.toggle('active');
    if (isActive) {
        randomColorBtn.textContent = 'Black Color';
    } else {
        randomColorBtn.textContent = 'Random Color';
    }
});

// clears the grid
clearBtn.addEventListener('click', function() {
    const boxes = document.querySelectorAll('.gridDiv');
    boxes.forEach( box => box.style.backgroundColor = "white");
})

createDiv(defaultGrid);

// Grid section