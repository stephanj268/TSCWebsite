import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home';
import { ErrorPage } from './error-page/error-page';
import { ContactComponent } from './Views/contact/contact';
import { AboutComponent } from './Views/about/about';
import { TaxiComponent } from './Views/taxi/taxi';
import { ToursComponenet } from './Views/Body/tours/tours';
import { ListToursComponent } from './Views/Body/tours/list-tours/list-tours';
import { listenerCount } from 'process';

import { ViewToursComponent } from './Views/Body/tours/view-tours/view-tours';
import { ListTaxiComponenet } from './Views/taxi/list-taxi/list-taxi';
import { ViewTaxiComponent } from './Views/taxi/view-taxi/view-taxi';
import { BookingComponent } from './Views/booking/booking';
import { TourBookingComponent } from './shared/tour-booking/tour-booking';
import { TaxiBookingComponent } from './shared/taxi-booking/taxi-booking';
import { PrivacyPolicyComponent } from './Views/privacy-policy/privacy-policy';
import { TermsServiceComponent } from './Views/terms-service/terms-service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },

    {
        path: 'taxi', component: TaxiComponent, children: [
            { path: 'list', component: ListTaxiComponenet },
            { path: 'view/:id', component: ViewTaxiComponent }

        ]
    },

    {
        path: 'tours', component: ToursComponenet, children: [
            { path: 'list', component: ListToursComponent },
            { path: 'view/:id', component: ViewToursComponent },

        ]
    },


    // Booking Route 📖
    {
        path: 'booking', component: BookingComponent, children: [
            { path: 'taxi/:booking_id', component: TaxiBookingComponent },
            { path: 'tour/:booking_id', component: TourBookingComponent },
        ]
    },


    {
        path: 'privacy-policy', component: PrivacyPolicyComponent
    },

    {
        path: 'terms-service', component: TermsServiceComponent
    },

    // ‼️
    { path: '**', component: ErrorPage },
];
