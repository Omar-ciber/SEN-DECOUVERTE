import { Component } from '@angular/core';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';
import Swal from 'sweetalert2';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(private reservationService: EffectuerReservationService) {}

  // Mes variables
  Nom: string = "";
  email: string = "";
  telephone: string = "";
  nombre_de_personnes: string = "";
  guide: string = "";
  zone: string="";
  date_debut: string = "";
  date_fin: string = "";

  Test() {
    // Validation des champs obligatoires
    if (!this.Nom || !this.email || !this.telephone || !this.nombre_de_personnes || !this.guide || !this.zone || !this.date_debut || !this.date_fin) {
      Swal.fire({
        title: "Erreur",
        text: "Veuillez remplir tous les champs SVP!!",
        icon: "error"
      });

      return;
    }

    // Validation du format d'e-mail
    if (!this.validateEmail(this.email)) {
      Swal.fire({
        title: "Erreur",
        text: "Format d'e-mail incorrect",
        icon: "error"
      });
      return;
    }

    let reservation = {
      Nom: this.Nom,
      email: this.email,
      telephone: this.telephone,
      nombre_de_personnes: this.nombre_de_personnes,
      guide: this.guide,
      zone: this.zone,
      date_debut: this.date_debut,
      date_fin: this.date_fin
    }

    console.log("Objet reservation: ", reservation);
    console.log(this.Nom);


    this.reservationService.postReservation(reservation).subscribe(
      (response: any) => {
        console.log(response);
        // Affiche une alerte pour indiquer que la réservation a été effectuée avec succès
        Swal.fire({
          title: "Success",
          text: "Réservation effectuée avec succès!",
          icon: "success"
        });

        // Réinitialise les valeurs des champs après une réservation réussie
        this.Nom = "";
        this.email = "";
        this.telephone = "";
        this.nombre_de_personnes = "";
        this.guide = "";
        this.zone = "";
        this.date_debut = "";
        this.date_fin = "";
      },
      (error) => {
        console.log(error);
        // Affiche une alerte en cas d'erreur lors de la réservation
        Swal.fire({
          title: "Erreur",
          text: "Compte invalide ? Veillez vérifier votre compte SVP!!!",
          icon: "error"
        });
      }
    );
  }

  // Validation du format d'e-mail
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
