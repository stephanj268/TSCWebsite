import { Component, inject, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
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
import { TourService } from '../../service/tours.service';
import { ActivatedRoute } from '@angular/router';



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
  tour: any;
  id: any;

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

  constructor(
    private bookingservice: BookingService,
    private tourservice: TourService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.booking = this.bookingservice;
    this.tour = this.tourservice.allTours;

    //Get appropriate tour
    this.tourservice.getToursEvent.subscribe((data) => {

      this.tour = data;

      // Filter out appropirate tour data
      this.tour = this.tour.filter((tour: any) => this.id == tour._id);
    });

    //get id from browser
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("booking_id");
      this.id = id;
    })

    this.tourservice.onGetToursEvent(this.tour)


  }

  // When server type is Taxi
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


    this.bookingservice.createTaxiBooking(build).subscribe((data) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Sent!' });

      const emailTemplate = {
        to_email: build.email,        // ← recipient (set {{to_email}} in EmailJS "To" field)
        first_name: build.firstname,       // ← "Hi {{first_name}},"  (use whatever field has their name)
        type: build.serviceType,       // ← was "Service:", now must be "type"
        date: build.startDate,              // ← was "Date:"
        time: build.startDate,              // ← was "Time:"
        duration: `${this.tour[0].duration} hours`, // ← was "Duration:"
        persons: build.maxPersons,    // ← was "Persons:"
        phone: build.phonenumber,     // ← was "Phone:"
        email: build.email,           // ← "{{email}}" in template body
        company_email: 'info@spaceshiptaxi.com', // ← footer
        company_name: 'Space Ship Taxi & Tours', // ← footer
      };

      console.log({ ...emailTemplate })
      emailjs.send("service_qczeclo", "template_nj864t5", { ...emailTemplate }, { publicKey: "z1egiScnRlhO4BYaD" })
        .then(() => {
          console.log("sent!")
        }, (error) => {
          console.log(error)
        }
        );

    }, (error) => {
      console.log(error)
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.error}` });
    });

  };


  onTourServiceSubmit() {

    // HTMl Build Data
    const build = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phonenumber: this.phone,
      maxPersons: this.passengers,
      serviceType: this.serviceType,
      tourType: this.tourType,
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

    if (build.tourType == 'default') {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Tour Type is Empty!' });
    }


    this.bookingservice.createTourBooking(build).subscribe((data) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Booking Sent!' });


      // email JS Build Data
      const emailTemplate = {
        to_email: build.email,        // ← recipient (set {{to_email}} in EmailJS "To" field)
        first_name: build.firstname,       // ← "Hi {{first_name}},"  (use whatever field has their name)
        last_name: build.lastname,
        type: build.serviceType,       // ← was "Service:", now must be "type"
        date: build.startDate,              // ← was "Date:"
        time: build.startDate,              // ← was "Time:"
        duration: `${this.tour[0].duration} hours`, // ← was "Duration:"
        persons: build.maxPersons,    // ← was "Persons:"
        phone: build.phonenumber,     // ← was "Phone:"
        email: build.email,           // ← "{{email}}" in template body
        company_email: 'info@spaceshiptaxi.com', // ← footer
        company_name: 'Space Ship Taxi & Tours', // ← footer
      };

      console.log({ ...emailTemplate })
      emailjs.send("service_qczeclo", "template_nj864t5", { ...emailTemplate }, { publicKey: "z1egiScnRlhO4BYaD" })
        .then(() => {
          console.log("sent!")
        }, (error) => {
          console.log(error)
        }
        );

    }, (error) => {
      console.log(error)
      this.messageService.add({ severity: 'error', summary: 'Error', detail: `${error.error}` });
    });

  }



  // Events

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