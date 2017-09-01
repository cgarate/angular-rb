
import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe";
import { RecipeDataService } from "../recipe-data.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ],
})

export class DashboardComponent implements OnInit {
    recipes: Recipe[] = [];
    constructor(private RecipeDataService: RecipeDataService) {}

    ngOnInit(): void {
        this.RecipeDataService.getRecipes()
        .then(recipes => this.recipes = recipes.slice())
    }
}
