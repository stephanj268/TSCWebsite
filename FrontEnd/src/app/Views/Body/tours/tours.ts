import { Component, OnInit } from '@angular/core';

import { SearchFilter } from '../search-filter/search-filter';
import { ListToursComponent } from './list-tours/list-tours';
import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";
import { SliderComponent } from "../../slider/slider";

import { RouterOutlet } from '@angular/router';
import { OperationHidden } from '../../../Directives/OperationTimeDirective';

@Component({
  selector: 'app-tours',

  providers: [
    OperationHidden
  ],

  imports: [
    NzButtonModule,
    RouterOutlet
  ],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponenet {

}
