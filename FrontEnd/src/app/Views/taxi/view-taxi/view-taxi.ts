import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MapComponent } from '../../../shared/map/map';
import { TaxiService, ITaxi } from '../../../service/taxi.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-view-taxi',
  templateUrl: './view-taxi.html',
  imports: [MapComponent, FormsModule, RouterModule],
  styleUrl: './view-taxi.css',
})


export class ViewTaxiComponent implements OnInit {

  taxi: any;
  taxiOptions: any = [];

  selectedDate: string = '';
  selectedTime: string = '';

  whatsappNumber: string = '12687884966';

  constructor(
    private taxiService: TaxiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const rawId = params.get('id');
    const id = Number(rawId);

    // console.log('RAW ID:', rawId);
    // console.log('NUMBER ID:', id);
    // console.log('ALL IDS:', this.taxiService.allTours.map(t => t._id));

    this.taxi = this.taxiService.getTaxiById(id);

    for(let i = 0; i < this.taxi.taxiOptions.length; i++){
      this.taxiOptions.push(this.taxi.taxiOptions[i])
    }

    console.log('RESULT:', this.taxi);


  });
}

  goBack(): void {
    this.location.back();
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent(
      `Hello, I would like to book:
      
Service: ${this.taxi?.name}
Date: ${this.selectedDate || 'Not selected'}
Time: ${this.selectedTime || 'Not selected'}`
    );

    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}
