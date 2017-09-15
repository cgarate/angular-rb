import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.css']
})
export class RecipeStepsComponent {
  @Input() recipe: Recipe;

}
