import { Component } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { RouterLink } from '@angular/router';
import { SliderComponent } from "../slider/slider";

@Component({
  selector: 'app-home',
  imports: [
    NzCarouselModule,
    RouterLink,
    SliderComponent
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {


}
