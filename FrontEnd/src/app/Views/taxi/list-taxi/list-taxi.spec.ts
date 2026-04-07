import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaxi } from './list-taxi';

describe('ListTaxi', () => {
  let component: ListTaxi;
  let fixture: ComponentFixture<ListTaxi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaxi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaxi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
