

import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/add-zone.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit{
  tabZonePublie: any;
  zoneSelectionner: any = {};

    constructor(private zoneService: ZoneService, private listeService: ZoneService, private deleteZone:ZoneService) { }
  ngOnInit(): void {
    this.listeZonePublier();
  }





   //Méthode pour lister les zones
   listeZonePublier() {
    this.listeService.listezonepublier().subscribe(
      (zone: any) => {
        this.tabZonePublie = zone;
        console.log('zone publie',this.tabZonePublie);
      },
      (err) => {
        console.log(err);
      }
    )
   }


  // pour recuperer une zone
  idZone: number = 0;
  getAnnonce(zone: any) {
    this.zoneSelectionner = zone;
    this.idZone = zone.id;
    console.log('tyep', this.idZone);
    localStorage.setItem('idZone', JSON.stringify(this.idZone));
    localStorage.setItem(
      'zoneSelectionner',
      JSON.stringify(this.zoneSelectionner)
    );
  }

}
