import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taxi } from './taxi';

describe('Taxi', () => {
  let component: Taxi;
  let fixture: ComponentFixture<Taxi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taxi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taxi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
