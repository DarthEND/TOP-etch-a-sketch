const gridTemplate = document.querySelector('.grid-template');
const colorful = document.getElementById('colorful');
let newSize = document.getElementById('slider');
let btn = document.getElementById("btn");

window.addEventListener('load', setDefaultGrid);

function setDefaultGrid(){
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size){
  gridTemplate.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
function fillGrid(size){
  for(let i = 0; i < size * size; i++){
    const gridElement = document.createElement('div');
    gridElement.classList = "grid-element";
    gridElement.addEventListener('mouseover', changeColor);
    gridTemplate.appendChild(gridElement);
  }
}

function changeColor(e){
  if(colorful.checked){
    const colorR = Math.floor(Math.random() * 256);
    const colorG = Math.floor(Math.random() * 256);
    const colorB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
  }else{
    e.target.style.backgroundColor = document.getElementById('pickColor').value;
  }
}

newSize.oninput = function tableSize(){
  let newSize = this.value;

  if(newSize !== null){
    newSize = parseInt(newSize);
    if(newSize < 1 || newSize > 64 || Number.isNaN(newSize)){
      tableSize();
    }else{
      clearTable();
      setGridSize(newSize);
      fillGrid(newSize);
    }
  }
}

function clearTable(){
  const gridElement = document.querySelectorAll('.grid-element');
  for(let i = 0; i < gridElement.length; i++){
    gridElement[i].style.backgroundColor = '';
  }
}