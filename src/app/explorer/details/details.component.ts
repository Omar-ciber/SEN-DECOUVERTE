// details.component.ts

// details.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  zoneTouristique: string = 'Gorée'; 
  showReservationForm: boolean = false;

  reservationForm: FormGroup;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.reservationForm = this.fb.group({
      zoneTouristique: [this.zoneTouristique],
      nombrePersonnes: [1, [Validators.required, Validators.min(1)]],
      dateDebut: [null, Validators.required],
      heureDepart: [null, Validators.required],
      dateFin: [null, Validators.required],
    });
  }

  openReservationDialog(): void {
    this.showReservationForm = true;
  }

  onNoClick(): void {
    this.showReservationForm = false;
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservationData = this.reservationForm.value;
      // Traiter les données de réservation ici si nécessaire
      console.log(reservationData);

      // Réinitialiser le formulaire et masquer le pop-up après la soumission
      this.reservationForm.reset();
      this.showReservationForm = false;
    }
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrls: ['./details.component.css']
// })
// export class DetailsComponent {

// }
