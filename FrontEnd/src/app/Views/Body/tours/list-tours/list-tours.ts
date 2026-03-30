import { Component, OnInit } from '@angular/core';
import { NzButtonComponent, NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";

import { ToursService } from '../../../../service/tours.service';
import { ITours } from '../../../../service/tours.service';

@Component({
  selector: 'app-list-tours',
  imports: [NzButtonModule],
  templateUrl: './list-tours.html',
  styleUrl: './list-tours.css',
})
export class ListToursComponent implements OnInit{
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
