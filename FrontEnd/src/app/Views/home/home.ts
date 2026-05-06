import { Component, ViewChild } from '@angular/core';
import { NzCarouselModule, NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { RouterLink } from '@angular/router';
import { SliderComponent } from "../../shared/slider/slider";
import { NavigationComponent } from '../../shared/navigation/navigation';
@Component({
  selector: 'app-home',
  imports: [
    NzCarouselModule,
    RouterLink,
    SliderComponent,
    NavigationComponent
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