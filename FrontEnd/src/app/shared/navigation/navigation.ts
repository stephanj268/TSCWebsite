import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-navigation',
  imports: [
    NzInputModule,
    NzIconModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class NavigationComponent {

}
