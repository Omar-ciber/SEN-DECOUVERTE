import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/footer/footer/footer.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
nomFiltre: string = '';
  regionFiltre: string = '';

  tabHotelsParcs: any[] = [
    { nom: 'Hotel A', region: 'Dakar' },
    { nom: 'Parc B', region: 'Ziguinchor' },
    // ... Ajoutez d'autres données
  ];

  tabFiltre: any[] = this.tabHotelsParcs;

  filtrerParNom() {
    this.tabFiltre = this.tabHotelsParcs.filter(hotelParc =>
      hotelParc.nom.toLowerCase().includes(this.nomFiltre.toLowerCase())
    );
  }

  filtrerParRegion() {
    this.tabFiltre = this.tabHotelsParcs.filter(hotelParc =>
      hotelParc.region.toLowerCase().includes(this.regionFiltre.toLowerCase())
    );
  }

  
}
