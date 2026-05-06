import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-navigation',
  imports: [
    NzInputModule,
    NzIconModule,
    RouterLink
],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {

}
