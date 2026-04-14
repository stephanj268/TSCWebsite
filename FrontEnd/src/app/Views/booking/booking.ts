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

  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

  date = null;

  form: BookingForm = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    passengers: 1,
    tourType: '',
    pickupLocation: '',
    specialRequests: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  onSubmit() {
    this.http.post('/api/bookings', this.form).subscribe(
      response => {
        this.successMessage = 'Booking submitted successfully! Check your email for confirmation.';
        this.errorMessage = '';
        this.form = {
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          passengers: 1,
          tourType: '',
          pickupLocation: '',
          specialRequests: ''
        };
      },
      error => {
        this.errorMessage = 'Failed to submit booking.';
        this.successMessage = '';
      }
    );
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}