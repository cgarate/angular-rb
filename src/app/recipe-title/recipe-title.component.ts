import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe'

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css']
})
export class RecipeTitleComponent {
  @Input() recipe: Recipe;
}
