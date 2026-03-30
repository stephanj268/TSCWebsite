import { Component, OnInit } from '@angular/core';

import { SearchFilter } from '../search-filter/search-filter';
import { ListToursComponent } from './list-tours/list-tours';
import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";
import { SliderComponent } from "../../slider/slider";

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tours',
  imports: [
    NzButtonModule,
    RouterOutlet
],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponenet {

}
