const apiBaseUrl = "http://localhost:3001";
// const apiBaseUrl = "http://foodrecipe-server.herokuapp.com";

export const apiUrl = {
  getAllRecipes: `${apiBaseUrl}/recipe`,
  createRecipe: `${apiBaseUrl}/recipe`,
  getCategories: `${apiBaseUrl}/categories`,
  login: `${apiBaseUrl}/login`,
  register: `${apiBaseUrl}/register`,
};
