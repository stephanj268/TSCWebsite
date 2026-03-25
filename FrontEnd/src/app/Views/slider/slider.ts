import { Component } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NzCarouselComponent, CommonModule, NzCarouselModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class SliderComponent {

  slides: Slide[] = [
    { image: 'https://th.bing.com/th/id/R.ccbaedd48377355961d828f24f35e06b?rik=96zJ0y8fRPFRzA&pid=ImgRaw&r=0', title: 'Slide 1' },
    { image: 'https://th.bing.com/th/id/OIP.MweDRQpl1L1gGUpX-sZQKwHaE8?w=268&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3', title: 'Slide 2' },
    { image: 'https://tse4.mm.bing.net/th/id/OIP.M25IGwmqc4OLbT2HNM4C_AHaE8?w=3000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Slide 3' },
  ]
};

    export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
