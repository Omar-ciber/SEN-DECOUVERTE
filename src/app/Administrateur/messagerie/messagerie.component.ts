import { Component } from '@angular/core';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent {

// Dans votre composant TypeScript

afficherPopup: boolean = false;
messageSelectionne: any; // Ajoutez le type approprié en fonction de votre modèle de message
tabMessages: any;

ouvrirPopup(message: any) {
  this.afficherPopup = true;
  this.messageSelectionne = message;
}

fermerPopup() {
  this.afficherPopup = false;
  this.messageSelectionne = null;
}

envoyerReponse() {
  // Ajoutez ici la logique pour envoyer la réponse
  // Peut-être une requête HTTP ou toute autre opération nécessaire
  // Après avoir envoyé la réponse, vous pouvez fermer le popup
  this.fermerPopup();
}



// afficherPopup = false;

//   ouvrirPopup() {
//     this.afficherPopup = true;
//   }

//   fermerPopup() {
//     this.afficherPopup = false;
//   }

//   envoyerReponse() {

//     console.log('Réponse envoyée !');
//     this.fermerPopup();
//   }



}
