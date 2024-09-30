const bodyBackgroundColor = document.body;

const button = document.querySelector('.change-color');

const colorHex = document.querySelector('.color');

const handleClick = () => {
  const randomColor = getRandomHexColor();

  bodyBackgroundColor.style.backgroundColor = randomColor;

  colorHex.textContent = randomColor;
};

button.addEventListener('click', handleClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
