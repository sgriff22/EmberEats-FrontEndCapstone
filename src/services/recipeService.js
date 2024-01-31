export const getAllRecipes = () => {
  return fetch("http://localhost:8088/recipes").then((res) => res.json());
};

export const getRecipeById = (recipeId) => {
  return fetch(
    `http://localhost:8088/recipes?id=${recipeId}&_expand=category&_expand=meal&_expand=user`
  ).then((res) => res.json());
};