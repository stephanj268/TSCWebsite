import { Component } from '@angular/core';
import { NzButtonComponent, NzButtonModule } from "ng-zorro-antd/button";

import { RouterOutlet } from '@angular/router';

import { OperationHidden } from '../../Directives/Operation-Time/OperationTimeHiddenDirective';
import { NavigationComponent } from "../../shared/navigation/navigation";

@Component({
  selector: 'app-taxi',
  imports: [RouterOutlet, NavigationComponent],
  providers: [OperationHidden],
  templateUrl: './taxi.html',
  styleUrl: './taxi.css',
})
export class TaxiComponent {

}
