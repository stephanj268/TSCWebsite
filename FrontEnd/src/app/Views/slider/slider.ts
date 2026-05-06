import { Component, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  cta: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NzCarouselModule],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class SliderComponent implements OnInit {
  slides: Slide[] = [];
  isBrowser = false;

  private allSlides: Slide[] = [
    {
      image: 'https://www.islands.com/img/gallery/antiguas-captivating-natural-bridge-promises-one-of-a-kind-striking-ocean-beauty-and-mystery/l-intro-1742063337.jpg',
      eyebrow: 'Experience the Extraordinary',
      title: 'Natures Masterpiece',
      subtitle: 'Discover the breathtaking natural bridge, a stunning rock formation carved by the relentless forces of nature, offering a unique and awe-inspiring sight for all who visit.',
      cta: 'Book a Tour'
    },
    {
      image: 'https://s3-eu-west-1.amazonaws.com/fluppa/cosa-fare-ad-antigua/heritage-quay-credits-to-antigua-barbuda-tourism-authority.jpg',
      eyebrow: 'Featured Route',
      title: 'The Journey',
      subtitle: 'Embark on a journey like no other.',
      cta: ''
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/df/47/e1.jpg',
      eyebrow: 'Explore Antigua & Barbuda',
      title: 'Tour and explore',
      subtitle: 'Discover the wonders of Antigua & Barbuda with us.',
      cta: ''
    },
    {
      image: 'https://antiguacruiseport.com/wp-content/uploads/sites/58/2025/12/Antigua-Cruise-Port-_-March-21st-13-1-1-scaled-1.jpg',
      eyebrow: 'Cruise Stop',
      title: 'Antigua Cruise Port',
      subtitle: 'Watch the cruise ships come and go from our bustling port, a hub of activity and culture.',
      cta: 'Book a Taxi'
    },
    {
      image: 'https://lh4.googleusercontent.com/proxy/RR_1TAD841RlAfxYJUg96KcLJSOZVyjyzu0AaxInKEPzqUSi_Ks6BwVqwNpUklK5lLj3qlukM8Si7iPYbZhQlXl6mi9ZKEJQVv274HnoOGrkGEakzuI',
      eyebrow: 'Swim with Stingrays',
      title: 'A once in a lifetime experience',
      subtitle: 'Get up close and personal with the gentle stingrays in our exclusive lagoon.',
      cta: 'Book a Taxi'
    },
    {
      image: 'images/img10.jpg',
      eyebrow: 'Discover the Extraordinary',
      title: 'Space Tourism',
      subtitle: 'Float above Earth and watch the sunrise every 90 minutes.',
      cta: 'Book a Tour'
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
      this.slides = this.allSlides;
    }
  }
}
