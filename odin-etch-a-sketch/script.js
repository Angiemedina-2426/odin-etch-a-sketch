const slider=document.querySelector("#gridSlider");
const input=document.querySelector("#gridSize");
const display=document.querySelector("#gridValue");
const sketchContainer = document.querySelector(".sketchContainer");

function updateGridSize(value){
  slider.value= value;
  input.value = value;
  display.textContent = `${value} x ${value}`;
}

slider.addEventListener("input", ()=>{
  updateGridSize(slider.value);
  createGrid(slider.value);
});

input.addEventListener("input",()=>{
  updateGridSize(input.value);
  createGrid(input.value);
});


function createGrid(num){
sketchContainer.replaceChildren();

const numberOfGrid = num * num;
const squareSize = 100/num;

for (let i = 0; i <numberOfGrid; i++){
const newDiv = document.createElement("div");
newDiv.classList.add("newDivStyle");

newDiv.style.width = `${squareSize}%`;
newDiv.style.height = `${squareSize}%`
sketchContainer.appendChild(newDiv);
};
}

console.log(sketchContainer);