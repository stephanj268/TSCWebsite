import { Component, inject, OnInit } from '@angular/core';

import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { BookingService } from '../../service/booking/booking.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { FormsModule } from '@angular/forms';

import { getISOWeek } from 'date-fns';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, ta_IN, zh_CN } from 'ng-zorro-antd/i18n';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { validateEmail } from '../../../environment';

import { InputTextModule } from 'primeng/inputtext';
import { ITours, TourService } from '../../service/tour/tours.service';
import { ActivatedRoute } from '@angular/router';
import { TaxiService } from '../../service/Taxi/taxi.service';

import { NavigationComponent } from '../../shared/navigation/navigation';

@Component({
  selector: 'app-taxi-booking',
  imports: [
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    FormsModule,
    NzSelectModule,
    NzIconModule,

    ToastModule,
    InputTextModule,

    NavigationComponent,
  ],
  templateUrl: './taxi-booking.html',
  styleUrl: './taxi-booking.css',
})
export class TaxiBookingComponent implements OnInit {


  booking: any;

  tour: any;
  taxi: any;
  allTaxi: any;

  browserId: any;

  private messageService = inject(MessageService);

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  passengers: number = 1;
  serviceType: string = '';
  taxiType: string = 'default';

  pickupLocation: string = '';
  specialRequests: boolean = false;

  plainFooter = 'plain extra footer';
  footerRender = (): string => 'extra footer';

  date: any;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private bookingservice: BookingService,
    private taxiservice: TaxiService,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.booking = this.bookingservice;
    this.taxi = this.taxiservice.allTours;

    //get id from browser
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("booking_id");
      this.browserId = id;
    });

    this.taxiservice.getAllTaxiEvent.subscribe((data) => {
      this.taxi = data.filter(taxi => taxi._id == this.browserId);
      this.taxiType = this.taxi[0].name ? 'default' : 'default';

    });

    this.allTaxi = this.taxi


    this.taxiservice.onGetTaxiEvent(this.taxi)

  }

  // When server type is Taxi
  onTaxiServiceSubmit() {
    const build = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phonenumber: this.phone,
      maxPersons: this.passengers,
      serviceType: 'taxi',
      taxiType: this.taxiType,
      startDate: this.date,
      endDate: this.date,
      createdAt: this.date ? new Date(this.date) : new Date()

    };

    // Validate Data

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


    this.bookingservice.createTaxiBooking(build).subscribe((data) => {

      const emailTemplate = {
        to_email: build.email,        // ← recipient (set {{to_email}} in EmailJS "To" field)
        first_name: build.firstname,       // ← "Hi {{first_name}},"  (use whatever field has their name)     
        type: build.serviceType,
        service_type: build.taxiType,
        duration: `-`,  
        date: build.startDate,              // ← was "Date:"
        time: build.startDate,              // ← was "Time:"
        persons: build.maxPersons,    // ← was "Persons:"
        phone: build.phonenumber,     // ← was "Phone:"
        email: build.email,           // ← "{{email}}" in template body
        company_email: 'spaceship1268@gmail.com', // ← footer
        company_name: 'Space Ship Taxi & Tours', // ← footer
      };

      console.log({ ...emailTemplate });



      // Send Email
      emailjs.send("website-2681", "template_pufnta4", { ...emailTemplate }, { publicKey: "_mHNnjfPFb_JcLfoY" })
        .then(() => {

          console.log("sent!")
        }, (error) => {
          console.log(error);
        });

      
        // send Email To Driver
      emailjs.send("website-2681", "template_w62rr9i", { ...emailTemplate }, { publicKey: "_mHNnjfPFb_JcLfoY" })
        .then(() => {

          console.log("sent!")
        }, (error) => {
          console.log(error);
        });

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Sent!' });
    }, (error) => {
      console.log(error)
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.error}` });
    });

  };

  // Events

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onTaxiTypeChange(data: any) {
    this.taxiType = data
  }

}
