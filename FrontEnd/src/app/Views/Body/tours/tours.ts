import { Component, OnInit } from '@angular/core';

import { SearchFilter } from '../search-filter/search-filter';
import { ListToursComponent } from './list-tours/list-tours';
import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";
import { SliderComponent } from "../../slider/slider";
import { listenerCount } from 'process';
@Component({
  selector: 'app-tours',
  imports: [
    SearchFilter,
    ListToursComponent,
    NzButtonModule,
    SliderComponent
],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponenet {

}
