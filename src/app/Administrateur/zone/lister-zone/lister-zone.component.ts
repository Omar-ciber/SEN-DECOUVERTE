import { Component, OnInit } from '@angular/core';
import { ZoneService } from 'src/app/services/add-zone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lister-zone',
  templateUrl: './lister-zone.component.html',
  styleUrls: ['./lister-zone.component.css']
})
export class ListerZoneComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  // categories: any;
  // les attributs
  categories: any[] = [];
  tabZone: any[] = [];

  nom: string = '';
  description: string = '';
  images: any ;
  Tarif: string = '';
  duree: string = '';
  status:string = '';

  zones: any;

  ngOnInit(): void  {
    this.listeZone();
    //tables
    this.dtOptions = {
      searching: true,
      lengthChange: false,
      paging: true,
      info: false,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json'
      }
    };
  };
  // popup d'ajout
    showPopup = false;
  newZone: any = {};

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.images= event.target.files[0] as File;
  }

  saveAndClose(): void {

    // Réinitialisez les données du formulaire
    this.newZone = {};
    // Fermez le popup
    this.togglePopup();

  }
  // fin popup d'ajout

  // ajouter et lister zone
  zoneData: any = {};

  constructor(private zoneService: ZoneService, private listeService: ZoneService, private deleteZone:ZoneService) { }
// Méthode pour ajouter les zones
  ajouterZone(): void {
     Swal.fire({
          title: "Good job!",
          text: "Ajout Reussi!",
          icon: "success"
        });

     let formData = new FormData();
    formData.append("nom", this.nom);
    formData.append("description", this.description);
    // formData.append("statut", this.status);
    formData.append("cout", this.Tarif);
    formData.append("duree", this.duree);
    formData.append("images", this.images);

    this.zoneService.postZone(formData).subscribe(
      ( response: any) => {
        console.log('Zone ajoutée avec succès !', response);
        this.listeZone();

      },
      ( error: any) => {
        console.error('Erreur lors de l\'ajout de la zone :', error);

      }
    );
  }

  //Méthode pour lister les zones
   listeZone() {
    this.listeService.getAllZones().subscribe(
      (zone: any) => {
        this.tabZone = zone;
        console.log(this.tabZone);
      },
      (err) => {
        console.log(err);
      }
    )
   }

  publier(id: any): void {
    this.zoneService.publierZone(id).subscribe((respons) => {
      console.log("c 'est publier", respons)
    })
  }

     // Methode pour supprimer un trajet
  supprimerZone(zoneId: any) {
    Swal.fire({
      title: "Etes vous sur",
      text: "voulez vous supprimer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FA7436",
      cancelButtonColor: "#FA0436",
      confirmButtonText: "OUI !!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteZone.deleteZone(zoneId).subscribe((resp: any) => {
          console.log(resp)
          this.listeZone();
        });
      }
    });

  }
}
