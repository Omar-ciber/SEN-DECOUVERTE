import { MessagerieService } from 'src/app/services/messagerie.service';
import { Component, OnInit } from '@angular/core';
import { AddGuideService } from 'src/app/services/add-guide.service';
import { ZoneService } from 'src/app/services/add-zone.service';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  guides: any;
  zones: any;
  message: any;
  reservations: any;

  constructor(
    private guideService: AddGuideService,
    private zoneService: ZoneService,
    private messagerieService: MessagerieService,
    private reservationService: EffectuerReservationService
  ) { }

  ngOnInit(): void {
    this.lister();
  }

  lister() {
    this.guideService.getAllGuide().subscribe(
      guides => {
        this.guides = guides;
      }
    )
    this.zoneService.getAllZones().subscribe(
      zones => {
        this.zones = zones;
      }
    )
    this.messagerieService.listerMessage().subscribe(
      message => {
        this.message = message;
      }
    )
    this.reservationService.getAllReservations().subscribe(
      reservations => {
        this.reservations = reservations;
      }
    )
  }
}
