function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// input
const inputElement = document.querySelector('input');
inputElement.addEventListener('input', inputClick);

let inputValue;
function inputClick(event) {
  inputValue = event.currentTarget.value;
}

//Create
const buttonCreate = document.querySelector('button[data-create]');
buttonCreate.addEventListener('click', createClick);

let widthAndHeight = 30;

function createClick() {
  if (inputValue >= 1 && inputValue <= 100) {
    for (let i = 0; i < inputValue; i++) {
      const divElem = document.createElement('div');
      divElem.classList.add('boxes-cube');
      widthAndHeight += 10;

      divElem.style.width = `${widthAndHeight}px`;
      divElem.style.height = `${widthAndHeight}px`;
      divElem.style.backgroundColor = getRandomHexColor();

      divBoxes.append(divElem);
    }
  }
  inputValue = null;
  inputElement.value = '';
  widthAndHeight = 30;
}

//Destroy
const buttonDestroy = document.querySelector('button[data-destroy]');

buttonDestroy.addEventListener('click', destroyClick);
function destroyClick() {
  divBoxes.innerHTML = '';
}

//Boxes
const divBoxes = document.querySelector('#boxes');
