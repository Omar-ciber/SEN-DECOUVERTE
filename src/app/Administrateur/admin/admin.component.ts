import { MessagerieService } from 'src/app/services/messagerie.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';import { AddGuideService } from 'src/app/services/add-guide.service';
import { ZoneService } from 'src/app/services/add-zone.service';
import { EffectuerReservationService } from 'src/app/services/effectuer-reservation.service';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  guides: any;
  zones: any;
  message: any;
  reservations: any;

  constructor(
    private guideService: AddGuideService,
    private zoneService: ZoneService,
    private messagerieService: MessagerieService,
    private reservationService: EffectuerReservationService
  ) { }

  ngOnInit(): void {
    this.lister();
  }

  lister() {
    this.guideService.getAllGuide().subscribe(
      guides => {
        this.guides = guides;
      }
    )
    this.zoneService.getAllZones().subscribe(
      zones => {
        this.zones = zones;
      }
    )
    this.messagerieService.listerMessage().subscribe(
      message => {
        this.message = message;
      }
    )
    this.reservationService.getAllReservations().subscribe(
      reservations => {
        this.reservations = reservations;
      }
    )
  }
  // pour graphique
ngAfterViewInit() {
    var options = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        ],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '80%', // Ajuster la largeur des barres
                endingShape: 'rounded'
            },
        },
        colors: ['#0A3958', '#EC971F'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['20', '40', '60', '80', '100', '120', '140', '160', '180'],
            labels: {
                style: {
                    margin: 10 // Ajouter une marge à gauche et à droite
                }
            }
        },
        // yaxis: {
        //     title: {
        //         text: '$ (thousands)'
        //     }
        // },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val: string) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}
}
