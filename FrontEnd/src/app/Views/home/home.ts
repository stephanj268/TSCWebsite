import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';


import { ToursComponenet } from '../Body/tours/tours';
import { ViewToursComponent } from '../Body/tours/view-tours/view-tours';
@Component({
  selector: 'app-home',
  imports: [
    NzCarouselModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {


}
