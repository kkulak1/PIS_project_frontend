


class Recipe {
  name
  description
  ingredients
  duration
  constructor(name, description, ingredients, duration) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.duration = duration;
  }

  static fromDict(dictionary) {
    return new Recipe(dictionary.name, dictionary.description, dictionary.ingredients, dictionary.duration);
  }

  get namesOfIngredients() {
    let names = [];
    for (let ingredient of this.ingredients) {
      names.push(ingredient.name);
    }
    return names;
  }

  get preparationTime() {
    return this.duration;
  }

  get preparationTime() {

  }



}