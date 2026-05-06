import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { ToursComponenet } from '../Body/tours/tours';
import { ListToursComponent } from '../Body/tours/list-tours/list-tours';
import { HomeComponent } from '../home/home';
import { NavigationComponent } from "../../shared/navigation/navigation";

@Component({
  selector: 'app-about',
  imports: [NzCarouselModule, NavigationComponent],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

}
