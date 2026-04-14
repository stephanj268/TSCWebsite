import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { BookingService } from '../../service/booking/booking.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  passengers: number;
  tourType: string;
  pickupLocation: string;
  specialRequests: string;
}

@Component({
  selector: 'app-booking',
  imports: [
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    FormsModule,
    NzSelectModule
  ],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  passengers: number = 1;
  tourType: string = 'default';
  pickupLocation: string = '';
  specialRequests: boolean = false;

  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

  date = null;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private bookingservice: BookingService) { }

  onSubmit() {
    const build = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phone: this.phone,
      passengers: this.passengers,
      tourType: this.tourType,
      pickupLocation: this.pickupLocation,
      specialRequests: this.specialRequests

    };

    this.bookingservice.createBooking(build).subscribe((data) => {
      console.log(data);

    })

  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}