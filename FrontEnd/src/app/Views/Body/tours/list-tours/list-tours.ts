import { Component, OnInit } from '@angular/core';
import { NzButtonComponent, NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TourService } from '../../../../service/tours.service';
import { SliderComponent } from "../../../slider/slider";

@Component({
  selector: 'app-list-tours',
  imports: [
    NzButtonModule,
    
    SliderComponent,
    NzIconModule
  ],
  templateUrl: './list-tours.html',
  styleUrl: './list-tours.css',
})
export class ListToursComponent implements OnInit {

  tour: any;

  constructor(private tourservice: TourService) {

  }

  ngOnInit(): void {
    this.tour = this.tourservice.allTours

    this.tourservice.getToursEvent.subscribe();

    this.tourservice.onGetToursEvent(this.tour);

    console.log(this.tour)


  }

}
