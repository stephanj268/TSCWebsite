import { Component, OnInit } from '@angular/core';

import { ITours, ToursService } from '../../../service/tours.service';
import { ActivatedRoute } from '@angular/router';

import { OperationTimeDirectvie } from '../../../Directives/Operation-Time/OperationTimeDirective';
import { OperationHidden } from '../../../Directives/Operation-Time/OperationTimeHiddenDirective';

@Component({
  selector: 'app-view-taxi',
  imports: [],
  templateUrl: './view-taxi.html',
  styleUrl: './view-taxi.css',
})
export class ViewTaxiComponent implements OnInit {
  tour: any;
  browserId: any;

  constructor(private tourservice: ToursService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadBorwserId();

    this.tour = this.tourservice.allTours

    this.tourservice.getAllTours.subscribe(() => {
      this.tour = this.tour.filter((tour: any) => { return tour._id == this.browserId });
    });

    this.tourservice.get(this.tour);

  }



  loadBorwserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.browserId = id;
    });

  }

}
