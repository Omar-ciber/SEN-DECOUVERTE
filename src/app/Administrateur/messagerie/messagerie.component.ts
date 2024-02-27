import { Component, OnInit } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
contenu: string = "";
email: string = "";
ngOnInit(): void {
  this.allMessages();
}

  constructor(private messageservice: MessagerieService) { }

  // methode pour lister mesage
  allMessages(): void{
    this.messageservice.listerMessage().subscribe((data) => {
      this.tabMessages = data
      console.log("voir message",this.tabMessages);
    })
  }
  // methode pour recuperer donnee
  selectElemnt: any;
  chargeElement(element: any) {
    this.selectElemnt = element;
  }
  // methode pour repondr aux messages
  repondre(): void{
    const newRepnse = {
      contenu: this.contenu,
      email : this.selectElemnt.email,
    }
    // console.log("email", this.email)
    console.log("detail", newRepnse.email)
    this.messageservice.responsMessage(newRepnse).subscribe((respons) => {
      console.log("etat de la reponse", respons)
    })
  }

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
