import { Component, OnInit } from '@angular/core';
import { NzButtonComponent, NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ToursService } from '../../../../service/tours.service';
import { ITours } from '../../../../service/tours.service';
import { SearchFilter } from "../../search-filter/search-filter";
import { RouterLink } from "@angular/router";
import { SliderComponent } from "../../../slider/slider";

@Component({
  selector: 'app-list-tours',
  imports: [
    NzButtonModule,
    
    SliderComponent,
    NzIconModule
  ],
  templateUrl: './list-tours.html',
  styleUrl: './list-tours.css',
})
export class ListToursComponent implements OnInit {

  constructor(private tourservice: ToursService) {

  }

  ngOnInit(): void {


  }

}
