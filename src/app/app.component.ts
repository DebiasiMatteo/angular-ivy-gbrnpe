import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{titoloPagina}}</h1>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titoloPagina = 'Parco Naturale del Monte Baldo';
}
