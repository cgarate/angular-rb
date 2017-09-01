import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component'
import { RecipeCardComponent } from './recipe-card/recipe-card.component'

import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';
import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
import { RecipeIngredientListComponent } from './recipe-ingredient-list/recipe-ingredient-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RecipeCardComponent,
    RecipeStepsComponent,
    RecipeIngredientComponent,
    RecipeIngredientListComponent,
    RecipeTitleComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
