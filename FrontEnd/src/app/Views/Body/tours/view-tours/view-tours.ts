import { Component, OnInit } from '@angular/core';
import { NzButtonComponent, NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";

import { ToursService } from '../../../../service/tours.service';
import { ITours } from '../../../../service/tours.service';

@Component({
  selector: 'app-view-tours',
  imports: [NzButtonComponent, NzButtonModule],
  templateUrl: './view-tours.html',
  styleUrl: './view-tours.css',
})
export class ViewToursComponent implements OnInit{
  tours?: any;

  constructor(private tourservice: ToursService) {

  }

  ngOnInit(): void {
    // Set Tours variable to data
    this.tours = this.tourservice.allTours;
    
    // Subscribe tours to event
    this.tourservice.getAllTours.subscribe(() => {
      console.log(this.tours)
    });

    //Getting all Tours
    this.tourservice.get(this.tours);


  }

}
