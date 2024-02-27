import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationservice: EffectuerReservationService, private route: Router) { }
  ngOnInit(): void {
 this.allreservation();
 this.userConnecte = JSON.parse(localStorage.getItem('userOnline') || "{}");
  console.log("info locolestorage")
    console.log(this.userConnecte);

    console.log("info de l'utisateur connecter")
    console.log(this.userConnecte.user)
    const user = this.userConnecte.user;
    console.log("role de l'utisateur connecter", this.userConnecte.guide)
    // console.log("role de l'utisateur connecter", this.userConnecte.guide)
    console.log(user.role)

    if (user.role == 'admin') {
      this.isAdmin = true;
      this.isGuide = false;
        // this.ConnexionAdmin();
    } else if (user.role == 'guide') {
      this.isGuide = true;
        this.isAdmin=false;
        // this.ConnexionGuide();

    }
    this.allreservationForAdmin();

  }
  dataresevationGuide: any;
  dataresevationAdmin: any;
  allreservation(): void {
    this.reservationservice.getReservationsByGuide().subscribe((data) => {
      this.dataresevationGuide = data;
      console.warn(this.dataresevationGuide);
      console.log("mes reservationshuuhjkhjkhjkhk", this.dataresevationGuide)
    })
  }

allreservationForAdmin(): void {
    this.reservationservice.getAllReservations().subscribe((data) => {
      this.dataresevationAdmin = data;
      console.log("mes reservations", this.dataresevationAdmin)
    })
}



  // /*fonction pour accepter une publicité/
  accepterReservation(id: number) {
    let idReserve = id;
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière après cette action!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc70',
      cancelButtonColor: '#001F3F',
      confirmButtonText: 'Oui, accepter!',
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
        this.reservationservice.accepterReservationById(idReserve).subscribe((response: any) => {
          console.log(response);
          this.reservationservice.alertMessage(
            'success',
            'Supprimé!',
            'Demande acceptée avec succès'
          );

          this.allreservation();
        })
      }
    })

  }

   // les variables
  isAdmin: boolean = false;
  isGuide: boolean = false;
  userConnecte: any;

  // methode pour changer disponibilte d'un guide
  DesactiverGuide(): void{
    this.reservationservice.getIndisponibiliteGuide().subscribe((respons) => {
      console.log('voir statut bouuuuoooooooopppooo', respons)
    })
  }
  activerGuide(): void{
    this.reservationservice.getDisponibiliteGuide().subscribe((respons) => {
      console.log('voir statut stoooooooopppooo', respons)
    })
  }
}
