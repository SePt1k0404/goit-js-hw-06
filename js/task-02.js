const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsEl = document.querySelector("#ingredients");
const arrIngredientsItem = [];

ingredients.forEach((el) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = el;
  ingredientsItemEl.classList.add("item");
  arrIngredientsItem.push(ingredientsItemEl);
});

ingredientsEl.append(...arrIngredientsItem);
