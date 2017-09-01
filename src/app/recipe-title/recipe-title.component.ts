import { Component,  } from '@angular/core';

@Component({
  selector: 'app-recipe-title',
  templateUrl: './recipe-title.component.html',
  styleUrls: ['./recipe-title.component.css']
})
export class RecipeTitleComponent {

  recipeName = '{{recipe.title}}'
}
