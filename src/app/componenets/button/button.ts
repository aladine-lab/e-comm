import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: `
      button {
    padding: 8px 10px;
    background-color : red;
    border : none;
    color: white;
    border-radius: 15px;
  },
  button:focus {
    opacity : 0.3;
  }
  `,
})
export class Button {
  label = input('');

  btnClicked = output();
}
