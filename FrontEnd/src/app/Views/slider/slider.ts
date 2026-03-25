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
    { image: 'https://www.caraibes-catamarans.com/wp-content/uploads/2018/06/Antigua-1.jpg', title: 'Slide 2' },
    { image: 'https://a.cdn-hotels.com/gdcs/production163/d1788/5857046a-0a8b-4f61-8af8-7141175008db.jpg', title: 'Slide 3' },
  ]
};

    export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
