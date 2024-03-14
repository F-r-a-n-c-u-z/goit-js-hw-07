function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const divControls = document.querySelector("#controls");
// console.log(divControls); - общий div


const inputElem = document.querySelector("input  ")
console.log(inputElem);

const buttonCreate = document.querySelector("button[data-create]")
console.log(buttonCreate);

// buttonCreate.addEventListener('click', hundleClick);
// function hundleClick() {
//   const divElem = document.createElement ("div")
//   divElem.widgth = 30;
//   divBoxes.style.backgroundColor = getRandomHexColor();
 
// }

const buttonDestroy = document.querySelector("button[data-Destroy]")
console.log(buttonDestroy);

buttonDestroy.addEventListener("click", destroyClick)
function destroyClick(even) {
  inputElem.innerHTML = "12";
}

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);






// const step = 30;
// step += 10;

buttonCreate.addEventListener('click', hundleClick);
function hundleClick() {
  const divElem = document.createElement ("div")
  divElem.classList.add("boxes-cube")
  divElem.style.backgroundColor = getRandomHexColor();

  divBoxes.append(divElem)
 
}


