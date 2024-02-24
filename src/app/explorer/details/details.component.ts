import { Component, OnInit } from '@angular/core';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';
import Swal from 'sweetalert2';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ZoneService } from 'src/app/services/add-zone.service';
import { AddGuideService } from 'src/app/services/add-guide.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  zoneDetail: any;
  tabZoneGuide: any;
  tabZone: any;
   // Mes variables
  Nom: string = "";
  email: string = "";
  telephone: string = "";
  nombre_de_personnes: string = "";
  guide: string = "";
  // zone! :this.zoneDetail.nom;
   zone :any;
  date_debut: string = "";
  date_fin: string = "";
  id:any;

  constructor(private reservationService: EffectuerReservationService,private route:ActivatedRoute,private zoneService: ZoneService,private  guideService:AddGuideService) {}
  ngOnInit(): void {
    this.id = localStorage.getItem('idZone')
    this.listeGuideParZone();
     // recuperer une zone
    this.route.params.subscribe((params) => {
       const zoneId = params['id'];
      this.zoneService
        .detailzone(zoneId)
        .subscribe((response) => {
          this.zoneDetail= response;
          console.log(this.zoneDetail);
        });
    });

  }

  listeGuideParZone() {
    console.log('je suis id',this.id);

    this.guideService.guideParZone(this.id).subscribe(
      (response: any) => {
        this.tabZoneGuide = response;
        console.log('guide de la zone',this.tabZoneGuide);
      },
      (err) => {
        console.log(err);
      }
    )
  }



  Test() {
    // Validation des champs obligatoires
    if (!this.Nom || !this.email || !this.telephone || !this.nombre_de_personnes || !this.guide ||  !this.date_debut || !this.date_fin) {
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
      zone: this.id,
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
          icon: "success",
          timer:1500
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

   // la liste des zones pour bouclé
  listeZone() {
    this.zoneService.getAllZones().subscribe(
      (zone: any) => {
        this.tabZone = zone;
        console.log(this.tabZone);
      },
      (err) => {
        console.log(err);
      }
    )
  }



  // Validation du format d'e-mail
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
