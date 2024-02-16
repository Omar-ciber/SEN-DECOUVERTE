import { Component, OnInit } from '@angular/core';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  constructor(private reservationservice: EffectuerReservationService) { }
  ngOnInit(): void {
    this.allreservation();
  }
  dataresevation: any;
  allreservation(): void {
    this.reservationservice.getAllReservations().subscribe((data) => {
      this.dataresevation = data;
      console.log("mes reservations", this.dataresevation)
    })
  }
  

}
