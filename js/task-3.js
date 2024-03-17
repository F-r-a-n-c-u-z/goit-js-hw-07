const inputElement = document.querySelector('#name-input');
const titleElement  = document.querySelector("#name-output");

inputElement.addEventListener("input", handleInput);
function handleInput(event) {
  const value = event.currentTarget.value.trim()
  titleElement.textContent = value === "" ? "Anonymous" : value
    }

    


