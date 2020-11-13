let myMealRecipe = {
  Title: "My everyday breakfast",
  Servings: 1,
  Ingredients: ["200ml milk", "100ml oats", "some barries"]
};
for (let property in myMealRecipe) {
  console.log(`${property}: ${myMealRecipe[property]}`);
}
