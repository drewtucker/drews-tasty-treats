import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Pipe
({
  name: "eatenness",
  pure: false
})

export class EatennessPipe implements PipeTransform
{
  transform(input: Recipe[], desiredEatenness)
  {
    var output: Recipe[] = [];
    if(desiredEatenness === "uneatenRecipes")
    {
      for(var i = 0; i < input.length; i++)
      {
        if (input[i].eaten === false)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else if(desiredEatenness === "eatenRecipes")
    {
      for(var i = 0; i < input.length; i++)
      {
        if(input[i].eaten === true)
        {
          output.push(input[i]);
        }
      }
      return output;
    }
    else
    {
      return input;
    }
  }
}
