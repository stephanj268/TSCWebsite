import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

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

  constructor(private taxiservice: TaxiService, private activatedRoute: ActivatedRoute, private location: Location) {
}

  selectedDate: string = '';
  selectedTime: string = '';

  whatsAppLink: string = '12687884966'; 
  goBack(): void {
    this.location.back();
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent(`Hello, I would like to book a VIP airport transfer.
    Date: ${this.selectedDate || 'Not selected'} 
    Time: ${this.selectedTime || 'Not selected'}`);
    return `https://wa.me/${this.whatsAppLink}?text=${message}`;
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
