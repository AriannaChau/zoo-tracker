import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:
  `<div class="container">
    <div id="header">
      <h1>Zoo Tracker</h1>
      <img src="/../resources/images/bamboobottom.png">
    </div>
    <div id="hero">
      <img id="bamboo" src="/../resources/images/bamboo.png">
      <img id="border" src="/../resources/images/border-right.png">
    </div>
    <div id="animal-container">
      <div class="animals" (click)="selectedAnimalDetails(currentAnimal)" *ngFor="let currentAnimal of masterAnimals">
        <div id="info">
          <h3>{{currentAnimal.name}}</h3>
          Species: {{currentAnimal.species}}<br>
          Age: {{currentAnimal.age}} y/o
          <img class="animalpic" src="{{currentAnimal.picture}}"/>
        </div>
      </div>
    </div>
    <button (click)="showNewForm()">Add New Animal</button>
    <new-animal *ngIf="animalForm === true" (animalSender)="newAnimal($event)"></new-animal>

  </div>
  `
})

export class AppComponent {
  animalForm: boolean = false;
  animalDetails = null;
  selectedAnimal = null;
  filterAnimals: string = "allAnimals";
  filterLocations: string = "allLocations";

  masterAnimals: Animal[] = [
    new Animal('Fennec Fox', 'Opal', 3, 'Plants, Rodents, Insects', 'Desert', 3, 'Female', 'Frantically running around exhibit', 'Being cold', './../resources/images/fennec.jpg'),
    new Animal('Flying Fox', 'Quartz', 1, 'Pollen nectar of eucalypt blossoms, Rainforest fruits (figs, lilly pilly),', 'Rainforest', 5, 'Male', 'Hanging from the exhibit ceiling', 'The sun', './../resources/images/bat.jpg'),
    new Animal('Peregrine Falcon', 'Amethyst', 12, 'Smaller birds, rodents, fish', 'Riverside', 2, 'Female', 'Sharpening her talons', 'Being woken up', './../resources/images/falcon.jpg'),
    new Animal('Cuttlefish', 'Pyrite', 7, 'Shrimp, fish, worms', 'Ocean', 1, 'Male', 'Testing his camoflauge skills', 'Other cuttlefish trying to eat his tentacles', './../resources/images/cuttlefish.jpg'),
    new Animal('Quokka', 'Topaz', 4, 'Leaves, fruits', 'Rainforest', 4, 'Female', 'Being the cutest thing alive', 'Sadness', './../resources/images/quokka.jpg'),
    new Animal('Polar Bear', 'Jasper', 1, 'Seals, fish', 'Arctic', 8, 'Male', 'Snow', 'Summertime', './../resources/images/polarbear.jpg')
  ];
  showNewForm() {
    this.animalForm = true;
  }

  newAnimal(newAnimal) {
    this.animalForm = false;
    this.masterAnimals.push(newAnimal)
  }
}
