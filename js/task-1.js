const numberOfcategories = document.querySelectorAll('.item').length;

console.log(`Number of categories : ${numberOfcategories}`);

const items = document.querySelectorAll('.item');

for (const item of items) {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
}

/////////////////////////////////////////
// const NumberOfcategories = document.querySelectorAll('.item').length;

// console.log(`Number of categories : ${NumberOfcategories}`);

// const items = document.querySelectorAll('.item');

// items.forEach(item => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const elementsCount = item.querySelectorAll('ul li').length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${elementsCount}`);
// });
