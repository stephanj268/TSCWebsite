import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaxiService, ITaxi } from '../../../service/taxi.service';
import { MapComponent } from '../../../shared/map/map';
 
@Component({
  selector: 'app-view-taxi',
  templateUrl: './view-taxi.html',
  styleUrl: './view-taxi.css',
  imports: [MapComponent]
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
      `Hello, I would like to book:\n\nService: ${this.taxi?.name ?? 'Unknown'}\nDate: ${this.selectedDate || 'Not selected'}\nTime: ${this.selectedTime || 'Not selected'}`
    );
 
    return `https://wa.me/${this.whatsappNumber}?text=${message}`;
  }
}