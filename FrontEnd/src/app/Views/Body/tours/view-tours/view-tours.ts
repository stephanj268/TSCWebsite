import { Component, inject, model, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  tourIncludedDetails: any = [];
  browserId: any;

  private photoService = inject(TourService);

  images: any = model([]);
  responsiveOptions?: any[];

  constructor(
    private tourservice: TourService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadBorwserId();

    this.tour = this.tourservice.allTours

    this.tourservice.getToursEvent.subscribe(() => {
      this.tour = this.tour.filter((tour: any) => { return tour._id == this.browserId });
      this.images.set(this.tour.img);

      console.log(this.tour[0].tourOptions)

      for (let i = 0; i <= this.tour[0].tourOptions.length; i++) {
        let data = {label: this.tour[0].tourOptions[i].label};
        this.tourIncludedDetails.push(data);
      }

    });

    this.tourservice.onGetToursEvent(this.tour);

  }



  loadBorwserId() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("id")
      this.browserId = id;
    });

  }

  onBookNow() {
    this.router.navigateByUrl(`booking/tour/${this.tour[0]._id}`)
  }

}
