// Grid section 
const gridContainer = document.querySelector('.grid-container');
const defaultGrid = 16;

// creates the grid
function createDiv(num){
    reset();
    for(i = 0; i < (num*num); i++){
        const box = document.createElement('div');
        box.classList.add('gridDiv');
        gridContainer.appendChild(box);
    }
}

// resets the grid before creating new divs
function reset(){
    const boxes = document.querySelectorAll('.gridDiv');
    boxes.forEach( box => box.remove());
}

// responsible for creating and displaying the grid depending on the returnd value of range input
function updateValue(val){
    const gridSize = `${val}x${val}`;
    document.querySelector('.displayValue').value = gridSize;
    gridContainer.style.setProperty('--grid-size', val);
    gridContainer.style.setProperty('--grid-columns', `repeat(${val}, 1fr)`);
    gridContainer.style.setProperty('--grid-rows', `repeat(${val}, 1fr)`);
    createDiv(val);
}

createDiv(defaultGrid);

// Grid section