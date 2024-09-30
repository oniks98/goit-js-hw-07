const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  if (event.currentTarget.value.trim()) {
    nameOutput.textContent = event.currentTarget.value.trim();
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
///////////////////////////////////////////////////////////////
// const nameInput = document.querySelector('#name-input');
// const nameOutput = document.querySelector('#name-output');

// nameInput.addEventListener('input', event => {
//   nameOutput.textContent = event.currentTarget.value.trim()
//     ? event.currentTarget.value.trim()
//     : 'Anonymous';
// });
