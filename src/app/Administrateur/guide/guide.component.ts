import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
  deleteGuide: any;

  constructor(
    private router: Router,
    config: NgbModalConfig,
    private modalService: NgbModal,) {
      config.backdrop = 'static';
        config.keyboard = false;
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  	open(content: any) {
		this.modalService.open(content);
    }

  listeGuide() {
    throw new Error('Method not implemented.');
  }


}
