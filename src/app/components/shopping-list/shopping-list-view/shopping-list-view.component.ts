import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.css']
})
export class ShoppingListViewComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(
    private shoppingListService: ShoppingListService,
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    this.shoppingListService.ingredientsChanged
      .subscribe(
        () => this.ingredients = this.shoppingListService.ingredients
      )
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

}
