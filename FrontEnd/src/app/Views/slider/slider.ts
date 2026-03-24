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
    { image: 'https://tse2.mm.bing.net/th/id/OIP.X4HE5VYNWvmSMRXXEuvHEgHaEj?rs=1&pid=ImgDetMain&o=7&rm=3', title: 'Slide 2' },
    
  ]
};

    export class NzDemoCarouselAutoplayComponent {
  array = [1, 2, 3, 4];
}
