import { OnInit } from '@angular/core';

import { Component } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent implements OnInit{
  nom: string = "";
  email: string = "";
telephone: string = "";
contenu: string = "";
form: any;
indicatif: any;
  ngOnInit(): void {
}
  constructor(private messagerieservice: MessagerieService) { }


  sendMessage(): void{
    console.log("eee", this.nom)
    console.log("eee", this.email)
    const newMessage = {
      email: this.email,
      nom: this.nom,
      telephone: this.telephone,
      contenu: this.contenu,
    }
    this.messagerieservice.postMessageri(newMessage).subscribe((respons) => {
      console.log("where is the message", respons)
    })
     Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc70',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, accepter!',

     })

  }

}
