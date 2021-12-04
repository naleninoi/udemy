import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public newIngredientAdded = new EventEmitter<boolean>();

  private ingredientsList: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  constructor() { }

  public get ingredients() {
    return this.ingredientsList.slice();
  }

  public addIngredient(item: Ingredient) {
    this.ingredientsList.push(item);
    this.newIngredientAdded.emit(true);
  }

  
  public addIngredients(items: Ingredient[]) {
    this.ingredientsList.push(...items);
    this.newIngredientAdded.emit(true);
  }


}
