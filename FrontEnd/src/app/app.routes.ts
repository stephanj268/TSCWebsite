import { Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home';
import { ErrorPage } from './error-page/error-page';

import { ToursComponenet } from './Views/Body/tours/tours';
import { ViewToursComponent } from './Views/Body/tours/view-tours/view-tours';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    
    

    {path: 'tours', component: ToursComponenet},
    {path: 'tours/view', component: ViewToursComponent},
    {path: '**', component: ErrorPage},
    


];
