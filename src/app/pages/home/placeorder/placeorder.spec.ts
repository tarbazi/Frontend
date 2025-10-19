import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Placeorder } from './placeorder';

describe('Placeorder', () => {
  let component: Placeorder;
  let fixture: ComponentFixture<Placeorder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Placeorder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Placeorder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
