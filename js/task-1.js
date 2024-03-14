const list = document.querySelectorAll('#categories .item');
console.log(`Number of categories ${list.length}`);

const listEl = document.querySelectorAll('.item');
listEl.forEach(iteam => {
  const tittle = iteam.querySelector('h2');
  const elements = iteam.querySelectorAll('li');
  console.log(`Categories: ${tittle.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
