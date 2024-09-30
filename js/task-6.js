const controls = document.querySelector('#controls');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const input = document.querySelector('input[type="number"]');
const div = document.querySelector('#boxes');

const createClick = () => {
  const amount = +input.value;
  if (0 < amount && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
};
createButton.addEventListener('click', createClick);

const destroyClick = () => {
  destroyBoxes();
};

destroyButton.addEventListener('click', destroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  div.innerHTML = '';
  const boxs = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxs.push(box);
  }
  div.append(...boxs);
}

function destroyBoxes() {
  div.innerHTML = '';
  input.value = '';
}
