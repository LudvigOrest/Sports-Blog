import { Component, Output, EventEmitter } from '@angular/core';
//Todo: the button sending @output to the parent of the modal to close it

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() newEvent = new EventEmitter<string>();

  //Output to parent
  closeModal(value: string) {
    this.newEvent.emit(value);
  }
}
