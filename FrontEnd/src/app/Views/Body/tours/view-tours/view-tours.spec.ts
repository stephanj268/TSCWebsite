import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTours } from './view-tours';

describe('ViewTours', () => {
  let component: ViewTours;
  let fixture: ComponentFixture<ViewTours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
