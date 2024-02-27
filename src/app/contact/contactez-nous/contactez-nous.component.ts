import { OnInit } from '@angular/core';

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-contactez-nous',
//   templateUrl: './contactez-nous.component.html',
//   styleUrls: ['./contactez-nous.component.css']
// })
// export class ContactezNousComponent {
//   contactForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.contactForm = this.fb.group({
//       nom: ['', Validators.required],
//       prenom: ['', Validators.required],
//       telephone: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       message: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     if (this.contactForm.valid) {
//       const confirmation = confirm('Voulez-vous laisser un message?');

//       if (confirmation) {
//         alert('Message envoyé avec succès!');
//         this.contactForm.reset();
//       } else {
//         alert('Envoi de message annulé.');
//       }
//     } else {
//      alert('Veuillez renseigner les champs s\'il vous plait');
//     }
//   }
// }


import { Component } from '@angular/core';
import { MessagerieService } from 'src/app/services/messagerie.service';

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
  }

}
