import { Component, OnInit } from '@angular/core';

import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";

import { RouterOutlet } from '@angular/router';

import { OperationHidden } from '../../../Directives/Operation-Time/OperationTimeHiddenDirective';
import { NavigationComponent } from "../../../shared/navigation/navigation";


@Component({
  selector: 'app-tours',

  providers: [
    OperationHidden
  ],

  imports: [
    NzButtonModule,
    RouterOutlet,
    NavigationComponent
],
  templateUrl: './tours.html',
  styleUrl: './tours.css',
})
export class ToursComponenet {

}
