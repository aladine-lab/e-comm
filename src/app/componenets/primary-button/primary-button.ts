import { Component, input, output } from '@angular/core';
@Component({
  selector: 'app-primary-button',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="hover:opacity-60 w-full px-3 py-3 bg-blue-600 text-white rounded-xl cursor-pointer"
    >
      {{ label() }}
    </button>
  `,
  styles: `
    button {
  }
  `,
})
export class PrimaryButton {
  label = input('');

  btnClicked = output();
}
