import { Component, ViewChild } from '@angular/core';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
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
  @ViewChild(NzCarouselComponent) carousel!: NzCarouselComponent;

  nextSlide(): void {
    this.carousel?.next();
  }

  prevSlide(): void {
    this.carousel?.pre();
  }

  setSlide(index: number): void {
    this.carousel?.goTo(index);
  }
}