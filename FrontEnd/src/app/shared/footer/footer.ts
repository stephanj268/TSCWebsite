import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-footer',
  imports: [NzIconModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  constructor(private rotuer: Router) {

  }

  onBookNow() {
    this.rotuer.navigateByUrl(`/tours/list`)

  }

}
