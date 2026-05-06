import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './shared/navigation/navigation';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SliderComponent } from './shared/slider/slider';

import { Footer } from './shared/footer/footer';

import { BookingService } from './service/booking/booking.service';
import { TaxiService } from './service/taxi.service';
import { TourService } from './service/tours.service';
import { Operationservice } from './Directives/Operation-Time/Operationservice';

@Component({

  selector: 'app-root',
  standalone: true,
  providers: [
    TaxiService,
    Operationservice,
    TourService,
    BookingService,
    SliderComponent
  ],


  imports: [
    NavigationComponent,
    NzButtonModule,
    RouterOutlet,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrontEnd');
}
