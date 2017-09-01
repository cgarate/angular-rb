import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Recipe } from './recipe'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RecipeDataService {

  private recipesUrl = 'http://localhost:3000/recipes/';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get(this.recipesUrl)
    .toPromise()
    .then(response => response.json() as Recipe[])
    .catch(this.handleError);
  };

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  };

}
