import { Component, OnInit } from '@angular/core';

import { NzButtonComponent, NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ToursService } from '../../../service/tours.service';
import { ITours } from '../../../service/tours.service';

import { SearchFilter } from '../../Body/search-filter/search-filter';
import { RouterLink } from "@angular/router";
import { SliderComponent } from '../../slider/slider';

@Component({
  selector: 'app-list-taxi',
  imports: [
    NzButtonModule,
    SearchFilter,
    RouterLink,
    SliderComponent,
    NzIconModule
  ],
  templateUrl: './list-taxi.html',
  styleUrl: './list-taxi.css',
})
export class ListTaxiComponenet implements OnInit {

  tours?: any;

  constructor(private tourservice: ToursService) {

  }

  ngOnInit(): void {
    // Set Tours variable to data
    this.tours = this.tourservice.allTours;

    // Subscribe tours to event
    this.tourservice.getAllTours.subscribe();

    //Getting all Tours
    this.tourservice.get(this.tours);
  }

}
