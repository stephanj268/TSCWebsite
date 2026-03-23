import { Component } from '@angular/core';
import { NzButtonModule, NzButtonSize  } from "ng-zorro-antd/button";
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { NzInputModule } from 'ng-zorro-antd/input';


@Component({
  selector: 'app-search-filter',
  imports: [
    NzButtonModule, 
    NzInputModule,
    NzSelectModule, 
    FormsModule,
    NzGridModule, 
    NzInputNumberModule, 
    NzSliderModule
  ],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
  value1 = 1;
  size: NzButtonSize = 'small';

}
