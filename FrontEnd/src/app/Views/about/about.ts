import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { ToursComponenet } from '../Body/tours/tours';
import { ViewToursComponent } from '../Body/tours/view-tours/view-tours';
import { HomeComponent } from '../home/home';

@Component({
  selector: 'app-about',
  imports: [NzCarouselModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

}
