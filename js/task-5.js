function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanElement = document.querySelector('.color');
const buttonElement = document.querySelector('.change-color');
const bodyElement = document.querySelector('body');

buttonElement.addEventListener('click', handleClick);
function handleClick() {
  const color = getRandomHexColor();
  bodyElement.style.backgroundColor = color;
  spanElement.textContent = color;
}
