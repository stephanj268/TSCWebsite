import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxi } from './view-taxi';

describe('ViewTaxi', () => {
  let component: ViewTaxi;
  let fixture: ComponentFixture<ViewTaxi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTaxi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTaxi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
