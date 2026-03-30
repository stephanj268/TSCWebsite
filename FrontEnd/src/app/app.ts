import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './Views/navigation/navigation';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SliderComponent } from './Views/slider/slider';

import { Footer } from './Views/footer/footer';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent, 
    NzButtonModule,
    RouterOutlet,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FrontEnd');
}
