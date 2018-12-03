import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description : string;
  public authorName: string;
  public authorLink: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc : string, authName : string, authLink: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.authorName = authName;
    this.authorLink = authLink;
    this.ingredients = ingredients;
  }
}
