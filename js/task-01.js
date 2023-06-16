const categoriesEl = document.querySelector("#categories");

const numbersOfCategories = categoriesEl.children.length;
console.log(`Number of categories: ${numbersOfCategories}\n `);

const categoriesItemsEl = [...categoriesEl.children];

// console.log(categoriesItemsEl[0].children[0].textContent);
categoriesItemsEl.forEach((el) => {
  console.log(`Category: ${el.children[0].textContent}`);
  console.log(`Elements: ${el.children[1].children.length}\n `);
});
