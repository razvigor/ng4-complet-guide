import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://cdn.tasteatlas.com/images/recipes/fd028f994e9c4e85978fef77cb453766.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://cdn.tasteatlas.com/images/recipes/fd028f994e9c4e85978fef77cb453766.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
