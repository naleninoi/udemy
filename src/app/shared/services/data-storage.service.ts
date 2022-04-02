import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {

  API_URL = 'https://ng-recipes-2813f-default-rtdb.asia-southeast1.firebasedatabase.app/' + 'recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService
    ) { }

    public storeRecipes() {
      const recipes = this.recipeService.getRecipes();
      this.http.put(this.API_URL, recipes).subscribe(
        response => {console.log(response);
        });

    }

    public fetchRecipes() {
      return this.http.get<Recipe[]>(this.API_URL)
      .pipe(
        map (recipes => {
        return recipes.map( recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        });
      }),
      tap (recipes => this.recipeService.setRecipes(recipes)));
    }
}
