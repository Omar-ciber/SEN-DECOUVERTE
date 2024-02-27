import { MessagerieService } from 'src/app/services/messagerie.service';
import { Component, OnInit } from '@angular/core';
import { AddGuideService } from 'src/app/services/add-guide.service';
import { ZoneService } from 'src/app/services/add-zone.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  guides: any;
  zones: any;
  message: any;

  constructor(
    private guideService: AddGuideService,
    private zoneService: ZoneService,
    private MessagerieService: MessagerieService
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
    this.MessagerieService.listerMessage().subscribe(
      message => {
        this.message = message;
      }
    )
  }
}
