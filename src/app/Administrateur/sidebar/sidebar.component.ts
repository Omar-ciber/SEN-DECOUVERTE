import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  // les variables
  isAdmin: boolean = false;
  isGuide: boolean = false;
  userConnecte: any;

  constructor(private route: Router){}
  ngOnInit(): void {
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

  }
  // ConnexionGuide() {
  //   console.log('guide connecter')
  //   throw new Error('Method not implemented.');
  // }
  // ConnexionAdmin() {
  //   console.log('Admin connecter.');
  //   throw new Error('Method not implemented.');
  // }




  //declaration fonction

  conxionAdmin() {
    this.isAdmin = true;
    this.isGuide = false;
  }
  conxionGuide() {
    this.isGuide = true;
    this.isAdmin = false;
  }
//  fonction pour deconnection
  logout(): void {
    localStorage.removeItem('userOnline');
    localStorage.removeItem('token');

    this.route.navigate(['/accueil']);
}
}
