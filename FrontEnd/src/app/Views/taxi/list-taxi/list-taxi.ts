import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaxiService, ITaxi } from '../../../service/taxi.service';
import { MapComponent } from '../../../shared/map/map';
import { SliderComponent } from '../../slider/slider';




@Component({
  selector: 'app-list-taxi',
  templateUrl: './list-taxi.html',
  styleUrl: './list-taxi.css',
})
export class ListTaxiComponenet implements OnInit {

  

  tours: ITaxi[] = [];

  constructor(
    private tourservice: TaxiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tours = this.tourservice.allTours;
  }

  viewDetails(id: number) {
  console.log('Navigating with ID:', id); //debug
  this.router.navigate(['/view-taxi', id]);
}
}
