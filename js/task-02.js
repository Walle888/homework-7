const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulList = document.getElementById("ingredients");
const ingredientsFood = ingredients.map(ingredient => {
  let items = document.createElement("li");
 items.textContent = ingredient;  
    console.log(items);
});
ulList.append(...ingredientsFood);

console.log(ingredientsFood);