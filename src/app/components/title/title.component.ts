import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: false,

  template: ` <h1>title works!</h1> `,
  styles: `
    h1 {
      text-decorator: underline;
    }
  `,
})
export class TitleComponent {}
