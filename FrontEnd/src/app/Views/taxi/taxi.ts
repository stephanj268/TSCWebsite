import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { ToursComponenet } from '../Body/tours/tours';
import { ViewToursComponent } from '../Body/tours/view-tours/view-tours';
import { HomeComponent } from '../home/home'; 
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-taxi',
  imports: [NzCarouselModule, HomeComponent, ToursComponenet, ViewToursComponent, AboutComponent, ContactComponent  ],
  templateUrl: './taxi.html',
  styleUrl: './taxi.css',
})
export class TaxiComponent {

}
