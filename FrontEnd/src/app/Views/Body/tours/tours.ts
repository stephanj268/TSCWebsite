import { Component, OnInit } from '@angular/core';

import { SearchFilter } from '../search-filter/search-filter';
import { ViewToursComponent } from './view-tours/view-tours';
import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";
import { SliderComponent } from "../../slider/slider";
@Component({
  selector: 'app-tours',
  imports: [
    SearchFilter,
    ViewToursComponent,
    NzButtonModule,
    SliderComponent
],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponenet {

}
