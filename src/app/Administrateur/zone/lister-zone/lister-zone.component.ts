import { PublierZoneService } from './../../../guard/services/publier-zone.service';
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
  tabZonePublie: any[] = [];
  ZonePublie: any;
  fieldDirty: { [key: string]: boolean } = {};

  nom: string = '';
  description: string = '';
  images: any ;
  Tarif: string = '';
  duree: string = '';
  status:string = '';

  zones: any;
  listezonesPubliees: any;
  modificateur!: any[];
  modficationStatus: boolean = false;
  id: any;

  ngOnInit(): void  {
    this.listeZone();
    // this.listeZonePublier();
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

  togglePopup(id?: any): void {
    this.showPopup = !this.showPopup;
    if (id) {
      this.id = id;
      this.modficationStatus = true;
      this.modificateur = this.tabZone.filter(z => z.id === id);
      this.nom = this.modificateur[0].nom;
      this.description = this.modificateur[0].description;
      this.images = this.modificateur[0].images;
      this.Tarif = this.modificateur[0].cout;
      this.duree = this.modificateur[0].duree;
      this.status = this.modificateur[0].statut
      console.log(this.modificateur);
    }
  }
  PopupModif = false;
  togglePopupmodif(): void {
    this.PopupModif = !this.PopupModif;
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

    // this.togglePopupmodif()

  }
  saveAndCloseModif(): void {

    // Réinitialisez les données du formulaire

    // Fermez le popup
    this.togglePopupmodif()

  }
  // fin popup d'ajout

  // ajouter et lister zone
  zoneData: any = {};

  constructor(private zoneService: ZoneService, private listeService: ZoneService, private deleteZone:ZoneService ,private publierZone:ZoneService) { }
// Méthode pour ajouter les zones
  ajouterZone(): void {

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
        this.ngOnInit();
         Swal.fire({
          title: "Merci!",
          text: "Ajout Reussi!",
           icon: "success",
           timer: 1500

        });


      },
      ( error: any) => {
        console.error('Erreur lors de l\'ajout de la zone :', error);

      }
    );
  }
  // methode pour charger zone dans formulair
  selectedZone: any;
  chargerZone(element :any): void{
    this.selectedZone = element;

  }

  // methde pour modifier
  modifierZone(id: any): void{
    let formData = new FormData();
    formData.append("nom", this.nom);
    formData.append("description", this.description);
    // formData.append("statut", this.status);
    formData.append("cout", this.Tarif);
    formData.append("duree", this.duree);
    formData.append("images", this.images);

    // console.log("jjjjjjj", this.selectedZone.nom)
    this.zoneService.updateZone(id, formData).subscribe((Response) => {
      console.log("etat de cetee modif", Response);
      this.listeZone();
    })
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
//  fonction pour publier zone
  publier(zoneId: any): void {
    this.zoneService.publierzone(zoneId).subscribe((response:any) => {
      console.log("zone publier", response)
    })
  }
  // fonction pour lister les zones publier

 publierzone(idZone:any){
    this.zoneService.publierzone(idZone).subscribe(
      (zone: any) => {
        this.ZonePublie = zone;
        console.log(this.ZonePublie);
        this.listeZone();
         Swal.fire({
          title: "Merci!",
          text: "Publication Reussi!",
           icon: "success",
          timer:1500
        });

      },
      (err: any) => {
        console.log(err);
      }
    )
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

  // validation des champs
isFieldValid(fieldName: string): boolean {
    switch (fieldName) {
      case 'nom':
        return this.nom.trim().length >= 2;
      case 'description':
         return this.description.trim().length >= 5;
      case 'Tarif':
        return this.Tarif.trim().length >= 2;
      default:
        return true;
    }
  }

  isFieldDirty(fieldName: string): boolean {
    return this.fieldDirty[fieldName] || false;
  }

  setFieldDirty(fieldName: string): void {
    this.fieldDirty[fieldName] = true;

    // Reset fieldDirty flag when the corresponding field is empty
    if ((this as any)[fieldName] === '') {
      this.fieldDirty[fieldName] = false;
    }
  }

  isFormValid(): boolean {
    return Object.keys(this.fieldDirty).every((fieldName) =>
      this.isFieldValid(fieldName)
    );
  }

}
