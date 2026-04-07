import { Component, OnInit } from '@angular/core';

import { ITaxi, TaxiService } from '../../../service/taxi.service';
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

  constructor(private taxiservice: TaxiService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadBorwserId();

    this.tour = this.taxiservice.allTours

    this.taxiservice.getAllTours.subscribe(() => {
      this.tour = this.tour.filter((tour: any) => { return tour._id == this.browserId });
    });

    this.taxiservice.get(this.tour);

  }



  loadBorwserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.browserId = id;
    });

  }

}
