import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();
  
  private recipeList: Recipe[] = [
    new Recipe('Italian Fried Chicken',
    'A famous dish from Rome',
    'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Instant-Pot-Chicken-Marinara-with-Polenta-12.jpg?w=667&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1611333160&s=771ac3777717eab4d982cf4b1adbfd61',
    [
      new Ingredient('Chicken meat', 1),
      new Ingredient('Potatoes', 3)
    ]),
    new Recipe('Spicy Vegan Salade',
    'You will enjoy this dish really soon',
    'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Broccoli-Pesto-Pasta-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&fp-x=0.5&fp-y=0.5&dm=1599768462&s=639a0f7352bd6cccc3d5c90098a546de',
    [
      new Ingredient('Cabbages', 2),
      new Ingredient('Pepper', 2)
    ])
  ];

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  public get recipes() {
    return this.recipeList.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes.slice()[id - 1];
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  


}
