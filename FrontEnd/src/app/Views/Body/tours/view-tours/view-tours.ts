import { Component, inject, model, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GalleriaModule } from 'primeng/galleria';

import { OperationTimeDirectvie } from '../../../../Directives/Operation-Time/OperationTimeDirective';
import { OperationHidden } from '../../../../Directives/Operation-Time/OperationTimeHiddenDirective';
import { TourService } from '../../../../service/tours.service';

@Component({
  selector: 'app-view-tours',
  imports: [FormsModule, NzIconModule, RouterLink, GalleriaModule],
  templateUrl: './view-tours.html',
  styleUrl: './view-tours.css',
})
export class ViewToursComponent implements OnInit {
  tour: any;
  browserId: any;

  private photoService = inject(TourService);
  
  images: any = model([]);
  responsiveOptions?: any[];

  constructor(private tourservice: TourService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.loadBorwserId();

    this.tour = this.tourservice.allTours

    this.tourservice.getToursEvent.subscribe(() => {
      this.tour = this.tour.filter((tour: any) => { return tour._id == this.browserId });
      this.images.set(this.tour.img)
    });

    this.tourservice.onGetToursEvent(this.tour)

    

  }



  loadBorwserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.browserId = id;
    });

  }

}
