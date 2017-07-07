import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `<h1>Zoo Tracker</h1>
  `
})

export class AppComponent {
  animalForm: boolean = false;
  animalDetails = null;
  selectedAnimal = null;
  filterAnimals: string = "allAnimals";
  filterLocations: string = "allLocations";

  masterAnimalList: Animal[] = [
    new Animal('Fennec Fox', 'Opal', 3, 'Plants, Rodents, Insects', 'Desert', 3, 'Female', 'Frantically running around exhibit', 'Being cold'),
    new Animal('Flying Fox', 'Quartz', 16, 'Pollen nectar of eucalypt blossoms, Rainforest fruits (figs, lilly pilly),', 'Rainforest', 5, 'Male', 'Hanging from the exhibit ceiling', 'The sun'),
    new Animal('Peregrine Falcon', 'Amethyst', 1, 'Smaller birds, rodents, fish', 'Riverside', 2, 'Female', 'Sharpening her talons', 'Being woken up'),
    new Animal('Cuttlefish', 'Pyrite', 2, 'Shrimp, fish, worms', 'Ocean', 1, 'Male', 'Testing his camoflauge skills', 'Other cuttlefish trying to eat his tentacles'),
    new Animal('Okapi', 'Topaz', 20, 'Leaves, fruits', 'Rainforest', 4, 'Female', 'Spending time alone', 'Being told what to do'),
    new Animal('Polar Bear', 'Jasper', 5, 'Seals, fish', 'Arctic', 8, 'Male', 'Snow', 'Summertime'),
  ];
}
