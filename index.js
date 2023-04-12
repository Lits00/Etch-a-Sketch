// Grid section 
const gridContainer = document.querySelector('.grid-container');
const defaultGrid = 16;

// creates the grid
function createDiv(num){
    reset();
    for(i = 0; i < num; i++){
        const box = document.createElement('div');
        box.classList.add('gridDiv');
        gridContainer.appendChild(box);
    }
}

createDiv(defaultGrid);

// resets the grid before creating new divs
function reset(){
    const boxes = document.querySelectorAll('.gridDiv');
    boxes.forEach( box => box.remove());
}

// responsible for creating and displaying the grid depending on the returnd value of range input
function updateValue(val){
    document.querySelector('.displayValue').value=`${val}x${val}`;
    createDiv(val);
} 
// Grid section

