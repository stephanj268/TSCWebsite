import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { ToursComponenet } from '../Body/tours/tours';
import { ViewToursComponent } from '../Body/tours/view-tours/view-tours';
import { HomeComponent } from '../home/home'; 
import { AboutComponent } from '../about/about';


@Component({
  selector: 'app-contact',
  imports: [NzCarouselModule, HomeComponent, ToursComponenet, ViewToursComponent, AboutComponent  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {

}
