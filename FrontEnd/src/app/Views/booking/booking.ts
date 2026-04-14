import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookingService } from '../../service/booking/booking.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';


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
  imports: [NzInputModule, NzButtonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent {

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

  constructor(private http: HttpClient) {}

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
}