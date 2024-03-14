function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanElem = document.querySelector('.color');
const buttonElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');

buttonElem.addEventListener('click', hundleClick);
function hundleClick() {
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = getRandomHexColor();
}
