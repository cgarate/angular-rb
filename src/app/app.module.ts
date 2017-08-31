import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar.component'
import { RecipeCardComponent } from './recipe-card.component'
import { RecipeTitle } from './recipe-title.component'

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RecipeCardComponent,
    RecipeTitle,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
