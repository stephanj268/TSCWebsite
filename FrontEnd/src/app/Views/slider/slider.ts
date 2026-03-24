import { Component} from '@angular/core';
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
        { image: 'https://www.nationalparksantigua.com/heritage', title: 'Slide 1' },
        { image: 'src/assets/img2.jpg', title: 'Slide 2' },
        { image: 'src/assets/img3.jpg', title: 'Slide 3' },
    ]};

    
