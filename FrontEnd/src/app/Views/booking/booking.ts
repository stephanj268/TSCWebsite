import { Component, inject, OnInit } from '@angular/core';

import { BookingService } from '../../service/booking/booking.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { validateEmail } from '../../../environment';

import { InputTextModule } from 'primeng/inputtext';



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
    NzSelectModule,

    ToastModule,
    InputTextModule,
  ],
  providers: [MessageService],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent implements OnInit {

  booking: any;

  private messageService = inject(MessageService);

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  passengers: number = 1;
  serviceType: string = 'default';
  taxiType: string = 'default';
  tourType: string = 'default';

  pickupLocation: string = '';
  specialRequests: boolean = false;

  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

  date: any;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private bookingservice: BookingService) { }

  ngOnInit(): void {
    this.booking = this.bookingservice
  }

  onTaxiServiceSubmit() {
    const build = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phonenumber: this.phone,
      tourType: this.tourType,
      maxPersons: this.passengers,
      serviceType: this.serviceType,
      taxiType: this.taxiType,
      startDate: this.date,
      endDate: this.date,
      createdAt: this.date ? new Date(this.date) : new Date()

    };

    if (!build.firstname || !build.lastname) {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Incomplete name fields!', styleClass: 'blue' });
    }

    if (!validateEmail(build.email)) {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Invalid Email' });
    }

    if (!build.phonenumber && build.phonenumber.length >= 5) {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Phone Number Field Invalid!' });
    }

    if (!build.startDate) {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Date field Empty!' });
    }

    if (build.maxPersons < 1) {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Invalid Persons!' });
    }

    if (build.serviceType == 'default') {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Invalid Service type!' });
    }

    if (build.taxiType == 'default') {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Taxi Type is Empty!' });
    }

    console.log(build);

    this.bookingservice.createTaxiBooking(build).subscribe((data) => {
      console.log(data)
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Sent!' });
    }, (error) => {
      console.log(error)
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.error}` });
    });

  };


  onTourServiceSubmit() {

  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onServiceTypeChange(data: any) {
    this.serviceType = data

  }

  onTourTypeChange(data: any) {
    this.tourType = data
  }

  onTaxiTypeChange(data: any) {
    this.taxiType = data
  }


}