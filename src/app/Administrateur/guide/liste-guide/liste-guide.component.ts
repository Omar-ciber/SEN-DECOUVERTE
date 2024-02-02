import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-guide',
  templateUrl: './liste-guide.component.html',
  styleUrls: ['./liste-guide.component.css']
})
export class ListeGuideComponent implements OnInit {
 dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  };

