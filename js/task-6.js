function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// input
const inputElement = document.querySelector('input');

//Create
const buttonCreate = document.querySelector('button[data-create]');


buttonCreate.addEventListener('click', createClick);
function createClick() {
  const inputValue = inputElement.value;

  if (inputValue >= 1 && inputValue <= 100) {
    createBoxes(inputValue);
  }
}

function createBoxes(amount) {
  destroyBoxes();
  
  let widthAndHeight = 20;
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    divElement.classList.add('boxes-cube');
    widthAndHeight += 10;

    divElement.style.width = `${widthAndHeight}px`;
    divElement.style.height = `${widthAndHeight}px`;
    divElement.style.backgroundColor = getRandomHexColor();

    divBoxes.append(divElement);
  }
  inputElement.value = '';
}

//Destroy
const buttonDestroy = document.querySelector('button[data-destroy]');
buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  divBoxes.innerHTML = '';
}

//Boxes
const divBoxes = document.querySelector('#boxes');