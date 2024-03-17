const list = document.querySelectorAll('#categories .item');
console.log(`Number of categories ${list.length}`);

const listEl = document.querySelectorAll('.item');
listEl.forEach(item => {
  const tittle = item.querySelector('h2');
  const elements = item.querySelectorAll('li');
  console.log(`Categories: ${tittle.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
