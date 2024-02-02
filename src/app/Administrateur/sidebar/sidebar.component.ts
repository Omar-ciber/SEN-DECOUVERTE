import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //declaration variable pour choix affiche
  isAdmin: boolean = false;
  isGuide: boolean = false;


  //declaration fonction

  conxionAdmin() {
    this.isAdmin = true;
    this.isGuide = false;
  }
  conxionGuide() {
    this.isGuide = true;
    this.isAdmin = false;
  }
  

}
