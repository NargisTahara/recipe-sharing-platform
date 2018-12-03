import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'top-ingredients-list',
  templateUrl: './top-ingredients.component.html',
  styleUrls: ['./top-ingredients.component.css']
})
export class TopIngredientsComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potato', ''),
    new Ingredient('Meat', ''),
    new Ingredient('Cheese', ''),
    new Ingredient('Egg', ''),
    new Ingredient('Butter', ''),
    new Ingredient('Bread', ''),
    new Ingredient('Rice', ''),
    new Ingredient('Fish', ''),
    new Ingredient('Beans', ''),
    new Ingredient('Pasta', ''),
    new Ingredient('Ginger', ''),
    new Ingredient('Beef', ''),
    new Ingredient('Lemon', ''),
    new Ingredient('Avocado', ''),
    new Ingredient('Yeast', ''),
    new Ingredient('Mayonnaise', ''),
    new Ingredient('Mustard', ''),
    new Ingredient('Onion', '')
  ]; 

  constructor() { }

  ngOnInit() {
  }
}
