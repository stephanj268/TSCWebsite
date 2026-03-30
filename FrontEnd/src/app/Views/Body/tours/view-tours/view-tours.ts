import { Component, OnInit } from '@angular/core';
import { ToursService } from '../../../../service/tours.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tours',
  imports: [],
  templateUrl: './view-tours.html',
  styleUrl: './view-tours.css',
})
export class ViewToursComponent implements OnInit {
  tour: any;
  browserId: any;

  constructor(private tourservice: ToursService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadBorwserId();

    this.tour = this.tourservice.allTours

    this.tourservice.getAllTours.subscribe(() => {
      this.tour = this.tour.filter((tour: any) =>  {return tour._id == this.browserId})
    });

    this.tourservice.get(this.tour);
    console.log(this.tour)

  }



  loadBorwserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.browserId = id;
    });

  }

}
