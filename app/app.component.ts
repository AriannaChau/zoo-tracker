import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template:
  `<div class="container">
    <div id="header">
      <h1 (click)="speakTitle()">Zoo Tracker</h1>
      <img src="/../resources/images/bamboobottom.png">
    </div>
    <div id="hero">
      <img id="bamboo" src="/../resources/images/bamboo.png">
      <img id="border" src="/../resources/images/border-right.png">
    </div>
    <div id="select">
      <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="babies">Babies</option>
      <option value="oldies">Oldies but Goodies</option>
      </select>
    </div>
    <div id="animal-container">
      <div class="animals" *ngFor="let currentAnimal of masterAnimals | sortByAge:filterAnimals">
        <div id="info">
          <div id="name-edit">
            <h3>{{currentAnimal.name}}</h3>
            <div id="buttons">
              <button class="edit" (click)="editAnimal(currentAnimal)">Edit</button>
              <button class="voice" (click)="speak(currentAnimal)"><img src="/../resources/images/megaphone.png"></button>
            </div>
          </div>
          Species: {{currentAnimal.species}}<br>
          Age: {{currentAnimal.age}} y/o
          <img class="animalpic" src="{{currentAnimal.picture}}"/>
        </div>
      </div>
    </div>
    <button (click)="showNewForm()">Add New Animal</button>
    <div id="footer" *ngIf="updateForm === true || animalForm === true">
      <new-animal *ngIf="animalForm === true" (animalSender)="newAnimal($event)"></new-animal>
      <edit-animal *ngIf="updateForm === true" [editAnimal]="selectedAnimal" (updateSender)="finishEdit()"> </edit-animal>
    </div>
  </div>
  `
})

export class AppComponent {
  animalForm: boolean = false;
  updateForm: boolean = false;
  animalDetails = null;
  selectedAnimal = null;
  filterAnimals: string = "allAnimals";

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

  editAnimal(animalForEdit) {
    this.updateForm = true;
    this.selectedAnimal = animalForEdit;
  }

  finishEdit() {
    this.updateForm = false;
  }

  onChange(menuOption) {
    this.filterAnimals = menuOption;
  }
  //
  // speakTitle() {
  //   responsiveVoice.speak("Welcome to the Zoo Tracker! I'm here to assist you if you have trouble reading!", "US English Female");
  // }
  //
  // speak(animal) {
  //   responsiveVoice.speak("This is " + animal.name + ". The " + animal.sex + " " + animal.species, "US English Female");
  // }
}
