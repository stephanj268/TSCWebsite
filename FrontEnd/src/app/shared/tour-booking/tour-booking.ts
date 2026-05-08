import { Component, inject, OnInit } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
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
import { ITours, TourService } from '../../service/tours.service';
import { ActivatedRoute } from '@angular/router';

import { NavigationComponent } from '../../shared/navigation/navigation';

@Component({
  selector: 'app-tour-booking',
  imports: [
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    FormsModule,
    NzSelectModule,
    NzIconModule,

    ToastModule,
    InputTextModule,

    NavigationComponent,],
  templateUrl: './tour-booking.html',
  styleUrl: './tour-booking.css',
})
export class TourBookingComponent implements OnInit {



  booking: any;

  tour: any;
  alltour: any;
  allTours: any;

  browserId: any;

  private messageService = inject(MessageService);

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  phone: string = '';
  passengers: number = 1;
  serviceType: string = '';
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

    //get id from browser
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get("booking_id");
      this.browserId = id;

    });

    this.tourservice.getToursEvent.subscribe((data) => {
      this.tour = data.filter(tour => tour._id == this.browserId);
      this.tourType = this.tour[0].name ? 'default' : 'default';

    });

    this.allTours = this.tour;

    this.tourservice.onGetToursEvent(this.tour);

    console.log(this.tour);

  }

  // When server type is Taxi
  onTourServiceSubmit() {
    const build = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      phonenumber: this.phone,
      maxPersons: this.passengers,
      serviceType: 'tour',
      tourType: this.tourType,
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

    if (build.tourType == 'default') {
      return this.messageService.add({ severity: 'warn', summary: 'Error', detail: 'Tour Type is Empty!' });
    }


    this.bookingservice.createTourBooking(build).subscribe((data) => {

      const emailTemplate = {
        to_email: build.email,        // ← recipient (set {{to_email}} in EmailJS "To" field)
        first_name: build.firstname,       // ← "Hi {{first_name}},"  (use whatever field has their name)
        last_name: build.lastname,
        type: build.serviceType,       // ← was "Service:", now must be "type"
        service_type: build.tourType,
        duration: `${this.tour[0].duration} hours`,
        date: build.startDate,              // ← was "Date:"
        time: build.startDate,              // ← was "Time:"
        persons: build.maxPersons,    // ← was "Persons:"
        phone: build.phonenumber,     // ← was "Phone:"
        email: build.email,           // ← "{{email}}" in template body
        company_email: 'info@spaceshiptaxi.com', // ← footer
        company_name: 'Space Ship Taxi & Tours', // ← footer
      };

      console.log({ ...emailTemplate });



      // Send Email
      emailjs.send("service_qczeclo", "template_nj864t5", { ...emailTemplate }, { publicKey: "z1egiScnRlhO4BYaD" })
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
    this.tourType = data
  }

}
