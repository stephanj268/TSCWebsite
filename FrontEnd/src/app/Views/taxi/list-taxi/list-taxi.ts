import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TaxiService, ITaxi } from '../../../service/Taxi/taxi.service';
import { SliderComponent } from '../../../shared/slider/slider';
import { SearchFilter } from '../../../shared/search-filter/search-filter';


@Component({
  selector: 'app-list-taxi',
  templateUrl: './list-taxi.html',
  styleUrl: './list-taxi.css',
  imports: [SliderComponent, SearchFilter, RouterModule]
})
export class ListTaxiComponenet implements OnInit {
 
  tours: ITaxi[] = [];
 
  constructor(
    private tourservice: TaxiService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.tours = this.tourservice.allTours;
  }
 
  viewDetails(id: number): void {
    this.router.navigate(['/taxi/view', id]);
  }



  onBookClicked(data: any){

    this.router.navigateByUrl(`/booking/taxi/${data._id}`)
    console.log(data)
  }
}