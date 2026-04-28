import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TaxiService, ITaxi } from '../../../service/taxi.service';
import { MapComponent } from '../../../shared/map/map';
import { SliderComponent } from '../../slider/slider';

import { SearchFilter } from '../../Body/search-filter/search-filter';


@Component({
  selector: 'app-list-taxi',
  templateUrl: './list-taxi.html',
  imports: [SearchFilter, SliderComponent, RouterLink],
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
  this.router.navigate(['/taxi/view', id]);
}
}
