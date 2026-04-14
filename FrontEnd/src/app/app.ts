import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './Views/navigation/navigation';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SliderComponent } from './Views/slider/slider';

import { Footer } from './Views/footer/footer';

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
    BookingService
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
