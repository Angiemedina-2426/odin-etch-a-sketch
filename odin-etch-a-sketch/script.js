const slider=document.querySelector("#gridSlider");
const input=document.querySelector("#gridSize");
const display=document.querySelector("#gridValue");
const sketchContainer = document.querySelector(".sketchContainer");
const optionButtons = document.querySelectorAll("[data-mode]");
const colorPicker = document.querySelector("#colorPicker");
const clearButton = document.querySelector("#clear");


let drawingMode = "single";
optionButtons.forEach((button) =>{
 button.addEventListener("click", (event)=>{
  drawingMode = event.currentTarget.dataset.mode;
});
});



function updateGridSize(value){
  slider.value= value;
  input.value = value;
  display.textContent = `${value} x ${value}`;
}

slider.addEventListener("input", ()=>{
  const value = Number(slider.value);

  updateGridSize(value);
  createGrid(value);
});

input.addEventListener("change",()=>{
  const value = Number(input.value);

  updateGridSize(value);
  createGrid(value);
});


function createGrid(num){

num= Number(num);

if (Number.isNaN(num) || !Number.isInteger(num) || num < 1 || num >100){
  alert("Please enter an Integer between 1 and 100!");
  num = 16;
}

updateGridSize(num);
while(sketchContainer.lastChild){
  sketchContainer.removeChild(sketchContainer.lastChild);
};

const numberOfGrid = num * num;
const squareSize = 100/num;

for (let i = 0; i <numberOfGrid; i++){
const newDiv = document.createElement("div");

newDiv.style.width = `${squareSize}%`;
newDiv.style.height = `${squareSize}%`;
newDiv.dataset.darkness = 0;
newDiv.classList.add("newDivStyle");

newDiv.addEventListener("mouseenter", (event)=>{
  const grid = event.currentTarget;
  if (drawingMode === "single"){
    grid.dataset.darkness = 0;
    grid.style.backgroundColor = colorPicker.value;

  } else if (drawingMode ==="rainbow"){
    grid.dataset.darkness = 0;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    grid.style.backgroundColor =
    `rgb(${red}, ${green}, ${blue})`;

  }else if (drawingMode === "darken"){
    let darkness = Number(grid.dataset.darkness);
    if (darkness < 10) {darkness++;}
    grid.dataset.darkness = darkness;
     let opacity = darkness*0.1;
    newDiv.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  }else if(drawingMode === "erase"){
    grid.dataset.darkness = 0;
    grid.style.backgroundColor = "white";
  };
});

sketchContainer.appendChild(newDiv);
}
}
createGrid(16);
console.log(sketchContainer);
clearButton.addEventListener("click", () => {
  const grids = document.querySelectorAll(".newDivStyle");

  grids.forEach((grid) => {
    grid.style.backgroundColor = "white";
    grid.dataset.darkness = 0;
  });
});
