import { Component, OnInit } from '@angular/core';
import { AddGuideService } from 'src/app/services/add-guide.service';
import { ZoneService } from 'src/app/services/add-zone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-guide',
  templateUrl: './liste-guide.component.html',
  styleUrls: ['./liste-guide.component.css']
})
export class ListeGuideComponent implements OnInit  {

  // les varibles
  image: any;
  name: string = '';
  telephone:string ='';
  email: string = '';
  password: string = '';
  description: string = '';
  duree_experience: string = '';
  selectedZone: string = '';
  tabZone: any;
  tabGuide: any;

  constructor(private guideService:AddGuideService, private listeService:ZoneService){}
  ngOnInit(): void {
    this.listeZone();
    this.listGuide();
    // console.log('id je suis',this.selectedZone);

  }
  // methode pour recup l'image
   getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image= event.target.files[0] as File;
  }

  AjoutGuide() {
     let formData = new FormData();
    formData.append("image", this.image);
    formData.append("name", this.name);
    formData.append("email", this.email);
    formData.append("telephone", this.telephone);
    formData.append("password", this.password);
    formData.append("description", this.description);
    formData.append("duree_experience", this.duree_experience);
    formData.append("zone_id", this.selectedZone);
    console.log(this.selectedZone)
    this.guideService.postGuide(formData).subscribe(
      ( response: any) => {
        console.log('Guide ajoutée avec succès !', response);
      Swal.fire({
          title: "Merci!!!",
          text: "Ajout Reussi!",
          icon: "success",
          timer:1500
      });
      this.listGuide();

      },
      ( error: any) => {
        console.error('Erreur lors de l\'ajout guide :', error);

      }
    );

  }
  // la liste des zones pour bouclé
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

  listGuide() {
      this.guideService.getAllGuide().subscribe(
        (guide: any) => {
          console.log('je usis lsite guiede',guide);

        this.tabGuide = guide;
        console.log(this.tabGuide);
      },
      (err) => {
        console.log(err);
      }
    )

  }
  // methode pour supprimer un guide
   supprimerGuide(GuideId: any) {
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
        this.guideService.deleteGuide(GuideId).subscribe((resp: any) => {
          console.log(resp)
          this.listGuide();
        });
      }
    });

  }
  };

