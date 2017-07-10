import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="editAnimal">
      <h3>Edit {{editAnimal.name}}:</h3>
      <div>
        <label>Update Name:</label><br>
        <input [(ngModel)]="editAnimal.name"><br>
        <label>Update Age:</label><br>
        <input type="number" [(ngModel)]="editAnimal.age"><br>
        <label>Update Number of Caretakers:</label><br>
        <input type="number" [(ngModel)]="editAnimal.caretakers"><br>
        <button (click)="updateClicked()">Update Changes</button>
      </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() editAnimal: Animal;
  @Output() updateSender = new EventEmitter();

  updateClicked() {
    this.updateSender.emit();
  }
}
