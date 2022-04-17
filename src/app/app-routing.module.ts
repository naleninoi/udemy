import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/authentication/auth.guard';
import { AuthComponent } from './components/authentication/auth/auth.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './components/recipe-book/recipe-start/recipe-start.component';
import { RecipesComponent } from './components/recipe-book/recipes/recipes.component';
import { ShoppingListViewComponent } from './components/shopping-list/shopping-list-view/shopping-list-view.component';
import { RecipesResolver } from './shared/services/recipes.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes',
  component: RecipesComponent,
  canActivate: [AuthGuard],
  children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolver] },
    { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolver] },
  ] },
  { path: 'shopping-list', component: ShoppingListViewComponent },
  { path: 'auth', component: AuthComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
