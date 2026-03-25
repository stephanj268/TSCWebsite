import { Component } from '@angular/core';
import { NzButtonModule, NzButtonSize } from "ng-zorro-antd/button";
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { NzInputModule } from 'ng-zorro-antd/input';
import { getISOWeek } from 'date-fns';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzRadioModule } from 'ng-zorro-antd/radio';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-search-filter',
  imports: [
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    FormsModule,
    NzDatePickerModule,
    NzGridModule,
    NzInputNumberModule,
    NzSliderModule,
    NzModalModule,
    NzRadioModule,
    NzRateModule
  ],
  templateUrl: './search-filter.html',
  styleUrl: './search-filter.css',
})
export class SearchFilter {
  value1 = 1;
  size: NzButtonSize = 'small';
  date = null;
  
  ratingNumber = 2

  // Slider Component Variables
  singleValue = 30;
  rangeValue = [20, 50];


  readonly listOfOption: Array<{ value: string; label: string }> = this.filterTypes().map(item => ({
    label: item,
    value: item
  }));
  listOfSelectedValue = ['a10', 'c12'];

  filterTypes(): string[] {
    const children: string[] = [];
    children.push("Popular");
    children.push("Low");
    children.push("High")

    return children;
  }

  radioValue = 'English';
  options = [
    { label: 'English', value: 'English' },
    { label: 'French', value: 'French' },
    { label: 'Spanish', value: 'Spanish' }
  ];

  onPriceSliderChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterPriceSliderChange(value: number[] | number): void {
    console.log(`onAfterChange: ${value}`);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
