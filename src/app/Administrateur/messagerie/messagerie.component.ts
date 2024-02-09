import { Component } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent {
afficherPopup = false;

  ouvrirPopup() {
    this.afficherPopup = true;
  }

  fermerPopup() {
    this.afficherPopup = false;
  }

  envoyerReponse() {
    // Logique pour envoyer la réponse
    console.log('Réponse envoyée !');
    this.fermerPopup();
  }

}
