import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  filterByEatenness: string = "uneatenRecipes";

  editButtonClicked(recipeToEdit: Recipe)
  {
    this.clickSender.emit(recipeToEdit);
  }

toggleEaten(clickedRecipe: Recipe, setEatenness: boolean)
{
  clickedRecipe.eaten = setEatenness;
}

onChange(optionFromMenu)
{
  this.filterByEatenness = optionFromMenu;
}

deliciousnessColor(currentRecipe)
{
  if(currentRecipe.deliciousness === 3)
  {
    return "bg-danger";
  }
  else if(currentRecipe.deliciousness === 2)
  {
    return "bg-warning";
  }
  else
  {
    return "bg-info";
  }
}

}
