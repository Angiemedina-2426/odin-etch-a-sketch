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
});

input.addEventListener("input",()=>{
  updateGridSize(input.value);
})



