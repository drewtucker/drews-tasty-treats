import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Drew's Tasty Treats";
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  recipes: Recipe[] = [
  new Recipe("Drew's Delicious Dumplings", ["1. Buy dumplings", "2. Cook dumplings"], 2),
  new Recipe("Drew's Doughy Doughnuts", ["1. Make the doughnuts", "2. Don't NOT make the doughnuts"], 1),
  new Recipe("Drew's Delicious Mystery Sauce", ["1. ???", "2. Eat the sauce"], 3)
];

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

selectedRecipe = null;
enteredName = true;

editRecipe(clickedRecipe)
{
  this.selectedRecipe = clickedRecipe;
}

finishedEditing()
{
  this.selectedRecipe = null;
}

finishedName()
{
  this.enteredName = null;
}

changeName()
{
  this.enteredName = true;
}


}
