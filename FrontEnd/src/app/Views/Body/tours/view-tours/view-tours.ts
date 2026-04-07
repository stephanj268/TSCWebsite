import { Component, OnInit } from '@angular/core';
import { ITaxi, TaxiService } from '../../../../service/taxi.service';
import { ActivatedRoute } from '@angular/router';

import { OperationTimeDirectvie } from '../../../../Directives/Operation-Time/OperationTimeDirective';
import { OperationHidden } from '../../../../Directives/Operation-Time/OperationTimeHiddenDirective';

@Component({
  selector: 'app-view-tours',
  imports: [
    OperationTimeDirectvie,
    OperationHidden
  ],
  templateUrl: './view-tours.html',
  styleUrl: './view-tours.css',
})
export class ViewToursComponent implements OnInit {
  tour: any;
  browserId: any;

  constructor(private tourservice: TaxiService, private activatedRoute: ActivatedRoute) {

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
