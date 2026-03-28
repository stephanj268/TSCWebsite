import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    NzCarouselModule,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {


}
