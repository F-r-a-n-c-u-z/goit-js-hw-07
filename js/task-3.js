const inputEL = document.querySelector('#name-input');
const titleEl  = document.querySelector("#name-output");

inputEL.addEventListener("input", hadleInput);
function hadleInput(event) {
    titleEl.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
          return  titleEl.textContent =  "Anonymous";
        }
    }

