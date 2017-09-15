import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-ingredient-list',
  templateUrl: './recipe-ingredient-list.component.html',
  styleUrls: ['./recipe-ingredient-list.component.css']
})
export class RecipeIngredientListComponent {
  @Input() recipe: Recipe;
}
