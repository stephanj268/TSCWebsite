import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiBooking } from './taxi-booking';

describe('TaxiBooking', () => {
  let component: TaxiBooking;
  let fixture: ComponentFixture<TaxiBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxiBooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxiBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
