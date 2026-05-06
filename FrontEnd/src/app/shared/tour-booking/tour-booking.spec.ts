import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBooking } from './tour-booking';

describe('TourBooking', () => {
  let component: TourBooking;
  let fixture: ComponentFixture<TourBooking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourBooking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TourBooking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
