import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  public ingredientsChanged = new EventEmitter<boolean>();

  startedEditing = new Subject<number>();

  private ingredientsList: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  constructor() { }

  public get ingredients() {
    return this.ingredientsList.slice();
  }

  public getIngredient(index:number): Ingredient {
    return this.ingredients[index];
  }

  public addIngredient(item: Ingredient) {
    this.ingredientsList.push(item);
    this.ingredientsChanged.emit(true);
  }

  public updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredientsList[index] = newIngredient;
    this.ingredientsChanged.next(true);
  }

  public deleteIngredient(index: number): void {
    this.ingredientsList.splice(index, 1);
    this.ingredientsChanged.emit(true);
  }

  
  public addIngredients(items: Ingredient[]) {
    this.ingredientsList.push(...items);
    this.ingredientsChanged.emit(true);
  }


}
