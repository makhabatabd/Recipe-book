import instance from "../axiosClient";
export function searchMeals({ commit }, keyword) {
  instance.get(`search.php?s=${keyword}`).then(({ data }) => {
    commit("setSearchedMeals", data.meals);
  });
}

export function searchMealsByLetter({ commit }, letter) {
  console.log(letter);
  if (letter !== "" && letter !== undefined) {
    instance.get(`search.php?f=${letter}`).then(({ data }) => {
      console.log(data);
      commit("setMealsByLetter", data.meals);
    });
  } else {
    instance.get(`search.php?f=A`).then(({ data }) => {
      console.log(data);
      commit("setMealsByLetter", data.meals);
    });
  }
}

export function searchMealsByIngredient({ commit }, ing) {
  instance.get(`filter.php?i=${ing}`).then(({ data }) => {
    commit("setMealsByIngredients", data.meals);
  });
}
