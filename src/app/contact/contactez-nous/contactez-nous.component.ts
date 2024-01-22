import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const confirmation = confirm('Voulez-vous laisser un message?');

      if (confirmation) {
        alert('Message envoyé avec succès!');
        this.contactForm.reset();
      } else {
        alert('Envoi de message annulé.');
      }
    } else {
     alert('Veuillez remplir tous les champs correctement.');
    }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contactez-nous',
//   templateUrl: './contactez-nous.component.html',
//   styleUrls: ['./contactez-nous.component.css']
// })
// export class ContactezNousComponent {

// }
