import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component'
import { RecipeCardComponent } from './recipe-card/recipe-card.component'

import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';
import { RecipeIngredientComponent } from './recipe-ingredient/recipe-ingredient.component';
import { RecipeIngredientListComponent } from './recipe-ingredient-list/recipe-ingredient-list.component';
import { RecipeTitleComponent } from './recipe-title/recipe-title.component'

import { RecipeDataService } from './recipe-data.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RecipeCardComponent,
    RecipeStepsComponent,
    RecipeIngredientComponent,
    RecipeIngredientListComponent,
    RecipeTitleComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
    HttpModule,
  ],
  providers: [RecipeDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
