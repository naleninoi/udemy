import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadComponent } from './components/common/head/head.component';
import { ListViewComponent } from './components/shopping-list/list-view/list-view.component';
import { ListEditComponent } from './components/shopping-list/list-edit/list-edit.component';
import { RecipeListComponent } from './components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './components/recipe-book/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ListViewComponent,
    ListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
