import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>New Animal</h2>
    <div>
    <label>Species:</label>
    <input #newSpecies><br>
    <label>Name:</label>
    <input #newName><br>
    <label>Age:</label>
    <input type="number" #newAge><br>
    <label>Diet:</label>
    <input #newDiet><br>
    <label>Location:</label>
    <select #newLocation>
      <option value="Desert" selected>Desert</option>
      <option value="Riverside">Riverside</option>
      <option value="Rainforest">Rainforest</option>
      <option value="Ocean">Ocean</option>
      <option value="Arctic">Arctic</option>
      <option value="Other">Other</option>
    </select><br>
    <label>Number of Caretakers:</label>
    <input type="number" #newCaretakers><br>
    <label>Sex:</label>
    <select #newSex>
      <option value="Female" selected>Female</option>
      <option value="Male">Male</option>
    </select><br>
    <label>Like:</label>
    <input #newLike><br>
    <label>Dislike:</label>
    <input #newDislike><br>
    <label>Picture (urls only please!):</label>
    <input type="url" #newPicture><br>
    <button (click)="submitForm(
      newSpecies.value,
      newName.value,
      newAge.value,
      newDiet.value,
      newLocation.value,
      newCaretakers.value,
      newSex.value,
      newLike.value,
      newDislike.value,
      newPicture.value);
      newSpecies.value='';
      newName.value='';
      newAge.value='';
      newDiet.value='';
      newLocation.value='';
      newCaretakers.value='';
      newSex.value='';
      newLike.value='';
      newDislike.value='';
      newPicture.value='';">Log animal</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() animalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, like: string, dislike: string, picture: string) {
    var newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, like, dislike, picture);
    this.animalSender.emit(newAnimal);
  }
}
