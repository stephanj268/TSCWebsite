import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { RouterLink, RouterLinkActive } from "@angular/router";



@Component({
  selector: 'app-navigation',
  imports: [
    NzInputModule,
    NzIconModule,
    NzDrawerModule,
    NzButtonModule,

    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
  
  host: {
    ngSkipHydration: 'true'
  },
})
export class NavigationComponent implements OnInit {

  visible: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  open(): void {
    this.visible = true;
    console.log(this.visible)
  }

  close(): void {
    this.visible = false;
  }

}
