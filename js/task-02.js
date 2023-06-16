const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = el;
  ingredientsItemEl.classList.add("item");
  ingredientsEl.append(ingredientsItemEl);
});

// ! 4. Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// ! мається на увазі в циклі? чи поза межами, якщо поза, то код нижче ->

// const ingredientsEl = document.querySelector("#ingredients");
// const arrIngredientsItem = [];

// ingredients.forEach((el) => {
//   const ingredientsItemEl = document.createElement("li");
//   ingredientsItemEl.textContent = el;
//   ingredientsItemEl.classList.add("item");
//   arrIngredientsItem.push(ingredientsItemEl);
// });

// ingredientsEl.append(...arrIngredientsItem);
