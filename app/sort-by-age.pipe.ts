import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sortByAge",
  pure: false
})

export class SortByAgePipe implements PipeTransform {
  transform(input: Animal[], sortAnimal) {
    var output: Animal[] = [];
    if(sortAnimal === "babies") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(sortAnimal === "oldies") {
      for (var i = 0; i < input.length; i++) {
      if (input[i].age > 3) {
        output.push(input[i]);
        }
      }
      return output;
    } else {
     return input;
    }
  }
}
