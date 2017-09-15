import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'app-recipe-ingredient',
  templateUrl: './recipe-ingredient.component.html',
  styleUrls: ['./recipe-ingredient.component.css']
})
export class RecipeIngredientComponent {
  @Input() recipe: Recipe;
  @Input() ingredient: string;
}
