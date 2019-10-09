import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  retour : string;
  title = 'Fiche de contact';

  detectChild(){
    return this.retour ="42";
  }
}
