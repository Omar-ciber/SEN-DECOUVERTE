import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-lister-zone',
  templateUrl: './lister-zone.component.html',
  styleUrls: ['./lister-zone.component.css']
})
export class ListerZoneComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
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
    showPopup = false;
  newZone: any = {};

  togglePopup(): void {
    this.showPopup = !this.showPopup;
  }

  getFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.previewImage(file);
      this.newZone.image = file;
    }
  }

  previewImage(file: File): void {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.newZone.image = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  saveAndClose(): void {

    // Réinitialisez les données du formulaire
    this.newZone = {};
    // Fermez le popup
    this.togglePopup();

}
}
